const v3227 = function () {
    const Vnode = function (tag, key, attrs0, children, text, dom) {
        const v1615 = {};
        const v1616 = {};
        v1616.tag = tag;
        v1616.key = key;
        v1616.attrs = attrs0;
        v1616.children = children;
        v1616.text = text;
        v1616.dom = dom;
        v1616.domSize = undefined;
        v1616.state = v1615;
        v1616.events = undefined;
        v1616.instance = undefined;
        v1616.skip = false;
        return v1616;
    };
    const v1627 = function (node) {
        const v1617 = Array.isArray(node);
        if (v1617) {
            const v1618 = Vnode.normalizeChildren(node);
            const v1619 = Vnode('[', undefined, undefined, v1618, undefined, undefined);
            return v1619;
        }
        const v1620 = node != null;
        const v1621 = typeof node;
        const v1622 = v1621 !== 'object';
        const v1623 = v1620 && v1622;
        if (v1623) {
            const v1624 = node === false;
            let v1625;
            if (v1624) {
                v1625 = '';
            } else {
                v1625 = node;
            }
            const v1626 = Vnode('#', undefined, undefined, v1625, undefined, undefined);
            return v1626;
        }
        return node;
    };
    Vnode.normalize = v1627;
    const normalizeChildren = function (children) {
        var i = 0;
        const v1628 = children.length;
        let v1629 = i < v1628;
        while (v1629) {
            const v1631 = children[i];
            const v1632 = Vnode.normalize(v1631);
            children[i] = v1632;
            const v1630 = i++;
            v1629 = i < v1628;
        }
        return children;
    };
    Vnode.normalizeChildren = normalizeChildren;
    var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g;
    var selectorCache = {};
    const hyperscript = function (selector) {
        const v1633 = selector == null;
        const v1634 = typeof selector;
        const v1635 = v1634 !== 'string';
        const v1636 = selector.view;
        const v1637 = typeof v1636;
        const v1638 = v1637 !== 'function';
        const v1639 = v1635 && v1638;
        const v1640 = v1633 || v1639;
        if (v1640) {
            const v1641 = Error('The selector must be either a string or a component.');
            throw v1641;
        }
        const v1642 = typeof selector;
        const v1643 = v1642 === 'string';
        const v1644 = selectorCache[selector];
        const v1645 = v1644 === undefined;
        const v1646 = v1643 && v1645;
        if (v1646) {
            var match;
            var tag;
            var classes = [];
            var attributes = {};
            while (match = selectorParser.exec(selector)) {
                var type = match[1];
                var value = match[2];
                const v1647 = type === '';
                const v1648 = value !== '';
                const v1649 = v1647 && v1648;
                if (v1649) {
                    tag = value;
                } else {
                    const v1650 = type === '#';
                    if (v1650) {
                        attributes.id = value;
                    } else {
                        const v1651 = type === '.';
                        if (v1651) {
                            const v1652 = classes.push(value);
                            v1652;
                        } else {
                            const v1653 = match[3];
                            const v1654 = v1653[0];
                            const v1655 = v1654 === '[';
                            if (v1655) {
                                var attrValue = match[6];
                                if (attrValue) {
                                    const v1656 = attrValue.replace(/\\(["'])/g, '$1');
                                    attrValue = v1656.replace(/\\\\/g, '\\');
                                }
                                const v1657 = match[4];
                                const v1658 = v1657 === 'class';
                                if (v1658) {
                                    const v1659 = classes.push(attrValue);
                                    v1659;
                                } else {
                                    const v1660 = match[4];
                                    attributes[v1660] = attrValue || true;
                                }
                            }
                        }
                    }
                }
            }
            const v1661 = classes.length;
            const v1662 = v1661 > 0;
            if (v1662) {
                const v1663 = classes.join(' ');
                attributes.className = v1663;
            }
            const v1691 = function (attrs, children) {
                var hasAttrs = false;
                var childList;
                var text;
                const v1664 = attrs.className;
                const v1665 = attrs.class;
                var className = v1664 || v1665;
                let key;
                for (key in attributes) {
                    const v1666 = attributes[key];
                    attrs[key] = v1666;
                }
                const v1667 = className !== undefined;
                if (v1667) {
                    const v1668 = attrs.class;
                    const v1669 = v1668 !== undefined;
                    if (v1669) {
                        attrs.class = undefined;
                        attrs.className = className;
                    }
                    const v1670 = attributes.className;
                    const v1671 = v1670 !== undefined;
                    if (v1671) {
                        const v1672 = attributes.className;
                        const v1673 = v1672 + ' ';
                        attrs.className = v1673 + className;
                    }
                }
                let key;
                for (key in attrs) {
                    const v1674 = key !== 'key';
                    if (v1674) {
                        hasAttrs = true;
                        break;
                    }
                }
                const v1675 = Array.isArray(children);
                const v1676 = children.length;
                const v1677 = v1676 == 1;
                const v1678 = v1675 && v1677;
                const v1679 = children[0];
                const v1680 = v1679 != null;
                const v1681 = v1678 && v1680;
                const v1682 = children[0];
                const v1683 = v1682.tag;
                const v1684 = v1683 === '#';
                const v1685 = v1681 && v1684;
                if (v1685) {
                    const v1686 = children[0];
                    text = v1686.children;
                } else {
                    childList = children;
                }
                const v1687 = tag || 'div';
                const v1688 = attrs.key;
                let v1689;
                if (hasAttrs) {
                    v1689 = attrs;
                } else {
                    v1689 = undefined;
                }
                const v1690 = Vnode(v1687, v1688, v1689, childList, text, undefined);
                return v1690;
            };
            selectorCache[selector] = v1691;
        }
        var attrs;
        var children;
        var childrenIndex;
        const v1692 = arguments[1];
        const v1693 = v1692 == null;
        const v1694 = arguments[1];
        const v1695 = typeof v1694;
        const v1696 = v1695 === 'object';
        const v1697 = arguments[1];
        const v1698 = v1697.tag;
        const v1699 = v1698 === undefined;
        const v1700 = v1696 && v1699;
        const v1701 = arguments[1];
        const v1702 = Array.isArray(v1701);
        const v1703 = !v1702;
        const v1704 = v1700 && v1703;
        const v1705 = v1693 || v1704;
        if (v1705) {
            attrs = arguments[1];
            childrenIndex = 2;
        } else {
            childrenIndex = 1;
        }
        const v1706 = arguments.length;
        const v1707 = childrenIndex + 1;
        const v1708 = v1706 === v1707;
        if (v1708) {
            const v1709 = arguments[childrenIndex];
            const v1710 = Array.isArray(v1709);
            const v1711 = arguments[childrenIndex];
            const v1712 = arguments[childrenIndex];
            const v1713 = [v1712];
            if (v1710) {
                children = v1711;
            } else {
                children = v1713;
            }
        } else {
            children = [];
            var i = childrenIndex;
            const v1714 = arguments.length;
            let v1715 = i < v1714;
            while (v1715) {
                const v1717 = arguments[i];
                const v1718 = children.push(v1717);
                v1718;
                const v1716 = i++;
                v1715 = i < v1714;
            }
        }
        const v1719 = typeof selector;
        const v1720 = v1719 === 'string';
        if (v1720) {
            const v1721 = {};
            const v1722 = attrs || v1721;
            const v1723 = Vnode.normalizeChildren(children);
            const v1724 = selectorCache[selector](v1722, v1723);
            return v1724;
        }
        const v1725 = attrs.key;
        const v1726 = attrs && v1725;
        const v1727 = {};
        const v1728 = attrs || v1727;
        const v1729 = Vnode.normalizeChildren(children);
        const v1730 = Vnode(selector, v1726, v1728, v1729, undefined, undefined);
        return v1730;
    };
    const v1733 = function (html) {
        const v1731 = html == null;
        if (v1731) {
            html = '';
        }
        const v1732 = Vnode('<', undefined, undefined, html, undefined, undefined);
        return v1732;
    };
    hyperscript.trust = v1733;
    const v1737 = function (attrs1, children) {
        const v1734 = attrs1.key;
        const v1735 = Vnode.normalizeChildren(children);
        const v1736 = Vnode('[', v1734, attrs1, v1735, undefined, undefined);
        return v1736;
    };
    hyperscript.fragment = v1737;
    var m = hyperscript;
    var PromisePolyfill = function (executor) {
        const v1738 = this instanceof PromisePolyfill;
        const v1739 = !v1738;
        if (v1739) {
            const v1740 = new Error('Promise must be called with `new`');
            throw v1740;
        }
        const v1741 = typeof executor;
        const v1742 = v1741 !== 'function';
        if (v1742) {
            const v1743 = new TypeError('executor must be a function');
            throw v1743;
        }
        var self = this;
        var resolvers = [];
        var rejectors = [];
        var resolveCurrent = handler(resolvers, true);
        var rejectCurrent = handler(rejectors, false);
        const v1744 = {};
        v1744.resolvers = resolvers;
        v1744.rejectors = rejectors;
        self._instance = v1744;
        var instance = self._instance;
        let callAsync;
        const v1745 = typeof setImmediate;
        const v1746 = v1745 === 'function';
        if (v1746) {
            callAsync = setImmediate;
        } else {
            callAsync = setTimeout;
        }
        const handler = function (list, shouldAbsorb) {
            const v1776 = function execute(value) {
                var then;
                try {
                    const v1747 = value != null;
                    const v1748 = shouldAbsorb && v1747;
                    const v1749 = typeof value;
                    const v1750 = v1749 === 'object';
                    const v1751 = typeof value;
                    const v1752 = v1751 === 'function';
                    const v1753 = v1750 || v1752;
                    const v1754 = v1748 && v1753;
                    const v1755 = typeof (then = value.then);
                    const v1756 = v1755 === 'function';
                    const v1757 = v1754 && v1756;
                    if (v1757) {
                        const v1758 = value === self;
                        if (v1758) {
                            const v1759 = new TypeError('Promise can\'t be resolved w/ itself');
                            throw v1759;
                        }
                        const v1760 = then.bind(value);
                        const v1761 = executeOnce(v1760);
                        v1761;
                    } else {
                        const v1773 = function () {
                            const v1762 = !shouldAbsorb;
                            const v1763 = list.length;
                            const v1764 = v1763 === 0;
                            const v1765 = v1762 && v1764;
                            if (v1765) {
                                const v1766 = console.error('Possible unhandled promise rejection:', value);
                                v1766;
                            }
                            var i = 0;
                            const v1767 = list.length;
                            let v1768 = i < v1767;
                            while (v1768) {
                                const v1770 = list[i](value);
                                v1770;
                                const v1769 = i++;
                                v1768 = i < v1767;
                            }
                            resolvers.length = 0, rejectors.length = 0;
                            instance.state = shouldAbsorb;
                            const v1772 = function () {
                                const v1771 = execute(value);
                                v1771;
                            };
                            instance.retry = v1772;
                        };
                        const v1774 = callAsync(v1773);
                        v1774;
                    }
                } catch (e) {
                    const v1775 = rejectCurrent(e);
                    v1775;
                }
            };
            return v1776;
        };
        const executeOnce = function (then) {
            var runs = 0;
            const run = function (fn) {
                const v1780 = function (value) {
                    const v1777 = runs++;
                    const v1778 = v1777 > 0;
                    if (v1778) {
                        return;
                    }
                    const v1779 = fn(value);
                    v1779;
                };
                return v1780;
            };
            var onerror = run(rejectCurrent);
            try {
                const v1781 = run(resolveCurrent);
                const v1782 = then(v1781, onerror);
                v1782;
            } catch (e) {
                const v1783 = onerror(e);
                v1783;
            }
        };
        const v1784 = executeOnce(executor);
        v1784;
    };
    const v1785 = PromisePolyfill.prototype;
    const v1806 = function (onFulfilled, onRejection) {
        var self = this;
        var instance = self._instance;
        const handle = function (callback, list, next, state) {
            const v1792 = function (value) {
                const v1786 = typeof callback;
                const v1787 = v1786 !== 'function';
                if (v1787) {
                    const v1788 = next(value);
                    v1788;
                } else {
                    try {
                        const v1789 = callback(value);
                        const v1790 = resolveNext(v1789);
                        v1790;
                    } catch (e) {
                        if (rejectNext) {
                            const v1791 = rejectNext(e);
                            v1791;
                        }
                    }
                }
            };
            const v1793 = list.push(v1792);
            v1793;
            const v1794 = instance.retry;
            const v1795 = typeof v1794;
            const v1796 = v1795 === 'function';
            const v1797 = instance.state;
            const v1798 = state === v1797;
            const v1799 = v1796 && v1798;
            if (v1799) {
                const v1800 = instance.retry();
                v1800;
            }
        };
        var resolveNext;
        var rejectNext;
        const v1801 = function (resolve, reject) {
            resolveNext = resolve, rejectNext = reject;
        };
        var promise = new PromisePolyfill(v1801);
        const v1802 = instance.resolvers;
        const v1803 = handle(onFulfilled, v1802, resolveNext, true);
        const v1804 = instance.rejectors;
        const v1805 = handle(onRejection, v1804, rejectNext, false);
        v1803, v1805;
        return promise;
    };
    v1785.then = v1806;
    const v1807 = PromisePolyfill.prototype;
    const v1809 = function (onRejection) {
        const v1808 = this.then(null, onRejection);
        return v1808;
    };
    v1807.catch = v1809;
    const v1814 = function (value) {
        const v1810 = value instanceof PromisePolyfill;
        if (v1810) {
            return value;
        }
        const v1812 = function (resolve) {
            const v1811 = resolve(value);
            v1811;
        };
        const v1813 = new PromisePolyfill(v1812);
        return v1813;
    };
    PromisePolyfill.resolve = v1814;
    const v1818 = function (value) {
        const v1816 = function (resolve, reject) {
            const v1815 = reject(value);
            v1815;
        };
        const v1817 = new PromisePolyfill(v1816);
        return v1817;
    };
    PromisePolyfill.reject = v1818;
    const v1852 = function (list) {
        const v1850 = function (resolve, reject) {
            var total = list.length;
            var count = 0;
            var values = [];
            const v1819 = list.length;
            const v1820 = v1819 === 0;
            if (v1820) {
                const v1821 = [];
                const v1822 = resolve(v1821);
                v1822;
            } else {
                var i = 0;
                const v1823 = list.length;
                let v1824 = i < v1823;
                while (v1824) {
                    const v1848 = function (i) {
                        const consume = function (value) {
                            const v1826 = count++;
                            v1826;
                            values[i] = value;
                            const v1827 = count === total;
                            if (v1827) {
                                const v1828 = resolve(values);
                                v1828;
                            }
                        };
                        const v1829 = list[i];
                        const v1830 = v1829 != null;
                        const v1831 = list[i];
                        const v1832 = typeof v1831;
                        const v1833 = v1832 === 'object';
                        const v1834 = list[i];
                        const v1835 = typeof v1834;
                        const v1836 = v1835 === 'function';
                        const v1837 = v1833 || v1836;
                        const v1838 = v1830 && v1837;
                        const v1839 = list[i];
                        const v1840 = v1839.then;
                        const v1841 = typeof v1840;
                        const v1842 = v1841 === 'function';
                        const v1843 = v1838 && v1842;
                        if (v1843) {
                            const v1844 = list[i];
                            const v1845 = v1844.then(consume, reject);
                            v1845;
                        } else {
                            const v1846 = list[i];
                            const v1847 = consume(v1846);
                            v1847;
                        }
                    };
                    const v1849 = v1848(i);
                    v1849;
                    const v1825 = i++;
                    v1824 = i < v1823;
                }
            }
        };
        const v1851 = new PromisePolyfill(v1850);
        return v1851;
    };
    PromisePolyfill.all = v1852;
    const v1860 = function (list) {
        const v1858 = function (resolve, reject) {
            var i = 0;
            const v1853 = list.length;
            let v1854 = i < v1853;
            while (v1854) {
                const v1856 = list[i];
                const v1857 = v1856.then(resolve, reject);
                v1857;
                const v1855 = i++;
                v1854 = i < v1853;
            }
        };
        const v1859 = new PromisePolyfill(v1858);
        return v1859;
    };
    PromisePolyfill.race = v1860;
    const v1861 = typeof window;
    const v1862 = v1861 !== 'undefined';
    if (v1862) {
        const v1863 = window.Promise;
        const v1864 = typeof v1863;
        const v1865 = v1864 === 'undefined';
        if (v1865) {
            window.Promise = PromisePolyfill;
        }
        var PromisePolyfill = window.Promise;
    } else {
        const v1866 = typeof global;
        const v1867 = v1866 !== 'undefined';
        if (v1867) {
            const v1868 = global.Promise;
            const v1869 = typeof v1868;
            const v1870 = v1869 === 'undefined';
            if (v1870) {
                global.Promise = PromisePolyfill;
            }
            var PromisePolyfill = global.Promise;
        } else {
        }
    }
    var buildQueryString = function (object) {
        const v1871 = Object.prototype;
        const v1872 = v1871.toString;
        const v1873 = v1872.call(object);
        const v1874 = v1873 !== '[object Object]';
        if (v1874) {
            return '';
        }
        var args = [];
        let key0;
        for (key0 in object) {
            const v1875 = object[key0];
            const v1876 = destructure(key0, v1875);
            v1876;
        }
        const v1877 = args.join('&');
        return v1877;
        const destructure = function (key0, value) {
            const v1878 = Array.isArray(value);
            if (v1878) {
                var i = 0;
                const v1879 = value.length;
                let v1880 = i < v1879;
                while (v1880) {
                    const v1882 = key0 + '[';
                    const v1883 = v1882 + i;
                    const v1884 = v1883 + ']';
                    const v1885 = value[i];
                    const v1886 = destructure(v1884, v1885);
                    v1886;
                    const v1881 = i++;
                    v1880 = i < v1879;
                }
            } else {
                const v1887 = Object.prototype;
                const v1888 = v1887.toString;
                const v1889 = v1888.call(value);
                const v1890 = v1889 === '[object Object]';
                if (v1890) {
                    let i;
                    for (i in value) {
                        const v1891 = key0 + '[';
                        const v1892 = v1891 + i;
                        const v1893 = v1892 + ']';
                        const v1894 = value[i];
                        const v1895 = destructure(v1893, v1894);
                        v1895;
                    }
                } else {
                    const v1896 = encodeURIComponent(key0);
                    const v1897 = value != null;
                    const v1898 = value !== '';
                    const v1899 = v1897 && v1898;
                    const v1900 = encodeURIComponent(value);
                    const v1901 = '=' + v1900;
                    let v1902;
                    if (v1899) {
                        v1902 = v1901;
                    } else {
                        v1902 = '';
                    }
                    const v1903 = v1896 + v1902;
                    const v1904 = args.push(v1903);
                    v1904;
                }
            }
        };
    };
    var _8 = function ($window, Promise) {
        var callbackCount = 0;
        var oncompletion;
        const setCompletionCallback = function (callback) {
            oncompletion = callback;
        };
        const finalizer = function () {
            var count = 0;
            const complete = function () {
                const v1905 = --count;
                const v1906 = v1905 === 0;
                const v1907 = typeof oncompletion;
                const v1908 = v1907 === 'function';
                const v1909 = v1906 && v1908;
                if (v1909) {
                    const v1910 = oncompletion();
                    v1910;
                }
            };
            const v1918 = function finalize(promise0) {
                var then0 = promise0.then;
                const v1917 = function () {
                    const v1911 = count++;
                    v1911;
                    var next = then0.apply(promise0, arguments);
                    const v1914 = function (e) {
                        const v1912 = complete();
                        v1912;
                        const v1913 = count === 0;
                        if (v1913) {
                            throw e;
                        }
                    };
                    const v1915 = next.then(complete, v1914);
                    v1915;
                    const v1916 = finalize(next);
                    return v1916;
                };
                promise0.then = v1917;
                return promise0;
            };
            return v1918;
        };
        const normalize = function (args, extra) {
            const v1919 = typeof args;
            const v1920 = v1919 === 'string';
            if (v1920) {
                var url = args;
                const v1921 = {};
                args = extra || v1921;
                const v1922 = args.url;
                const v1923 = v1922 == null;
                if (v1923) {
                    args.url = url;
                }
            }
            return args;
        };
        const request = function (args, extra) {
            var finalize = finalizer();
            args = normalize(args, extra);
            const v2033 = function (resolve, reject) {
                const v1924 = args.method;
                const v1925 = v1924 == null;
                if (v1925) {
                    args.method = 'GET';
                }
                const v1926 = args.method;
                const v1927 = v1926.toUpperCase();
                args.method = v1927;
                let useBody;
                const v1928 = args.useBody;
                const v1929 = typeof v1928;
                const v1930 = v1929 === 'boolean';
                const v1931 = args.useBody;
                const v1932 = args.method;
                const v1933 = v1932 !== 'GET';
                const v1934 = args.method;
                const v1935 = v1934 !== 'TRACE';
                const v1936 = v1933 && v1935;
                if (v1930) {
                    useBody = v1931;
                } else {
                    useBody = v1936;
                }
                const v1937 = args.serialize;
                const v1938 = typeof v1937;
                const v1939 = v1938 !== 'function';
                if (v1939) {
                    const v1940 = typeof FormData;
                    const v1941 = v1940 !== 'undefined';
                    const v1942 = args.data;
                    const v1943 = v1942 instanceof FormData;
                    const v1944 = v1941 && v1943;
                    const v1945 = function (value) {
                        return value;
                    };
                    const v1946 = JSON.stringify;
                    let v1947;
                    if (v1944) {
                        v1947 = v1945;
                    } else {
                        v1947 = v1946;
                    }
                    args.serialize = v1947;
                }
                const v1948 = args.deserialize;
                const v1949 = typeof v1948;
                const v1950 = v1949 !== 'function';
                if (v1950) {
                    args.deserialize = deserialize;
                }
                const v1951 = args.extract;
                const v1952 = typeof v1951;
                const v1953 = v1952 !== 'function';
                if (v1953) {
                    args.extract = extract;
                }
                const v1954 = args.url;
                const v1955 = args.data;
                const v1956 = interpolate(v1954, v1955);
                args.url = v1956;
                if (useBody) {
                    const v1957 = args.data;
                    const v1958 = args.serialize(v1957);
                    args.data = v1958;
                } else {
                    const v1959 = args.url;
                    const v1960 = args.data;
                    const v1961 = assemble(v1959, v1960);
                    args.url = v1961;
                }
                var xhr = new $window.XMLHttpRequest();
                const v1962 = args.method;
                const v1963 = args.url;
                const v1964 = args.async;
                const v1965 = typeof v1964;
                const v1966 = v1965 === 'boolean';
                const v1967 = args.async;
                let v1968;
                if (v1966) {
                    v1968 = v1967;
                } else {
                    v1968 = true;
                }
                const v1969 = args.user;
                const v1970 = typeof v1969;
                const v1971 = v1970 === 'string';
                const v1972 = args.user;
                let v1973;
                if (v1971) {
                    v1973 = v1972;
                } else {
                    v1973 = undefined;
                }
                const v1974 = args.password;
                const v1975 = typeof v1974;
                const v1976 = v1975 === 'string';
                const v1977 = args.password;
                let v1978;
                if (v1976) {
                    v1978 = v1977;
                } else {
                    v1978 = undefined;
                }
                const v1979 = xhr.open(v1962, v1963, v1968, v1973, v1978);
                v1979;
                const v1980 = args.serialize;
                const v1981 = JSON.stringify;
                const v1982 = v1980 === v1981;
                const v1983 = v1982 && useBody;
                if (v1983) {
                    const v1984 = xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                    v1984;
                }
                const v1985 = args.deserialize;
                const v1986 = v1985 === deserialize;
                if (v1986) {
                    const v1987 = xhr.setRequestHeader('Accept', 'application/json, text/*');
                    v1987;
                }
                const v1988 = args.withCredentials;
                if (v1988) {
                    const v1989 = args.withCredentials;
                    xhr.withCredentials = v1989;
                }
                let key;
                const v1990 = args.headers;
                for (key in v1990) {
                    const v1991 = {};
                    const v1992 = v1991.hasOwnProperty;
                    const v1993 = args.headers;
                    const v1994 = v1992.call(v1993, key);
                    if (v1994) {
                        const v1995 = args.headers;
                        const v1996 = v1995[key];
                        const v1997 = xhr.setRequestHeader(key, v1996);
                        v1997;
                    }
                }
                const v1998 = args.config;
                const v1999 = typeof v1998;
                const v2000 = v1999 === 'function';
                if (v2000) {
                    const v2001 = args.config(xhr, args);
                    xhr = v2001 || xhr;
                }
                const v2026 = function () {
                    const v2002 = xhr.status;
                    const v2003 = xhr.readyState;
                    const v2004 = v2003 === 4;
                    const v2005 = v2002 && v2004;
                    if (v2005) {
                        try {
                            let response;
                            const v2006 = args.extract;
                            const v2007 = v2006 !== extract;
                            const v2008 = args.extract(xhr, args);
                            const v2009 = args.extract(xhr, args);
                            const v2010 = args.deserialize(v2009);
                            if (v2007) {
                                response = v2008;
                            } else {
                                response = v2010;
                            }
                            const v2011 = xhr.status;
                            const v2012 = v2011 >= 200;
                            const v2013 = xhr.status;
                            const v2014 = v2013 < 300;
                            const v2015 = v2012 && v2014;
                            const v2016 = xhr.status;
                            const v2017 = v2016 === 304;
                            const v2018 = v2015 || v2017;
                            if (v2018) {
                                const v2019 = args.type;
                                const v2020 = cast(v2019, response);
                                const v2021 = resolve(v2020);
                                v2021;
                            } else {
                                const v2022 = xhr.responseText;
                                var error = new Error(v2022);
                                let key;
                                for (key in response) {
                                    const v2023 = response[key];
                                    error[key] = v2023;
                                }
                                const v2024 = reject(error);
                                v2024;
                            }
                        } catch (e) {
                            const v2025 = reject(e);
                            v2025;
                        }
                    }
                };
                xhr.onreadystatechange = v2026;
                const v2027 = args.data;
                const v2028 = v2027 != null;
                const v2029 = useBody && v2028;
                if (v2029) {
                    const v2030 = args.data;
                    const v2031 = xhr.send(v2030);
                    v2031;
                } else {
                    const v2032 = xhr.send();
                    v2032;
                }
            };
            var promise0 = new Promise(v2033);
            const v2034 = args.background;
            const v2035 = v2034 === true;
            const v2036 = finalize(promise0);
            let v2037;
            if (v2035) {
                v2037 = promise0;
            } else {
                v2037 = v2036;
            }
            return v2037;
        };
        const jsonp = function (args, extra) {
            var finalize = finalizer();
            args = normalize(args, extra);
            const v2077 = function (resolve, reject) {
                const v2038 = args.callbackName;
                const v2039 = Math.random();
                const v2040 = v2039 * 10000000000000000;
                const v2041 = Math.round(v2040);
                const v2042 = '_mithril_' + v2041;
                const v2043 = v2042 + '_';
                const v2044 = callbackCount++;
                const v2045 = v2043 + v2044;
                var callbackName = v2038 || v2045;
                const v2046 = $window.document;
                var script = v2046.createElement('script');
                const v2054 = function (data) {
                    const v2047 = script.parentNode;
                    const v2048 = v2047.removeChild(script);
                    v2048;
                    const v2049 = args.type;
                    const v2050 = cast(v2049, data);
                    const v2051 = resolve(v2050);
                    v2051;
                    const v2052 = $window[callbackName];
                    const v2053 = delete v2052;
                    v2053;
                };
                $window[callbackName] = v2054;
                const v2061 = function () {
                    const v2055 = script.parentNode;
                    const v2056 = v2055.removeChild(script);
                    v2056;
                    const v2057 = new Error('JSONP request failed');
                    const v2058 = reject(v2057);
                    v2058;
                    const v2059 = $window[callbackName];
                    const v2060 = delete v2059;
                    v2060;
                };
                script.onerror = v2061;
                const v2062 = args.data;
                const v2063 = v2062 == null;
                if (v2063) {
                    const v2064 = {};
                    args.data = v2064;
                }
                const v2065 = args.url;
                const v2066 = args.data;
                const v2067 = interpolate(v2065, v2066);
                args.url = v2067;
                const v2068 = args.data;
                const v2069 = args.callbackKey;
                const v2070 = v2069 || 'callback';
                v2068[v2070] = callbackName;
                const v2071 = args.url;
                const v2072 = args.data;
                const v2073 = assemble(v2071, v2072);
                script.src = v2073;
                const v2074 = $window.document;
                const v2075 = v2074.documentElement;
                const v2076 = v2075.appendChild(script);
                v2076;
            };
            var promise0 = new Promise(v2077);
            const v2078 = args.background;
            const v2079 = v2078 === true;
            const v2080 = finalize(promise0);
            let v2081;
            if (v2079) {
                v2081 = promise0;
            } else {
                v2081 = v2080;
            }
            return v2081;
        };
        const interpolate = function (url, data) {
            const v2082 = data == null;
            if (v2082) {
                return url;
            }
            const v2083 = url.match(/:[^\/]+/gi);
            const v2084 = [];
            var tokens = v2083 || v2084;
            var i = 0;
            const v2085 = tokens.length;
            let v2086 = i < v2085;
            while (v2086) {
                const v2088 = tokens[i];
                var key = v2088.slice(1);
                const v2089 = data[key];
                const v2090 = v2089 != null;
                if (v2090) {
                    const v2091 = tokens[i];
                    const v2092 = data[key];
                    url = url.replace(v2091, v2092);
                }
                const v2087 = i++;
                v2086 = i < v2085;
            }
            return url;
        };
        const assemble = function (url, data) {
            var querystring = buildQueryString(data);
            const v2093 = querystring !== '';
            if (v2093) {
                let prefix;
                const v2094 = url.indexOf('?');
                const v2095 = v2094 < 0;
                if (v2095) {
                    prefix = '?';
                } else {
                    prefix = '&';
                }
                url += prefix + querystring;
            }
            return url;
        };
        const deserialize = function (data) {
            try {
                const v2096 = data !== '';
                const v2097 = JSON.parse(data);
                let v2098;
                if (v2096) {
                    v2098 = v2097;
                } else {
                    v2098 = null;
                }
                return v2098;
            } catch (e) {
                const v2099 = new Error(data);
                throw v2099;
            }
        };
        const extract = function (xhr) {
            const v2100 = xhr.responseText;
            return v2100;
        };
        const cast = function (type0, data) {
            const v2101 = typeof type0;
            const v2102 = v2101 === 'function';
            if (v2102) {
                const v2103 = Array.isArray(data);
                if (v2103) {
                    var i = 0;
                    const v2104 = data.length;
                    let v2105 = i < v2104;
                    while (v2105) {
                        const v2107 = data[i];
                        data[i] = new type0(v2107);
                        const v2106 = i++;
                        v2105 = i < v2104;
                    }
                } else {
                    const v2108 = new type0(data);
                    return v2108;
                }
            }
            return data;
        };
        const v2109 = {};
        v2109.request = request;
        v2109.jsonp = jsonp;
        v2109.setCompletionCallback = setCompletionCallback;
        return v2109;
    };
    var requestService = _8(window, PromisePolyfill);
    var coreRenderer = function ($window) {
        var $doc = $window.document;
        var $emptyFragment = $doc.createDocumentFragment();
        var onevent;
        const setEventCallback = function (callback) {
            return onevent = callback;
        };
        const createNodes = function (parent, vnodes, start, end, hooks, nextSibling, ns) {
            var i = start;
            let v2110 = i < end;
            while (v2110) {
                var vnode = vnodes[i];
                const v2112 = vnode != null;
                if (v2112) {
                    const v2113 = createNode(vnode, hooks, ns);
                    const v2114 = insertNode(parent, v2113, nextSibling);
                    v2114;
                }
                const v2111 = i++;
                v2110 = i < end;
            }
        };
        const createNode = function (vnode, hooks, ns) {
            var tag = vnode.tag;
            const v2115 = vnode.attrs;
            const v2116 = v2115 != null;
            if (v2116) {
                const v2117 = vnode.attrs;
                const v2118 = initLifecycle(v2117, vnode, hooks);
                v2118;
            }
            const v2119 = typeof tag;
            const v2120 = v2119 === 'string';
            if (v2120) {
                switch (tag) {
                case '#':
                    const v2121 = createText(vnode);
                    return v2121;
                case '<':
                    const v2122 = createHTML(vnode);
                    return v2122;
                case '[':
                    const v2123 = createFragment(vnode, hooks, ns);
                    return v2123;
                default:
                    const v2124 = createElement(vnode, hooks, ns);
                    return v2124;
                }
            } else {
                const v2125 = createComponent(vnode, hooks, ns);
                return v2125;
            }
        };
        const createText = function (vnode) {
            const v2126 = vnode.children;
            const v2127 = $doc.createTextNode(v2126);
            return vnode.dom = v2127;
        };
        const createHTML = function (vnode) {
            const v2128 = vnode.children;
            const v2129 = v2128.match(/^\s*?<(\w+)/im);
            const v2130 = [];
            var match1 = v2129 || v2130;
            const v2131 = {
                caption: 'table',
                thead: 'table',
                tbody: 'table',
                tfoot: 'table',
                tr: 'tbody',
                th: 'tr',
                td: 'tr',
                colgroup: 'table',
                col: 'colgroup'
            };
            const v2132 = match1[1];
            const v2133 = v2131[v2132];
            var parent = v2133 || 'div';
            var temp = $doc.createElement(parent);
            const v2134 = vnode.children;
            temp.innerHTML = v2134;
            const v2135 = temp.firstChild;
            vnode.dom = v2135;
            const v2136 = temp.childNodes;
            const v2137 = v2136.length;
            vnode.domSize = v2137;
            var fragment = $doc.createDocumentFragment();
            var child;
            while (child = temp.firstChild) {
                const v2138 = fragment.appendChild(child);
                v2138;
            }
            return fragment;
        };
        const createFragment = function (vnode, hooks, ns) {
            var fragment = $doc.createDocumentFragment();
            const v2139 = vnode.children;
            const v2140 = v2139 != null;
            if (v2140) {
                var children = vnode.children;
                const v2141 = children.length;
                const v2142 = createNodes(fragment, children, 0, v2141, hooks, null, ns);
                v2142;
            }
            const v2143 = fragment.firstChild;
            vnode.dom = v2143;
            const v2144 = fragment.childNodes;
            const v2145 = v2144.length;
            vnode.domSize = v2145;
            return fragment;
        };
        const createElement = function (vnode, hooks, ns) {
            var tag = vnode.tag;
            const v2146 = vnode.tag;
            switch (v2146) {
            case 'svg':
                ns = 'http://www.w3.org/2000/svg';
                break;
            case 'math':
                ns = 'http://www.w3.org/1998/Math/MathML';
                break;
            }
            var attrs2 = vnode.attrs;
            const v2147 = attrs2.is;
            var is = attrs2 && v2147;
            let element;
            const v2148 = { is: is };
            const v2149 = $doc.createElementNS(ns, tag, v2148);
            const v2150 = $doc.createElementNS(ns, tag);
            let v2151;
            if (is) {
                v2151 = v2149;
            } else {
                v2151 = v2150;
            }
            const v2152 = { is: is };
            const v2153 = $doc.createElement(tag, v2152);
            const v2154 = $doc.createElement(tag);
            let v2155;
            if (is) {
                v2155 = v2153;
            } else {
                v2155 = v2154;
            }
            if (ns) {
                element = v2151;
            } else {
                element = v2155;
            }
            vnode.dom = element;
            const v2156 = attrs2 != null;
            if (v2156) {
                const v2157 = setAttrs(vnode, attrs2, ns);
                v2157;
            }
            const v2158 = vnode.attrs;
            const v2159 = v2158 != null;
            const v2160 = vnode.attrs;
            const v2161 = v2160.contenteditable;
            const v2162 = v2161 != null;
            const v2163 = v2159 && v2162;
            if (v2163) {
                const v2164 = setContentEditable(vnode);
                v2164;
            } else {
                const v2165 = vnode.text;
                const v2166 = v2165 != null;
                if (v2166) {
                    const v2167 = vnode.text;
                    const v2168 = v2167 !== '';
                    if (v2168) {
                        const v2169 = vnode.text;
                        element.textContent = v2169;
                    } else {
                        const v2170 = vnode.text;
                        const v2171 = Vnode('#', undefined, undefined, v2170, undefined, undefined);
                        vnode.children = [v2171];
                    }
                }
                const v2172 = vnode.children;
                const v2173 = v2172 != null;
                if (v2173) {
                    var children = vnode.children;
                    const v2174 = children.length;
                    const v2175 = createNodes(element, children, 0, v2174, hooks, null, ns);
                    v2175;
                    const v2176 = setLateAttrs(vnode);
                    v2176;
                }
            }
            return element;
        };
        const createComponent = function (vnode, hooks, ns) {
            const v2177 = vnode.tag;
            const v2178 = Object.create(v2177);
            vnode.state = v2178;
            const v2179 = vnode.tag;
            var view = v2179.view;
            const v2180 = view.reentrantLock;
            const v2181 = v2180 != null;
            if (v2181) {
                return $emptyFragment;
            }
            view.reentrantLock = true;
            const v2182 = vnode.tag;
            const v2183 = initLifecycle(v2182, vnode, hooks);
            v2183;
            const v2184 = vnode.state;
            const v2185 = view.call(v2184, vnode);
            const v2186 = Vnode.normalize(v2185);
            vnode.instance = v2186;
            view.reentrantLock = null;
            const v2187 = vnode.instance;
            const v2188 = v2187 != null;
            if (v2188) {
                const v2189 = vnode.instance;
                const v2190 = v2189 === vnode;
                if (v2190) {
                    const v2191 = Error('A view cannot return the vnode it received as arguments');
                    throw v2191;
                }
                const v2192 = vnode.instance;
                var element = createNode(v2192, hooks, ns);
                const v2193 = vnode.instance;
                const v2194 = v2193.dom;
                vnode.dom = v2194;
                const v2195 = vnode.dom;
                const v2196 = v2195 != null;
                const v2197 = vnode.instance;
                const v2198 = v2197.domSize;
                let v2199;
                if (v2196) {
                    v2199 = v2198;
                } else {
                    v2199 = 0;
                }
                vnode.domSize = v2199;
                return element;
            } else {
                vnode.domSize = 0;
                return $emptyFragment;
            }
        };
        const updateNodes = function (parent, old, vnodes, hooks, nextSibling, ns) {
            const v2200 = old === vnodes;
            const v2201 = old == null;
            const v2202 = vnodes == null;
            const v2203 = v2201 && v2202;
            const v2204 = v2200 || v2203;
            if (v2204) {
                return;
            } else {
                const v2205 = old == null;
                if (v2205) {
                    const v2206 = vnodes.length;
                    const v2207 = createNodes(parent, vnodes, 0, v2206, hooks, nextSibling, undefined);
                    v2207;
                } else {
                    const v2208 = vnodes == null;
                    if (v2208) {
                        const v2209 = old.length;
                        const v2210 = removeNodes(old, 0, v2209, vnodes);
                        v2210;
                    } else {
                        const v2211 = old.length;
                        const v2212 = vnodes.length;
                        const v2213 = v2211 === v2212;
                        if (v2213) {
                            var isUnkeyed = false;
                            var i = 0;
                            const v2214 = vnodes.length;
                            let v2215 = i < v2214;
                            while (v2215) {
                                const v2217 = vnodes[i];
                                const v2218 = v2217 != null;
                                const v2219 = old[i];
                                const v2220 = v2219 != null;
                                const v2221 = v2218 && v2220;
                                if (v2221) {
                                    const v2222 = vnodes[i];
                                    const v2223 = v2222.key;
                                    const v2224 = v2223 == null;
                                    const v2225 = old[i];
                                    const v2226 = v2225.key;
                                    const v2227 = v2226 == null;
                                    isUnkeyed = v2224 && v2227;
                                    break;
                                }
                                const v2216 = i++;
                                v2215 = i < v2214;
                            }
                            if (isUnkeyed) {
                                var i = 0;
                                const v2228 = old.length;
                                let v2229 = i < v2228;
                                while (v2229) {
                                    const v2231 = old[i];
                                    const v2232 = vnodes[i];
                                    const v2233 = v2231 === v2232;
                                    if (v2233) {
                                        continue;
                                    } else {
                                        const v2234 = old[i];
                                        const v2235 = v2234 == null;
                                        const v2236 = vnodes[i];
                                        const v2237 = v2236 != null;
                                        const v2238 = v2235 && v2237;
                                        if (v2238) {
                                            const v2239 = vnodes[i];
                                            const v2240 = createNode(v2239, hooks, ns);
                                            const v2241 = i + 1;
                                            const v2242 = getNextSibling(old, v2241, nextSibling);
                                            const v2243 = insertNode(parent, v2240, v2242);
                                            v2243;
                                        } else {
                                            const v2244 = vnodes[i];
                                            const v2245 = v2244 == null;
                                            if (v2245) {
                                                const v2246 = i + 1;
                                                const v2247 = removeNodes(old, i, v2246, vnodes);
                                                v2247;
                                            } else {
                                                const v2248 = old[i];
                                                const v2249 = vnodes[i];
                                                const v2250 = i + 1;
                                                const v2251 = getNextSibling(old, v2250, nextSibling);
                                                const v2252 = updateNode(parent, v2248, v2249, hooks, v2251, false, ns);
                                                v2252;
                                            }
                                        }
                                    }
                                    const v2230 = i++;
                                    v2229 = i < v2228;
                                }
                                return;
                            }
                        }
                        var recycling = isRecyclable(old, vnodes);
                        if (recycling) {
                            const v2253 = old.pool;
                            old = old.concat(v2253);
                        }
                        var oldStart = 0;
                        var start = 0;
                        const v2254 = old.length;
                        var oldEnd = v2254 - 1;
                        const v2255 = vnodes.length;
                        var end = v2255 - 1;
                        var map;
                        const v2256 = oldEnd >= oldStart;
                        const v2257 = end >= start;
                        let v2258 = v2256 && v2257;
                        while (v2258) {
                            var o = old[oldStart];
                            var v = vnodes[start];
                            const v2259 = o === v;
                            const v2260 = !recycling;
                            const v2261 = v2259 && v2260;
                            if (v2261) {
                                const v2262 = oldStart++;
                                const v2263 = start++;
                                v2262, v2263;
                            } else {
                                const v2264 = o == null;
                                if (v2264) {
                                    const v2265 = oldStart++;
                                    v2265;
                                } else {
                                    const v2266 = v == null;
                                    if (v2266) {
                                        const v2267 = start++;
                                        v2267;
                                    } else {
                                        const v2268 = o.key;
                                        const v2269 = v.key;
                                        const v2270 = v2268 === v2269;
                                        if (v2270) {
                                            const v2271 = oldStart++;
                                            const v2272 = start++;
                                            v2271, v2272;
                                            const v2273 = getNextSibling(old, oldStart, nextSibling);
                                            const v2274 = updateNode(parent, o, v, hooks, v2273, recycling, ns);
                                            v2274;
                                            const v2275 = o.tag;
                                            const v2276 = v.tag;
                                            const v2277 = v2275 === v2276;
                                            const v2278 = recycling && v2277;
                                            if (v2278) {
                                                const v2279 = toFragment(o);
                                                const v2280 = insertNode(parent, v2279, nextSibling);
                                                v2280;
                                            }
                                        } else {
                                            var o = old[oldEnd];
                                            const v2281 = o === v;
                                            const v2282 = !recycling;
                                            const v2283 = v2281 && v2282;
                                            if (v2283) {
                                                const v2284 = oldEnd--;
                                                const v2285 = start++;
                                                v2284, v2285;
                                            } else {
                                                const v2286 = o == null;
                                                if (v2286) {
                                                    const v2287 = oldEnd--;
                                                    v2287;
                                                } else {
                                                    const v2288 = v == null;
                                                    if (v2288) {
                                                        const v2289 = start++;
                                                        v2289;
                                                    } else {
                                                        const v2290 = o.key;
                                                        const v2291 = v.key;
                                                        const v2292 = v2290 === v2291;
                                                        if (v2292) {
                                                            const v2293 = oldEnd + 1;
                                                            const v2294 = getNextSibling(old, v2293, nextSibling);
                                                            const v2295 = updateNode(parent, o, v, hooks, v2294, recycling, ns);
                                                            v2295;
                                                            const v2296 = start < end;
                                                            const v2297 = recycling || v2296;
                                                            if (v2297) {
                                                                const v2298 = toFragment(o);
                                                                const v2299 = getNextSibling(old, oldStart, nextSibling);
                                                                const v2300 = insertNode(parent, v2298, v2299);
                                                                v2300;
                                                            }
                                                            const v2301 = oldEnd--;
                                                            const v2302 = start++;
                                                            v2301, v2302;
                                                        } else {
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            v2258 = v2256 && v2257;
                        }
                        const v2303 = oldEnd >= oldStart;
                        const v2304 = end >= start;
                        let v2305 = v2303 && v2304;
                        while (v2305) {
                            var o = old[oldEnd];
                            var v = vnodes[end];
                            const v2306 = o === v;
                            const v2307 = !recycling;
                            const v2308 = v2306 && v2307;
                            if (v2308) {
                                const v2309 = oldEnd--;
                                const v2310 = end--;
                                v2309, v2310;
                            } else {
                                const v2311 = o == null;
                                if (v2311) {
                                    const v2312 = oldEnd--;
                                    v2312;
                                } else {
                                    const v2313 = v == null;
                                    if (v2313) {
                                        const v2314 = end--;
                                        v2314;
                                    } else {
                                        const v2315 = o.key;
                                        const v2316 = v.key;
                                        const v2317 = v2315 === v2316;
                                        if (v2317) {
                                            const v2318 = oldEnd + 1;
                                            const v2319 = getNextSibling(old, v2318, nextSibling);
                                            const v2320 = updateNode(parent, o, v, hooks, v2319, recycling, ns);
                                            v2320;
                                            const v2321 = o.tag;
                                            const v2322 = v.tag;
                                            const v2323 = v2321 === v2322;
                                            const v2324 = recycling && v2323;
                                            if (v2324) {
                                                const v2325 = toFragment(o);
                                                const v2326 = insertNode(parent, v2325, nextSibling);
                                                v2326;
                                            }
                                            const v2327 = o.dom;
                                            const v2328 = v2327 != null;
                                            if (v2328) {
                                                nextSibling = o.dom;
                                            }
                                            const v2329 = oldEnd--;
                                            const v2330 = end--;
                                            v2329, v2330;
                                        } else {
                                            const v2331 = !map;
                                            if (v2331) {
                                                map = getKeyMap(old, oldEnd);
                                            }
                                            const v2332 = v != null;
                                            if (v2332) {
                                                const v2333 = v.key;
                                                var oldIndex = map[v2333];
                                                const v2334 = oldIndex != null;
                                                if (v2334) {
                                                    var movable = old[oldIndex];
                                                    const v2335 = oldEnd + 1;
                                                    const v2336 = getNextSibling(old, v2335, nextSibling);
                                                    const v2337 = updateNode(parent, movable, v, hooks, v2336, recycling, ns);
                                                    v2337;
                                                    const v2338 = toFragment(movable);
                                                    const v2339 = insertNode(parent, v2338, nextSibling);
                                                    v2339;
                                                    const v2340 = old[oldIndex];
                                                    v2340.skip = true;
                                                    const v2341 = movable.dom;
                                                    const v2342 = v2341 != null;
                                                    if (v2342) {
                                                        nextSibling = movable.dom;
                                                    }
                                                } else {
                                                    var dom = createNode(v, hooks, undefined);
                                                    const v2343 = insertNode(parent, dom, nextSibling);
                                                    v2343;
                                                    nextSibling = dom;
                                                }
                                            }
                                            const v2344 = end--;
                                            v2344;
                                        }
                                    }
                                }
                            }
                            const v2345 = end < start;
                            if (v2345) {
                                break;
                            }
                            v2305 = v2303 && v2304;
                        }
                        const v2346 = end + 1;
                        const v2347 = createNodes(parent, vnodes, start, v2346, hooks, nextSibling, ns);
                        v2347;
                        const v2348 = oldEnd + 1;
                        const v2349 = removeNodes(old, oldStart, v2348, vnodes);
                        v2349;
                    }
                }
            }
        };
        const updateNode = function (parent, old, vnode, hooks, nextSibling, recycling, ns) {
            var oldTag = old.tag;
            var tag = vnode.tag;
            const v2350 = oldTag === tag;
            if (v2350) {
                const v2351 = old.state;
                vnode.state = v2351;
                const v2352 = old.events;
                vnode.events = v2352;
                const v2353 = shouldUpdate(vnode, old);
                if (v2353) {
                    return;
                }
                const v2354 = vnode.attrs;
                const v2355 = v2354 != null;
                if (v2355) {
                    const v2356 = vnode.attrs;
                    const v2357 = updateLifecycle(v2356, vnode, hooks, recycling);
                    v2357;
                }
                const v2358 = typeof oldTag;
                const v2359 = v2358 === 'string';
                if (v2359) {
                    switch (oldTag) {
                    case '#':
                        const v2360 = updateText(old, vnode);
                        v2360;
                        break;
                    case '<':
                        const v2361 = updateHTML(parent, old, vnode, nextSibling);
                        v2361;
                        break;
                    case '[':
                        const v2362 = updateFragment(parent, old, vnode, hooks, nextSibling, ns);
                        v2362;
                        break;
                    default:
                        const v2363 = updateElement(old, vnode, hooks, ns);
                        v2363;
                    }
                } else {
                    const v2364 = updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns);
                    v2364;
                }
            } else {
                const v2365 = removeNode(old, null);
                v2365;
                const v2366 = createNode(vnode, hooks, ns);
                const v2367 = insertNode(parent, v2366, nextSibling);
                v2367;
            }
        };
        const updateText = function (old, vnode) {
            const v2368 = old.children;
            const v2369 = v2368.toString();
            const v2370 = vnode.children;
            const v2371 = v2370.toString();
            const v2372 = v2369 !== v2371;
            if (v2372) {
                const v2373 = old.dom;
                const v2374 = vnode.children;
                v2373.nodeValue = v2374;
            }
            const v2375 = old.dom;
            vnode.dom = v2375;
        };
        const updateHTML = function (parent, old, vnode, nextSibling) {
            const v2376 = old.children;
            const v2377 = vnode.children;
            const v2378 = v2376 !== v2377;
            if (v2378) {
                const v2379 = toFragment(old);
                v2379;
                const v2380 = createHTML(vnode);
                const v2381 = insertNode(parent, v2380, nextSibling);
                v2381;
            } else {
                const v2382 = old.dom;
                const v2383 = old.domSize;
                vnode.dom = v2382, vnode.domSize = v2383;
            }
        };
        const updateFragment = function (parent, old, vnode, hooks, nextSibling, ns) {
            const v2384 = old.children;
            const v2385 = vnode.children;
            const v2386 = updateNodes(parent, v2384, v2385, hooks, nextSibling, ns);
            v2386;
            var domSize = 0;
            var children = vnode.children;
            vnode.dom = null;
            const v2387 = children != null;
            if (v2387) {
                var i = 0;
                const v2388 = children.length;
                let v2389 = i < v2388;
                while (v2389) {
                    var child = children[i];
                    const v2391 = child != null;
                    const v2392 = child.dom;
                    const v2393 = v2392 != null;
                    const v2394 = v2391 && v2393;
                    if (v2394) {
                        const v2395 = vnode.dom;
                        const v2396 = v2395 == null;
                        if (v2396) {
                            const v2397 = child.dom;
                            vnode.dom = v2397;
                        }
                        const v2398 = child.domSize;
                        domSize += v2398 || 1;
                    }
                    const v2390 = i++;
                    v2389 = i < v2388;
                }
                const v2399 = domSize !== 1;
                if (v2399) {
                    vnode.domSize = domSize;
                }
            }
        };
        const updateElement = function (old, vnode, hooks, ns) {
            const v2400 = old.dom;
            vnode.dom = v2400;
            var element = vnode.dom;
            const v2401 = vnode.tag;
            switch (v2401) {
            case 'svg':
                ns = 'http://www.w3.org/2000/svg';
                break;
            case 'math':
                ns = 'http://www.w3.org/1998/Math/MathML';
                break;
            }
            const v2402 = vnode.tag;
            const v2403 = v2402 === 'textarea';
            if (v2403) {
                const v2404 = vnode.attrs;
                const v2405 = v2404 == null;
                if (v2405) {
                    const v2406 = {};
                    vnode.attrs = v2406;
                }
                const v2407 = vnode.text;
                const v2408 = v2407 != null;
                if (v2408) {
                    const v2409 = vnode.attrs;
                    const v2410 = vnode.text;
                    v2409.value = v2410;
                    vnode.text = undefined;
                }
            }
            const v2411 = old.attrs;
            const v2412 = vnode.attrs;
            const v2413 = updateAttrs(vnode, v2411, v2412, ns);
            v2413;
            const v2414 = vnode.attrs;
            const v2415 = v2414 != null;
            const v2416 = vnode.attrs;
            const v2417 = v2416.contenteditable;
            const v2418 = v2417 != null;
            const v2419 = v2415 && v2418;
            if (v2419) {
                const v2420 = setContentEditable(vnode);
                v2420;
            } else {
                const v2421 = old.text;
                const v2422 = v2421 != null;
                const v2423 = vnode.text;
                const v2424 = v2423 != null;
                const v2425 = v2422 && v2424;
                const v2426 = vnode.text;
                const v2427 = v2426 !== '';
                const v2428 = v2425 && v2427;
                if (v2428) {
                    const v2429 = old.text;
                    const v2430 = v2429.toString();
                    const v2431 = vnode.text;
                    const v2432 = v2431.toString();
                    const v2433 = v2430 !== v2432;
                    if (v2433) {
                        const v2434 = old.dom;
                        const v2435 = v2434.firstChild;
                        const v2436 = vnode.text;
                        v2435.nodeValue = v2436;
                    }
                } else {
                    const v2437 = old.text;
                    const v2438 = v2437 != null;
                    if (v2438) {
                        const v2439 = old.text;
                        const v2440 = old.dom;
                        const v2441 = v2440.firstChild;
                        const v2442 = Vnode('#', undefined, undefined, v2439, undefined, v2441);
                        old.children = [v2442];
                    }
                    const v2443 = vnode.text;
                    const v2444 = v2443 != null;
                    if (v2444) {
                        const v2445 = vnode.text;
                        const v2446 = Vnode('#', undefined, undefined, v2445, undefined, undefined);
                        vnode.children = [v2446];
                    }
                    const v2447 = old.children;
                    const v2448 = vnode.children;
                    const v2449 = updateNodes(element, v2447, v2448, hooks, null, ns);
                    v2449;
                }
            }
        };
        const updateComponent = function (parent, old, vnode, hooks, nextSibling, recycling, ns) {
            const v2450 = vnode.tag;
            const v2451 = v2450.view;
            const v2452 = vnode.state;
            const v2453 = v2451.call(v2452, vnode);
            const v2454 = Vnode.normalize(v2453);
            vnode.instance = v2454;
            const v2455 = vnode.tag;
            const v2456 = updateLifecycle(v2455, vnode, hooks, recycling);
            v2456;
            const v2457 = vnode.instance;
            const v2458 = v2457 != null;
            if (v2458) {
                const v2459 = old.instance;
                const v2460 = v2459 == null;
                if (v2460) {
                    const v2461 = vnode.instance;
                    const v2462 = createNode(v2461, hooks, ns);
                    const v2463 = insertNode(parent, v2462, nextSibling);
                    v2463;
                } else {
                    const v2464 = old.instance;
                    const v2465 = vnode.instance;
                    const v2466 = updateNode(parent, v2464, v2465, hooks, nextSibling, recycling, ns);
                    v2466;
                }
                const v2467 = vnode.instance;
                const v2468 = v2467.dom;
                vnode.dom = v2468;
                const v2469 = vnode.instance;
                const v2470 = v2469.domSize;
                vnode.domSize = v2470;
            } else {
                const v2471 = old.instance;
                const v2472 = v2471 != null;
                if (v2472) {
                    const v2473 = old.instance;
                    const v2474 = removeNode(v2473, null);
                    v2474;
                    vnode.dom = undefined;
                    vnode.domSize = 0;
                } else {
                    const v2475 = old.dom;
                    vnode.dom = v2475;
                    const v2476 = old.domSize;
                    vnode.domSize = v2476;
                }
            }
        };
        const isRecyclable = function (old, vnodes) {
            const v2477 = old.pool;
            const v2478 = v2477 != null;
            const v2479 = old.pool;
            const v2480 = v2479.length;
            const v2481 = vnodes.length;
            const v2482 = v2480 - v2481;
            const v2483 = Math.abs(v2482);
            const v2484 = old.length;
            const v2485 = vnodes.length;
            const v2486 = v2484 - v2485;
            const v2487 = Math.abs(v2486);
            const v2488 = v2483 <= v2487;
            const v2489 = v2478 && v2488;
            if (v2489) {
                const v2490 = old[0];
                const v2491 = old[0];
                const v2492 = v2491.children;
                const v2493 = v2490 && v2492;
                const v2494 = old[0];
                const v2495 = v2494.children;
                const v2496 = v2495.length;
                const v2497 = v2493 && v2496;
                var oldChildrenLength = v2497 || 0;
                const v2498 = old.pool;
                const v2499 = v2498[0];
                const v2500 = old.pool;
                const v2501 = v2500[0];
                const v2502 = v2501.children;
                const v2503 = v2499 && v2502;
                const v2504 = old.pool;
                const v2505 = v2504[0];
                const v2506 = v2505.children;
                const v2507 = v2506.length;
                const v2508 = v2503 && v2507;
                var poolChildrenLength = v2508 || 0;
                const v2509 = vnodes[0];
                const v2510 = vnodes[0];
                const v2511 = v2510.children;
                const v2512 = v2509 && v2511;
                const v2513 = vnodes[0];
                const v2514 = v2513.children;
                const v2515 = v2514.length;
                const v2516 = v2512 && v2515;
                var vnodesChildrenLength = v2516 || 0;
                const v2517 = poolChildrenLength - vnodesChildrenLength;
                const v2518 = Math.abs(v2517);
                const v2519 = oldChildrenLength - vnodesChildrenLength;
                const v2520 = Math.abs(v2519);
                const v2521 = v2518 <= v2520;
                if (v2521) {
                    return true;
                }
            }
            return false;
        };
        const getKeyMap = function (vnodes, end) {
            var map = {};
            var i = 0;
            var i = 0;
            let v2522 = i < end;
            while (v2522) {
                var vnode = vnodes[i];
                const v2524 = vnode != null;
                if (v2524) {
                    var key2 = vnode.key;
                    const v2525 = key2 != null;
                    if (v2525) {
                        map[key2] = i;
                    }
                }
                const v2523 = i++;
                v2522 = i < end;
            }
            return map;
        };
        const toFragment = function (vnode) {
            var count0 = vnode.domSize;
            const v2526 = count0 != null;
            const v2527 = vnode.dom;
            const v2528 = v2527 == null;
            const v2529 = v2526 || v2528;
            if (v2529) {
                var fragment = $doc.createDocumentFragment();
                const v2530 = count0 > 0;
                if (v2530) {
                    var dom = vnode.dom;
                    let v2531 = --count0;
                    while (v2531) {
                        const v2532 = dom.nextSibling;
                        const v2533 = fragment.appendChild(v2532);
                        v2533;
                        v2531 = --count0;
                    }
                    const v2534 = fragment.firstChild;
                    const v2535 = fragment.insertBefore(dom, v2534);
                    v2535;
                }
                return fragment;
            } else {
                const v2536 = vnode.dom;
                return v2536;
            }
        };
        const getNextSibling = function (vnodes, i, nextSibling) {
            const v2537 = vnodes.length;
            let v2538 = i < v2537;
            while (v2538) {
                const v2540 = vnodes[i];
                const v2541 = v2540 != null;
                const v2542 = vnodes[i];
                const v2543 = v2542.dom;
                const v2544 = v2543 != null;
                const v2545 = v2541 && v2544;
                if (v2545) {
                    const v2546 = vnodes[i];
                    const v2547 = v2546.dom;
                    return v2547;
                }
                const v2539 = i++;
                v2538 = i < v2537;
            }
            return nextSibling;
        };
        const insertNode = function (parent, dom, nextSibling) {
            const v2548 = nextSibling.parentNode;
            const v2549 = nextSibling && v2548;
            if (v2549) {
                const v2550 = parent.insertBefore(dom, nextSibling);
                v2550;
            } else {
                const v2551 = parent.appendChild(dom);
                v2551;
            }
        };
        const setContentEditable = function (vnode) {
            var children = vnode.children;
            const v2552 = children != null;
            const v2553 = children.length;
            const v2554 = v2553 === 1;
            const v2555 = v2552 && v2554;
            const v2556 = children[0];
            const v2557 = v2556.tag;
            const v2558 = v2557 === '<';
            const v2559 = v2555 && v2558;
            if (v2559) {
                const v2560 = children[0];
                var content = v2560.children;
                const v2561 = vnode.dom;
                const v2562 = v2561.innerHTML;
                const v2563 = v2562 !== content;
                if (v2563) {
                    const v2564 = vnode.dom;
                    v2564.innerHTML = content;
                }
            } else {
                const v2565 = vnode.text;
                const v2566 = v2565 != null;
                const v2567 = children != null;
                const v2568 = children.length;
                const v2569 = v2568 !== 0;
                const v2570 = v2567 && v2569;
                const v2571 = v2566 || v2570;
                if (v2571) {
                    const v2572 = new Error('Child node of a contenteditable must be trusted');
                    throw v2572;
                }
            }
        };
        const removeNodes = function (vnodes, start, end, context) {
            var i = start;
            let v2573 = i < end;
            while (v2573) {
                var vnode = vnodes[i];
                const v2575 = vnode != null;
                if (v2575) {
                    const v2576 = vnode.skip;
                    if (v2576) {
                        vnode.skip = false;
                    } else {
                        const v2577 = removeNode(vnode, context);
                        v2577;
                    }
                }
                const v2574 = i++;
                v2573 = i < end;
            }
        };
        const removeNode = function (vnode, context) {
            var expected = 1;
            var called = 0;
            const v2578 = vnode.attrs;
            const v2579 = vnode.attrs;
            const v2580 = v2579.onbeforeremove;
            const v2581 = v2578 && v2580;
            if (v2581) {
                const v2582 = vnode.attrs;
                const v2583 = v2582.onbeforeremove;
                const v2584 = vnode.state;
                var result = v2583.call(v2584, vnode);
                const v2585 = result != null;
                const v2586 = result.then;
                const v2587 = typeof v2586;
                const v2588 = v2587 === 'function';
                const v2589 = v2585 && v2588;
                if (v2589) {
                    const v2590 = expected++;
                    v2590;
                    const v2591 = result.then(continuation, continuation);
                    v2591;
                }
            }
            const v2592 = vnode.tag;
            const v2593 = typeof v2592;
            const v2594 = v2593 !== 'string';
            const v2595 = vnode.tag;
            const v2596 = v2595.onbeforeremove;
            const v2597 = v2594 && v2596;
            if (v2597) {
                const v2598 = vnode.tag;
                const v2599 = v2598.onbeforeremove;
                const v2600 = vnode.state;
                var result = v2599.call(v2600, vnode);
                const v2601 = result != null;
                const v2602 = result.then;
                const v2603 = typeof v2602;
                const v2604 = v2603 === 'function';
                const v2605 = v2601 && v2604;
                if (v2605) {
                    const v2606 = expected++;
                    v2606;
                    const v2607 = result.then(continuation, continuation);
                    v2607;
                }
            }
            const v2608 = continuation();
            v2608;
            const continuation = function () {
                const v2609 = ++called;
                const v2610 = v2609 === expected;
                if (v2610) {
                    const v2611 = onremove(vnode);
                    v2611;
                    const v2612 = vnode.dom;
                    if (v2612) {
                        const v2613 = vnode.domSize;
                        var count0 = v2613 || 1;
                        const v2614 = count0 > 1;
                        if (v2614) {
                            var dom = vnode.dom;
                            let v2615 = --count0;
                            while (v2615) {
                                const v2616 = dom.nextSibling;
                                const v2617 = removeNodeFromDOM(v2616);
                                v2617;
                                v2615 = --count0;
                            }
                        }
                        const v2618 = vnode.dom;
                        const v2619 = removeNodeFromDOM(v2618);
                        v2619;
                        const v2620 = context != null;
                        const v2621 = vnode.domSize;
                        const v2622 = v2621 == null;
                        const v2623 = v2620 && v2622;
                        const v2624 = vnode.attrs;
                        const v2625 = hasIntegrationMethods(v2624);
                        const v2626 = !v2625;
                        const v2627 = v2623 && v2626;
                        const v2628 = vnode.tag;
                        const v2629 = typeof v2628;
                        const v2630 = v2629 === 'string';
                        const v2631 = v2627 && v2630;
                        if (v2631) {
                            const v2632 = context.pool;
                            const v2633 = !v2632;
                            if (v2633) {
                                context.pool = [vnode];
                            } else {
                                const v2634 = context.pool;
                                const v2635 = v2634.push(vnode);
                                v2635;
                            }
                        }
                    }
                }
            };
        };
        const removeNodeFromDOM = function (node) {
            var parent = node.parentNode;
            const v2636 = parent != null;
            if (v2636) {
                const v2637 = parent.removeChild(node);
                v2637;
            }
        };
        const onremove = function (vnode) {
            const v2638 = vnode.attrs;
            const v2639 = vnode.attrs;
            const v2640 = v2639.onremove;
            const v2641 = v2638 && v2640;
            if (v2641) {
                const v2642 = vnode.attrs;
                const v2643 = v2642.onremove;
                const v2644 = vnode.state;
                const v2645 = v2643.call(v2644, vnode);
                v2645;
            }
            const v2646 = vnode.tag;
            const v2647 = typeof v2646;
            const v2648 = v2647 !== 'string';
            const v2649 = vnode.tag;
            const v2650 = v2649.onremove;
            const v2651 = v2648 && v2650;
            if (v2651) {
                const v2652 = vnode.tag;
                const v2653 = v2652.onremove;
                const v2654 = vnode.state;
                const v2655 = v2653.call(v2654, vnode);
                v2655;
            }
            const v2656 = vnode.instance;
            const v2657 = v2656 != null;
            if (v2657) {
                const v2658 = vnode.instance;
                const v2659 = onremove(v2658);
                v2659;
            } else {
                var children = vnode.children;
                const v2660 = Array.isArray(children);
                if (v2660) {
                    var i = 0;
                    const v2661 = children.length;
                    let v2662 = i < v2661;
                    while (v2662) {
                        var child = children[i];
                        const v2664 = child != null;
                        if (v2664) {
                            const v2665 = onremove(child);
                            v2665;
                        }
                        const v2663 = i++;
                        v2662 = i < v2661;
                    }
                }
            }
        };
        const setAttrs = function (vnode, attrs2, ns) {
            let key2;
            for (key2 in attrs2) {
                const v2666 = attrs2[key2];
                const v2667 = setAttr(vnode, key2, null, v2666, ns);
                v2667;
            }
        };
        const setAttr = function (vnode, key2, old, value, ns) {
            var element = vnode.dom;
            const v2668 = key2 === 'key';
            const v2669 = key2 === 'is';
            const v2670 = v2668 || v2669;
            const v2671 = old === value;
            const v2672 = isFormAttribute(vnode, key2);
            const v2673 = !v2672;
            const v2674 = v2671 && v2673;
            const v2675 = typeof value;
            const v2676 = v2675 !== 'object';
            const v2677 = v2674 && v2676;
            const v2678 = v2670 || v2677;
            const v2679 = typeof value;
            const v2680 = v2679 === 'undefined';
            const v2681 = v2678 || v2680;
            const v2682 = isLifecycleMethod(key2);
            const v2683 = v2681 || v2682;
            if (v2683) {
                return;
            }
            var nsLastIndex = key2.indexOf(':');
            const v2684 = -1;
            const v2685 = nsLastIndex > v2684;
            const v2686 = key2.substr(0, nsLastIndex);
            const v2687 = v2686 === 'xlink';
            const v2688 = v2685 && v2687;
            if (v2688) {
                const v2689 = nsLastIndex + 1;
                const v2690 = key2.slice(v2689);
                const v2691 = element.setAttributeNS('http://www.w3.org/1999/xlink', v2690, value);
                v2691;
            } else {
                const v2692 = key2[0];
                const v2693 = v2692 === 'o';
                const v2694 = key2[1];
                const v2695 = v2694 === 'n';
                const v2696 = v2693 && v2695;
                const v2697 = typeof value;
                const v2698 = v2697 === 'function';
                const v2699 = v2696 && v2698;
                if (v2699) {
                    const v2700 = updateEvent(vnode, key2, value);
                    v2700;
                } else {
                    const v2701 = key2 === 'style';
                    if (v2701) {
                        const v2702 = updateStyle(element, old, value);
                        v2702;
                    } else {
                        const v2703 = key2 in element;
                        const v2704 = isAttribute(key2);
                        const v2705 = !v2704;
                        const v2706 = v2703 && v2705;
                        const v2707 = ns === undefined;
                        const v2708 = v2706 && v2707;
                        const v2709 = isCustomElement(vnode);
                        const v2710 = !v2709;
                        const v2711 = v2708 && v2710;
                        if (v2711) {
                            const v2712 = vnode.tag;
                            const v2713 = v2712 === 'input';
                            const v2714 = key2 === 'value';
                            const v2715 = v2713 && v2714;
                            const v2716 = vnode.dom;
                            const v2717 = v2716.value;
                            const v2718 = v2717 === value;
                            const v2719 = v2715 && v2718;
                            const v2720 = vnode.dom;
                            const v2721 = $doc.activeElement;
                            const v2722 = v2720 === v2721;
                            const v2723 = v2719 && v2722;
                            if (v2723) {
                                return;
                            }
                            const v2724 = vnode.tag;
                            const v2725 = v2724 === 'select';
                            const v2726 = key2 === 'value';
                            const v2727 = v2725 && v2726;
                            const v2728 = vnode.dom;
                            const v2729 = v2728.value;
                            const v2730 = v2729 === value;
                            const v2731 = v2727 && v2730;
                            const v2732 = vnode.dom;
                            const v2733 = $doc.activeElement;
                            const v2734 = v2732 === v2733;
                            const v2735 = v2731 && v2734;
                            if (v2735) {
                                return;
                            }
                            const v2736 = vnode.tag;
                            const v2737 = v2736 === 'option';
                            const v2738 = key2 === 'value';
                            const v2739 = v2737 && v2738;
                            const v2740 = vnode.dom;
                            const v2741 = v2740.value;
                            const v2742 = v2741 === value;
                            const v2743 = v2739 && v2742;
                            if (v2743) {
                                return;
                            }
                            element[key2] = value;
                        } else {
                            const v2744 = typeof value;
                            const v2745 = v2744 === 'boolean';
                            if (v2745) {
                                if (value) {
                                    const v2746 = element.setAttribute(key2, '');
                                    v2746;
                                } else {
                                    const v2747 = element.removeAttribute(key2);
                                    v2747;
                                }
                            } else {
                                const v2748 = key2 === 'className';
                                let v2749;
                                if (v2748) {
                                    v2749 = 'class';
                                } else {
                                    v2749 = key2;
                                }
                                const v2750 = element.setAttribute(v2749, value);
                                v2750;
                            }
                        }
                    }
                }
            }
        };
        const setLateAttrs = function (vnode) {
            var attrs2 = vnode.attrs;
            const v2751 = vnode.tag;
            const v2752 = v2751 === 'select';
            const v2753 = attrs2 != null;
            const v2754 = v2752 && v2753;
            if (v2754) {
                const v2755 = 'value' in attrs2;
                if (v2755) {
                    const v2756 = attrs2.value;
                    const v2757 = setAttr(vnode, 'value', null, v2756, undefined);
                    v2757;
                }
                const v2758 = 'selectedIndex' in attrs2;
                if (v2758) {
                    const v2759 = attrs2.selectedIndex;
                    const v2760 = setAttr(vnode, 'selectedIndex', null, v2759, undefined);
                    v2760;
                }
            }
        };
        const updateAttrs = function (vnode, old, attrs2, ns) {
            const v2761 = attrs2 != null;
            if (v2761) {
                let key2;
                for (key2 in attrs2) {
                    const v2762 = old[key2];
                    const v2763 = old && v2762;
                    const v2764 = attrs2[key2];
                    const v2765 = setAttr(vnode, key2, v2763, v2764, ns);
                    v2765;
                }
            }
            const v2766 = old != null;
            if (v2766) {
                let key2;
                for (key2 in old) {
                    const v2767 = attrs2 == null;
                    const v2768 = key2 in attrs2;
                    const v2769 = !v2768;
                    const v2770 = v2767 || v2769;
                    if (v2770) {
                        const v2771 = key2 === 'className';
                        if (v2771) {
                            key2 = 'class';
                        }
                        const v2772 = key2[0];
                        const v2773 = v2772 === 'o';
                        const v2774 = key2[1];
                        const v2775 = v2774 === 'n';
                        const v2776 = v2773 && v2775;
                        const v2777 = isLifecycleMethod(key2);
                        const v2778 = !v2777;
                        const v2779 = v2776 && v2778;
                        if (v2779) {
                            const v2780 = updateEvent(vnode, key2, undefined);
                            v2780;
                        } else {
                            const v2781 = key2 !== 'key';
                            if (v2781) {
                                const v2782 = vnode.dom;
                                const v2783 = v2782.removeAttribute(key2);
                                v2783;
                            }
                        }
                    }
                }
            }
        };
        const isFormAttribute = function (vnode, attr) {
            const v2784 = attr === 'value';
            const v2785 = attr === 'checked';
            const v2786 = v2784 || v2785;
            const v2787 = attr === 'selectedIndex';
            const v2788 = v2786 || v2787;
            const v2789 = attr === 'selected';
            const v2790 = vnode.dom;
            const v2791 = $doc.activeElement;
            const v2792 = v2790 === v2791;
            const v2793 = v2789 && v2792;
            const v2794 = v2788 || v2793;
            return v2794;
        };
        const isLifecycleMethod = function (attr) {
            const v2795 = attr === 'oninit';
            const v2796 = attr === 'oncreate';
            const v2797 = v2795 || v2796;
            const v2798 = attr === 'onupdate';
            const v2799 = v2797 || v2798;
            const v2800 = attr === 'onremove';
            const v2801 = v2799 || v2800;
            const v2802 = attr === 'onbeforeremove';
            const v2803 = v2801 || v2802;
            const v2804 = attr === 'onbeforeupdate';
            const v2805 = v2803 || v2804;
            return v2805;
        };
        const isAttribute = function (attr) {
            const v2806 = attr === 'href';
            const v2807 = attr === 'list';
            const v2808 = v2806 || v2807;
            const v2809 = attr === 'form';
            const v2810 = v2808 || v2809;
            const v2811 = attr === 'width';
            const v2812 = v2810 || v2811;
            const v2813 = attr === 'height';
            const v2814 = v2812 || v2813;
            return v2814;
        };
        const isCustomElement = function (vnode) {
            const v2815 = vnode.attrs;
            const v2816 = v2815.is;
            const v2817 = vnode.tag;
            const v2818 = v2817.indexOf('-');
            const v2819 = -1;
            const v2820 = v2818 > v2819;
            const v2821 = v2816 || v2820;
            return v2821;
        };
        const hasIntegrationMethods = function (source) {
            const v2822 = source != null;
            const v2823 = source.oncreate;
            const v2824 = source.onupdate;
            const v2825 = v2823 || v2824;
            const v2826 = source.onbeforeremove;
            const v2827 = v2825 || v2826;
            const v2828 = source.onremove;
            const v2829 = v2827 || v2828;
            const v2830 = v2822 && v2829;
            return v2830;
        };
        const updateStyle = function (element, old, style) {
            const v2831 = old === style;
            if (v2831) {
                const v2832 = element.style;
                v2832.cssText = '', old = null;
            }
            const v2833 = style == null;
            if (v2833) {
                const v2834 = element.style;
                v2834.cssText = '';
            } else {
                const v2835 = typeof style;
                const v2836 = v2835 === 'string';
                if (v2836) {
                    const v2837 = element.style;
                    v2837.cssText = style;
                } else {
                    const v2838 = typeof old;
                    const v2839 = v2838 === 'string';
                    if (v2839) {
                        const v2840 = element.style;
                        v2840.cssText = '';
                    }
                    let key2;
                    for (key2 in style) {
                        const v2841 = element.style;
                        const v2842 = style[key2];
                        v2841[key2] = v2842;
                    }
                    const v2843 = old != null;
                    const v2844 = typeof old;
                    const v2845 = v2844 !== 'string';
                    const v2846 = v2843 && v2845;
                    if (v2846) {
                        let key2;
                        for (key2 in old) {
                            const v2847 = key2 in style;
                            const v2848 = !v2847;
                            if (v2848) {
                                const v2849 = element.style;
                                v2849[key2] = '';
                            }
                        }
                    }
                }
            }
        };
        const updateEvent = function (vnode, key2, value) {
            var element = vnode.dom;
            let callback;
            const v2850 = typeof onevent;
            const v2851 = v2850 !== 'function';
            const v2853 = function (e) {
                var result = value.call(element, e);
                const v2852 = onevent.call(element, e);
                v2852;
                return result;
            };
            if (v2851) {
                callback = value;
            } else {
                callback = v2853;
            }
            const v2854 = key2 in element;
            if (v2854) {
                const v2855 = typeof value;
                const v2856 = v2855 === 'function';
                let v2857;
                if (v2856) {
                    v2857 = callback;
                } else {
                    v2857 = null;
                }
                element[key2] = v2857;
            } else {
                var eventName = key2.slice(2);
                const v2858 = vnode.events;
                const v2859 = v2858 === undefined;
                if (v2859) {
                    const v2860 = {};
                    vnode.events = v2860;
                }
                const v2861 = vnode.events;
                const v2862 = v2861[key2];
                const v2863 = v2862 === callback;
                if (v2863) {
                    return;
                }
                const v2864 = vnode.events;
                const v2865 = v2864[key2];
                const v2866 = v2865 != null;
                if (v2866) {
                    const v2867 = vnode.events;
                    const v2868 = v2867[key2];
                    const v2869 = element.removeEventListener(eventName, v2868, false);
                    v2869;
                }
                const v2870 = typeof value;
                const v2871 = v2870 === 'function';
                if (v2871) {
                    const v2872 = vnode.events;
                    v2872[key2] = callback;
                    const v2873 = vnode.events;
                    const v2874 = v2873[key2];
                    const v2875 = element.addEventListener(eventName, v2874, false);
                    v2875;
                }
            }
        };
        const initLifecycle = function (source, vnode, hooks) {
            const v2876 = source.oninit;
            const v2877 = typeof v2876;
            const v2878 = v2877 === 'function';
            if (v2878) {
                const v2879 = source.oninit;
                const v2880 = vnode.state;
                const v2881 = v2879.call(v2880, vnode);
                v2881;
            }
            const v2882 = source.oncreate;
            const v2883 = typeof v2882;
            const v2884 = v2883 === 'function';
            if (v2884) {
                const v2885 = source.oncreate;
                const v2886 = vnode.state;
                const v2887 = v2885.bind(v2886, vnode);
                const v2888 = hooks.push(v2887);
                v2888;
            }
        };
        const updateLifecycle = function (source, vnode, hooks, recycling) {
            if (recycling) {
                const v2889 = initLifecycle(source, vnode, hooks);
                v2889;
            } else {
                const v2890 = source.onupdate;
                const v2891 = typeof v2890;
                const v2892 = v2891 === 'function';
                if (v2892) {
                    const v2893 = source.onupdate;
                    const v2894 = vnode.state;
                    const v2895 = v2893.bind(v2894, vnode);
                    const v2896 = hooks.push(v2895);
                    v2896;
                }
            }
        };
        const shouldUpdate = function (vnode, old) {
            var forceVnodeUpdate;
            var forceComponentUpdate;
            const v2897 = vnode.attrs;
            const v2898 = v2897 != null;
            const v2899 = vnode.attrs;
            const v2900 = v2899.onbeforeupdate;
            const v2901 = typeof v2900;
            const v2902 = v2901 === 'function';
            const v2903 = v2898 && v2902;
            if (v2903) {
                const v2904 = vnode.attrs;
                const v2905 = v2904.onbeforeupdate;
                const v2906 = vnode.state;
                forceVnodeUpdate = v2905.call(v2906, vnode, old);
            }
            const v2907 = vnode.tag;
            const v2908 = typeof v2907;
            const v2909 = v2908 !== 'string';
            const v2910 = vnode.tag;
            const v2911 = v2910.onbeforeupdate;
            const v2912 = typeof v2911;
            const v2913 = v2912 === 'function';
            const v2914 = v2909 && v2913;
            if (v2914) {
                const v2915 = vnode.tag;
                const v2916 = v2915.onbeforeupdate;
                const v2917 = vnode.state;
                forceComponentUpdate = v2916.call(v2917, vnode, old);
            }
            const v2918 = forceVnodeUpdate === undefined;
            const v2919 = forceComponentUpdate === undefined;
            const v2920 = v2918 && v2919;
            const v2921 = !v2920;
            const v2922 = !forceVnodeUpdate;
            const v2923 = v2921 && v2922;
            const v2924 = !forceComponentUpdate;
            const v2925 = v2923 && v2924;
            if (v2925) {
                const v2926 = old.dom;
                vnode.dom = v2926;
                const v2927 = old.domSize;
                vnode.domSize = v2927;
                const v2928 = old.instance;
                vnode.instance = v2928;
                return true;
            }
            return false;
        };
        const render = function (dom, vnodes) {
            const v2929 = !dom;
            if (v2929) {
                const v2930 = new Error('Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.');
                throw v2930;
            }
            var hooks = [];
            var active = $doc.activeElement;
            const v2931 = dom.vnodes;
            const v2932 = v2931 == null;
            if (v2932) {
                dom.textContent = '';
            }
            const v2933 = Array.isArray(vnodes);
            const v2934 = !v2933;
            if (v2934) {
                vnodes = [vnodes];
            }
            const v2935 = dom.vnodes;
            const v2936 = Vnode.normalizeChildren(vnodes);
            const v2937 = updateNodes(dom, v2935, v2936, hooks, null, undefined);
            v2937;
            dom.vnodes = vnodes;
            var i = 0;
            const v2938 = hooks.length;
            let v2939 = i < v2938;
            while (v2939) {
                const v2941 = hooks[i]();
                v2941;
                const v2940 = i++;
                v2939 = i < v2938;
            }
            const v2942 = $doc.activeElement;
            const v2943 = v2942 !== active;
            if (v2943) {
                const v2944 = active.focus();
                v2944;
            }
        };
        const v2945 = {};
        v2945.render = render;
        v2945.setEventCallback = setEventCallback;
        return v2945;
    };
    const throttle = function (callback) {
        var time = 16;
        var last = 0;
        var pending = null;
        let timeout;
        const v2946 = typeof requestAnimationFrame;
        const v2947 = v2946 === 'function';
        if (v2947) {
            timeout = requestAnimationFrame;
        } else {
            timeout = setTimeout;
        }
        const v2958 = function () {
            var now = Date.now();
            const v2948 = last === 0;
            const v2949 = now - last;
            const v2950 = v2949 >= time;
            const v2951 = v2948 || v2950;
            if (v2951) {
                last = now;
                const v2952 = callback();
                v2952;
            } else {
                const v2953 = pending === null;
                if (v2953) {
                    const v2955 = function () {
                        pending = null;
                        const v2954 = callback();
                        v2954;
                        last = Date.now();
                    };
                    const v2956 = now - last;
                    const v2957 = time - v2956;
                    pending = timeout(v2955, v2957);
                }
            }
        };
        return v2958;
    };
    var _11 = function ($window) {
        var renderService = coreRenderer($window);
        const v2962 = function (e) {
            const v2959 = e.redraw;
            const v2960 = v2959 !== false;
            if (v2960) {
                const v2961 = redraw();
                v2961;
            }
        };
        const v2963 = renderService.setEventCallback(v2962);
        v2963;
        var callbacks = [];
        const subscribe = function (key1, callback) {
            const v2964 = unsubscribe(key1);
            v2964;
            const v2965 = throttle(callback);
            const v2966 = callbacks.push(key1, v2965);
            v2966;
        };
        const unsubscribe = function (key1) {
            var index = callbacks.indexOf(key1);
            const v2967 = -1;
            const v2968 = index > v2967;
            if (v2968) {
                const v2969 = callbacks.splice(index, 2);
                v2969;
            }
        };
        const redraw = function () {
            var i = 1;
            const v2970 = callbacks.length;
            let v2971 = i < v2970;
            while (v2971) {
                const v2972 = callbacks[i]();
                v2972;
                v2971 = i < v2970;
            }
        };
        const v2973 = renderService.render;
        const v2974 = {};
        v2974.subscribe = subscribe;
        v2974.unsubscribe = unsubscribe;
        v2974.redraw = redraw;
        v2974.render = v2973;
        return v2974;
    };
    var redrawService = _11(window);
    const v2975 = redrawService.redraw;
    const v2976 = requestService.setCompletionCallback(v2975);
    v2976;
    var _16 = function (redrawService0) {
        const v2988 = function (root, component) {
            const v2977 = component === null;
            if (v2977) {
                const v2978 = [];
                const v2979 = redrawService0.render(root, v2978);
                v2979;
                const v2980 = redrawService0.unsubscribe(root);
                v2980;
                return;
            }
            const v2981 = component.view;
            const v2982 = v2981 == null;
            if (v2982) {
                const v2983 = new Error('m.mount(element, component) expects a component, not a vnode');
                throw v2983;
            }
            var run0 = function () {
                const v2984 = Vnode(component);
                const v2985 = redrawService0.render(root, v2984);
                v2985;
            };
            const v2986 = redrawService0.subscribe(root, run0);
            v2986;
            const v2987 = redrawService0.redraw();
            v2987;
        };
        return v2988;
    };
    const v2989 = _16(redrawService);
    m.mount = v2989;
    var Promise = PromisePolyfill;
    var parseQueryString = function (string) {
        const v2990 = string === '';
        const v2991 = string == null;
        const v2992 = v2990 || v2991;
        if (v2992) {
            const v2993 = {};
            return v2993;
        }
        const v2994 = string.charAt(0);
        const v2995 = v2994 === '?';
        if (v2995) {
            string = string.slice(1);
        }
        var entries = string.split('&');
        var data0 = {};
        var counters = {};
        var i = 0;
        const v2996 = entries.length;
        let v2997 = i < v2996;
        while (v2997) {
            const v2999 = entries[i];
            var entry = v2999.split('=');
            const v3000 = entry[0];
            var key5 = decodeURIComponent(v3000);
            let value;
            const v3001 = entry.length;
            const v3002 = v3001 === 2;
            const v3003 = entry[1];
            const v3004 = decodeURIComponent(v3003);
            if (v3002) {
                value = v3004;
            } else {
                value = '';
            }
            const v3005 = value === 'true';
            if (v3005) {
                value = true;
            } else {
                const v3006 = value === 'false';
                if (v3006) {
                    value = false;
                }
            }
            var levels = key5.split(/\]\[?|\[/);
            var cursor = data0;
            const v3007 = key5.indexOf('[');
            const v3008 = -1;
            const v3009 = v3007 > v3008;
            if (v3009) {
                const v3010 = levels.pop();
                v3010;
            }
            var j = 0;
            const v3011 = levels.length;
            let v3012 = j < v3011;
            while (v3012) {
                var level = levels[j];
                const v3014 = j + 1;
                var nextLevel = levels[v3014];
                const v3015 = nextLevel == '';
                const v3016 = parseInt(nextLevel, 10);
                const v3017 = isNaN(v3016);
                const v3018 = !v3017;
                var isNumber = v3015 || v3018;
                const v3019 = levels.length;
                const v3020 = v3019 - 1;
                var isValue = j === v3020;
                const v3021 = level === '';
                if (v3021) {
                    const v3022 = levels.slice(0, j);
                    var key5 = v3022.join();
                    const v3023 = counters[key5];
                    const v3024 = v3023 == null;
                    if (v3024) {
                        counters[key5] = 0;
                    }
                    const v3025 = counters[key5];
                    const v3026 = v3025++;
                    level = v3026;
                }
                const v3027 = cursor[level];
                const v3028 = v3027 == null;
                if (v3028) {
                    const v3029 = [];
                    const v3030 = {};
                    let v3031;
                    if (isNumber) {
                        v3031 = v3029;
                    } else {
                        v3031 = v3030;
                    }
                    let v3032;
                    if (isValue) {
                        v3032 = value;
                    } else {
                        v3032 = v3031;
                    }
                    cursor[level] = v3032;
                }
                cursor = cursor[level];
                const v3013 = j++;
                v3012 = j < v3011;
            }
            const v2998 = i++;
            v2997 = i < v2996;
        }
        return data0;
    };
    var coreRouter = function ($window) {
        const v3033 = $window.history;
        const v3034 = v3033.pushState;
        const v3035 = typeof v3034;
        var supportsPushState = v3035 === 'function';
        let callAsync0;
        const v3036 = typeof setImmediate;
        const v3037 = v3036 === 'function';
        if (v3037) {
            callAsync0 = setImmediate;
        } else {
            callAsync0 = setTimeout;
        }
        const normalize1 = function (fragment0) {
            const v3038 = $window.location;
            const v3039 = v3038[fragment0];
            var data = v3039.replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent);
            const v3040 = fragment0 === 'pathname';
            const v3041 = data[0];
            const v3042 = v3041 !== '/';
            const v3043 = v3040 && v3042;
            if (v3043) {
                data = '/' + data;
            }
            return data;
        };
        var asyncId;
        const debounceAsync = function (callback0) {
            const v3047 = function () {
                const v3044 = asyncId != null;
                if (v3044) {
                    return;
                }
                const v3046 = function () {
                    asyncId = null;
                    const v3045 = callback0();
                    v3045;
                };
                asyncId = callAsync0(v3046);
            };
            return v3047;
        };
        const parsePath = function (path, queryData, hashData) {
            var queryIndex = path.indexOf('?');
            var hashIndex = path.indexOf('#');
            let pathEnd;
            const v3048 = -1;
            const v3049 = queryIndex > v3048;
            const v3050 = -1;
            const v3051 = hashIndex > v3050;
            const v3052 = path.length;
            let v3053;
            if (v3051) {
                v3053 = hashIndex;
            } else {
                v3053 = v3052;
            }
            if (v3049) {
                pathEnd = queryIndex;
            } else {
                pathEnd = v3053;
            }
            const v3054 = -1;
            const v3055 = queryIndex > v3054;
            if (v3055) {
                let queryEnd;
                const v3056 = -1;
                const v3057 = hashIndex > v3056;
                const v3058 = path.length;
                if (v3057) {
                    queryEnd = hashIndex;
                } else {
                    queryEnd = v3058;
                }
                const v3059 = queryIndex + 1;
                const v3060 = path.slice(v3059, queryEnd);
                var queryParams = parseQueryString(v3060);
                let key4;
                for (key4 in queryParams) {
                    const v3061 = queryParams[key4];
                    queryData[key4] = v3061;
                }
            }
            const v3062 = -1;
            const v3063 = hashIndex > v3062;
            if (v3063) {
                const v3064 = hashIndex + 1;
                const v3065 = path.slice(v3064);
                var hashParams = parseQueryString(v3065);
                let key4;
                for (key4 in hashParams) {
                    const v3066 = hashParams[key4];
                    hashData[key4] = v3066;
                }
            }
            const v3067 = path.slice(0, pathEnd);
            return v3067;
        };
        var router = {};
        router.prefix = '#!';
        const v3087 = function () {
            const v3068 = router.prefix;
            var type2 = v3068.charAt(0);
            switch (type2) {
            case '#':
                const v3069 = normalize1('hash');
                const v3070 = router.prefix;
                const v3071 = v3070.length;
                const v3072 = v3069.slice(v3071);
                return v3072;
            case '?':
                const v3073 = normalize1('search');
                const v3074 = router.prefix;
                const v3075 = v3074.length;
                const v3076 = v3073.slice(v3075);
                const v3077 = normalize1('hash');
                const v3078 = v3076 + v3077;
                return v3078;
            default:
                const v3079 = normalize1('pathname');
                const v3080 = router.prefix;
                const v3081 = v3080.length;
                const v3082 = v3079.slice(v3081);
                const v3083 = normalize1('search');
                const v3084 = v3082 + v3083;
                const v3085 = normalize1('hash');
                const v3086 = v3084 + v3085;
                return v3086;
            }
        };
        router.getPath = v3087;
        const v3109 = function (path, data, options) {
            var queryData = {};
            var hashData = {};
            path = parsePath(path, queryData, hashData);
            const v3088 = data != null;
            if (v3088) {
                let key4;
                for (key4 in data) {
                    const v3089 = data[key4];
                    queryData[key4] = v3089;
                }
                const v3093 = function (match2, token) {
                    const v3090 = queryData[token];
                    const v3091 = delete v3090;
                    v3091;
                    const v3092 = data[token];
                    return v3092;
                };
                path = path.replace(/:([^\/]+)/g, v3093);
            }
            var query = buildQueryString(queryData);
            if (query) {
                path += '?' + query;
            }
            var hash = buildQueryString(hashData);
            if (hash) {
                path += '#' + hash;
            }
            if (supportsPushState) {
                let state;
                const v3094 = options.state;
                if (options) {
                    state = v3094;
                } else {
                    state = null;
                }
                let title;
                const v3095 = options.title;
                if (options) {
                    title = v3095;
                } else {
                    title = null;
                }
                const v3096 = $window.onpopstate();
                v3096;
                const v3097 = options.replace;
                const v3098 = options && v3097;
                if (v3098) {
                    const v3099 = $window.history;
                    const v3100 = router.prefix;
                    const v3101 = v3100 + path;
                    const v3102 = v3099.replaceState(state, title, v3101);
                    v3102;
                } else {
                    const v3103 = $window.history;
                    const v3104 = router.prefix;
                    const v3105 = v3104 + path;
                    const v3106 = v3103.pushState(state, title, v3105);
                    v3106;
                }
            } else {
                const v3107 = $window.location;
                const v3108 = router.prefix;
                v3107.href = v3108 + path;
            }
        };
        router.setPath = v3109;
        const v3140 = function (routes, resolve, reject) {
            const resolveRoute = function () {
                var path = router.getPath();
                var params = {};
                var pathname = parsePath(path, params, params);
                const v3110 = $window.history;
                var state = v3110.state;
                const v3111 = state != null;
                if (v3111) {
                    let k;
                    for (k in state) {
                        const v3112 = state[k];
                        params[k] = v3112;
                    }
                }
                let route0;
                for (route0 in routes) {
                    const v3113 = route0.replace(/:[^\/]+?\.{3}/g, '(.*?)');
                    const v3114 = v3113.replace(/:[^\/]+/g, '([^\\/]+)');
                    const v3115 = '^' + v3114;
                    const v3116 = v3115 + '/?$';
                    var matcher = new RegExp(v3116);
                    const v3117 = matcher.test(pathname);
                    if (v3117) {
                        const v3132 = function () {
                            const v3118 = route0.match(/:[^\/]+/g);
                            const v3119 = [];
                            var keys = v3118 || v3119;
                            const v3120 = [];
                            const v3121 = v3120.slice;
                            const v3122 = -2;
                            var values = v3121.call(arguments, 1, v3122);
                            var i = 0;
                            const v3123 = keys.length;
                            let v3124 = i < v3123;
                            while (v3124) {
                                const v3128 = values[i];
                                const v3129 = decodeURIComponent(v3128);
                                params[v3127] = v3129;
                                const v3125 = i++;
                                v3124 = i < v3123;
                            }
                            const v3130 = routes[route0];
                            const v3131 = resolve(v3130, params, path, route0);
                            v3131;
                        };
                        const v3133 = pathname.replace(matcher, v3132);
                        v3133;
                        return;
                    }
                }
                const v3134 = reject(path, params);
                v3134;
            };
            if (supportsPushState) {
                const v3135 = debounceAsync(resolveRoute);
                $window.onpopstate = v3135;
            } else {
                const v3136 = router.prefix;
                const v3137 = v3136.charAt(0);
                const v3138 = v3137 === '#';
                if (v3138) {
                    $window.onhashchange = resolveRoute;
                }
            }
            const v3139 = resolveRoute();
            v3139;
        };
        router.defineRoutes = v3140;
        return router;
    };
    var _20 = function ($window, redrawService0) {
        var routeService = coreRouter($window);
        var identity = function (v) {
            return v;
        };
        var render1;
        var component;
        var attrs3;
        var currentPath;
        var lastUpdate;
        var route = function (root, defaultRoute, routes) {
            const v3141 = root == null;
            if (v3141) {
                const v3142 = new Error('Ensure the DOM element that was passed to `m.route` is not undefined');
                throw v3142;
            }
            var run1 = function () {
                const v3143 = render1 != null;
                if (v3143) {
                    const v3144 = attrs3.key;
                    const v3145 = Vnode(component, v3144, attrs3);
                    const v3146 = render1(v3145);
                    const v3147 = redrawService0.render(root, v3146);
                    v3147;
                }
            };
            var bail = function () {
                const v3148 = { replace: true };
                const v3149 = routeService.setPath(defaultRoute, null, v3148);
                v3149;
            };
            const v3170 = function (payload, params, path) {
                const v3159 = function (routeResolver, comp) {
                    const v3150 = update !== lastUpdate;
                    if (v3150) {
                        return;
                    }
                    const v3151 = comp != null;
                    const v3152 = comp.view;
                    const v3153 = typeof v3152;
                    const v3154 = v3153 === 'function';
                    const v3155 = v3151 && v3154;
                    if (v3155) {
                        component = comp;
                    } else {
                        component = 'div';
                    }
                    component, attrs3 = params, currentPath = path, lastUpdate = null;
                    const v3156 = routeResolver.render;
                    const v3157 = v3156 || identity;
                    render1 = v3157.bind(routeResolver);
                    const v3158 = run1();
                    v3158;
                };
                lastUpdate = v3159;
                var update = lastUpdate;
                const v3160 = payload.view;
                if (v3160) {
                    const v3161 = {};
                    const v3162 = update(v3161, payload);
                    v3162;
                } else {
                    const v3163 = payload.onmatch;
                    if (v3163) {
                        const v3164 = payload.onmatch(params, path);
                        const v3165 = Promise.resolve(v3164);
                        const v3167 = function (resolved) {
                            const v3166 = update(payload, resolved);
                            v3166;
                        };
                        const v3168 = v3165.then(v3167, bail);
                        v3168;
                    } else {
                        const v3169 = update(payload, 'div');
                        v3169;
                    }
                }
            };
            const v3171 = routeService.defineRoutes(routes, v3170, bail);
            v3171;
            const v3172 = redrawService0.subscribe(root, run1);
            v3172;
        };
        const v3175 = function (path, data, options) {
            const v3173 = lastUpdate != null;
            if (v3173) {
                options.replace = true;
                options = {};
                options = {};
            }
            lastUpdate = null;
            const v3174 = routeService.setPath(path, data, options);
            v3174;
        };
        route.set = v3175;
        const v3176 = function () {
            return currentPath;
        };
        route.get = v3176;
        const v3177 = function (prefix0) {
            routeService.prefix = prefix0;
        };
        route.prefix = v3177;
        const v3201 = function (vnode1) {
            const v3178 = vnode1.dom;
            const v3179 = routeService.prefix;
            const v3180 = vnode1.attrs;
            const v3181 = v3180.href;
            const v3182 = v3179 + v3181;
            const v3183 = v3178.setAttribute('href', v3182);
            v3183;
            const v3184 = vnode1.dom;
            const v3200 = function (e) {
                const v3185 = e.ctrlKey;
                const v3186 = e.metaKey;
                const v3187 = v3185 || v3186;
                const v3188 = e.shiftKey;
                const v3189 = v3187 || v3188;
                const v3190 = e.which;
                const v3191 = v3190 === 2;
                const v3192 = v3189 || v3191;
                if (v3192) {
                    return;
                }
                const v3193 = e.preventDefault();
                v3193;
                e.redraw = false;
                var href = this.getAttribute('href');
                const v3194 = routeService.prefix;
                const v3195 = href.indexOf(v3194);
                const v3196 = v3195 === 0;
                if (v3196) {
                    const v3197 = routeService.prefix;
                    const v3198 = v3197.length;
                    href = href.slice(v3198);
                }
                const v3199 = route.set(href, undefined, undefined);
                v3199;
            };
            v3184.onclick = v3200;
        };
        route.link = v3201;
        const v3208 = function (key3) {
            const v3202 = typeof attrs3;
            const v3203 = v3202 !== 'undefined';
            const v3204 = typeof key3;
            const v3205 = v3204 !== 'undefined';
            const v3206 = v3203 && v3205;
            if (v3206) {
                const v3207 = attrs3[key3];
                return v3207;
            }
            return attrs3;
        };
        route.param = v3208;
        return route;
    };
    const v3209 = _20(window, redrawService);
    m.route = v3209;
    const v3220 = function (attrName, callback1, context) {
        const v3219 = function (e) {
            const v3210 = context || this;
            const v3211 = e.currentTarget;
            const v3212 = attrName in v3211;
            const v3213 = e.currentTarget;
            const v3214 = v3213[attrName];
            const v3215 = e.currentTarget;
            const v3216 = v3215.getAttribute(attrName);
            let v3217;
            if (v3212) {
                v3217 = v3214;
            } else {
                v3217 = v3216;
            }
            const v3218 = callback1.call(v3210, v3217);
            v3218;
        };
        return v3219;
    };
    m.withAttr = v3220;
    var _28 = coreRenderer(window);
    const v3221 = _28.render;
    m.render = v3221;
    const v3222 = redrawService.redraw;
    m.redraw = v3222;
    const v3223 = requestService.request;
    m.request = v3223;
    const v3224 = requestService.jsonp;
    m.jsonp = v3224;
    m.parseQueryString = parseQueryString;
    m.buildQueryString = buildQueryString;
    m.version = '1.0.0';
    m.vnode = Vnode;
    const v3225 = typeof module;
    const v3226 = v3225 !== 'undefined';
    if (v3226) {
        module['exports'] = m;
    } else {
        window.m = m;
    }
};
const v3228 = new v3227();
v3228;