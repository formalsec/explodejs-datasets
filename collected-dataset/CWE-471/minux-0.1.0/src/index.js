var DeepObject = require('deep-obj');
var STORE = {};
var eventContainer = {
	$$events: []
};
var pathArray = {};

function parsePath(path) {
	if (Array.isArray(path)) {
		return path;
	}

	if (!pathArray[path]) {
		pathArray[path] = DeepObject.parse(path);
	}

	return pathArray[path];
}

function mergePath(path1, path2) {
	var p1 = parsePath(path1);
	var p2 = parsePath(path2);

	return p1.concat(p2);
}

function getKeysOfChange(obj, value, isReplace) {
	var keysOfChange = [];
	if (isReplace) {
		var keysValue = Object.keys(value);
		keysValue.forEach(function(key) {
			if (obj[key] !== value[key]) {
				keysOfChange.push(key);
			}
		});
		Object.keys(obj).forEach(function(key) {
			if (keysValue.indexOf(key) == -1) {
				keysOfChange.push(key);
			}
		});
	}
	else {
		for (var key in value) {
			if (obj[key] !== value[key]) {
				keysOfChange.push(key);
			}
		}
	}

	return keysOfChange;
}

function assignNewObj(obj) {
	var type = typeof obj;
	if (type === 'object') {
		if (Array.isArray(obj)) {
			return Object.assign([], obj);
		}
		else {
			return Object.assign({}, obj);
		}
	} 
	else {
		return obj;
	}
}

function setStore(path, value) {
	if (path.length === 0) {
		STORE = assignNewObj(value);
	}
	else {
		STORE = assignNewObj(STORE);
		var cursor = STORE;
		for (var i = 0; i < path.length - 1; i++) {
			var key = path[i];
			if (!Object.prototype.hasOwnProperty.call(cursor, key)) {
				return false;
			};
			cursor[key] = assignNewObj(cursor[key]);
			cursor = cursor[key];
		}
		cursor[path[i]] = assignNewObj(value);
	}
}

function get(obj, path) {
	var pathArray = parsePath(path);
	return DeepObject.get(obj, pathArray);
}

function set(path, value, isReplace) {
	path = parsePath(path);
	var obj = get(STORE, path);
	var typeOfValue = typeof value;
	if (typeof obj === typeOfValue && typeOfValue === 'object') {
		var newValue = Array.isArray(value) ? [] : {};
		var keysOfChange = getKeysOfChange(obj, value, isReplace);
		newValue = isReplace ? Object.assign(newValue, value) : Object.assign(newValue, obj, value);
		setStore(path, newValue);
		notifyToListener(path);
		notifyToChildOfListener(path, keysOfChange);
	}
	else {
		setStore(path, value);
		notifyToListener(path);
		notifyToChildOfListener(path);
	}

}

function notifyToChildOfListener(path, keys) {
	var eventCon = DeepObject.get(eventContainer, path);
	if (eventCon) {
		if (!keys) {
			keys = Object.keys(eventCon);
			var indexOfEventKey = keys.indexOf('$$events');
			keys.splice(indexOfEventKey, 1);
		}
		keys.forEach(function(key) {
			deepNotifyToListener(eventCon[key]);
		});
	}
}

function deepNotifyToListener(eventCon) {
	if (eventCon) {
		for (var key in eventCon) {
			if (key === '$$events') {
				eventCon[key].forEach(function(event) {
					event();
				});
			}
			else {
				deepNotifyToListener(eventCon[key]);
			}
		}
	}
}

function notifyToListener(path) {
	var _eventContainerCursor = eventContainer;
	_eventContainerCursor
		.$$events
		.forEach(function(event) {
			event();
		});
	for (var i = 0; i < path.length; i++) {
		var key = path[i];
		if (_eventContainerCursor[key]) {
			_eventContainerCursor[key]
				.$$events
				.forEach(function(event) {
					event();
				});
			_eventContainerCursor = _eventContainerCursor[key];
		}
		else {
			break;
		}
	}
}

module.exports = function(path){
	var _path = parsePath(path);;
	var _eventContainerCursor = eventContainer;
	
	_path.forEach(function(key) {
		if (!_eventContainerCursor[key]) {
			_eventContainerCursor[key] = {
				$$events: []
			}
		}

		_eventContainerCursor = _eventContainerCursor[key];
	});

	return {
		path: path,
		on: function(func) {
			if (typeof func !== 'function') {
				throw new Error('The param is not a function');
			}
			if (_eventContainerCursor.$$events.indexOf(func) < 0) {
				_eventContainerCursor.$$events.push(func);
			}
		},
		off: function(func) {
			var index = _eventContainerCursor.$$events.indexOf(func);
			if (index >= 0) {
				_eventContainerCursor.$$events.splice(index, 1);
			}
		},
		value: function() {
			return get(STORE, _path);
		},
		get: function(path) { 
			return get(get(STORE, _path), path) 
		},
		set: function(path, value) { 
			if (arguments.length == 1) {
				value = path;
				set(_path, value) 
			}
			else {
				set(mergePath(_path, path), value) 
			}
		},
		replace: function(path, value) {
			if (arguments.length == 1) {
				value = path;
				set(_path, value, true) 
			}
			else {
				set(mergePath(_path, path), value, true) 
			}
		}
	};
}