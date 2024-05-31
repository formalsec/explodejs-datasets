const v1899 = function (global, factory) {
    const v1885 = typeof exports;
    const v1886 = v1885 === 'object';
    const v1887 = typeof module;
    const v1888 = v1887 !== 'undefined';
    const v1889 = v1886 && v1888;
    const v1890 = factory();
    const v1891 = typeof define;
    const v1892 = v1891 === 'function';
    const v1893 = define.amd;
    const v1894 = v1892 && v1893;
    const v1895 = define(factory);
    const v1896 = factory();
    let v1897;
    if (v1894) {
        v1897 = v1895;
    } else {
        v1897 = (global = global || self, global.Chartkick = v1896);
    }
    let v1898;
    if (v1889) {
        module.exports = v1890;
        v1898 = module.exports;
    } else {
        v1898 = v1897;
    }
    v1898;
};
const v3767 = function () {
    'use strict';
    const isArray = function (variable) {
        const v1900 = Object.prototype;
        const v1901 = v1900.toString;
        const v1902 = v1901.call(variable);
        const v1903 = v1902 === '[object Array]';
        return v1903;
    };
    const isFunction = function (variable) {
        const v1904 = variable instanceof Function;
        return v1904;
    };
    const isPlainObject = function (variable) {
        const v1905 = Object.prototype;
        const v1906 = v1905.toString;
        const v1907 = v1906.call(variable);
        const v1908 = v1907 === '[object Object]';
        return v1908;
    };
    const extend = function (target, source) {
        var key;
        for (key in source) {
            const v1909 = source[key];
            const v1910 = isPlainObject(v1909);
            const v1911 = source[key];
            const v1912 = isArray(v1911);
            const v1913 = v1910 || v1912;
            if (v1913) {
                const v1914 = source[key];
                const v1915 = isPlainObject(v1914);
                const v1916 = target[key];
                const v1917 = isPlainObject(v1916);
                const v1918 = !v1917;
                const v1919 = v1915 && v1918;
                if (v1919) {
                    const v1920 = {};
                    target[key] = v1920;
                }
                const v1921 = source[key];
                const v1922 = isArray(v1921);
                const v1923 = target[key];
                const v1924 = isArray(v1923);
                const v1925 = !v1924;
                const v1926 = v1922 && v1925;
                if (v1926) {
                    target[key] = [];
                }
                const v1927 = target[key];
                const v1928 = source[key];
                const v1929 = extend(v1927, v1928);
                v1929;
            } else {
                const v1930 = source[key];
                const v1931 = v1930 !== undefined;
                if (v1931) {
                    const v1932 = source[key];
                    target[key] = v1932;
                }
            }
        }
    };
    const merge = function (obj1, obj2) {
        var target = {};
        const v1933 = extend(target, obj1);
        v1933;
        const v1934 = extend(target, obj2);
        v1934;
        return target;
    };
    var DATE_PATTERN = /^(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)$/i;
    var ISO8601_PATTERN = /(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)(T)?(\d\d)(:)?(\d\d)?(:)?(\d\d)?([.,]\d+)?($|Z|([+-])(\d\d)(:)?(\d\d)?)/i;
    const v1935 = String(1.5);
    var DECIMAL_SEPARATOR = v1935.charAt(1);
    const parseISO8601 = function (input) {
        var day;
        var hour;
        var matches;
        var milliseconds;
        var minutes;
        var month;
        var offset;
        var result;
        var seconds;
        var type;
        var year;
        const v1936 = Object.prototype;
        const v1937 = v1936.toString;
        type = v1937.call(input);
        const v1938 = type === '[object Date]';
        if (v1938) {
            return input;
        }
        const v1939 = type !== '[object String]';
        if (v1939) {
            return;
        }
        matches = input.match(ISO8601_PATTERN);
        if (matches) {
            const v1940 = matches[1];
            year = parseInt(v1940, 10);
            const v1941 = matches[3];
            const v1942 = parseInt(v1941, 10);
            month = v1942 - 1;
            const v1943 = matches[5];
            day = parseInt(v1943, 10);
            const v1944 = matches[7];
            hour = parseInt(v1944, 10);
            const v1945 = matches[9];
            const v1946 = matches[9];
            const v1947 = parseInt(v1946, 10);
            if (v1945) {
                minutes = v1947;
            } else {
                minutes = 0;
            }
            const v1948 = matches[11];
            const v1949 = matches[11];
            const v1950 = parseInt(v1949, 10);
            if (v1948) {
                seconds = v1950;
            } else {
                seconds = 0;
            }
            const v1951 = matches[12];
            const v1952 = matches[12];
            const v1953 = v1952.slice(1);
            const v1954 = DECIMAL_SEPARATOR + v1953;
            const v1955 = parseFloat(v1954);
            const v1956 = v1955 * 1000;
            if (v1951) {
                milliseconds = v1956;
            } else {
                milliseconds = 0;
            }
            result = Date.UTC(year, month, day, hour, minutes, seconds, milliseconds);
            const v1957 = matches[13];
            const v1958 = matches[14];
            const v1959 = v1957 && v1958;
            if (v1959) {
                const v1960 = matches[15];
                offset = v1960 * 60;
                const v1961 = matches[17];
                if (v1961) {
                    const v1962 = matches[17];
                    offset += parseInt(v1962, 10);
                }
                const v1963 = matches[14];
                const v1964 = v1963 === '-';
                const v1965 = -1;
                if (v1964) {
                    offset = v1965;
                } else {
                    offset = 1;
                }
                const v1966 = offset * 60;
                result -= v1966 * 1000;
            }
            const v1967 = new Date(result);
            return v1967;
        }
    };
    const negativeValues = function (series) {
        var i;
        var j;
        var data;
        (i = 0)
        const v1968 = series.length;
        let v1969 = i < v1968;
        while (v1969) {
            const v1971 = series[i];
            data = v1971.data;
            j = 0
            const v1972 = data.length;
            let v1973 = j < v1972;
            while (v1973) {
                const v1975 = data[j];
                const v1976 = v1975[1];
                const v1977 = v1976 < 0;
                if (v1977) {
                    return true;
                }
                const v1974 = j++;
                v1973 = j < v1972;
            }
            const v1970 = i++;
            v1969 = i < v1968;
        }
        return false;
    };
    const toStr = function (n) {
        const v1978 = '' + n;
        return v1978;
    };
    const toFloat = function (n) {
        const v1979 = parseFloat(n);
        return v1979;
    };
    const toDate = function (n) {
        var matches;
        var year;
        var month;
        var day;
        const v1980 = typeof n;
        const v1981 = v1980 !== 'object';
        if (v1981) {
            const v1982 = typeof n;
            const v1983 = v1982 === 'number';
            if (v1983) {
                const v1984 = n * 1000;
                n = new Date(v1984);
            } else {
                n = toStr(n);
                if (matches = n.match(DATE_PATTERN)) {
                    const v1985 = matches[1];
                    year = parseInt(v1985, 10);
                    const v1986 = matches[3];
                    const v1987 = parseInt(v1986, 10);
                    month = v1987 - 1;
                    const v1988 = matches[5];
                    day = parseInt(v1988, 10);
                    const v1989 = new Date(year, month, day);
                    return v1989;
                } else {
                    const v1990 = n.replace(/ /, 'T');
                    const v1991 = v1990.replace(' ', '');
                    var str = v1991.replace('UTC', 'Z');
                    const v1992 = parseISO8601(str);
                    const v1993 = new Date(n);
                    n = v1992 || v1993;
                }
            }
        }
        return n;
    };
    const toArr = function (n) {
        const v1994 = isArray(n);
        const v1995 = !v1994;
        if (v1995) {
            var arr = [];
            var i;
            for (i in n) {
                const v1996 = n.hasOwnProperty(i);
                if (v1996) {
                    const v1997 = n[i];
                    const v1998 = [
                        i,
                        v1997
                    ];
                    const v1999 = arr.push(v1998);
                    v1999;
                }
            }
            n = arr;
        }
        return n;
    };
    const jsOptionsFunc = function (defaultOptions, hideLegend, setTitle, setMin, setMax, setStacked, setXtitle, setYtitle) {
        const v2035 = function (chart, opts, chartOptions) {
            var series = chart.data;
            const v2000 = {};
            var options = merge(v2000, defaultOptions);
            const v2001 = {};
            const v2002 = chartOptions || v2001;
            options = merge(options, v2002);
            const v2003 = chart.hideLegend;
            const v2004 = 'legend' in opts;
            const v2005 = v2003 || v2004;
            if (v2005) {
                const v2006 = opts.legend;
                const v2007 = chart.hideLegend;
                const v2008 = hideLegend(options, v2006, v2007);
                v2008;
            }
            const v2009 = opts.title;
            if (v2009) {
                const v2010 = opts.title;
                const v2011 = setTitle(options, v2010);
                v2011;
            }
            const v2012 = 'min' in opts;
            if (v2012) {
                const v2013 = opts.min;
                const v2014 = setMin(options, v2013);
                v2014;
            } else {
                const v2015 = negativeValues(series);
                const v2016 = !v2015;
                if (v2016) {
                    const v2017 = setMin(options, 0);
                    v2017;
                }
            }
            const v2018 = opts.max;
            if (v2018) {
                const v2019 = opts.max;
                const v2020 = setMax(options, v2019);
                v2020;
            }
            const v2021 = 'stacked' in opts;
            if (v2021) {
                const v2022 = opts.stacked;
                const v2023 = setStacked(options, v2022);
                v2023;
            }
            const v2024 = opts.colors;
            if (v2024) {
                const v2025 = opts.colors;
                options.colors = v2025;
            }
            const v2026 = opts.xtitle;
            if (v2026) {
                const v2027 = opts.xtitle;
                const v2028 = setXtitle(options, v2027);
                v2028;
            }
            const v2029 = opts.ytitle;
            if (v2029) {
                const v2030 = opts.ytitle;
                const v2031 = setYtitle(options, v2030);
                v2031;
            }
            const v2032 = opts.library;
            const v2033 = {};
            const v2034 = v2032 || v2033;
            options = merge(options, v2034);
            return options;
        };
        return v2035;
    };
    const sortByTime = function (a, b) {
        const v2036 = a[0];
        const v2037 = v2036.getTime();
        const v2038 = b[0];
        const v2039 = v2038.getTime();
        const v2040 = v2037 - v2039;
        return v2040;
    };
    const sortByNumberSeries = function (a, b) {
        const v2041 = a[0];
        const v2042 = b[0];
        const v2043 = v2041 - v2042;
        return v2043;
    };
    const sortByNumber = function (a, b) {
        const v2044 = a - b;
        return v2044;
    };
    const isMinute = function (d) {
        const v2045 = d.getMilliseconds();
        const v2046 = v2045 === 0;
        const v2047 = d.getSeconds();
        const v2048 = v2047 === 0;
        const v2049 = v2046 && v2048;
        return v2049;
    };
    const isHour = function (d) {
        const v2050 = isMinute(d);
        const v2051 = d.getMinutes();
        const v2052 = v2051 === 0;
        const v2053 = v2050 && v2052;
        return v2053;
    };
    const isDay = function (d) {
        const v2054 = isHour(d);
        const v2055 = d.getHours();
        const v2056 = v2055 === 0;
        const v2057 = v2054 && v2056;
        return v2057;
    };
    const isWeek = function (d, dayOfWeek) {
        const v2058 = isDay(d);
        const v2059 = d.getDay();
        const v2060 = v2059 === dayOfWeek;
        const v2061 = v2058 && v2060;
        return v2061;
    };
    const isMonth = function (d) {
        const v2062 = isDay(d);
        const v2063 = d.getDate();
        const v2064 = v2063 === 1;
        const v2065 = v2062 && v2064;
        return v2065;
    };
    const isYear = function (d) {
        const v2066 = isMonth(d);
        const v2067 = d.getMonth();
        const v2068 = v2067 === 0;
        const v2069 = v2066 && v2068;
        return v2069;
    };
    const isDate = function (obj) {
        const v2070 = toDate(obj);
        const v2071 = isNaN(v2070);
        const v2072 = !v2071;
        const v2073 = toStr(obj);
        const v2074 = v2073.length;
        const v2075 = v2074 >= 6;
        const v2076 = v2072 && v2075;
        return v2076;
    };
    const isNumber = function (obj) {
        const v2077 = typeof obj;
        const v2078 = v2077 === 'number';
        return v2078;
    };
    const formatValue = function (pre, value, options) {
        pre = pre || '';
        const v2079 = options.prefix;
        if (v2079) {
            const v2080 = value < 0;
            if (v2080) {
                const v2081 = -1;
                value = value * v2081;
                pre += '-';
            }
            pre += options.prefix;
        }
        const v2082 = options.thousands;
        const v2083 = options.decimal;
        const v2084 = v2082 || v2083;
        if (v2084) {
            value = toStr(value);
            var parts = value.split('.');
            value = parts[0];
            const v2085 = options.thousands;
            if (v2085) {
                const v2086 = options.thousands;
                value = value.replace(/\B(?=(\d{3})+(?!\d))/g, v2086);
            }
            const v2087 = parts.length;
            const v2088 = v2087 > 1;
            if (v2088) {
                const v2089 = options.decimal;
                const v2090 = v2089 || '.';
                const v2091 = parts[1];
                value += v2090 + v2091;
            }
        }
        const v2092 = pre + value;
        const v2093 = options.suffix;
        const v2094 = v2093 || '';
        const v2095 = v2092 + v2094;
        return v2095;
    };
    const seriesOption = function (chart, series, option) {
        const v2096 = option in series;
        if (v2096) {
            const v2097 = series[option];
            return v2097;
        } else {
            const v2098 = chart.options;
            const v2099 = option in v2098;
            if (v2099) {
                const v2100 = chart.options;
                const v2101 = v2100[option];
                return v2101;
            }
        }
        return null;
    };
    const allZeros = function (data) {
        var i;
        var j;
        var d;
        (i = 0)
        const v2102 = data.length;
        let v2103 = i < v2102;
        while (v2103) {
            const v2105 = data[i];
            d = v2105.data;
            j = 0
            const v2106 = d.length;
            let v2107 = j < v2106;
            while (v2107) {
                const v2109 = d[j];
                const v2110 = v2109[1];
                const v2111 = v2110 != 0;
                if (v2111) {
                    return false;
                }
                const v2108 = j++;
                v2107 = j < v2106;
            }
            const v2104 = i++;
            v2103 = i < v2102;
        }
        return true;
    };
    const v2112 = {};
    const v2113 = {};
    v2113.displayColors = false;
    v2113.callbacks = v2112;
    const v2114 = {};
    const v2115 = {};
    v2115.fontSize = 20;
    v2115.fontColor = '#333';
    var baseOptions = {};
    baseOptions.maintainAspectRatio = false;
    baseOptions.animation = false;
    baseOptions.tooltips = v2113;
    baseOptions.legend = v2114;
    baseOptions.title = v2115;
    const v2116 = {};
    v2116.maxTicksLimit = 4;
    const v2117 = {};
    v2117.fontSize = 16;
    v2117.fontColor = '#333';
    const v2118 = {
        ticks: v2116,
        scaleLabel: v2117
    };
    const v2119 = [v2118];
    const v2120 = {};
    v2120.drawOnChartArea = false;
    const v2121 = {};
    v2121.fontSize = 16;
    v2121.fontColor = '#333';
    const v2122 = {};
    const v2123 = {};
    const v2124 = {
        gridLines: v2120,
        scaleLabel: v2121,
        time: v2122,
        ticks: v2123
    };
    const v2125 = [v2124];
    const v2126 = {};
    v2126.yAxes = v2119;
    v2126.xAxes = v2125;
    var defaultOptions = {};
    defaultOptions.scales = v2126;
    var defaultColors = [
        '#3366CC',
        '#DC3912',
        '#FF9900',
        '#109618',
        '#990099',
        '#3B3EAC',
        '#0099C6',
        '#DD4477',
        '#66AA00',
        '#B82E2E',
        '#316395',
        '#994499',
        '#22AA99',
        '#AAAA11',
        '#6633CC',
        '#E67300',
        '#8B0707',
        '#329262',
        '#5574A6',
        '#651067'
    ];
    var hideLegend = function (options, legend, hideLegend) {
        const v2127 = legend !== undefined;
        if (v2127) {
            const v2128 = options.legend;
            const v2129 = !legend;
            const v2130 = !v2129;
            v2128.display = v2130;
            const v2131 = legend !== true;
            const v2132 = legend && v2131;
            if (v2132) {
                const v2133 = options.legend;
                v2133.position = legend;
            }
        } else {
            if (hideLegend) {
                const v2134 = options.legend;
                v2134.display = false;
            }
        }
    };
    var setTitle = function (options, title) {
        const v2135 = options.title;
        v2135.display = true;
        const v2136 = options.title;
        v2136.text = title;
    };
    var setMin = function (options, min) {
        const v2137 = min !== null;
        if (v2137) {
            const v2142 = toFloat(min);
            v2141.min = v2142;
        }
    };
    var setMax = function (options, max) {
        const v2147 = toFloat(max);
        v2146.max = v2147;
    };
    var setBarMin = function (options, min) {
        const v2148 = min !== null;
        if (v2148) {
            const v2153 = toFloat(min);
            v2152.min = v2153;
        }
    };
    var setBarMax = function (options, max) {
        const v2158 = toFloat(max);
        v2157.max = v2158;
    };
    var setStacked = function (options, stacked) {
        const v2159 = options.scales;
        const v2160 = v2159.xAxes;
        const v2161 = v2160[0];
        const v2162 = !stacked;
        const v2163 = !v2162;
        v2161.stacked = v2163;
        const v2164 = options.scales;
        const v2165 = v2164.yAxes;
        const v2166 = v2165[0];
        const v2167 = !stacked;
        const v2168 = !v2167;
        v2166.stacked = v2168;
    };
    var setXtitle = function (options, title) {
        const v2169 = options.scales;
        const v2170 = v2169.xAxes;
        const v2171 = v2170[0];
        const v2172 = v2171.scaleLabel;
        v2172.display = true;
        const v2173 = options.scales;
        const v2174 = v2173.xAxes;
        const v2175 = v2174[0];
        const v2176 = v2175.scaleLabel;
        v2176.labelString = title;
    };
    var setYtitle = function (options, title) {
        const v2177 = options.scales;
        const v2178 = v2177.yAxes;
        const v2179 = v2178[0];
        const v2180 = v2179.scaleLabel;
        v2180.display = true;
        const v2181 = options.scales;
        const v2182 = v2181.yAxes;
        const v2183 = v2182[0];
        const v2184 = v2183.scaleLabel;
        v2184.labelString = title;
    };
    var addOpacity = function (hex, opacity) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        const v2185 = result[1];
        const v2186 = parseInt(v2185, 16);
        const v2187 = 'rgba(' + v2186;
        const v2188 = v2187 + ', ';
        const v2189 = result[2];
        const v2190 = parseInt(v2189, 16);
        const v2191 = v2188 + v2190;
        const v2192 = v2191 + ', ';
        const v2193 = result[3];
        const v2194 = parseInt(v2193, 16);
        const v2195 = v2192 + v2194;
        const v2196 = v2195 + ', ';
        const v2197 = v2196 + opacity;
        const v2198 = v2197 + ')';
        let v2199;
        if (result) {
            v2199 = v2198;
        } else {
            v2199 = hex;
        }
        return v2199;
    };
    var notnull = function (x) {
        const v2200 = x != null;
        return v2200;
    };
    var setLabelSize = function (chart, data, options) {
        const v2201 = chart.element;
        const v2202 = v2201.offsetWidth;
        const v2203 = v2202 / 4;
        const v2204 = data.labels;
        const v2205 = v2204.length;
        const v2206 = v2203 / v2205;
        var maxLabelSize = Math.ceil(v2206);
        const v2207 = maxLabelSize > 25;
        if (v2207) {
            maxLabelSize = 25;
        } else {
            const v2208 = maxLabelSize < 10;
            if (v2208) {
                maxLabelSize = 10;
            }
        }
        const v2209 = options.scales;
        const v2210 = v2209.xAxes;
        const v2211 = v2210[0];
        const v2212 = v2211.ticks;
        const v2213 = v2212.callback;
        const v2214 = !v2213;
        if (v2214) {
            const v2215 = options.scales;
            const v2216 = v2215.xAxes;
            const v2217 = v2216[0];
            const v2218 = v2217.ticks;
            const v2224 = function (value) {
                value = toStr(value);
                const v2219 = value.length;
                const v2220 = v2219 > maxLabelSize;
                if (v2220) {
                    const v2221 = maxLabelSize - 2;
                    const v2222 = value.substring(0, v2221);
                    const v2223 = v2222 + '...';
                    return v2223;
                } else {
                    return value;
                }
            };
            v2218.callback = v2224;
        }
    };
    var setFormatOptions = function (chart, options, chartType) {
        const v2225 = chart.options;
        const v2226 = v2225.prefix;
        const v2227 = chart.options;
        const v2228 = v2227.suffix;
        const v2229 = chart.options;
        const v2230 = v2229.thousands;
        const v2231 = chart.options;
        const v2232 = v2231.decimal;
        var formatOptions = {};
        formatOptions.prefix = v2226;
        formatOptions.suffix = v2228;
        formatOptions.thousands = v2230;
        formatOptions.decimal = v2232;
        const v2233 = chartType !== 'pie';
        if (v2233) {
            const v2234 = options.scales;
            var myAxes = v2234.yAxes;
            const v2235 = chartType === 'bar';
            if (v2235) {
                const v2236 = options.scales;
                myAxes = v2236.xAxes;
            }
            const v2237 = myAxes[0];
            const v2238 = v2237.ticks;
            const v2239 = v2238.callback;
            const v2240 = !v2239;
            if (v2240) {
                const v2241 = myAxes[0];
                const v2242 = v2241.ticks;
                const v2244 = function (value) {
                    const v2243 = formatValue('', value, formatOptions);
                    return v2243;
                };
                v2242.callback = v2244;
            }
        }
        const v2245 = options.tooltips;
        const v2246 = v2245.callbacks;
        const v2247 = v2246.label;
        const v2248 = !v2247;
        if (v2248) {
            const v2249 = chartType === 'scatter';
            if (v2249) {
                const v2250 = options.tooltips;
                const v2251 = v2250.callbacks;
                const v2263 = function (item, data) {
                    const v2252 = data.datasets;
                    const v2253 = item.datasetIndex;
                    const v2254 = v2252[v2253];
                    const v2255 = v2254.label;
                    var label = v2255 || '';
                    if (label) {
                        label += ': ';
                    }
                    const v2256 = label + '(';
                    const v2257 = item.xLabel;
                    const v2258 = v2256 + v2257;
                    const v2259 = v2258 + ', ';
                    const v2260 = item.yLabel;
                    const v2261 = v2259 + v2260;
                    const v2262 = v2261 + ')';
                    return v2262;
                };
                v2251.label = v2263;
            } else {
                const v2264 = chartType === 'bubble';
                if (v2264) {
                    const v2265 = options.tooltips;
                    const v2266 = v2265.callbacks;
                    const v2286 = function (item, data) {
                        const v2267 = data.datasets;
                        const v2268 = item.datasetIndex;
                        const v2269 = v2267[v2268];
                        const v2270 = v2269.label;
                        var label = v2270 || '';
                        if (label) {
                            label += ': ';
                        }
                        const v2271 = data.datasets;
                        const v2272 = item.datasetIndex;
                        const v2273 = v2271[v2272];
                        const v2274 = v2273.data;
                        const v2275 = item.index;
                        var dataPoint = v2274[v2275];
                        const v2276 = label + '(';
                        const v2277 = item.xLabel;
                        const v2278 = v2276 + v2277;
                        const v2279 = v2278 + ', ';
                        const v2280 = item.yLabel;
                        const v2281 = v2279 + v2280;
                        const v2282 = v2281 + ', ';
                        const v2283 = dataPoint.v;
                        const v2284 = v2282 + v2283;
                        const v2285 = v2284 + ')';
                        return v2285;
                    };
                    v2266.label = v2286;
                } else {
                    const v2287 = chartType === 'pie';
                    if (v2287) {
                        const v2288 = options.tooltips;
                        const v2289 = v2288.callbacks;
                        const v2300 = function (tooltipItem, data) {
                            const v2290 = data.labels;
                            const v2291 = tooltipItem.index;
                            var dataLabel = v2290[v2291];
                            var value = ': ';
                            const v2292 = isArray(dataLabel);
                            if (v2292) {
                                dataLabel = dataLabel.slice();
                                dataLabel[0] += value;
                            } else {
                                dataLabel += value;
                            }
                            const v2293 = data.datasets;
                            const v2294 = tooltipItem.datasetIndex;
                            const v2295 = v2293[v2294];
                            const v2296 = v2295.data;
                            const v2297 = tooltipItem.index;
                            const v2298 = v2296[v2297];
                            const v2299 = formatValue(dataLabel, v2298, formatOptions);
                            return v2299;
                        };
                        v2289.label = v2300;
                    } else {
                        let valueLabel;
                        const v2301 = chartType === 'bar';
                        if (v2301) {
                            valueLabel = 'xLabel';
                        } else {
                            valueLabel = 'yLabel';
                        }
                        const v2302 = options.tooltips;
                        const v2303 = v2302.callbacks;
                        const v2310 = function (tooltipItem, data) {
                            const v2304 = data.datasets;
                            const v2305 = tooltipItem.datasetIndex;
                            const v2306 = v2304[v2305];
                            const v2307 = v2306.label;
                            var label = v2307 || '';
                            if (label) {
                                label += ': ';
                            }
                            const v2308 = tooltipItem[valueLabel];
                            const v2309 = formatValue(label, v2308, formatOptions);
                            return v2309;
                        };
                        v2303.label = v2310;
                    }
                }
            }
        }
    };
    const v2311 = merge(baseOptions, defaultOptions);
    var jsOptions = jsOptionsFunc(v2311, hideLegend, setTitle, setMin, setMax, setStacked, setXtitle, setYtitle);
    var createDataTable = function (chart, options, chartType, library) {
        var datasets = [];
        var labels = [];
        const v2312 = chart.options;
        const v2313 = v2312.colors;
        var colors = v2313 || defaultColors;
        var day = true;
        var week = true;
        var dayOfWeek;
        var month = true;
        var year = true;
        var hour = true;
        var minute = true;
        var series = chart.data;
        var max = 0;
        const v2314 = chartType === 'bubble';
        if (v2314) {
            var i$1 = 0;
            const v2315 = series.length;
            let v2316 = i$1 < v2315;
            while (v2316) {
                var s$1 = series[i$1];
                var j$1 = 0;
                const v2318 = s$1.data;
                const v2319 = v2318.length;
                let v2320 = j$1 < v2319;
                while (v2320) {
                    const v2322 = s$1.data;
                    const v2323 = v2322[j$1];
                    const v2324 = v2323[2];
                    const v2325 = v2324 > max;
                    if (v2325) {
                        const v2326 = s$1.data;
                        const v2327 = v2326[j$1];
                        max = v2327[2];
                    }
                    const v2321 = j$1++;
                    v2320 = j$1 < v2319;
                }
                const v2317 = i$1++;
                v2316 = i$1 < v2315;
            }
        }
        var i;
        var j;
        var s;
        var d;
        var key;
        var rows = [];
        var rows2 = [];
        const v2328 = chartType === 'bar';
        const v2329 = chartType === 'column';
        const v2330 = v2328 || v2329;
        const v2331 = chart.xtype;
        const v2332 = v2331 !== 'number';
        const v2333 = chart.xtype;
        const v2334 = v2333 !== 'bubble';
        const v2335 = v2332 && v2334;
        const v2336 = v2330 || v2335;
        if (v2336) {
            var sortedLabels = [];
            i = 0
            const v2337 = series.length;
            let v2338 = i < v2337;
            while (v2338) {
                s = series[i];
                j = 0
                const v2340 = s.data;
                const v2341 = v2340.length;
                let v2342 = j < v2341;
                while (v2342) {
                    const v2344 = s.data;
                    d = v2344[j];
                    const v2345 = chart.xtype;
                    const v2346 = v2345 == 'datetime';
                    const v2347 = d[0];
                    const v2348 = v2347.getTime();
                    const v2349 = d[0];
                    if (v2346) {
                        key = v2348;
                    } else {
                        key = v2349;
                    }
                    const v2350 = rows[key];
                    const v2351 = !v2350;
                    if (v2351) {
                        const v2352 = series.length;
                        rows[key] = new Array(v2352);
                    }
                    const v2354 = d[1];
                    const v2355 = toFloat(v2354);
                    v2353[i] = v2355;
                    const v2356 = sortedLabels.indexOf(key);
                    const v2357 = -1;
                    const v2358 = v2356 === v2357;
                    if (v2358) {
                        const v2359 = sortedLabels.push(key);
                        v2359;
                    }
                    const v2343 = j++;
                    v2342 = j < v2341;
                }
                const v2339 = i++;
                v2338 = i < v2337;
            }
            const v2360 = chart.xtype;
            const v2361 = v2360 === 'datetime';
            const v2362 = chart.xtype;
            const v2363 = v2362 === 'number';
            const v2364 = v2361 || v2363;
            if (v2364) {
                const v2365 = sortedLabels.sort(sortByNumber);
                v2365;
            }
            j = 0
            const v2366 = series.length;
            let v2367 = j < v2366;
            while (v2367) {
                const v2369 = [];
                const v2370 = rows2.push(v2369);
                v2370;
                const v2368 = j++;
                v2367 = j < v2366;
            }
            var value;
            var k;
            k = 0
            const v2371 = sortedLabels.length;
            let v2372 = k < v2371;
            while (v2372) {
                i = sortedLabels[k];
                const v2374 = chart.xtype;
                const v2375 = v2374 === 'datetime';
                if (v2375) {
                    const v2376 = toFloat(i);
                    value = new Date(v2376);
                    const v2377 = isDay(value);
                    day = day && v2377;
                    const v2378 = !dayOfWeek;
                    if (v2378) {
                        dayOfWeek = value.getDay();
                    }
                    const v2379 = isWeek(value, dayOfWeek);
                    week = week && v2379;
                    const v2380 = isMonth(value);
                    month = month && v2380;
                    const v2381 = isYear(value);
                    year = year && v2381;
                    const v2382 = isHour(value);
                    hour = hour && v2382;
                    const v2383 = isMinute(value);
                    minute = minute && v2383;
                } else {
                    value = i;
                }
                const v2384 = labels.push(value);
                v2384;
                j = 0
                const v2385 = series.length;
                let v2386 = j < v2385;
                while (v2386) {
                    const v2388 = rows2[j];
                    const v2389 = rows[i];
                    const v2390 = v2389[j];
                    const v2391 = v2390 === undefined;
                    const v2392 = rows[i];
                    const v2393 = v2392[j];
                    let v2394;
                    if (v2391) {
                        v2394 = null;
                    } else {
                        v2394 = v2393;
                    }
                    const v2395 = v2388.push(v2394);
                    v2395;
                    const v2387 = j++;
                    v2386 = j < v2385;
                }
                const v2373 = k++;
                v2372 = k < v2371;
            }
        } else {
            var i$2 = 0;
            const v2396 = series.length;
            let v2397 = i$2 < v2396;
            while (v2397) {
                var s$2 = series[i$2];
                var d$1 = [];
                var j$2 = 0;
                const v2399 = s$2.data;
                const v2400 = v2399.length;
                let v2401 = j$2 < v2400;
                while (v2401) {
                    const v2403 = s$2.data;
                    const v2404 = v2403[j$2];
                    const v2405 = v2404[0];
                    const v2406 = toFloat(v2405);
                    const v2407 = s$2.data;
                    const v2408 = v2407[j$2];
                    const v2409 = v2408[1];
                    const v2410 = toFloat(v2409);
                    var point = {};
                    point.x = v2406;
                    point.y = v2410;
                    const v2411 = chartType === 'bubble';
                    if (v2411) {
                        const v2412 = s$2.data;
                        const v2413 = v2412[j$2];
                        const v2414 = v2413[2];
                        const v2415 = toFloat(v2414);
                        const v2416 = v2415 * 20;
                        point.r = v2416 / max;
                        const v2417 = s$2.data;
                        const v2418 = v2417[j$2];
                        const v2419 = v2418[2];
                        point.v = v2419;
                    }
                    const v2420 = d$1.push(point);
                    v2420;
                    const v2402 = j$2++;
                    v2401 = j$2 < v2400;
                }
                const v2421 = rows2.push(d$1);
                v2421;
                const v2398 = i$2++;
                v2397 = i$2 < v2396;
            }
        }
        (i = 0)
        const v2422 = series.length;
        let v2423 = i < v2422;
        while (v2423) {
            s = series[i];
            const v2425 = s.color;
            const v2426 = colors[i];
            var color = v2425 || v2426;
            let backgroundColor;
            const v2427 = chartType !== 'line';
            const v2428 = addOpacity(color, 0.5);
            if (v2427) {
                backgroundColor = v2428;
            } else {
                backgroundColor = color;
            }
            const v2429 = s.name;
            const v2430 = v2429 || '';
            const v2431 = rows2[i];
            const v2432 = chartType === 'area';
            var dataset = {};
            dataset.label = v2430;
            dataset.data = v2431;
            dataset.fill = v2432;
            dataset.borderColor = color;
            dataset.backgroundColor = backgroundColor;
            dataset.pointBackgroundColor = color;
            dataset.borderWidth = 2;
            dataset.pointHoverBackgroundColor = color;
            const v2433 = s.stack;
            if (v2433) {
                const v2434 = s.stack;
                dataset.stack = v2434;
            }
            var curve = seriesOption(chart, s, 'curve');
            const v2435 = curve === false;
            if (v2435) {
                dataset.lineTension = 0;
            }
            var points = seriesOption(chart, s, 'points');
            const v2436 = points === false;
            if (v2436) {
                dataset.pointRadius = 0;
                dataset.pointHitRadius = 5;
            }
            const v2437 = chart.options;
            const v2438 = v2437.dataset;
            const v2439 = {};
            const v2440 = v2438 || v2439;
            dataset = merge(dataset, v2440);
            const v2441 = s.library;
            const v2442 = {};
            const v2443 = v2441 || v2442;
            dataset = merge(dataset, v2443);
            const v2444 = s.dataset;
            const v2445 = {};
            const v2446 = v2444 || v2445;
            dataset = merge(dataset, v2446);
            const v2447 = datasets.push(dataset);
            v2447;
            const v2424 = i++;
            v2423 = i < v2422;
        }
        const v2448 = chart.options;
        var xmin = v2448.xmin;
        const v2449 = chart.options;
        var xmax = v2449.xmax;
        const v2450 = chart.xtype;
        const v2451 = v2450 === 'datetime';
        if (v2451) {
            const v2452 = library.helpers;
            var gte29 = 'math' in v2452;
            let ticksKey;
            if (gte29) {
                ticksKey = 'ticks';
            } else {
                ticksKey = 'time';
            }
            const v2453 = notnull(xmin);
            if (v2453) {
                const v2458 = toDate(xmin);
                const v2459 = v2458.getTime();
                v2457.min = v2459;
            }
            const v2460 = notnull(xmax);
            if (v2460) {
                const v2465 = toDate(xmax);
                const v2466 = v2465.getTime();
                v2464.max = v2466;
            }
        } else {
            const v2467 = chart.xtype;
            const v2468 = v2467 === 'number';
            if (v2468) {
                const v2469 = notnull(xmin);
                if (v2469) {
                    const v2470 = options.scales;
                    const v2471 = v2470.xAxes;
                    const v2472 = v2471[0];
                    const v2473 = v2472.ticks;
                    v2473.min = xmin;
                }
                const v2474 = notnull(xmax);
                if (v2474) {
                    const v2475 = options.scales;
                    const v2476 = v2475.xAxes;
                    const v2477 = v2476[0];
                    const v2478 = v2477.ticks;
                    v2478.max = xmax;
                }
            }
        }
        const v2479 = chart.xtype;
        const v2480 = v2479 === 'datetime';
        const v2481 = labels.length;
        const v2482 = v2481 > 0;
        const v2483 = v2480 && v2482;
        if (v2483) {
            const v2484 = notnull(xmin);
            const v2485 = toDate(xmin);
            const v2486 = labels[0];
            let v2487;
            if (v2484) {
                v2487 = v2485;
            } else {
                v2487 = v2486;
            }
            var minTime = v2487.getTime();
            const v2488 = notnull(xmax);
            const v2489 = toDate(xmax);
            const v2490 = labels[0];
            let v2491;
            if (v2488) {
                v2491 = v2489;
            } else {
                v2491 = v2490;
            }
            var maxTime = v2491.getTime();
            i = 1
            const v2492 = labels.length;
            let v2493 = i < v2492;
            while (v2493) {
                const v2495 = labels[i];
                var value$1 = v2495.getTime();
                const v2496 = value$1 < minTime;
                if (v2496) {
                    minTime = value$1;
                }
                const v2497 = value$1 > maxTime;
                if (v2497) {
                    maxTime = value$1;
                }
                const v2494 = i++;
                v2493 = i < v2492;
            }
            const v2498 = maxTime - minTime;
            const v2499 = 86400 * 1000;
            var timeDiff = v2498 / v2499;
            const v2500 = options.scales;
            const v2501 = v2500.xAxes;
            const v2502 = v2501[0];
            const v2503 = v2502.time;
            const v2504 = v2503.unit;
            const v2505 = !v2504;
            if (v2505) {
                var step;
                const v2506 = 365 * 10;
                const v2507 = timeDiff > v2506;
                const v2508 = year || v2507;
                if (v2508) {
                    const v2509 = options.scales;
                    const v2510 = v2509.xAxes;
                    const v2511 = v2510[0];
                    const v2512 = v2511.time;
                    v2512.unit = 'year';
                    step = 365;
                } else {
                    const v2513 = 30 * 10;
                    const v2514 = timeDiff > v2513;
                    const v2515 = month || v2514;
                    if (v2515) {
                        const v2516 = options.scales;
                        const v2517 = v2516.xAxes;
                        const v2518 = v2517[0];
                        const v2519 = v2518.time;
                        v2519.unit = 'month';
                        step = 30;
                    } else {
                        const v2520 = timeDiff > 10;
                        const v2521 = day || v2520;
                        if (v2521) {
                            const v2522 = options.scales;
                            const v2523 = v2522.xAxes;
                            const v2524 = v2523[0];
                            const v2525 = v2524.time;
                            v2525.unit = 'day';
                            step = 1;
                        } else {
                            const v2526 = timeDiff > 0.5;
                            const v2527 = hour || v2526;
                            if (v2527) {
                                const v2528 = options.scales;
                                const v2529 = v2528.xAxes;
                                const v2530 = v2529[0];
                                const v2531 = v2530.time;
                                const v2532 = {};
                                v2532.hour = 'MMM D, h a';
                                v2531.displayFormats = v2532;
                                const v2533 = options.scales;
                                const v2534 = v2533.xAxes;
                                const v2535 = v2534[0];
                                const v2536 = v2535.time;
                                v2536.unit = 'hour';
                                step = 1 / 24;
                            } else {
                                if (minute) {
                                    const v2537 = options.scales;
                                    const v2538 = v2537.xAxes;
                                    const v2539 = v2538[0];
                                    const v2540 = v2539.time;
                                    const v2541 = {};
                                    v2541.minute = 'h:mm a';
                                    v2540.displayFormats = v2541;
                                    const v2542 = options.scales;
                                    const v2543 = v2542.xAxes;
                                    const v2544 = v2543[0];
                                    const v2545 = v2544.time;
                                    v2545.unit = 'minute';
                                    const v2546 = 1 / 24;
                                    step = v2546 / 60;
                                }
                            }
                        }
                    }
                }
                const v2547 = timeDiff > 0;
                const v2548 = step && v2547;
                if (v2548) {
                    const v2549 = timeDiff / step;
                    const v2550 = chart.element;
                    const v2551 = v2550.offsetWidth;
                    const v2552 = v2551 / 100;
                    const v2553 = v2549 / v2552;
                    var unitStepSize = Math.ceil(v2553);
                    const v2554 = step === 1;
                    const v2555 = week && v2554;
                    if (v2555) {
                        const v2556 = unitStepSize / 7;
                        const v2557 = Math.ceil(v2556);
                        unitStepSize = v2557 * 7;
                    }
                    const v2558 = options.scales;
                    const v2559 = v2558.xAxes;
                    const v2560 = v2559[0];
                    const v2561 = v2560.time;
                    v2561.unitStepSize = unitStepSize;
                }
            }
            const v2562 = options.scales;
            const v2563 = v2562.xAxes;
            const v2564 = v2563[0];
            const v2565 = v2564.time;
            const v2566 = v2565.tooltipFormat;
            const v2567 = !v2566;
            if (v2567) {
                if (day) {
                    const v2568 = options.scales;
                    const v2569 = v2568.xAxes;
                    const v2570 = v2569[0];
                    const v2571 = v2570.time;
                    v2571.tooltipFormat = 'll';
                } else {
                    if (hour) {
                        const v2572 = options.scales;
                        const v2573 = v2572.xAxes;
                        const v2574 = v2573[0];
                        const v2575 = v2574.time;
                        v2575.tooltipFormat = 'MMM D, h a';
                    } else {
                        if (minute) {
                            const v2576 = options.scales;
                            const v2577 = v2576.xAxes;
                            const v2578 = v2577[0];
                            const v2579 = v2578.time;
                            v2579.tooltipFormat = 'h:mm a';
                        }
                    }
                }
            }
        }
        var data = {};
        data.labels = labels;
        data.datasets = datasets;
        return data;
    };
    var defaultExport = function defaultExport(library) {
        this.name = 'chartjs';
        this.library = library;
    };
    const v2580 = defaultExport.prototype;
    const renderLineChart = function (chart, chartType) {
        var chartOptions = {};
        const v2581 = chart.options;
        const v2582 = v2581.max;
        const v2583 = !v2582;
        const v2584 = chart.data;
        const v2585 = allZeros(v2584);
        const v2586 = v2583 && v2585;
        if (v2586) {
            chartOptions.max = 1;
        }
        const v2587 = chart.options;
        const v2588 = merge(chartOptions, v2587);
        var options = jsOptions(chart, v2588);
        const v2589 = setFormatOptions(chart, options, chartType);
        v2589;
        const v2590 = chartType || 'line';
        const v2591 = this.library;
        var data = createDataTable(chart, options, v2590, v2591);
        const v2592 = chart.xtype;
        const v2593 = v2592 === 'number';
        if (v2593) {
            const v2594 = options.scales;
            const v2595 = v2594.xAxes;
            const v2596 = v2595[0];
            v2596.type = 'linear';
            const v2597 = options.scales;
            const v2598 = v2597.xAxes;
            const v2599 = v2598[0];
            v2599.position = 'bottom';
        } else {
            const v2600 = options.scales;
            const v2601 = v2600.xAxes;
            const v2602 = v2601[0];
            const v2603 = chart.xtype;
            const v2604 = v2603 === 'string';
            let v2605;
            if (v2604) {
                v2605 = 'category';
            } else {
                v2605 = 'time';
            }
            v2602.type = v2605;
        }
        const v2606 = this.drawChart(chart, 'line', data, options);
        v2606;
    };
    v2580.renderLineChart = renderLineChart;
    const v2607 = defaultExport.prototype;
    const renderPieChart = function (chart) {
        const v2608 = {};
        var options = merge(v2608, baseOptions);
        const v2609 = chart.options;
        const v2610 = v2609.donut;
        if (v2610) {
            options.cutoutPercentage = 50;
        }
        const v2611 = chart.options;
        const v2612 = 'legend' in v2611;
        if (v2612) {
            const v2613 = chart.options;
            const v2614 = v2613.legend;
            const v2615 = hideLegend(options, v2614);
            v2615;
        }
        const v2616 = chart.options;
        const v2617 = v2616.title;
        if (v2617) {
            const v2618 = chart.options;
            const v2619 = v2618.title;
            const v2620 = setTitle(options, v2619);
            v2620;
        }
        const v2621 = chart.options;
        const v2622 = v2621.library;
        const v2623 = {};
        const v2624 = v2622 || v2623;
        options = merge(options, v2624);
        const v2625 = setFormatOptions(chart, options, 'pie');
        v2625;
        var labels = [];
        var values = [];
        var i = 0;
        const v2626 = chart.data;
        const v2627 = v2626.length;
        let v2628 = i < v2627;
        while (v2628) {
            const v2630 = chart.data;
            var point = v2630[i];
            const v2631 = point[0];
            const v2632 = labels.push(v2631);
            v2632;
            const v2633 = point[1];
            const v2634 = values.push(v2633);
            v2634;
            const v2629 = i++;
            v2628 = i < v2627;
        }
        const v2635 = chart.options;
        const v2636 = v2635.colors;
        const v2637 = v2636 || defaultColors;
        var dataset = {};
        dataset.data = values;
        dataset.backgroundColor = v2637;
        const v2638 = chart.options;
        const v2639 = v2638.dataset;
        const v2640 = {};
        const v2641 = v2639 || v2640;
        dataset = merge(dataset, v2641);
        const v2642 = [dataset];
        var data = {};
        data.labels = labels;
        data.datasets = v2642;
        const v2643 = this.drawChart(chart, 'pie', data, options);
        v2643;
    };
    v2607.renderPieChart = renderPieChart;
    const v2644 = defaultExport.prototype;
    const renderColumnChart = function (chart, chartType) {
        var options;
        const v2645 = chartType === 'bar';
        if (v2645) {
            var barOptions = merge(baseOptions, defaultOptions);
            const v2646 = barOptions.scales;
            const v2647 = v2646.yAxes;
            const v2648 = v2647[0];
            const v2649 = v2648.ticks;
            const v2650 = v2649.maxTicksLimit;
            const v2651 = delete v2650;
            v2651;
            const v2652 = jsOptionsFunc(barOptions, hideLegend, setTitle, setBarMin, setBarMax, setStacked, setXtitle, setYtitle);
            const v2653 = chart.options;
            options = v2652(chart, v2653);
        } else {
            const v2654 = chart.options;
            options = jsOptions(chart, v2654);
        }
        const v2655 = setFormatOptions(chart, options, chartType);
        v2655;
        const v2656 = this.library;
        var data = createDataTable(chart, options, 'column', v2656);
        const v2657 = chartType !== 'bar';
        if (v2657) {
            const v2658 = setLabelSize(chart, data, options);
            v2658;
        }
        const v2659 = chartType === 'bar';
        let v2660;
        if (v2659) {
            v2660 = 'horizontalBar';
        } else {
            v2660 = 'bar';
        }
        const v2661 = this.drawChart(chart, v2660, data, options);
        v2661;
    };
    v2644.renderColumnChart = renderColumnChart;
    const v2662 = defaultExport.prototype;
    const renderAreaChart = function (chart) {
        const v2663 = this.renderLineChart(chart, 'area');
        v2663;
    };
    v2662.renderAreaChart = renderAreaChart;
    const v2664 = defaultExport.prototype;
    const renderBarChart = function (chart) {
        const v2665 = this.renderColumnChart(chart, 'bar');
        v2665;
    };
    v2664.renderBarChart = renderBarChart;
    const v2666 = defaultExport.prototype;
    const renderScatterChart = function (chart, chartType) {
        chartType = chartType || 'scatter';
        const v2667 = chart.options;
        var options = jsOptions(chart, v2667);
        const v2668 = setFormatOptions(chart, options, chartType);
        v2668;
        const v2669 = 'showLines' in options;
        const v2670 = !v2669;
        if (v2670) {
            options.showLines = false;
        }
        const v2671 = this.library;
        var data = createDataTable(chart, options, chartType, v2671);
        const v2672 = options.scales;
        const v2673 = v2672.xAxes;
        const v2674 = v2673[0];
        v2674.type = 'linear';
        const v2675 = options.scales;
        const v2676 = v2675.xAxes;
        const v2677 = v2676[0];
        v2677.position = 'bottom';
        const v2678 = this.drawChart(chart, chartType, data, options);
        v2678;
    };
    v2666.renderScatterChart = renderScatterChart;
    const v2679 = defaultExport.prototype;
    const renderBubbleChart = function (chart) {
        const v2680 = this.renderScatterChart(chart, 'bubble');
        v2680;
    };
    v2679.renderBubbleChart = renderBubbleChart;
    const v2681 = defaultExport.prototype;
    const destroy = function (chart) {
        const v2682 = chart.chart;
        if (v2682) {
            const v2683 = chart.chart;
            const v2684 = v2683.destroy();
            v2684;
        }
    };
    v2681.destroy = destroy;
    const v2685 = defaultExport.prototype;
    const drawChart = function (chart, type, data, options) {
        const v2686 = this.destroy(chart);
        v2686;
        var chartOptions = {};
        chartOptions.type = type;
        chartOptions.data = data;
        chartOptions.options = options;
        const v2687 = chart.options;
        const v2688 = v2687.code;
        if (v2688) {
            const v2689 = window.console;
            const v2690 = JSON.stringify(chartOptions);
            const v2691 = 'new Chart(ctx, ' + v2690;
            const v2692 = v2691 + ');';
            const v2693 = v2689.log(v2692);
            v2693;
        }
        const v2694 = chart.element;
        v2694.innerHTML = '<canvas></canvas>';
        const v2695 = chart.element;
        const v2696 = v2695.getElementsByTagName('CANVAS');
        var ctx = v2696[0];
        chart.chart = new this.library(ctx, chartOptions);
    };
    v2685.drawChart = drawChart;
    const v2697 = {};
    const v2698 = {};
    v2698.text = null;
    const v2699 = {};
    v2699.fontSize = '12px';
    const v2700 = {};
    v2700.style = v2699;
    const v2701 = {};
    v2701.title = v2698;
    v2701.labels = v2700;
    const v2702 = {};
    v2702.text = null;
    const v2703 = {};
    v2703.fontSize = '12px';
    const v2704 = {};
    v2704.style = v2703;
    const v2705 = {};
    v2705.title = v2702;
    v2705.labels = v2704;
    const v2706 = {};
    v2706.text = null;
    const v2707 = {};
    v2707.enabled = false;
    const v2708 = {};
    v2708.borderWidth = 0;
    const v2709 = {};
    v2709.fontSize = '12px';
    const v2710 = {};
    v2710.style = v2709;
    const v2711 = {};
    const v2712 = {};
    const v2713 = {};
    const v2714 = {};
    v2714.marker = v2713;
    const v2715 = {};
    v2715.areaspline = v2711;
    v2715.area = v2712;
    v2715.series = v2714;
    var defaultOptions$1 = {};
    defaultOptions$1.chart = v2697;
    defaultOptions$1.xAxis = v2701;
    defaultOptions$1.yAxis = v2705;
    defaultOptions$1.title = v2706;
    defaultOptions$1.credits = v2707;
    defaultOptions$1.legend = v2708;
    defaultOptions$1.tooltip = v2710;
    defaultOptions$1.plotOptions = v2715;
    var hideLegend$1 = function (options, legend, hideLegend) {
        const v2716 = legend !== undefined;
        if (v2716) {
            const v2717 = options.legend;
            const v2718 = !legend;
            const v2719 = !v2718;
            v2717.enabled = v2719;
            const v2720 = legend !== true;
            const v2721 = legend && v2720;
            if (v2721) {
                const v2722 = legend === 'top';
                const v2723 = legend === 'bottom';
                const v2724 = v2722 || v2723;
                if (v2724) {
                    const v2725 = options.legend;
                    v2725.verticalAlign = legend;
                } else {
                    const v2726 = options.legend;
                    v2726.layout = 'vertical';
                    const v2727 = options.legend;
                    v2727.verticalAlign = 'middle';
                    const v2728 = options.legend;
                    v2728.align = legend;
                }
            }
        } else {
            if (hideLegend) {
                const v2729 = options.legend;
                v2729.enabled = false;
            }
        }
    };
    var setTitle$1 = function (options, title) {
        const v2730 = options.title;
        v2730.text = title;
    };
    var setMin$1 = function (options, min) {
        const v2731 = options.yAxis;
        v2731.min = min;
    };
    var setMax$1 = function (options, max) {
        const v2732 = options.yAxis;
        v2732.max = max;
    };
    var setStacked$1 = function (options, stacked) {
        let stackedValue;
        const v2733 = stacked === true;
        let v2734;
        if (v2733) {
            v2734 = 'normal';
        } else {
            v2734 = stacked;
        }
        if (stacked) {
            stackedValue = v2734;
        } else {
            stackedValue = null;
        }
        const v2735 = options.plotOptions;
        const v2736 = v2735.series;
        v2736.stacking = stackedValue;
        const v2737 = options.plotOptions;
        const v2738 = v2737.area;
        v2738.stacking = stackedValue;
        const v2739 = options.plotOptions;
        const v2740 = v2739.areaspline;
        v2740.stacking = stackedValue;
    };
    var setXtitle$1 = function (options, title) {
        const v2741 = options.xAxis;
        const v2742 = v2741.title;
        v2742.text = title;
    };
    var setYtitle$1 = function (options, title) {
        const v2743 = options.yAxis;
        const v2744 = v2743.title;
        v2744.text = title;
    };
    var jsOptions$1 = jsOptionsFunc(defaultOptions$1, hideLegend$1, setTitle$1, setMin$1, setMax$1, setStacked$1, setXtitle$1, setYtitle$1);
    var setFormatOptions$1 = function (chart, options, chartType) {
        const v2745 = chart.options;
        const v2746 = v2745.prefix;
        const v2747 = chart.options;
        const v2748 = v2747.suffix;
        const v2749 = chart.options;
        const v2750 = v2749.thousands;
        const v2751 = chart.options;
        const v2752 = v2751.decimal;
        var formatOptions = {};
        formatOptions.prefix = v2746;
        formatOptions.suffix = v2748;
        formatOptions.thousands = v2750;
        formatOptions.decimal = v2752;
        const v2753 = chartType !== 'pie';
        const v2754 = options.yAxis;
        const v2755 = v2754.labels;
        const v2756 = v2755.formatter;
        const v2757 = !v2756;
        const v2758 = v2753 && v2757;
        if (v2758) {
            const v2759 = options.yAxis;
            const v2760 = v2759.labels;
            const v2763 = function () {
                const v2761 = this.value;
                const v2762 = formatValue('', v2761, formatOptions);
                return v2762;
            };
            v2760.formatter = v2763;
        }
        const v2764 = options.tooltip;
        const v2765 = v2764.pointFormatter;
        const v2766 = !v2765;
        if (v2766) {
            const v2767 = options.tooltip;
            const v2778 = function () {
                const v2768 = this.color;
                const v2769 = '<span style="color:' + v2768;
                const v2770 = v2769 + '">\u25CF</span> ';
                const v2771 = this.series;
                const v2772 = v2771.name;
                const v2773 = v2772 + ': <b>';
                const v2774 = this.y;
                const v2775 = formatValue(v2773, v2774, formatOptions);
                const v2776 = v2770 + v2775;
                const v2777 = v2776 + '</b><br/>';
                return v2777;
            };
            v2767.pointFormatter = v2778;
        }
    };
    var defaultExport$1 = function defaultExport(library) {
        this.name = 'highcharts';
        this.library = library;
    };
    const v2779 = defaultExport$1.prototype;
    const renderLineChart = function (chart, chartType) {
        chartType = chartType || 'spline';
        var chartOptions = {};
        const v2780 = chartType === 'areaspline';
        if (v2780) {
            const v2781 = {};
            v2781.stacking = 'normal';
            const v2782 = {};
            v2782.stacking = 'normal';
            const v2783 = {};
            v2783.enabled = false;
            const v2784 = {};
            v2784.marker = v2783;
            const v2785 = {};
            v2785.areaspline = v2781;
            v2785.area = v2782;
            v2785.series = v2784;
            chartOptions.plotOptions = v2785;
            chartOptions = {};
            chartOptions = {};
        }
        const v2786 = chart.options;
        const v2787 = v2786.curve;
        const v2788 = v2787 === false;
        if (v2788) {
            const v2789 = chartType === 'areaspline';
            if (v2789) {
                chartType = 'area';
            } else {
                const v2790 = chartType === 'spline';
                if (v2790) {
                    chartType = 'line';
                }
            }
        }
        const v2791 = chart.options;
        var options = jsOptions$1(chart, v2791, chartOptions);
        var data;
        var i;
        var j;
        const v2792 = options.xAxis;
        const v2793 = chart.xtype;
        const v2794 = v2793 === 'string';
        const v2795 = chart.xtype;
        const v2796 = v2795 === 'number';
        let v2797;
        if (v2796) {
            v2797 = 'linear';
        } else {
            v2797 = 'datetime';
        }
        let v2798;
        if (v2794) {
            v2798 = 'category';
        } else {
            v2798 = v2797;
        }
        v2792.type = v2798;
        const v2799 = options.chart;
        const v2800 = v2799.type;
        const v2801 = !v2800;
        if (v2801) {
            const v2802 = options.chart;
            v2802.type = chartType;
        }
        const v2803 = setFormatOptions$1(chart, options, chartType);
        v2803;
        var series = chart.data;
        (i = 0)
        const v2804 = series.length;
        let v2805 = i < v2804;
        while (v2805) {
            const v2807 = series[i];
            const v2808 = series[i];
            const v2809 = v2808.name;
            v2807.name = v2809 || 'Value';
            const v2810 = series[i];
            data = v2810.data;
            const v2811 = chart.xtype;
            const v2812 = v2811 === 'datetime';
            if (v2812) {
                j = 0
                const v2813 = data.length;
                let v2814 = j < v2813;
                while (v2814) {
                    const v2817 = data[j];
                    const v2818 = v2817[0];
                    const v2819 = v2818.getTime();
                    v2816[0] = v2819;
                    const v2815 = j++;
                    v2814 = j < v2813;
                }
            }
            const v2820 = series[i];
            const v2821 = {};
            v2821.symbol = 'circle';
            v2820.marker = v2821;
            const v2822 = chart.options;
            const v2823 = v2822.points;
            const v2824 = v2823 === false;
            if (v2824) {
                const v2825 = series[i];
                const v2826 = v2825.marker;
                v2826.enabled = false;
            }
            const v2806 = i++;
            v2805 = i < v2804;
        }
        const v2827 = this.drawChart(chart, series, options);
        v2827;
    };
    v2779.renderLineChart = renderLineChart;
    const v2828 = defaultExport$1.prototype;
    const renderScatterChart = function (chart) {
        const v2829 = chart.options;
        const v2830 = {};
        var options = jsOptions$1(chart, v2829, v2830);
        const v2831 = options.chart;
        v2831.type = 'scatter';
        const v2832 = chart.data;
        const v2833 = this.drawChart(chart, v2832, options);
        v2833;
    };
    v2828.renderScatterChart = renderScatterChart;
    const v2834 = defaultExport$1.prototype;
    const renderPieChart = function (chart) {
        const v2835 = {};
        var chartOptions = merge(defaultOptions$1, v2835);
        const v2836 = chart.options;
        const v2837 = v2836.colors;
        if (v2837) {
            const v2838 = chart.options;
            const v2839 = v2838.colors;
            chartOptions.colors = v2839;
        }
        const v2840 = chart.options;
        const v2841 = v2840.donut;
        if (v2841) {
            const v2842 = {};
            v2842.innerSize = '50%';
            const v2843 = {};
            v2843.pie = v2842;
            chartOptions.plotOptions = v2843;
        }
        const v2844 = chart.options;
        const v2845 = 'legend' in v2844;
        if (v2845) {
            const v2846 = chart.options;
            const v2847 = v2846.legend;
            const v2848 = hideLegend$1(chartOptions, v2847);
            v2848;
        }
        const v2849 = chart.options;
        const v2850 = v2849.title;
        if (v2850) {
            const v2851 = chart.options;
            const v2852 = v2851.title;
            const v2853 = setTitle$1(chartOptions, v2852);
            v2853;
        }
        const v2854 = chart.options;
        const v2855 = v2854.library;
        const v2856 = {};
        const v2857 = v2855 || v2856;
        var options = merge(chartOptions, v2857);
        const v2858 = setFormatOptions$1(chart, options, 'pie');
        v2858;
        const v2859 = chart.options;
        const v2860 = v2859.label;
        const v2861 = v2860 || 'Value';
        const v2862 = chart.data;
        const v2863 = {
            type: 'pie',
            name: v2861,
            data: v2862
        };
        var series = [v2863];
        const v2864 = this.drawChart(chart, series, options);
        v2864;
    };
    v2834.renderPieChart = renderPieChart;
    const v2865 = defaultExport$1.prototype;
    const renderColumnChart = function (chart, chartType) {
        chartType = chartType || 'column';
        var series = chart.data;
        const v2866 = chart.options;
        var options = jsOptions$1(chart, v2866);
        var i;
        var j;
        var s;
        var d;
        var rows = [];
        var categories = [];
        const v2867 = options.chart;
        v2867.type = chartType;
        const v2868 = setFormatOptions$1(chart, options, chartType);
        v2868;
        (i = 0)
        const v2869 = series.length;
        let v2870 = i < v2869;
        while (v2870) {
            s = series[i];
            j = 0
            const v2872 = s.data;
            const v2873 = v2872.length;
            let v2874 = j < v2873;
            while (v2874) {
                const v2876 = s.data;
                d = v2876[j];
                const v2877 = d[0];
                const v2878 = rows[v2877];
                const v2879 = !v2878;
                if (v2879) {
                    const v2880 = d[0];
                    const v2881 = series.length;
                    rows[v2880] = new Array(v2881);
                    const v2882 = d[0];
                    const v2883 = categories.push(v2882);
                    v2883;
                }
                const v2884 = d[0];
                const v2885 = rows[v2884];
                const v2886 = d[1];
                v2885[i] = v2886;
                const v2875 = j++;
                v2874 = j < v2873;
            }
            const v2871 = i++;
            v2870 = i < v2869;
        }
        const v2887 = chart.xtype;
        const v2888 = v2887 === 'number';
        if (v2888) {
            const v2889 = categories.sort(sortByNumber);
            v2889;
        }
        const v2890 = options.xAxis;
        v2890.categories = categories;
        var newSeries = [];
        var d2;
        (i = 0)
        const v2891 = series.length;
        let v2892 = i < v2891;
        while (v2892) {
            d = [];
            j = 0
            const v2894 = categories.length;
            let v2895 = j < v2894;
            while (v2895) {
                const v2897 = categories[j];
                const v2898 = rows[v2897];
                const v2899 = v2898[i];
                const v2900 = v2899 || 0;
                const v2901 = d.push(v2900);
                v2901;
                const v2896 = j++;
                v2895 = j < v2894;
            }
            const v2902 = series[i];
            const v2903 = v2902.name;
            const v2904 = v2903 || 'Value';
            d2.name = v2904;
            d2.data = d;
            d2 = {};
            d2 = {};
            const v2905 = series[i];
            const v2906 = v2905.stack;
            if (v2906) {
                const v2907 = series[i];
                const v2908 = v2907.stack;
                d2.stack = v2908;
            }
            const v2909 = newSeries.push(d2);
            v2909;
            const v2893 = i++;
            v2892 = i < v2891;
        }
        const v2910 = this.drawChart(chart, newSeries, options);
        v2910;
    };
    v2865.renderColumnChart = renderColumnChart;
    const v2911 = defaultExport$1.prototype;
    const renderBarChart = function (chart) {
        const v2912 = this.renderColumnChart(chart, 'bar');
        v2912;
    };
    v2911.renderBarChart = renderBarChart;
    const v2913 = defaultExport$1.prototype;
    const renderAreaChart = function (chart) {
        const v2914 = this.renderLineChart(chart, 'areaspline');
        v2914;
    };
    v2913.renderAreaChart = renderAreaChart;
    const v2915 = defaultExport$1.prototype;
    const destroy = function (chart) {
        const v2916 = chart.chart;
        if (v2916) {
            const v2917 = chart.chart;
            const v2918 = v2917.destroy();
            v2918;
        }
    };
    v2915.destroy = destroy;
    const v2919 = defaultExport$1.prototype;
    const drawChart = function (chart, data, options) {
        const v2920 = this.destroy(chart);
        v2920;
        const v2921 = options.chart;
        const v2922 = chart.element;
        const v2923 = v2922.id;
        v2921.renderTo = v2923;
        options.series = data;
        const v2924 = chart.options;
        const v2925 = v2924.code;
        if (v2925) {
            const v2926 = window.console;
            const v2927 = JSON.stringify(options);
            const v2928 = 'new Highcharts.Chart(' + v2927;
            const v2929 = v2928 + ');';
            const v2930 = v2926.log(v2929);
            v2930;
        }
        const v2931 = this.library;
        chart.chart = new v2931.Chart(options);
    };
    v2919.drawChart = drawChart;
    var loaded = {};
    var callbacks = [];
    const v2932 = {};
    const v2933 = {};
    v2933.fontSize = 12;
    v2933.color = '#444';
    const v2934 = {};
    v2934.textStyle = v2933;
    v2934.alignment = 'center';
    v2934.position = 'right';
    const v2935 = {};
    v2935.color = '#666';
    v2935.fontSize = 12;
    const v2936 = {};
    const v2937 = {};
    v2937.color = 'transparent';
    const v2938 = {};
    const v2939 = {};
    v2939.textStyle = v2935;
    v2939.titleTextStyle = v2936;
    v2939.gridlines = v2937;
    v2939.baselineColor = '#ccc';
    v2939.viewWindow = v2938;
    const v2940 = {};
    v2940.color = '#666';
    v2940.fontSize = 12;
    const v2941 = {};
    const v2942 = {};
    const v2943 = {};
    v2943.textStyle = v2940;
    v2943.titleTextStyle = v2941;
    v2943.baselineColor = '#ccc';
    v2943.viewWindow = v2942;
    const v2944 = {};
    v2944.color = '#666';
    v2944.fontSize = 12;
    const v2945 = {};
    v2945.textStyle = v2944;
    var defaultOptions$2 = {};
    defaultOptions$2.chartArea = v2932;
    defaultOptions$2.fontName = '\'Lucida Grande\', \'Lucida Sans Unicode\', Verdana, Arial, Helvetica, sans-serif';
    defaultOptions$2.pointSize = 6;
    defaultOptions$2.legend = v2934;
    defaultOptions$2.curveType = 'function';
    defaultOptions$2.hAxis = v2939;
    defaultOptions$2.vAxis = v2943;
    defaultOptions$2.tooltip = v2945;
    var hideLegend$2 = function (options, legend, hideLegend) {
        const v2946 = legend !== undefined;
        if (v2946) {
            var position;
            const v2947 = !legend;
            if (v2947) {
                position = 'none';
            } else {
                const v2948 = legend === true;
                if (v2948) {
                    position = 'right';
                } else {
                    position = legend;
                }
            }
            const v2949 = options.legend;
            v2949.position = position;
        } else {
            if (hideLegend) {
                const v2950 = options.legend;
                v2950.position = 'none';
            }
        }
    };
    var setTitle$2 = function (options, title) {
        options.title = title;
        const v2951 = {};
        v2951.color = '#333';
        v2951.fontSize = '20px';
        options.titleTextStyle = v2951;
    };
    var setMin$2 = function (options, min) {
        const v2952 = options.vAxis;
        const v2953 = v2952.viewWindow;
        v2953.min = min;
    };
    var setMax$2 = function (options, max) {
        const v2954 = options.vAxis;
        const v2955 = v2954.viewWindow;
        v2955.max = max;
    };
    var setBarMin$1 = function (options, min) {
        const v2956 = options.hAxis;
        const v2957 = v2956.viewWindow;
        v2957.min = min;
    };
    var setBarMax$1 = function (options, max) {
        const v2958 = options.hAxis;
        const v2959 = v2958.viewWindow;
        v2959.max = max;
    };
    var setStacked$2 = function (options, stacked) {
        let v2960;
        if (stacked) {
            v2960 = stacked;
        } else {
            v2960 = false;
        }
        options.isStacked = v2960;
    };
    var setXtitle$2 = function (options, title) {
        const v2961 = options.hAxis;
        v2961.title = title;
        const v2962 = options.hAxis;
        const v2963 = v2962.titleTextStyle;
        v2963.italic = false;
    };
    var setYtitle$2 = function (options, title) {
        const v2964 = options.vAxis;
        v2964.title = title;
        const v2965 = options.vAxis;
        const v2966 = v2965.titleTextStyle;
        v2966.italic = false;
    };
    var jsOptions$2 = jsOptionsFunc(defaultOptions$2, hideLegend$2, setTitle$2, setMin$2, setMax$2, setStacked$2, setXtitle$2, setYtitle$2);
    var resize = function (callback) {
        const v2967 = window.attachEvent;
        if (v2967) {
            const v2968 = window.attachEvent('onresize', callback);
            v2968;
        } else {
            const v2969 = window.addEventListener;
            if (v2969) {
                const v2970 = window.addEventListener('resize', callback, true);
                v2970;
            }
        }
        const v2971 = callback();
        v2971;
    };
    var defaultExport$2 = function defaultExport(library) {
        this.name = 'google';
        this.library = library;
    };
    const v2972 = defaultExport$2.prototype;
    const renderLineChart = function (chart) {
        var this$1 = this;
        const v2983 = function () {
            var chartOptions = {};
            const v2973 = chart.options;
            const v2974 = v2973.curve;
            const v2975 = v2974 === false;
            if (v2975) {
                chartOptions.curveType = 'none';
            }
            const v2976 = chart.options;
            const v2977 = v2976.points;
            const v2978 = v2977 === false;
            if (v2978) {
                chartOptions.pointSize = 0;
            }
            const v2979 = chart.options;
            var options = jsOptions$2(chart, v2979, chartOptions);
            const v2980 = chart.data;
            const v2981 = chart.xtype;
            var data = this$1.createDataTable(v2980, v2981);
            const v2982 = this$1.drawChart(chart, 'LineChart', data, options);
            v2982;
        };
        const v2984 = this.waitForLoaded(chart, v2983);
        v2984;
    };
    v2972.renderLineChart = renderLineChart;
    const v2985 = defaultExport$2.prototype;
    const renderPieChart = function (chart) {
        var this$1 = this;
        const v3016 = function () {
            const v2986 = {};
            v2986.top = '10%';
            v2986.height = '80%';
            const v2987 = {};
            var chartOptions = {};
            chartOptions.chartArea = v2986;
            chartOptions.legend = v2987;
            const v2988 = chart.options;
            const v2989 = v2988.colors;
            if (v2989) {
                const v2990 = chart.options;
                const v2991 = v2990.colors;
                chartOptions.colors = v2991;
            }
            const v2992 = chart.options;
            const v2993 = v2992.donut;
            if (v2993) {
                chartOptions.pieHole = 0.5;
            }
            const v2994 = chart.options;
            const v2995 = 'legend' in v2994;
            if (v2995) {
                const v2996 = chart.options;
                const v2997 = v2996.legend;
                const v2998 = hideLegend$2(chartOptions, v2997);
                v2998;
            }
            const v2999 = chart.options;
            const v3000 = v2999.title;
            if (v3000) {
                const v3001 = chart.options;
                const v3002 = v3001.title;
                const v3003 = setTitle$2(chartOptions, v3002);
                v3003;
            }
            const v3004 = merge(defaultOptions$2, chartOptions);
            const v3005 = chart.options;
            const v3006 = v3005.library;
            const v3007 = {};
            const v3008 = v3006 || v3007;
            var options = merge(v3004, v3008);
            const v3009 = this$1.library;
            const v3010 = v3009.visualization;
            var data = new v3010.DataTable();
            const v3011 = data.addColumn('string', '');
            v3011;
            const v3012 = data.addColumn('number', 'Value');
            v3012;
            const v3013 = chart.data;
            const v3014 = data.addRows(v3013);
            v3014;
            const v3015 = this$1.drawChart(chart, 'PieChart', data, options);
            v3015;
        };
        const v3017 = this.waitForLoaded(chart, v3016);
        v3017;
    };
    v2985.renderPieChart = renderPieChart;
    const v3018 = defaultExport$2.prototype;
    const renderColumnChart = function (chart) {
        var this$1 = this;
        const v3023 = function () {
            const v3019 = chart.options;
            var options = jsOptions$2(chart, v3019);
            const v3020 = chart.data;
            const v3021 = chart.xtype;
            var data = this$1.createDataTable(v3020, v3021);
            const v3022 = this$1.drawChart(chart, 'ColumnChart', data, options);
            v3022;
        };
        const v3024 = this.waitForLoaded(chart, v3023);
        v3024;
    };
    v3018.renderColumnChart = renderColumnChart;
    const v3025 = defaultExport$2.prototype;
    const renderBarChart = function (chart) {
        var this$1 = this;
        const v3033 = function () {
            const v3026 = {};
            v3026.color = '#ccc';
            const v3027 = {};
            v3027.gridlines = v3026;
            var chartOptions = {};
            chartOptions.hAxis = v3027;
            const v3028 = jsOptionsFunc(defaultOptions$2, hideLegend$2, setTitle$2, setBarMin$1, setBarMax$1, setStacked$2, setXtitle$2, setYtitle$2);
            const v3029 = chart.options;
            var options = v3028(chart, v3029, chartOptions);
            const v3030 = chart.data;
            const v3031 = chart.xtype;
            var data = this$1.createDataTable(v3030, v3031);
            const v3032 = this$1.drawChart(chart, 'BarChart', data, options);
            v3032;
        };
        const v3034 = this.waitForLoaded(chart, v3033);
        v3034;
    };
    v3025.renderBarChart = renderBarChart;
    const v3035 = defaultExport$2.prototype;
    const renderAreaChart = function (chart) {
        var this$1 = this;
        const v3040 = function () {
            var chartOptions = {};
            chartOptions.isStacked = true;
            chartOptions.pointSize = 0;
            chartOptions.areaOpacity = 0.5;
            const v3036 = chart.options;
            var options = jsOptions$2(chart, v3036, chartOptions);
            const v3037 = chart.data;
            const v3038 = chart.xtype;
            var data = this$1.createDataTable(v3037, v3038);
            const v3039 = this$1.drawChart(chart, 'AreaChart', data, options);
            v3039;
        };
        const v3041 = this.waitForLoaded(chart, v3040);
        v3041;
    };
    v3035.renderAreaChart = renderAreaChart;
    const v3042 = defaultExport$2.prototype;
    const renderGeoChart = function (chart) {
        var this$1 = this;
        const v3063 = function () {
            const v3043 = chart.options;
            const v3044 = v3043.colors;
            const v3045 = [
                '#f6c7b6',
                '#ce502d'
            ];
            const v3046 = v3044 || v3045;
            const v3047 = {};
            v3047.colors = v3046;
            var chartOptions = {};
            chartOptions.legend = 'none';
            chartOptions.colorAxis = v3047;
            const v3048 = merge(defaultOptions$2, chartOptions);
            const v3049 = chart.options;
            const v3050 = v3049.library;
            const v3051 = {};
            const v3052 = v3050 || v3051;
            var options = merge(v3048, v3052);
            const v3053 = this$1.library;
            const v3054 = v3053.visualization;
            var data = new v3054.DataTable();
            const v3055 = data.addColumn('string', '');
            v3055;
            const v3056 = chart.options;
            const v3057 = v3056.label;
            const v3058 = v3057 || 'Value';
            const v3059 = data.addColumn('number', v3058);
            v3059;
            const v3060 = chart.data;
            const v3061 = data.addRows(v3060);
            v3061;
            const v3062 = this$1.drawChart(chart, 'GeoChart', data, options);
            v3062;
        };
        const v3064 = this.waitForLoaded(chart, v3063);
        v3064;
    };
    v3042.renderGeoChart = renderGeoChart;
    const v3065 = defaultExport$2.prototype;
    const renderScatterChart = function (chart) {
        var this$1 = this;
        const v3096 = function () {
            var chartOptions = {};
            const v3066 = chart.options;
            var options = jsOptions$2(chart, v3066, chartOptions);
            var series = chart.data;
            var rows2 = [];
            var i;
            var j;
            var data;
            var d;
            (i = 0)
            const v3067 = series.length;
            let v3068 = i < v3067;
            while (v3068) {
                const v3070 = series[i];
                const v3071 = series[i];
                const v3072 = v3071.name;
                v3070.name = v3072 || 'Value';
                const v3073 = series[i];
                d = v3073.data;
                j = 0
                const v3074 = d.length;
                let v3075 = j < v3074;
                while (v3075) {
                    const v3077 = series.length;
                    const v3078 = v3077 + 1;
                    var row = new Array(v3078);
                    const v3079 = d[j];
                    const v3080 = v3079[0];
                    row[0] = v3080;
                    const v3081 = i + 1;
                    const v3082 = d[j];
                    const v3083 = v3082[1];
                    row[v3081] = v3083;
                    const v3084 = rows2.push(row);
                    v3084;
                    const v3076 = j++;
                    v3075 = j < v3074;
                }
                const v3069 = i++;
                v3068 = i < v3067;
            }
            const v3085 = this$1.library;
            const v3086 = v3085.visualization;
            data = new v3086.DataTable();
            const v3087 = data.addColumn('number', '');
            v3087;
            (i = 0)
            const v3088 = series.length;
            let v3089 = i < v3088;
            while (v3089) {
                const v3091 = series[i];
                const v3092 = v3091.name;
                const v3093 = data.addColumn('number', v3092);
                v3093;
                const v3090 = i++;
                v3089 = i < v3088;
            }
            const v3094 = data.addRows(rows2);
            v3094;
            const v3095 = this$1.drawChart(chart, 'ScatterChart', data, options);
            v3095;
        };
        const v3097 = this.waitForLoaded(chart, v3096);
        v3097;
    };
    v3065.renderScatterChart = renderScatterChart;
    const v3098 = defaultExport$2.prototype;
    const renderTimeline = function (chart) {
        var this$1 = this;
        const v3121 = function () {
            var chartOptions = {};
            chartOptions.legend = 'none';
            const v3099 = chart.options;
            const v3100 = v3099.colors;
            if (v3100) {
                const v3101 = chart.options;
                const v3102 = v3101.colors;
                chartOptions.colors = v3102;
            }
            const v3103 = merge(defaultOptions$2, chartOptions);
            const v3104 = chart.options;
            const v3105 = v3104.library;
            const v3106 = {};
            const v3107 = v3105 || v3106;
            var options = merge(v3103, v3107);
            const v3108 = this$1.library;
            const v3109 = v3108.visualization;
            var data = new v3109.DataTable();
            const v3110 = {
                type: 'string',
                id: 'Name'
            };
            const v3111 = data.addColumn(v3110);
            v3111;
            const v3112 = {
                type: 'date',
                id: 'Start'
            };
            const v3113 = data.addColumn(v3112);
            v3113;
            const v3114 = {
                type: 'date',
                id: 'End'
            };
            const v3115 = data.addColumn(v3114);
            v3115;
            const v3116 = chart.data;
            const v3117 = data.addRows(v3116);
            v3117;
            const v3118 = chart.element;
            const v3119 = v3118.style;
            v3119.lineHeight = 'normal';
            const v3120 = this$1.drawChart(chart, 'Timeline', data, options);
            v3120;
        };
        const v3122 = this.waitForLoaded(chart, 'timeline', v3121);
        v3122;
    };
    v3098.renderTimeline = renderTimeline;
    const v3123 = defaultExport$2.prototype;
    const destroy = function (chart) {
        const v3124 = chart.chart;
        if (v3124) {
            const v3125 = chart.chart;
            const v3126 = v3125.clearChart();
            v3126;
        }
    };
    v3123.destroy = destroy;
    const v3127 = defaultExport$2.prototype;
    const drawChart = function (chart, type, data, options) {
        const v3128 = this.destroy(chart);
        v3128;
        const v3129 = chart.options;
        const v3130 = v3129.code;
        if (v3130) {
            const v3131 = window.console;
            const v3132 = data.toJSON();
            const v3133 = 'var data = new google.visualization.DataTable(' + v3132;
            const v3134 = v3133 + ');\nvar chart = new google.visualization.';
            const v3135 = v3134 + type;
            const v3136 = v3135 + '(element);\nchart.draw(data, ';
            const v3137 = JSON.stringify(options);
            const v3138 = v3136 + v3137;
            const v3139 = v3138 + ');';
            const v3140 = v3131.log(v3139);
            v3140;
        }
        const v3141 = this.library;
        const v3142 = v3141.visualization;
        const v3143 = chart.element;
        chart.chart = new v3142[type](v3143);
        const v3146 = function () {
            const v3144 = chart.chart;
            const v3145 = v3144.draw(data, options);
            v3145;
        };
        const v3147 = resize(v3146);
        v3147;
    };
    v3127.drawChart = drawChart;
    const v3148 = defaultExport$2.prototype;
    const waitForLoaded = function (chart, pack, callback) {
        var this$1 = this;
        const v3149 = !callback;
        if (v3149) {
            callback = pack;
            pack = 'corechart';
        }
        const v3150 = {
            pack: pack,
            callback: callback
        };
        const v3151 = callbacks.push(v3150);
        v3151;
        const v3152 = loaded[pack];
        if (v3152) {
            const v3153 = this.runCallbacks();
            v3153;
        } else {
            loaded[pack] = true;
            const v3154 = [pack];
            const v3156 = function () {
                const v3155 = this$1.runCallbacks();
                v3155;
            };
            var loadOptions = {};
            loadOptions.packages = v3154;
            loadOptions.callback = v3156;
            var config = chart.__config();
            const v3157 = config.language;
            if (v3157) {
                const v3158 = config.language;
                loadOptions.language = v3158;
            }
            const v3159 = pack === 'corechart';
            const v3160 = config.mapsApiKey;
            const v3161 = v3159 && v3160;
            if (v3161) {
                const v3162 = config.mapsApiKey;
                loadOptions.mapsApiKey = v3162;
            }
            const v3163 = this.library;
            const v3164 = v3163.charts;
            const v3165 = v3164.load('current', loadOptions);
            v3165;
        }
    };
    v3148.waitForLoaded = waitForLoaded;
    const v3166 = defaultExport$2.prototype;
    const runCallbacks = function () {
        var cb;
        var call;
        var i = 0;
        const v3167 = callbacks.length;
        let v3168 = i < v3167;
        while (v3168) {
            cb = callbacks[i];
            const v3170 = this.library;
            const v3171 = v3170.visualization;
            const v3172 = cb.pack;
            const v3173 = v3172 === 'corechart';
            const v3174 = this.library;
            const v3175 = v3174.visualization;
            const v3176 = v3175.LineChart;
            const v3177 = v3173 && v3176;
            const v3178 = cb.pack;
            const v3179 = v3178 === 'timeline';
            const v3180 = this.library;
            const v3181 = v3180.visualization;
            const v3182 = v3181.Timeline;
            const v3183 = v3179 && v3182;
            const v3184 = v3177 || v3183;
            call = v3171 && v3184;
            if (call) {
                const v3185 = cb.callback();
                v3185;
                const v3186 = callbacks.splice(i, 1);
                v3186;
                const v3187 = i--;
                v3187;
            }
            const v3169 = i++;
            v3168 = i < v3167;
        }
    };
    v3166.runCallbacks = runCallbacks;
    const v3188 = defaultExport$2.prototype;
    const createDataTable = function (series, columnType) {
        var i;
        var j;
        var s;
        var d;
        var key;
        var rows = [];
        var sortedLabels = [];
        (i = 0)
        const v3189 = series.length;
        let v3190 = i < v3189;
        while (v3190) {
            s = series[i];
            const v3192 = series[i];
            const v3193 = series[i];
            const v3194 = v3193.name;
            v3192.name = v3194 || 'Value';
            j = 0
            const v3195 = s.data;
            const v3196 = v3195.length;
            let v3197 = j < v3196;
            while (v3197) {
                const v3199 = s.data;
                d = v3199[j];
                const v3200 = columnType === 'datetime';
                const v3201 = d[0];
                const v3202 = v3201.getTime();
                const v3203 = d[0];
                if (v3200) {
                    key = v3202;
                } else {
                    key = v3203;
                }
                const v3204 = rows[key];
                const v3205 = !v3204;
                if (v3205) {
                    const v3206 = series.length;
                    rows[key] = new Array(v3206);
                    const v3207 = sortedLabels.push(key);
                    v3207;
                }
                const v3209 = d[1];
                const v3210 = toFloat(v3209);
                v3208[i] = v3210;
                const v3198 = j++;
                v3197 = j < v3196;
            }
            const v3191 = i++;
            v3190 = i < v3189;
        }
        var rows2 = [];
        var day = true;
        var value;
        (j = 0)
        const v3211 = sortedLabels.length;
        let v3212 = j < v3211;
        while (v3212) {
            i = sortedLabels[j];
            const v3214 = columnType === 'datetime';
            if (v3214) {
                const v3215 = toFloat(i);
                value = new Date(v3215);
                const v3216 = isDay(value);
                day = day && v3216;
            } else {
                const v3217 = columnType === 'number';
                if (v3217) {
                    value = toFloat(i);
                } else {
                    value = i;
                }
            }
            const v3218 = [value];
            const v3219 = rows[i];
            const v3220 = v3218.concat(v3219);
            const v3221 = rows2.push(v3220);
            v3221;
            const v3213 = j++;
            v3212 = j < v3211;
        }
        const v3222 = columnType === 'datetime';
        if (v3222) {
            const v3223 = rows2.sort(sortByTime);
            v3223;
        } else {
            const v3224 = columnType === 'number';
            if (v3224) {
                const v3225 = rows2.sort(sortByNumberSeries);
                v3225;
                i = 0
                const v3226 = rows2.length;
                let v3227 = i < v3226;
                while (v3227) {
                    const v3230 = rows2[i];
                    const v3231 = v3230[0];
                    const v3232 = toStr(v3231);
                    v3229[0] = v3232;
                    const v3228 = i++;
                    v3227 = i < v3226;
                }
                columnType = 'string';
            }
        }
        const v3233 = this.library;
        const v3234 = v3233.visualization;
        var data = new v3234.DataTable();
        const v3235 = columnType === 'datetime';
        const v3236 = v3235 && day;
        if (v3236) {
            columnType = 'date';
        } else {
            columnType = columnType;
        }
        const v3237 = data.addColumn(columnType, '');
        v3237;
        (i = 0)
        const v3238 = series.length;
        let v3239 = i < v3238;
        while (v3239) {
            const v3241 = series[i];
            const v3242 = v3241.name;
            const v3243 = data.addColumn('number', v3242);
            v3243;
            const v3240 = i++;
            v3239 = i < v3238;
        }
        const v3244 = data.addRows(rows2);
        v3244;
        return data;
    };
    v3188.createDataTable = createDataTable;
    var pendingRequests = [];
    var runningRequests = 0;
    var maxRequests = 4;
    const pushRequest = function (url, success, error) {
        const v3245 = [
            url,
            success,
            error
        ];
        const v3246 = pendingRequests.push(v3245);
        v3246;
        const v3247 = runNext();
        v3247;
    };
    const runNext = function () {
        const v3248 = runningRequests < maxRequests;
        if (v3248) {
            var request = pendingRequests.shift();
            if (request) {
                const v3249 = runningRequests++;
                v3249;
                const v3250 = request[0];
                const v3251 = request[1];
                const v3252 = request[2];
                const v3253 = getJSON(v3250, v3251, v3252);
                v3253;
                const v3254 = runNext();
                v3254;
            }
        }
    };
    const requestComplete = function () {
        const v3255 = runningRequests--;
        v3255;
        const v3256 = runNext();
        v3256;
    };
    const getJSON = function (url, success, error) {
        const v3261 = function (jqXHR, textStatus, errorThrown) {
            let message;
            const v3257 = typeof errorThrown;
            const v3258 = v3257 === 'string';
            const v3259 = errorThrown.message;
            if (v3258) {
                message = errorThrown;
            } else {
                message = v3259;
            }
            const v3260 = error(message);
            v3260;
        };
        const v3262 = ajaxCall(url, success, v3261);
        v3262;
    };
    const ajaxCall = function (url, success, error) {
        const v3263 = window.jQuery;
        const v3264 = window.Zepto;
        const v3265 = v3263 || v3264;
        const v3266 = window.$;
        var $ = v3265 || v3266;
        const v3267 = $.ajax;
        const v3268 = $ && v3267;
        if (v3268) {
            const v3269 = {
                dataType: 'json',
                url: url,
                success: success,
                error: error,
                complete: requestComplete
            };
            const v3270 = $.ajax(v3269);
            v3270;
        } else {
            var xhr = new XMLHttpRequest();
            const v3271 = xhr.open('GET', url, true);
            v3271;
            const v3272 = xhr.setRequestHeader('Content-Type', 'application/json');
            v3272;
            const v3282 = function () {
                const v3273 = requestComplete();
                v3273;
                const v3274 = xhr.status;
                const v3275 = v3274 === 200;
                if (v3275) {
                    const v3276 = xhr.responseText;
                    const v3277 = JSON.parse(v3276);
                    const v3278 = xhr.statusText;
                    const v3279 = success(v3277, v3278, xhr);
                    v3279;
                } else {
                    const v3280 = xhr.statusText;
                    const v3281 = error(xhr, 'error', v3280);
                    v3281;
                }
            };
            xhr.onload = v3282;
            const v3283 = xhr.send();
            v3283;
        }
    };
    var config = {};
    var adapters = [];
    const setText = function (element, text) {
        const v3284 = document.body;
        const v3285 = v3284.innerText;
        if (v3285) {
            element.innerText = text;
        } else {
            element.textContent = text;
        }
    };
    const chartError = function (element, message, noPrefix) {
        const v3286 = !noPrefix;
        if (v3286) {
            message = 'Error Loading Chart: ' + message;
        }
        const v3287 = setText(element, message);
        v3287;
        const v3288 = element.style;
        v3288.color = '#ff0000';
    };
    const errorCatcher = function (chart) {
        try {
            const v3289 = chart.__render();
            v3289;
        } catch (err) {
            const v3290 = chart.element;
            const v3291 = err.message;
            const v3292 = chartError(v3290, v3291);
            v3292;
            throw err;
        }
    };
    const fetchDataSource = function (chart, dataSource) {
        const v3293 = typeof dataSource;
        const v3294 = v3293 === 'string';
        if (v3294) {
            const v3296 = function (data) {
                chart.rawData = data;
                const v3295 = errorCatcher(chart);
                v3295;
            };
            const v3299 = function (message) {
                const v3297 = chart.element;
                const v3298 = chartError(v3297, message);
                v3298;
            };
            const v3300 = pushRequest(dataSource, v3296, v3299);
            v3300;
        } else {
            const v3301 = typeof dataSource;
            const v3302 = v3301 === 'function';
            if (v3302) {
                try {
                    const v3304 = function (data) {
                        chart.rawData = data;
                        const v3303 = errorCatcher(chart);
                        v3303;
                    };
                    const v3307 = function (message) {
                        const v3305 = chart.element;
                        const v3306 = chartError(v3305, message, true);
                        v3306;
                    };
                    const v3308 = dataSource(v3304, v3307);
                    v3308;
                } catch (err) {
                    const v3309 = chart.element;
                    const v3310 = chartError(v3309, err, true);
                    v3310;
                }
            } else {
                chart.rawData = dataSource;
                const v3311 = errorCatcher(chart);
                v3311;
            }
        }
    };
    const addDownloadButton = function (chart) {
        var element = chart.element;
        var link = document.createElement('a');
        const v3312 = chart.options;
        var download = v3312.download;
        const v3313 = download === true;
        if (v3313) {
            download = {};
        } else {
            const v3314 = typeof download;
            const v3315 = v3314 === 'string';
            if (v3315) {
                download.filename = download;
                download = {};
                download = {};
            }
        }
        const v3316 = download.filename;
        link.download = v3316 || 'chart.png';
        const v3317 = link.style;
        v3317.position = 'absolute';
        const v3318 = link.style;
        v3318.top = '20px';
        const v3319 = link.style;
        v3319.right = '20px';
        const v3320 = link.style;
        v3320.zIndex = 1000;
        const v3321 = link.style;
        v3321.lineHeight = '20px';
        link.target = '_blank';
        var image = document.createElement('img');
        image.alt = 'Download';
        const v3322 = image.style;
        v3322.border = 'none';
        image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABCFBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMywEsqxAAAAV3RSTlMAAQIDBggJCgsMDQ4PERQaHB0eISIjJCouLzE0OTo/QUJHSUpLTU5PUllhYmltcHh5foWLjI+SlaCio6atr7S1t7m6vsHHyM7R2tze5Obo7fHz9ff5+/1hlxK2AAAA30lEQVQYGUXBhVYCQQBA0TdYWAt2d3d3YWAHyur7/z9xgD16Lw0DW+XKx+1GgX+FRzM3HWQWrHl5N/oapW5RPe0PkBu+UYeICvozTWZVK23Ao04B79oJrOsJDOoxkZoQPWgX29pHpCZEk7rEvQYiNSFq1UMqvlCjJkRBS1R8hb00Vb/TajtBL7nTHE1X1vyMQF732dQhyF2o6SAwrzP06iUQzvwsArlnzcOdrgBhJyHa1QOgO9U1GsKuvjUTjavliZYQ8nNPapG6sap/3nrIdJ6bOWzmX/fy0XVpfzZP3S8OJT3g9EEiJwAAAABJRU5ErkJggg==';
        const v3323 = link.appendChild(image);
        v3323;
        const v3324 = element.style;
        v3324.position = 'relative';
        chart.__downloadAttached = true;
        const v3336 = function (e) {
            var related = e.relatedTarget;
            const v3325 = !related;
            const v3326 = related !== this;
            const v3327 = childOf(this, related);
            const v3328 = !v3327;
            const v3329 = v3326 && v3328;
            const v3330 = v3325 || v3329;
            const v3331 = chart.options;
            const v3332 = v3331.download;
            const v3333 = v3330 && v3332;
            if (v3333) {
                const v3334 = chart.toImage(download);
                link.href = v3334;
                const v3335 = element.appendChild(link);
                v3335;
            }
        };
        const v3337 = addEvent(element, 'mouseover', v3336);
        chart.__enterEvent = v3337;
        const v3347 = function (e) {
            var related = e.relatedTarget;
            const v3338 = !related;
            const v3339 = related !== this;
            const v3340 = childOf(this, related);
            const v3341 = !v3340;
            const v3342 = v3339 && v3341;
            const v3343 = v3338 || v3342;
            if (v3343) {
                const v3344 = link.parentNode;
                if (v3344) {
                    const v3345 = link.parentNode;
                    const v3346 = v3345.removeChild(link);
                    v3346;
                }
            }
        };
        const v3348 = addEvent(element, 'mouseout', v3347);
        chart.__leaveEvent = v3348;
    };
    const addEvent = function (elem, event, fn) {
        const v3349 = elem.addEventListener;
        if (v3349) {
            const v3350 = elem.addEventListener(event, fn, false);
            v3350;
            return fn;
        } else {
            var fn2 = function () {
                const v3351 = window.event;
                const v3352 = fn.call(elem, v3351);
                return v3352;
            };
            const v3353 = 'on' + event;
            const v3354 = elem.attachEvent(v3353, fn2);
            v3354;
            return fn2;
        }
    };
    const removeEvent = function (elem, event, fn) {
        const v3355 = elem.removeEventListener;
        if (v3355) {
            const v3356 = elem.removeEventListener(event, fn, false);
            v3356;
        } else {
            const v3357 = 'on' + event;
            const v3358 = elem.detachEvent(v3357, fn);
            v3358;
        }
    };
    const childOf = function (p, c) {
        const v3359 = p === c;
        if (v3359) {
            return false;
        }
        const v3360 = c !== p;
        let v3361 = c && v3360;
        while (v3361) {
            c = c.parentNode;
            v3361 = c && v3360;
        }
        const v3362 = c === p;
        return v3362;
    };
    const getAdapterType = function (library) {
        if (library) {
            const v3363 = library.product;
            const v3364 = v3363 === 'Highcharts';
            if (v3364) {
                return defaultExport$1;
            } else {
                const v3365 = library.charts;
                if (v3365) {
                    return defaultExport$2;
                } else {
                    const v3366 = isFunction(library);
                    if (v3366) {
                        return defaultExport;
                    }
                }
            }
        }
        const v3367 = new Error('Unknown adapter');
        throw v3367;
    };
    const addAdapter = function (library) {
        var adapterType = getAdapterType(library);
        var adapter = new adapterType(library);
        const v3368 = adapters.indexOf(adapter);
        const v3369 = -1;
        const v3370 = v3368 === v3369;
        if (v3370) {
            const v3371 = adapters.push(adapter);
            v3371;
        }
    };
    const loadAdapters = function () {
        const v3372 = 'Chart' in window;
        if (v3372) {
            const v3373 = window.Chart;
            const v3374 = addAdapter(v3373);
            v3374;
        }
        const v3375 = 'Highcharts' in window;
        if (v3375) {
            const v3376 = window.Highcharts;
            const v3377 = addAdapter(v3376);
            v3377;
        }
        const v3378 = window.google;
        const v3379 = window.google;
        const v3380 = v3379.charts;
        const v3381 = v3378 && v3380;
        if (v3381) {
            const v3382 = window.google;
            const v3383 = addAdapter(v3382);
            v3383;
        }
    };
    const dataEmpty = function (data, chartType) {
        const v3384 = chartType === 'PieChart';
        const v3385 = chartType === 'GeoChart';
        const v3386 = v3384 || v3385;
        const v3387 = chartType === 'Timeline';
        const v3388 = v3386 || v3387;
        if (v3388) {
            const v3389 = data.length;
            const v3390 = v3389 === 0;
            return v3390;
        } else {
            var i = 0;
            const v3391 = data.length;
            let v3392 = i < v3391;
            while (v3392) {
                const v3394 = data[i];
                const v3395 = v3394.data;
                const v3396 = v3395.length;
                const v3397 = v3396 > 0;
                if (v3397) {
                    return false;
                }
                const v3393 = i++;
                v3392 = i < v3391;
            }
            return true;
        }
    };
    const renderChart = function (chartType, chart) {
        const v3398 = chart.options;
        const v3399 = v3398.messages;
        const v3400 = chart.options;
        const v3401 = v3400.messages;
        const v3402 = v3401.empty;
        const v3403 = v3399 && v3402;
        const v3404 = chart.data;
        const v3405 = dataEmpty(v3404, chartType);
        const v3406 = v3403 && v3405;
        if (v3406) {
            const v3407 = chart.element;
            const v3408 = chart.options;
            const v3409 = v3408.messages;
            const v3410 = v3409.empty;
            const v3411 = setText(v3407, v3410);
            v3411;
        } else {
            const v3412 = callAdapter(chartType, chart);
            v3412;
            const v3413 = chart.options;
            const v3414 = v3413.download;
            const v3415 = chart.__downloadAttached;
            const v3416 = !v3415;
            const v3417 = v3414 && v3416;
            const v3418 = chart.adapter;
            const v3419 = v3418 === 'chartjs';
            const v3420 = v3417 && v3419;
            if (v3420) {
                const v3421 = addDownloadButton(chart);
                v3421;
            }
        }
    };
    const callAdapter = function (chartType, chart) {
        var i;
        var adapter;
        var fnName;
        var adapterName;
        fnName = 'render' + chartType;
        const v3422 = chart.options;
        adapterName = v3422.adapter;
        const v3423 = loadAdapters();
        v3423;
        (i = 0)
        const v3424 = adapters.length;
        let v3425 = i < v3424;
        while (v3425) {
            adapter = adapters[i];
            const v3427 = !adapterName;
            const v3428 = adapter.name;
            const v3429 = adapterName === v3428;
            const v3430 = v3427 || v3429;
            const v3431 = adapter[fnName];
            const v3432 = isFunction(v3431);
            const v3433 = v3430 && v3432;
            if (v3433) {
                const v3434 = adapter.name;
                chart.adapter = v3434;
                chart.__adapterObject = adapter;
                const v3435 = adapter[fnName](chart);
                return v3435;
            }
            const v3426 = i++;
            v3425 = i < v3424;
        }
        const v3436 = adapters.length;
        const v3437 = v3436 > 0;
        if (v3437) {
            const v3438 = 'No charting library found for ' + chartType;
            const v3439 = new Error(v3438);
            throw v3439;
        } else {
            const v3440 = new Error('No charting libraries found - be sure to include one before your charts');
            throw v3440;
        }
    };
    var toFormattedKey = function (key, keyType) {
        const v3441 = keyType === 'number';
        if (v3441) {
            key = toFloat(key);
        } else {
            const v3442 = keyType === 'datetime';
            if (v3442) {
                key = toDate(key);
            } else {
                key = toStr(key);
            }
        }
        return key;
    };
    var formatSeriesData = function (data, keyType) {
        var r = [];
        var key;
        var j;
        (j = 0)
        const v3443 = data.length;
        let v3444 = j < v3443;
        while (v3444) {
            const v3446 = keyType === 'bubble';
            if (v3446) {
                const v3447 = data[j];
                const v3448 = v3447[0];
                const v3449 = toFloat(v3448);
                const v3450 = data[j];
                const v3451 = v3450[1];
                const v3452 = toFloat(v3451);
                const v3453 = data[j];
                const v3454 = v3453[2];
                const v3455 = toFloat(v3454);
                const v3456 = [
                    v3449,
                    v3452,
                    v3455
                ];
                const v3457 = r.push(v3456);
                v3457;
            } else {
                const v3458 = data[j];
                const v3459 = v3458[0];
                key = toFormattedKey(v3459, keyType);
                const v3460 = data[j];
                const v3461 = v3460[1];
                const v3462 = toFloat(v3461);
                const v3463 = [
                    key,
                    v3462
                ];
                const v3464 = r.push(v3463);
                v3464;
            }
            const v3445 = j++;
            v3444 = j < v3443;
        }
        const v3465 = keyType === 'datetime';
        if (v3465) {
            const v3466 = r.sort(sortByTime);
            v3466;
        } else {
            const v3467 = keyType === 'number';
            if (v3467) {
                const v3468 = r.sort(sortByNumberSeries);
                v3468;
            }
        }
        return r;
    };
    const detectXType = function (series, noDatetime) {
        const v3469 = detectXTypeWithFunction(series, isNumber);
        if (v3469) {
            return 'number';
        } else {
            const v3470 = !noDatetime;
            const v3471 = detectXTypeWithFunction(series, isDate);
            const v3472 = v3470 && v3471;
            if (v3472) {
                return 'datetime';
            } else {
                return 'string';
            }
        }
    };
    const detectXTypeWithFunction = function (series, func) {
        var i;
        var j;
        var data;
        (i = 0)
        const v3473 = series.length;
        let v3474 = i < v3473;
        while (v3474) {
            const v3476 = series[i];
            const v3477 = v3476.data;
            data = toArr(v3477);
            j = 0
            const v3478 = data.length;
            let v3479 = j < v3478;
            while (v3479) {
                const v3481 = data[j];
                const v3482 = v3481[0];
                const v3483 = func(v3482);
                const v3484 = !v3483;
                if (v3484) {
                    return false;
                }
                const v3480 = j++;
                v3479 = j < v3478;
            }
            const v3475 = i++;
            v3474 = i < v3473;
        }
        return true;
    };
    const copySeries = function (series) {
        var newSeries = [];
        var i;
        var j;
        (i = 0)
        const v3485 = series.length;
        let v3486 = i < v3485;
        while (v3486) {
            var copy = {};
            const v3488 = series[i];
            for (j in v3488) {
                const v3489 = series[i];
                const v3490 = v3489.hasOwnProperty(j);
                if (v3490) {
                    const v3491 = series[i];
                    const v3492 = v3491[j];
                    copy[j] = v3492;
                }
            }
            const v3493 = newSeries.push(copy);
            v3493;
            const v3487 = i++;
            v3486 = i < v3485;
        }
        return newSeries;
    };
    const processSeries = function (chart, keyType, noDatetime) {
        var i;
        var opts = chart.options;
        var series = chart.rawData;
        const v3494 = isArray(series);
        const v3495 = !v3494;
        const v3496 = series[0];
        const v3497 = typeof v3496;
        const v3498 = v3497 !== 'object';
        const v3499 = v3495 || v3498;
        const v3500 = series[0];
        const v3501 = isArray(v3500);
        const v3502 = v3499 || v3501;
        if (v3502) {
            const v3503 = opts.label;
            const v3504 = {
                name: v3503,
                data: series
            };
            series = [v3504];
            chart.hideLegend = true;
        } else {
            chart.hideLegend = false;
        }
        const v3505 = opts.discrete;
        const v3506 = detectXType(series, noDatetime);
        let v3507;
        if (v3505) {
            v3507 = 'string';
        } else {
            v3507 = v3506;
        }
        let v3508;
        if (keyType) {
            v3508 = keyType;
        } else {
            v3508 = v3507;
        }
        chart.xtype = v3508;
        series = copySeries(series);
        (i = 0)
        const v3509 = series.length;
        let v3510 = i < v3509;
        while (v3510) {
            const v3513 = series[i];
            const v3514 = v3513.data;
            const v3515 = toArr(v3514);
            const v3516 = chart.xtype;
            const v3517 = formatSeriesData(v3515, v3516);
            v3512.data = v3517;
            const v3511 = i++;
            v3510 = i < v3509;
        }
        return series;
    };
    const processSimple = function (chart) {
        const v3518 = chart.rawData;
        var perfectData = toArr(v3518);
        var i;
        (i = 0)
        const v3519 = perfectData.length;
        let v3520 = i < v3519;
        while (v3520) {
            const v3522 = perfectData[i];
            const v3523 = v3522[0];
            const v3524 = toStr(v3523);
            const v3525 = perfectData[i];
            const v3526 = v3525[1];
            const v3527 = toFloat(v3526);
            perfectData[i] = [
                v3524,
                v3527
            ];
            const v3521 = i++;
            v3520 = i < v3519;
        }
        return perfectData;
    };
    var Chart = function Chart(element, dataSource, options) {
        var elementId;
        const v3528 = typeof element;
        const v3529 = v3528 === 'string';
        if (v3529) {
            elementId = element;
            element = document.getElementById(element);
            const v3530 = !element;
            if (v3530) {
                const v3531 = 'No element with id ' + elementId;
                const v3532 = new Error(v3531);
                throw v3532;
            }
        }
        this.element = element;
        const v3533 = Chartkick.options;
        const v3534 = {};
        const v3535 = options || v3534;
        const v3536 = merge(v3533, v3535);
        this.options = v3536;
        this.dataSource = dataSource;
        const v3537 = Chartkick.charts;
        const v3538 = element.id;
        v3537[v3538] = this;
        const v3539 = fetchDataSource(this, dataSource);
        v3539;
        const v3540 = this.options;
        const v3541 = v3540.refresh;
        if (v3541) {
            const v3542 = this.startRefresh();
            v3542;
        }
    };
    const v3543 = Chart.prototype;
    const getElement = function () {
        const v3544 = this.element;
        return v3544;
    };
    v3543.getElement = getElement;
    const v3545 = Chart.prototype;
    const getDataSource = function () {
        const v3546 = this.dataSource;
        return v3546;
    };
    v3545.getDataSource = getDataSource;
    const v3547 = Chart.prototype;
    const getData = function () {
        const v3548 = this.data;
        return v3548;
    };
    v3547.getData = getData;
    const v3549 = Chart.prototype;
    const getOptions = function () {
        const v3550 = this.options;
        return v3550;
    };
    v3549.getOptions = getOptions;
    const v3551 = Chart.prototype;
    const getChartObject = function () {
        const v3552 = this.chart;
        return v3552;
    };
    v3551.getChartObject = getChartObject;
    const v3553 = Chart.prototype;
    const getAdapter = function () {
        const v3554 = this.adapter;
        return v3554;
    };
    v3553.getAdapter = getAdapter;
    const v3555 = Chart.prototype;
    const updateData = function (dataSource, options) {
        this.dataSource = dataSource;
        if (options) {
            const v3556 = this.__updateOptions(options);
            v3556;
        }
        const v3557 = fetchDataSource(this, dataSource);
        v3557;
    };
    v3555.updateData = updateData;
    const v3558 = Chart.prototype;
    const setOptions = function (options) {
        const v3559 = this.__updateOptions(options);
        v3559;
        const v3560 = this.redraw();
        v3560;
    };
    v3558.setOptions = setOptions;
    const v3561 = Chart.prototype;
    const redraw = function () {
        const v3562 = this.rawData;
        const v3563 = fetchDataSource(this, v3562);
        v3563;
    };
    v3561.redraw = redraw;
    const v3564 = Chart.prototype;
    const refreshData = function () {
        const v3565 = this.dataSource;
        const v3566 = typeof v3565;
        const v3567 = v3566 === 'string';
        if (v3567) {
            let sep;
            const v3568 = this.dataSource;
            const v3569 = v3568.indexOf('?');
            const v3570 = -1;
            const v3571 = v3569 === v3570;
            if (v3571) {
                sep = '?';
            } else {
                sep = '&';
            }
            const v3572 = this.dataSource;
            const v3573 = v3572 + sep;
            const v3574 = v3573 + '_=';
            const v3575 = new Date();
            const v3576 = v3575.getTime();
            var url = v3574 + v3576;
            const v3577 = fetchDataSource(this, url);
            v3577;
        } else {
            const v3578 = this.dataSource;
            const v3579 = typeof v3578;
            const v3580 = v3579 === 'function';
            if (v3580) {
                const v3581 = this.dataSource;
                const v3582 = fetchDataSource(this, v3581);
                v3582;
            }
        }
    };
    v3564.refreshData = refreshData;
    const v3583 = Chart.prototype;
    const startRefresh = function () {
        var this$1 = this;
        const v3584 = this.options;
        var refresh = v3584.refresh;
        const v3585 = this.dataSource;
        const v3586 = typeof v3585;
        const v3587 = v3586 !== 'string';
        const v3588 = refresh && v3587;
        const v3589 = this.dataSource;
        const v3590 = typeof v3589;
        const v3591 = v3590 !== 'function';
        const v3592 = v3588 && v3591;
        if (v3592) {
            const v3593 = new Error('Data source must be a URL or callback for refresh');
            throw v3593;
        }
        const v3594 = this.intervalId;
        const v3595 = !v3594;
        if (v3595) {
            if (refresh) {
                const v3597 = function () {
                    const v3596 = this$1.refreshData();
                    v3596;
                };
                const v3598 = refresh * 1000;
                const v3599 = setInterval(v3597, v3598);
                this.intervalId = v3599;
            } else {
                const v3600 = new Error('No refresh interval');
                throw v3600;
            }
        }
    };
    v3583.startRefresh = startRefresh;
    const v3601 = Chart.prototype;
    const stopRefresh = function () {
        const v3602 = this.intervalId;
        if (v3602) {
            const v3603 = this.intervalId;
            const v3604 = clearInterval(v3603);
            v3604;
            this.intervalId = null;
        }
    };
    v3601.stopRefresh = stopRefresh;
    const v3605 = Chart.prototype;
    const toImage = function (download) {
        const v3606 = this.adapter;
        const v3607 = v3606 === 'chartjs';
        if (v3607) {
            const v3608 = download.background;
            const v3609 = download && v3608;
            const v3610 = download.background;
            const v3611 = v3610 !== 'transparent';
            const v3612 = v3609 && v3611;
            if (v3612) {
                const v3613 = this.chart;
                const v3614 = v3613.chart;
                var canvas = v3614.canvas;
                const v3615 = this.chart;
                const v3616 = v3615.chart;
                var ctx = v3616.ctx;
                var tmpCanvas = document.createElement('canvas');
                var tmpCtx = tmpCanvas.getContext('2d');
                const v3617 = ctx.canvas;
                const v3618 = v3617.width;
                tmpCanvas.width = v3618;
                const v3619 = ctx.canvas;
                const v3620 = v3619.height;
                tmpCanvas.height = v3620;
                const v3621 = download.background;
                tmpCtx.fillStyle = v3621;
                const v3622 = tmpCanvas.width;
                const v3623 = tmpCanvas.height;
                const v3624 = tmpCtx.fillRect(0, 0, v3622, v3623);
                v3624;
                const v3625 = tmpCtx.drawImage(canvas, 0, 0);
                v3625;
                const v3626 = tmpCanvas.toDataURL('image/png');
                return v3626;
            } else {
                const v3627 = this.chart;
                const v3628 = v3627.toBase64Image();
                return v3628;
            }
        } else {
            return null;
        }
    };
    v3605.toImage = toImage;
    const v3629 = Chart.prototype;
    const destroy = function () {
        const v3630 = this.__adapterObject;
        if (v3630) {
            const v3631 = this.__adapterObject;
            const v3632 = v3631.destroy(this);
            v3632;
        }
        const v3633 = this.__enterEvent;
        if (v3633) {
            const v3634 = this.element;
            const v3635 = this.__enterEvent;
            const v3636 = removeEvent(v3634, 'mouseover', v3635);
            v3636;
        }
        const v3637 = this.__leaveEvent;
        if (v3637) {
            const v3638 = this.element;
            const v3639 = this.__leaveEvent;
            const v3640 = removeEvent(v3638, 'mouseout', v3639);
            v3640;
        }
    };
    v3629.destroy = destroy;
    const v3641 = Chart.prototype;
    const __updateOptions = function (options) {
        const v3642 = options.refresh;
        const v3643 = options.refresh;
        const v3644 = this.options;
        const v3645 = v3644.refresh;
        const v3646 = v3643 !== v3645;
        var updateRefresh = v3642 && v3646;
        const v3647 = Chartkick.options;
        const v3648 = merge(v3647, options);
        this.options = v3648;
        if (updateRefresh) {
            const v3649 = this.stopRefresh();
            v3649;
            const v3650 = this.startRefresh();
            v3650;
        }
    };
    v3641.__updateOptions = __updateOptions;
    const v3651 = Chart.prototype;
    const __render = function () {
        const v3652 = this.__processData();
        this.data = v3652;
        const v3653 = this.__chartName();
        const v3654 = renderChart(v3653, this);
        v3654;
    };
    v3651.__render = __render;
    const v3655 = Chart.prototype;
    const __config = function () {
        return config;
    };
    v3655.__config = __config;
    const v3664 = function (Chart) {
        const LineChart = function () {
            const v3656 = Chart.apply(this, arguments);
            v3656;
        };
        if (Chart) {
            LineChart.__proto__ = Chart;
        }
        const v3657 = Chart.prototype;
        const v3658 = Chart && v3657;
        const v3659 = Object.create(v3658);
        LineChart.prototype = v3659;
        const v3660 = LineChart.prototype;
        v3660.constructor = LineChart;
        const v3661 = LineChart.prototype;
        const __processData = function () {
            const v3662 = processSeries(this);
            return v3662;
        };
        v3661.__processData = __processData;
        const v3663 = LineChart.prototype;
        const __chartName = function () {
            return 'LineChart';
        };
        v3663.__chartName = __chartName;
        return LineChart;
    };
    var LineChart = v3664(Chart);
    const v3673 = function (Chart) {
        const PieChart = function () {
            const v3665 = Chart.apply(this, arguments);
            v3665;
        };
        if (Chart) {
            PieChart.__proto__ = Chart;
        }
        const v3666 = Chart.prototype;
        const v3667 = Chart && v3666;
        const v3668 = Object.create(v3667);
        PieChart.prototype = v3668;
        const v3669 = PieChart.prototype;
        v3669.constructor = PieChart;
        const v3670 = PieChart.prototype;
        const __processData = function () {
            const v3671 = processSimple(this);
            return v3671;
        };
        v3670.__processData = __processData;
        const v3672 = PieChart.prototype;
        const __chartName = function () {
            return 'PieChart';
        };
        v3672.__chartName = __chartName;
        return PieChart;
    };
    var PieChart = v3673(Chart);
    const v3682 = function (Chart) {
        const ColumnChart = function () {
            const v3674 = Chart.apply(this, arguments);
            v3674;
        };
        if (Chart) {
            ColumnChart.__proto__ = Chart;
        }
        const v3675 = Chart.prototype;
        const v3676 = Chart && v3675;
        const v3677 = Object.create(v3676);
        ColumnChart.prototype = v3677;
        const v3678 = ColumnChart.prototype;
        v3678.constructor = ColumnChart;
        const v3679 = ColumnChart.prototype;
        const __processData = function () {
            const v3680 = processSeries(this, null, true);
            return v3680;
        };
        v3679.__processData = __processData;
        const v3681 = ColumnChart.prototype;
        const __chartName = function () {
            return 'ColumnChart';
        };
        v3681.__chartName = __chartName;
        return ColumnChart;
    };
    var ColumnChart = v3682(Chart);
    const v3691 = function (Chart) {
        const BarChart = function () {
            const v3683 = Chart.apply(this, arguments);
            v3683;
        };
        if (Chart) {
            BarChart.__proto__ = Chart;
        }
        const v3684 = Chart.prototype;
        const v3685 = Chart && v3684;
        const v3686 = Object.create(v3685);
        BarChart.prototype = v3686;
        const v3687 = BarChart.prototype;
        v3687.constructor = BarChart;
        const v3688 = BarChart.prototype;
        const __processData = function () {
            const v3689 = processSeries(this, null, true);
            return v3689;
        };
        v3688.__processData = __processData;
        const v3690 = BarChart.prototype;
        const __chartName = function () {
            return 'BarChart';
        };
        v3690.__chartName = __chartName;
        return BarChart;
    };
    var BarChart = v3691(Chart);
    const v3700 = function (Chart) {
        const AreaChart = function () {
            const v3692 = Chart.apply(this, arguments);
            v3692;
        };
        if (Chart) {
            AreaChart.__proto__ = Chart;
        }
        const v3693 = Chart.prototype;
        const v3694 = Chart && v3693;
        const v3695 = Object.create(v3694);
        AreaChart.prototype = v3695;
        const v3696 = AreaChart.prototype;
        v3696.constructor = AreaChart;
        const v3697 = AreaChart.prototype;
        const __processData = function () {
            const v3698 = processSeries(this);
            return v3698;
        };
        v3697.__processData = __processData;
        const v3699 = AreaChart.prototype;
        const __chartName = function () {
            return 'AreaChart';
        };
        v3699.__chartName = __chartName;
        return AreaChart;
    };
    var AreaChart = v3700(Chart);
    const v3709 = function (Chart) {
        const GeoChart = function () {
            const v3701 = Chart.apply(this, arguments);
            v3701;
        };
        if (Chart) {
            GeoChart.__proto__ = Chart;
        }
        const v3702 = Chart.prototype;
        const v3703 = Chart && v3702;
        const v3704 = Object.create(v3703);
        GeoChart.prototype = v3704;
        const v3705 = GeoChart.prototype;
        v3705.constructor = GeoChart;
        const v3706 = GeoChart.prototype;
        const __processData = function () {
            const v3707 = processSimple(this);
            return v3707;
        };
        v3706.__processData = __processData;
        const v3708 = GeoChart.prototype;
        const __chartName = function () {
            return 'GeoChart';
        };
        v3708.__chartName = __chartName;
        return GeoChart;
    };
    var GeoChart = v3709(Chart);
    const v3718 = function (Chart) {
        const ScatterChart = function () {
            const v3710 = Chart.apply(this, arguments);
            v3710;
        };
        if (Chart) {
            ScatterChart.__proto__ = Chart;
        }
        const v3711 = Chart.prototype;
        const v3712 = Chart && v3711;
        const v3713 = Object.create(v3712);
        ScatterChart.prototype = v3713;
        const v3714 = ScatterChart.prototype;
        v3714.constructor = ScatterChart;
        const v3715 = ScatterChart.prototype;
        const __processData = function () {
            const v3716 = processSeries(this, 'number');
            return v3716;
        };
        v3715.__processData = __processData;
        const v3717 = ScatterChart.prototype;
        const __chartName = function () {
            return 'ScatterChart';
        };
        v3717.__chartName = __chartName;
        return ScatterChart;
    };
    var ScatterChart = v3718(Chart);
    const v3727 = function (Chart) {
        const BubbleChart = function () {
            const v3719 = Chart.apply(this, arguments);
            v3719;
        };
        if (Chart) {
            BubbleChart.__proto__ = Chart;
        }
        const v3720 = Chart.prototype;
        const v3721 = Chart && v3720;
        const v3722 = Object.create(v3721);
        BubbleChart.prototype = v3722;
        const v3723 = BubbleChart.prototype;
        v3723.constructor = BubbleChart;
        const v3724 = BubbleChart.prototype;
        const __processData = function () {
            const v3725 = processSeries(this, 'bubble');
            return v3725;
        };
        v3724.__processData = __processData;
        const v3726 = BubbleChart.prototype;
        const __chartName = function () {
            return 'BubbleChart';
        };
        v3726.__chartName = __chartName;
        return BubbleChart;
    };
    var BubbleChart = v3727(Chart);
    const v3746 = function (Chart) {
        const Timeline = function () {
            const v3728 = Chart.apply(this, arguments);
            v3728;
        };
        if (Chart) {
            Timeline.__proto__ = Chart;
        }
        const v3729 = Chart.prototype;
        const v3730 = Chart && v3729;
        const v3731 = Object.create(v3730);
        Timeline.prototype = v3731;
        const v3732 = Timeline.prototype;
        v3732.constructor = Timeline;
        const v3733 = Timeline.prototype;
        const __processData = function () {
            var i;
            var data = this.rawData;
            (i = 0)
            const v3734 = data.length;
            let v3735 = i < v3734;
            while (v3735) {
                const v3738 = data[i];
                const v3739 = v3738[1];
                const v3740 = toDate(v3739);
                v3737[1] = v3740;
                const v3742 = data[i];
                const v3743 = v3742[2];
                const v3744 = toDate(v3743);
                v3741[2] = v3744;
                const v3736 = i++;
                v3735 = i < v3734;
            }
            return data;
        };
        v3733.__processData = __processData;
        const v3745 = Timeline.prototype;
        const __chartName = function () {
            return 'Timeline';
        };
        v3745.__chartName = __chartName;
        return Timeline;
    };
    var Timeline = v3746(Chart);
    const v3747 = {};
    const v3750 = function (options) {
        let key;
        for (key in options) {
            const v3748 = options.hasOwnProperty(key);
            if (v3748) {
                const v3749 = options[key];
                config[key] = v3749;
            }
        }
    };
    const v3751 = function (opts) {
        Chartkick.options = opts;
    };
    const v3758 = function (callback) {
        let chartId;
        const v3752 = Chartkick.charts;
        for (chartId in v3752) {
            const v3753 = Chartkick.charts;
            const v3754 = v3753.hasOwnProperty(chartId);
            if (v3754) {
                const v3755 = Chartkick.charts;
                const v3756 = v3755[chartId];
                const v3757 = callback(v3756);
                v3757;
            }
        }
    };
    const v3759 = {};
    const v3761 = function (adapter) {
        const v3760 = addAdapter(adapter);
        v3760;
        return Chartkick;
    };
    var Chartkick = {};
    Chartkick.LineChart = LineChart;
    Chartkick.PieChart = PieChart;
    Chartkick.ColumnChart = ColumnChart;
    Chartkick.BarChart = BarChart;
    Chartkick.AreaChart = AreaChart;
    Chartkick.GeoChart = GeoChart;
    Chartkick.ScatterChart = ScatterChart;
    Chartkick.BubbleChart = BubbleChart;
    Chartkick.Timeline = Timeline;
    Chartkick.charts = v3747;
    Chartkick.configure = v3750;
    Chartkick.setDefaultOptions = v3751;
    Chartkick.eachChart = v3758;
    Chartkick.config = config;
    Chartkick.options = v3759;
    Chartkick.adapters = adapters;
    Chartkick.addAdapter = addAdapter;
    Chartkick.use = v3761;
    const v3762 = typeof window;
    const v3763 = v3762 !== 'undefined';
    const v3764 = window.Chartkick;
    const v3765 = !v3764;
    const v3766 = v3763 && v3765;
    if (v3766) {
        window.Chartkick = Chartkick;
    }
    Chartkick.default = Chartkick;
    return Chartkick;
};
const v3768 = v1899(this, v3767);
v3768;