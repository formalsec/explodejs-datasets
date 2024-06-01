var forge = require('./forge');
var baseN = require('./baseN');
const v1718 = forge.util;
const v1719 = {};
forge.util = v1718 || v1719;
module.exports = forge.util;
var util = module.exports;
const v1780 = function () {
    const v1720 = typeof process;
    const v1721 = v1720 !== 'undefined';
    const v1722 = process.nextTick;
    const v1723 = v1721 && v1722;
    const v1724 = process.browser;
    const v1725 = !v1724;
    const v1726 = v1723 && v1725;
    if (v1726) {
        const v1727 = process.nextTick;
        util.nextTick = v1727;
        const v1728 = typeof setImmediate;
        const v1729 = v1728 === 'function';
        if (v1729) {
            util.setImmediate = setImmediate;
        } else {
            const v1730 = util.nextTick;
            util.setImmediate = v1730;
        }
        return;
    }
    const v1731 = typeof setImmediate;
    const v1732 = v1731 === 'function';
    if (v1732) {
        const v1734 = function () {
            const v1733 = setImmediate.apply(undefined, arguments);
            return v1733;
        };
        util.setImmediate = v1734;
        const v1736 = function (callback) {
            const v1735 = setImmediate(callback);
            return v1735;
        };
        util.nextTick = v1736;
        return;
    }
    const v1738 = function (callback) {
        const v1737 = setTimeout(callback, 0);
        v1737;
    };
    util.setImmediate = v1738;
    const v1739 = typeof window;
    const v1740 = v1739 !== 'undefined';
    const v1741 = window.postMessage;
    const v1742 = typeof v1741;
    const v1743 = v1742 === 'function';
    const v1744 = v1740 && v1743;
    if (v1744) {
        var msg = 'forge.setImmediate';
        var callbacks = [];
        const v1749 = function (callback) {
            const v1745 = callbacks.push(callback);
            v1745;
            const v1746 = callbacks.length;
            const v1747 = v1746 === 1;
            if (v1747) {
                const v1748 = window.postMessage(msg, '*');
                v1748;
            }
        };
        util.setImmediate = v1749;
        const handler = function (event) {
            const v1750 = event.source;
            const v1751 = v1750 === window;
            const v1752 = event.data;
            const v1753 = v1752 === msg;
            const v1754 = v1751 && v1753;
            if (v1754) {
                const v1755 = event.stopPropagation();
                v1755;
                var copy = callbacks.slice();
                callbacks.length = 0;
                const v1757 = function (callback) {
                    const v1756 = callback();
                    v1756;
                };
                const v1758 = copy.forEach(v1757);
                v1758;
            }
        };
        const v1759 = window.addEventListener('message', handler, true);
        v1759;
    }
    const v1760 = typeof MutationObserver;
    const v1761 = v1760 !== 'undefined';
    if (v1761) {
        var now = Date.now();
        var attr = true;
        var div = document.createElement('div');
        var callbacks = [];
        const v1765 = function () {
            var copy = callbacks.slice();
            callbacks.length = 0;
            const v1763 = function (callback) {
                const v1762 = callback();
                v1762;
            };
            const v1764 = copy.forEach(v1763);
            v1764;
        };
        const v1766 = new MutationObserver(v1765);
        const v1767 = { attributes: true };
        const v1768 = v1766.observe(div, v1767);
        v1768;
        var oldSetImmediate = util.setImmediate;
        const v1778 = function (callback) {
            const v1769 = Date.now();
            const v1770 = v1769 - now;
            const v1771 = v1770 > 15;
            if (v1771) {
                now = Date.now();
                const v1772 = oldSetImmediate(callback);
                v1772;
            } else {
                const v1773 = callbacks.push(callback);
                v1773;
                const v1774 = callbacks.length;
                const v1775 = v1774 === 1;
                if (v1775) {
                    const v1776 = !attr;
                    attr = !attr;
                    const v1777 = div.setAttribute('a', attr);
                    v1777;
                }
            }
        };
        util.setImmediate = v1778;
    }
    const v1779 = util.setImmediate;
    util.nextTick = v1779;
};
const v1781 = v1780();
v1781;
const v1782 = typeof process;
const v1783 = v1782 !== 'undefined';
const v1784 = process.versions;
const v1785 = v1783 && v1784;
const v1786 = process.versions;
const v1787 = v1786.node;
util.isNodejs = v1785 && v1787;
const v1792 = function () {
    const v1788 = util.isNodejs;
    if (v1788) {
        return global;
    }
    const v1789 = typeof self;
    const v1790 = v1789 === 'undefined';
    let v1791;
    if (v1790) {
        v1791 = window;
    } else {
        v1791 = self;
    }
    return v1791;
};
const v1793 = v1792();
util.globalScope = v1793;
const v1794 = Array.isArray;
const v1799 = function (x) {
    const v1795 = Object.prototype;
    const v1796 = v1795.toString;
    const v1797 = v1796.call(x);
    const v1798 = v1797 === '[object Array]';
    return v1798;
};
util.isArray = v1794 || v1799;
const v1804 = function (x) {
    const v1800 = typeof ArrayBuffer;
    const v1801 = v1800 !== 'undefined';
    const v1802 = x instanceof ArrayBuffer;
    const v1803 = v1801 && v1802;
    return v1803;
};
util.isArrayBuffer = v1804;
const v1811 = function (x) {
    const v1805 = x.buffer;
    const v1806 = util.isArrayBuffer(v1805);
    const v1807 = x && v1806;
    const v1808 = x.byteLength;
    const v1809 = v1808 !== undefined;
    const v1810 = v1807 && v1809;
    return v1810;
};
util.isArrayBufferView = v1811;
const _checkBitsParam = function (n) {
    const v1812 = n === 8;
    const v1813 = n === 16;
    const v1814 = v1812 || v1813;
    const v1815 = n === 24;
    const v1816 = v1814 || v1815;
    const v1817 = n === 32;
    const v1818 = v1816 || v1817;
    const v1819 = !v1818;
    if (v1819) {
        const v1820 = 'Only 8, 16, 24, or 32 bits supported: ' + n;
        const v1821 = new Error(v1820);
        throw v1821;
    }
};
util.ByteBuffer = ByteStringBuffer;
const ByteStringBuffer = function (b) {
    this.data = '';
    this.read = 0;
    const v1822 = typeof b;
    const v1823 = v1822 === 'string';
    if (v1823) {
        this.data = b;
    } else {
        const v1824 = util.isArrayBuffer(b);
        const v1825 = util.isArrayBufferView(b);
        const v1826 = v1824 || v1825;
        if (v1826) {
            const v1827 = typeof Buffer;
            const v1828 = v1827 !== 'undefined';
            const v1829 = b instanceof Buffer;
            const v1830 = v1828 && v1829;
            if (v1830) {
                const v1831 = b.toString('binary');
                this.data = v1831;
            } else {
                var arr = new Uint8Array(b);
                try {
                    const v1832 = String.fromCharCode;
                    const v1833 = v1832.apply(null, arr);
                    this.data = v1833;
                } catch (e) {
                    var i = 0;
                    const v1834 = arr.length;
                    let v1835 = i < v1834;
                    while (v1835) {
                        const v1837 = arr[i];
                        const v1838 = this.putByte(v1837);
                        v1838;
                        const v1836 = ++i;
                        v1835 = i < v1834;
                    }
                }
            }
        } else {
            const v1839 = b instanceof ByteStringBuffer;
            const v1840 = typeof b;
            const v1841 = v1840 === 'object';
            const v1842 = b.data;
            const v1843 = typeof v1842;
            const v1844 = v1843 === 'string';
            const v1845 = v1841 && v1844;
            const v1846 = b.read;
            const v1847 = typeof v1846;
            const v1848 = v1847 === 'number';
            const v1849 = v1845 && v1848;
            const v1850 = v1839 || v1849;
            if (v1850) {
                const v1851 = b.data;
                this.data = v1851;
                const v1852 = b.read;
                this.read = v1852;
            }
        }
    }
    this._constructedStringLength = 0;
};
util.ByteStringBuffer = ByteStringBuffer;
var _MAX_CONSTRUCTED_STRING_LENGTH = 4096;
const v1853 = util.ByteStringBuffer;
const v1854 = v1853.prototype;
const v1859 = function (x) {
    this._constructedStringLength += x;
    const v1855 = this._constructedStringLength;
    const v1856 = v1855 > _MAX_CONSTRUCTED_STRING_LENGTH;
    if (v1856) {
        const v1857 = this.data;
        const v1858 = v1857.substr(0, 1);
        v1858;
        this._constructedStringLength = 0;
    }
};
v1854._optimizeConstructedString = v1859;
const v1860 = util.ByteStringBuffer;
const v1861 = v1860.prototype;
const v1866 = function () {
    const v1862 = this.data;
    const v1863 = v1862.length;
    const v1864 = this.read;
    const v1865 = v1863 - v1864;
    return v1865;
};
v1861.length = v1866;
const v1867 = util.ByteStringBuffer;
const v1868 = v1867.prototype;
const v1871 = function () {
    const v1869 = this.length();
    const v1870 = v1869 <= 0;
    return v1870;
};
v1868.isEmpty = v1871;
const v1872 = util.ByteStringBuffer;
const v1873 = v1872.prototype;
const v1876 = function (b) {
    const v1874 = String.fromCharCode(b);
    const v1875 = this.putBytes(v1874);
    return v1875;
};
v1873.putByte = v1876;
const v1877 = util.ByteStringBuffer;
const v1878 = v1877.prototype;
const v1883 = function (b, n) {
    b = String.fromCharCode(b);
    var d = this.data;
    let v1879 = n > 0;
    while (v1879) {
        const v1880 = n & 1;
        if (v1880) {
            d += b;
        }
        n >>>= 1;
        const v1881 = n > 0;
        if (v1881) {
            b += b;
        }
        v1879 = n > 0;
    }
    this.data = d;
    const v1882 = this._optimizeConstructedString(n);
    v1882;
    return this;
};
v1878.fillWithByte = v1883;
const v1884 = util.ByteStringBuffer;
const v1885 = v1884.prototype;
const v1888 = function (bytes) {
    this.data += bytes;
    const v1886 = bytes.length;
    const v1887 = this._optimizeConstructedString(v1886);
    v1887;
    return this;
};
v1885.putBytes = v1888;
const v1889 = util.ByteStringBuffer;
const v1890 = v1889.prototype;
const v1893 = function (str) {
    const v1891 = util.encodeUtf8(str);
    const v1892 = this.putBytes(v1891);
    return v1892;
};
v1890.putString = v1893;
const v1894 = util.ByteStringBuffer;
const v1895 = v1894.prototype;
const v1903 = function (i) {
    const v1896 = i >> 8;
    const v1897 = v1896 & 255;
    const v1898 = String.fromCharCode(v1897);
    const v1899 = i & 255;
    const v1900 = String.fromCharCode(v1899);
    const v1901 = v1898 + v1900;
    const v1902 = this.putBytes(v1901);
    return v1902;
};
v1895.putInt16 = v1903;
const v1904 = util.ByteStringBuffer;
const v1905 = v1904.prototype;
const v1917 = function (i) {
    const v1906 = i >> 16;
    const v1907 = v1906 & 255;
    const v1908 = String.fromCharCode(v1907);
    const v1909 = i >> 8;
    const v1910 = v1909 & 255;
    const v1911 = String.fromCharCode(v1910);
    const v1912 = v1908 + v1911;
    const v1913 = i & 255;
    const v1914 = String.fromCharCode(v1913);
    const v1915 = v1912 + v1914;
    const v1916 = this.putBytes(v1915);
    return v1916;
};
v1905.putInt24 = v1917;
const v1918 = util.ByteStringBuffer;
const v1919 = v1918.prototype;
const v1935 = function (i) {
    const v1920 = i >> 24;
    const v1921 = v1920 & 255;
    const v1922 = String.fromCharCode(v1921);
    const v1923 = i >> 16;
    const v1924 = v1923 & 255;
    const v1925 = String.fromCharCode(v1924);
    const v1926 = v1922 + v1925;
    const v1927 = i >> 8;
    const v1928 = v1927 & 255;
    const v1929 = String.fromCharCode(v1928);
    const v1930 = v1926 + v1929;
    const v1931 = i & 255;
    const v1932 = String.fromCharCode(v1931);
    const v1933 = v1930 + v1932;
    const v1934 = this.putBytes(v1933);
    return v1934;
};
v1919.putInt32 = v1935;
const v1936 = util.ByteStringBuffer;
const v1937 = v1936.prototype;
const v1945 = function (i) {
    const v1938 = i & 255;
    const v1939 = String.fromCharCode(v1938);
    const v1940 = i >> 8;
    const v1941 = v1940 & 255;
    const v1942 = String.fromCharCode(v1941);
    const v1943 = v1939 + v1942;
    const v1944 = this.putBytes(v1943);
    return v1944;
};
v1937.putInt16Le = v1945;
const v1946 = util.ByteStringBuffer;
const v1947 = v1946.prototype;
const v1959 = function (i) {
    const v1948 = i & 255;
    const v1949 = String.fromCharCode(v1948);
    const v1950 = i >> 8;
    const v1951 = v1950 & 255;
    const v1952 = String.fromCharCode(v1951);
    const v1953 = v1949 + v1952;
    const v1954 = i >> 16;
    const v1955 = v1954 & 255;
    const v1956 = String.fromCharCode(v1955);
    const v1957 = v1953 + v1956;
    const v1958 = this.putBytes(v1957);
    return v1958;
};
v1947.putInt24Le = v1959;
const v1960 = util.ByteStringBuffer;
const v1961 = v1960.prototype;
const v1977 = function (i) {
    const v1962 = i & 255;
    const v1963 = String.fromCharCode(v1962);
    const v1964 = i >> 8;
    const v1965 = v1964 & 255;
    const v1966 = String.fromCharCode(v1965);
    const v1967 = v1963 + v1966;
    const v1968 = i >> 16;
    const v1969 = v1968 & 255;
    const v1970 = String.fromCharCode(v1969);
    const v1971 = v1967 + v1970;
    const v1972 = i >> 24;
    const v1973 = v1972 & 255;
    const v1974 = String.fromCharCode(v1973);
    const v1975 = v1971 + v1974;
    const v1976 = this.putBytes(v1975);
    return v1976;
};
v1961.putInt32Le = v1977;
const v1978 = util.ByteStringBuffer;
const v1979 = v1978.prototype;
const v1985 = function (i, n) {
    const v1980 = _checkBitsParam(n);
    v1980;
    var bytes = '';
    let v1981 = true;
    while (v1981) {
        n -= 8;
        const v1982 = i >> n;
        const v1983 = v1982 & 255;
        bytes += String.fromCharCode(v1983);
        v1981 = n > 0;
    }
    const v1984 = this.putBytes(bytes);
    return v1984;
};
v1979.putInt = v1985;
const v1986 = util.ByteStringBuffer;
const v1987 = v1986.prototype;
const v1991 = function (i, n) {
    const v1988 = i < 0;
    if (v1988) {
        const v1989 = n - 1;
        i += 2 << v1989;
    }
    const v1990 = this.putInt(i, n);
    return v1990;
};
v1987.putSignedInt = v1991;
const v1992 = util.ByteStringBuffer;
const v1993 = v1992.prototype;
const v1996 = function (buffer) {
    const v1994 = buffer.getBytes();
    const v1995 = this.putBytes(v1994);
    return v1995;
};
v1993.putBuffer = v1996;
const v1997 = util.ByteStringBuffer;
const v1998 = v1997.prototype;
const v2003 = function () {
    const v1999 = this.data;
    const v2000 = this.read;
    const v2001 = v2000++;
    const v2002 = v1999.charCodeAt(v2001);
    return v2002;
};
v1998.getByte = v2003;
const v2004 = util.ByteStringBuffer;
const v2005 = v2004.prototype;
const v2014 = function () {
    const v2006 = this.data;
    const v2007 = this.read;
    const v2008 = v2006.charCodeAt(v2007);
    const v2009 = v2008 << 8;
    const v2010 = this.data;
    const v2011 = this.read;
    const v2012 = v2011 + 1;
    const v2013 = v2010.charCodeAt(v2012);
    var rval = v2009 ^ v2013;
    this.read += 2;
    return rval;
};
v2005.getInt16 = v2014;
const v2015 = util.ByteStringBuffer;
const v2016 = v2015.prototype;
const v2031 = function () {
    const v2017 = this.data;
    const v2018 = this.read;
    const v2019 = v2017.charCodeAt(v2018);
    const v2020 = v2019 << 16;
    const v2021 = this.data;
    const v2022 = this.read;
    const v2023 = v2022 + 1;
    const v2024 = v2021.charCodeAt(v2023);
    const v2025 = v2024 << 8;
    const v2026 = v2020 ^ v2025;
    const v2027 = this.data;
    const v2028 = this.read;
    const v2029 = v2028 + 2;
    const v2030 = v2027.charCodeAt(v2029);
    var rval = v2026 ^ v2030;
    this.read += 3;
    return rval;
};
v2016.getInt24 = v2031;
const v2032 = util.ByteStringBuffer;
const v2033 = v2032.prototype;
const v2054 = function () {
    const v2034 = this.data;
    const v2035 = this.read;
    const v2036 = v2034.charCodeAt(v2035);
    const v2037 = v2036 << 24;
    const v2038 = this.data;
    const v2039 = this.read;
    const v2040 = v2039 + 1;
    const v2041 = v2038.charCodeAt(v2040);
    const v2042 = v2041 << 16;
    const v2043 = v2037 ^ v2042;
    const v2044 = this.data;
    const v2045 = this.read;
    const v2046 = v2045 + 2;
    const v2047 = v2044.charCodeAt(v2046);
    const v2048 = v2047 << 8;
    const v2049 = v2043 ^ v2048;
    const v2050 = this.data;
    const v2051 = this.read;
    const v2052 = v2051 + 3;
    const v2053 = v2050.charCodeAt(v2052);
    var rval = v2049 ^ v2053;
    this.read += 4;
    return rval;
};
v2033.getInt32 = v2054;
const v2055 = util.ByteStringBuffer;
const v2056 = v2055.prototype;
const v2065 = function () {
    const v2057 = this.data;
    const v2058 = this.read;
    const v2059 = v2057.charCodeAt(v2058);
    const v2060 = this.data;
    const v2061 = this.read;
    const v2062 = v2061 + 1;
    const v2063 = v2060.charCodeAt(v2062);
    const v2064 = v2063 << 8;
    var rval = v2059 ^ v2064;
    this.read += 2;
    return rval;
};
v2056.getInt16Le = v2065;
const v2066 = util.ByteStringBuffer;
const v2067 = v2066.prototype;
const v2082 = function () {
    const v2068 = this.data;
    const v2069 = this.read;
    const v2070 = v2068.charCodeAt(v2069);
    const v2071 = this.data;
    const v2072 = this.read;
    const v2073 = v2072 + 1;
    const v2074 = v2071.charCodeAt(v2073);
    const v2075 = v2074 << 8;
    const v2076 = v2070 ^ v2075;
    const v2077 = this.data;
    const v2078 = this.read;
    const v2079 = v2078 + 2;
    const v2080 = v2077.charCodeAt(v2079);
    const v2081 = v2080 << 16;
    var rval = v2076 ^ v2081;
    this.read += 3;
    return rval;
};
v2067.getInt24Le = v2082;
const v2083 = util.ByteStringBuffer;
const v2084 = v2083.prototype;
const v2105 = function () {
    const v2085 = this.data;
    const v2086 = this.read;
    const v2087 = v2085.charCodeAt(v2086);
    const v2088 = this.data;
    const v2089 = this.read;
    const v2090 = v2089 + 1;
    const v2091 = v2088.charCodeAt(v2090);
    const v2092 = v2091 << 8;
    const v2093 = v2087 ^ v2092;
    const v2094 = this.data;
    const v2095 = this.read;
    const v2096 = v2095 + 2;
    const v2097 = v2094.charCodeAt(v2096);
    const v2098 = v2097 << 16;
    const v2099 = v2093 ^ v2098;
    const v2100 = this.data;
    const v2101 = this.read;
    const v2102 = v2101 + 3;
    const v2103 = v2100.charCodeAt(v2102);
    const v2104 = v2103 << 24;
    var rval = v2099 ^ v2104;
    this.read += 4;
    return rval;
};
v2084.getInt32Le = v2105;
const v2106 = util.ByteStringBuffer;
const v2107 = v2106.prototype;
const v2115 = function (n) {
    const v2108 = _checkBitsParam(n);
    v2108;
    var rval = 0;
    let v2109 = true;
    while (v2109) {
        const v2110 = rval << 8;
        const v2111 = this.data;
        const v2112 = this.read;
        const v2113 = v2112++;
        const v2114 = v2111.charCodeAt(v2113);
        rval = v2110 + v2114;
        n -= 8;
        v2109 = n > 0;
    }
    return rval;
};
v2107.getInt = v2115;
const v2116 = util.ByteStringBuffer;
const v2117 = v2116.prototype;
const v2120 = function (n) {
    var x = this.getInt(n);
    const v2118 = n - 2;
    var max = 2 << v2118;
    const v2119 = x >= max;
    if (v2119) {
        x -= max << 1;
    }
    return x;
};
v2117.getSignedInt = v2120;
const v2121 = util.ByteStringBuffer;
const v2122 = v2121.prototype;
const v2136 = function (count) {
    var rval;
    if (count) {
        const v2123 = this.length();
        count = Math.min(v2123, count);
        const v2124 = this.data;
        const v2125 = this.read;
        const v2126 = this.read;
        const v2127 = v2126 + count;
        rval = v2124.slice(v2125, v2127);
        this.read += count;
    } else {
        const v2128 = count === 0;
        if (v2128) {
            rval = '';
        } else {
            const v2129 = this.read;
            const v2130 = v2129 === 0;
            const v2131 = this.data;
            const v2132 = this.data;
            const v2133 = this.read;
            const v2134 = v2132.slice(v2133);
            if (v2130) {
                rval = v2131;
            } else {
                rval = v2134;
            }
            const v2135 = this.clear();
            v2135;
        }
    }
    return rval;
};
v2122.getBytes = v2136;
const v2137 = util.ByteStringBuffer;
const v2138 = v2137.prototype;
const v2150 = function (count) {
    const v2139 = typeof count;
    const v2140 = v2139 === 'undefined';
    const v2141 = this.data;
    const v2142 = this.read;
    const v2143 = v2141.slice(v2142);
    const v2144 = this.data;
    const v2145 = this.read;
    const v2146 = this.read;
    const v2147 = v2146 + count;
    const v2148 = v2144.slice(v2145, v2147);
    let v2149;
    if (v2140) {
        v2149 = v2143;
    } else {
        v2149 = v2148;
    }
    return v2149;
};
v2138.bytes = v2150;
const v2151 = util.ByteStringBuffer;
const v2152 = v2151.prototype;
const v2157 = function (i) {
    const v2153 = this.data;
    const v2154 = this.read;
    const v2155 = v2154 + i;
    const v2156 = v2153.charCodeAt(v2155);
    return v2156;
};
v2152.at = v2157;
const v2158 = util.ByteStringBuffer;
const v2159 = v2158.prototype;
const v2171 = function (i, b) {
    const v2160 = this.data;
    const v2161 = this.read;
    const v2162 = v2161 + i;
    const v2163 = v2160.substr(0, v2162);
    const v2164 = String.fromCharCode(b);
    const v2165 = v2163 + v2164;
    const v2166 = this.data;
    const v2167 = this.read;
    const v2168 = v2167 + i;
    const v2169 = v2168 + 1;
    const v2170 = v2166.substr(v2169);
    this.data = v2165 + v2170;
    return this;
};
v2159.setAt = v2171;
const v2172 = util.ByteStringBuffer;
const v2173 = v2172.prototype;
const v2179 = function () {
    const v2174 = this.data;
    const v2175 = this.data;
    const v2176 = v2175.length;
    const v2177 = v2176 - 1;
    const v2178 = v2174.charCodeAt(v2177);
    return v2178;
};
v2173.last = v2179;
const v2180 = util.ByteStringBuffer;
const v2181 = v2180.prototype;
const v2184 = function () {
    const v2182 = this.data;
    var c = util.createBuffer(v2182);
    const v2183 = this.read;
    c.read = v2183;
    return c;
};
v2181.copy = v2184;
const v2185 = util.ByteStringBuffer;
const v2186 = v2185.prototype;
const v2192 = function () {
    const v2187 = this.read;
    const v2188 = v2187 > 0;
    if (v2188) {
        const v2189 = this.data;
        const v2190 = this.read;
        const v2191 = v2189.slice(v2190);
        this.data = v2191;
        this.read = 0;
    }
    return this;
};
v2186.compact = v2192;
const v2193 = util.ByteStringBuffer;
const v2194 = v2193.prototype;
const v2195 = function () {
    this.data = '';
    this.read = 0;
    return this;
};
v2194.clear = v2195;
const v2196 = util.ByteStringBuffer;
const v2197 = v2196.prototype;
const v2203 = function (count) {
    const v2198 = this.length();
    const v2199 = v2198 - count;
    var len = Math.max(0, v2199);
    const v2200 = this.data;
    const v2201 = this.read;
    const v2202 = v2200.substr(v2201, len);
    this.data = v2202;
    this.read = 0;
    return this;
};
v2197.truncate = v2203;
const v2204 = util.ByteStringBuffer;
const v2205 = v2204.prototype;
const v2212 = function () {
    var rval = '';
    var i = this.read;
    const v2206 = this.data;
    const v2207 = v2206.length;
    let v2208 = i < v2207;
    while (v2208) {
        const v2210 = this.data;
        var b = v2210.charCodeAt(i);
        const v2211 = b < 16;
        if (v2211) {
            rval += '0';
        }
        rval += b.toString(16);
        const v2209 = ++i;
        v2208 = i < v2207;
    }
    return rval;
};
v2205.toHex = v2212;
const v2213 = util.ByteStringBuffer;
const v2214 = v2213.prototype;
const v2217 = function () {
    const v2215 = this.bytes();
    const v2216 = util.decodeUtf8(v2215);
    return v2216;
};
v2214.toString = v2217;
const DataBuffer = function (b, options) {
    const v2218 = {};
    options = options || v2218;
    const v2219 = options.readOffset;
    this.read = v2219 || 0;
    const v2220 = options.growSize;
    this.growSize = v2220 || 1024;
    var isArrayBuffer = util.isArrayBuffer(b);
    var isArrayBufferView = util.isArrayBufferView(b);
    const v2221 = isArrayBuffer || isArrayBufferView;
    if (v2221) {
        if (isArrayBuffer) {
            this.data = new DataView(b);
        } else {
            const v2222 = b.buffer;
            const v2223 = b.byteOffset;
            const v2224 = b.byteLength;
            this.data = new DataView(v2222, v2223, v2224);
        }
        const v2225 = 'writeOffset' in options;
        const v2226 = options.writeOffset;
        const v2227 = this.data;
        const v2228 = v2227.byteLength;
        let v2229;
        if (v2225) {
            v2229 = v2226;
        } else {
            v2229 = v2228;
        }
        this.write = v2229;
        return;
    }
    const v2230 = new ArrayBuffer(0);
    this.data = new DataView(v2230);
    this.write = 0;
    const v2231 = b !== null;
    const v2232 = b !== undefined;
    const v2233 = v2231 && v2232;
    if (v2233) {
        const v2234 = this.putBytes(b);
        v2234;
    }
    const v2235 = 'writeOffset' in options;
    if (v2235) {
        const v2236 = options.writeOffset;
        this.write = v2236;
    }
};
util.DataBuffer = DataBuffer;
const v2237 = util.DataBuffer;
const v2238 = v2237.prototype;
const v2242 = function () {
    const v2239 = this.write;
    const v2240 = this.read;
    const v2241 = v2239 - v2240;
    return v2241;
};
v2238.length = v2242;
const v2243 = util.DataBuffer;
const v2244 = v2243.prototype;
const v2247 = function () {
    const v2245 = this.length();
    const v2246 = v2245 <= 0;
    return v2246;
};
v2244.isEmpty = v2247;
const v2248 = util.DataBuffer;
const v2249 = v2248.prototype;
const v2264 = function (amount, growSize) {
    const v2250 = this.length();
    const v2251 = v2250 >= amount;
    if (v2251) {
        return this;
    }
    const v2252 = this.growSize;
    const v2253 = growSize || v2252;
    growSize = Math.max(v2253, amount);
    const v2254 = this.data;
    const v2255 = v2254.buffer;
    const v2256 = this.data;
    const v2257 = v2256.byteOffset;
    const v2258 = this.data;
    const v2259 = v2258.byteLength;
    var src = new Uint8Array(v2255, v2257, v2259);
    const v2260 = this.length();
    const v2261 = v2260 + growSize;
    var dst = new Uint8Array(v2261);
    const v2262 = dst.set(src);
    v2262;
    const v2263 = dst.buffer;
    this.data = new DataView(v2263);
    return this;
};
v2249.accommodate = v2264;
const v2265 = util.DataBuffer;
const v2266 = v2265.prototype;
const v2272 = function (b) {
    const v2267 = this.accommodate(1);
    v2267;
    const v2268 = this.data;
    const v2269 = this.write;
    const v2270 = v2269++;
    const v2271 = v2268.setUint8(v2270, b);
    v2271;
    return this;
};
v2266.putByte = v2272;
const v2273 = util.DataBuffer;
const v2274 = v2273.prototype;
const v2280 = function (b, n) {
    const v2275 = this.accommodate(n);
    v2275;
    var i = 0;
    let v2276 = i < n;
    while (v2276) {
        const v2278 = this.data;
        const v2279 = v2278.setUint8(b);
        v2279;
        const v2277 = ++i;
        v2276 = i < n;
    }
    return this;
};
v2274.fillWithByte = v2280;
const v2281 = util.DataBuffer;
const v2282 = v2281.prototype;
const v2384 = function (bytes, encoding) {
    const v2283 = util.isArrayBufferView(bytes);
    if (v2283) {
        const v2284 = bytes.buffer;
        const v2285 = bytes.byteOffset;
        const v2286 = bytes.byteLength;
        var src = new Uint8Array(v2284, v2285, v2286);
        const v2287 = src.byteLength;
        const v2288 = src.byteOffset;
        var len = v2287 - v2288;
        const v2289 = this.accommodate(len);
        v2289;
        const v2290 = this.data;
        const v2291 = v2290.buffer;
        const v2292 = this.write;
        var dst = new Uint8Array(v2291, v2292);
        const v2293 = dst.set(src);
        v2293;
        this.write += len;
        return this;
    }
    const v2294 = util.isArrayBuffer(bytes);
    if (v2294) {
        var src = new Uint8Array(bytes);
        const v2295 = src.byteLength;
        const v2296 = this.accommodate(v2295);
        v2296;
        const v2297 = this.data;
        const v2298 = v2297.buffer;
        var dst = new Uint8Array(v2298);
        const v2299 = this.write;
        const v2300 = dst.set(src, v2299);
        v2300;
        const v2301 = src.byteLength;
        this.write += v2301;
        return this;
    }
    const v2302 = util.DataBuffer;
    const v2303 = bytes instanceof v2302;
    const v2304 = typeof bytes;
    const v2305 = v2304 === 'object';
    const v2306 = bytes.read;
    const v2307 = typeof v2306;
    const v2308 = v2307 === 'number';
    const v2309 = v2305 && v2308;
    const v2310 = bytes.write;
    const v2311 = typeof v2310;
    const v2312 = v2311 === 'number';
    const v2313 = v2309 && v2312;
    const v2314 = bytes.data;
    const v2315 = util.isArrayBufferView(v2314);
    const v2316 = v2313 && v2315;
    const v2317 = v2303 || v2316;
    if (v2317) {
        const v2318 = bytes.data;
        const v2319 = v2318.byteLength;
        const v2320 = bytes.read;
        const v2321 = bytes.length();
        var src = new Uint8Array(v2319, v2320, v2321);
        const v2322 = src.byteLength;
        const v2323 = this.accommodate(v2322);
        v2323;
        const v2324 = bytes.data;
        const v2325 = v2324.byteLength;
        const v2326 = this.write;
        var dst = new Uint8Array(v2325, v2326);
        const v2327 = dst.set(src);
        v2327;
        const v2328 = src.byteLength;
        this.write += v2328;
        return this;
    }
    const v2329 = util.ByteStringBuffer;
    const v2330 = bytes instanceof v2329;
    if (v2330) {
        bytes = bytes.data;
        encoding = 'binary';
    }
    encoding = encoding || 'binary';
    const v2331 = typeof bytes;
    const v2332 = v2331 === 'string';
    if (v2332) {
        var view;
        const v2333 = encoding === 'hex';
        if (v2333) {
            const v2334 = bytes.length;
            const v2335 = v2334 / 2;
            const v2336 = Math.ceil(v2335);
            const v2337 = this.accommodate(v2336);
            v2337;
            const v2338 = this.data;
            const v2339 = v2338.buffer;
            const v2340 = this.write;
            view = new Uint8Array(v2339, v2340);
            const v2341 = util.binary;
            const v2342 = v2341.hex;
            const v2343 = this.write;
            const v2344 = v2342.decode(bytes, view, v2343);
            this.write += v2344;
            return this;
        }
        const v2345 = encoding === 'base64';
        if (v2345) {
            const v2346 = bytes.length;
            const v2347 = v2346 / 4;
            const v2348 = Math.ceil(v2347);
            const v2349 = v2348 * 3;
            const v2350 = this.accommodate(v2349);
            v2350;
            const v2351 = this.data;
            const v2352 = v2351.buffer;
            const v2353 = this.write;
            view = new Uint8Array(v2352, v2353);
            const v2354 = util.binary;
            const v2355 = v2354.base64;
            const v2356 = this.write;
            const v2357 = v2355.decode(bytes, view, v2356);
            this.write += v2357;
            return this;
        }
        const v2358 = encoding === 'utf8';
        if (v2358) {
            bytes = util.encodeUtf8(bytes);
            encoding = 'binary';
        }
        const v2359 = encoding === 'binary';
        const v2360 = encoding === 'raw';
        const v2361 = v2359 || v2360;
        if (v2361) {
            const v2362 = bytes.length;
            const v2363 = this.accommodate(v2362);
            v2363;
            const v2364 = this.data;
            const v2365 = v2364.buffer;
            const v2366 = this.write;
            view = new Uint8Array(v2365, v2366);
            const v2367 = util.binary;
            const v2368 = v2367.raw;
            const v2369 = v2368.decode(view);
            this.write += v2369;
            return this;
        }
        const v2370 = encoding === 'utf16';
        if (v2370) {
            const v2371 = bytes.length;
            const v2372 = v2371 * 2;
            const v2373 = this.accommodate(v2372);
            v2373;
            const v2374 = this.data;
            const v2375 = v2374.buffer;
            const v2376 = this.write;
            view = new Uint16Array(v2375, v2376);
            const v2377 = util.text;
            const v2378 = v2377.utf16;
            const v2379 = v2378.encode(view);
            this.write += v2379;
            return this;
        }
        const v2380 = 'Invalid encoding: ' + encoding;
        const v2381 = new Error(v2380);
        throw v2381;
    }
    const v2382 = 'Invalid parameter: ' + bytes;
    const v2383 = Error(v2382);
    throw v2383;
};
v2282.putBytes = v2384;
const v2385 = util.DataBuffer;
const v2386 = v2385.prototype;
const v2389 = function (buffer) {
    const v2387 = this.putBytes(buffer);
    v2387;
    const v2388 = buffer.clear();
    v2388;
    return this;
};
v2386.putBuffer = v2389;
const v2390 = util.DataBuffer;
const v2391 = v2390.prototype;
const v2393 = function (str) {
    const v2392 = this.putBytes(str, 'utf16');
    return v2392;
};
v2391.putString = v2393;
const v2394 = util.DataBuffer;
const v2395 = v2394.prototype;
const v2400 = function (i) {
    const v2396 = this.accommodate(2);
    v2396;
    const v2397 = this.data;
    const v2398 = this.write;
    const v2399 = v2397.setInt16(v2398, i);
    v2399;
    this.write += 2;
    return this;
};
v2395.putInt16 = v2400;
const v2401 = util.DataBuffer;
const v2402 = v2401.prototype;
const v2414 = function (i) {
    const v2403 = this.accommodate(3);
    v2403;
    const v2404 = this.data;
    const v2405 = this.write;
    const v2406 = i >> 8;
    const v2407 = v2406 & 65535;
    const v2408 = v2404.setInt16(v2405, v2407);
    v2408;
    const v2409 = this.data;
    const v2410 = this.write;
    const v2411 = i >> 16;
    const v2412 = v2411 & 255;
    const v2413 = v2409.setInt8(v2410, v2412);
    v2413;
    this.write += 3;
    return this;
};
v2402.putInt24 = v2414;
const v2415 = util.DataBuffer;
const v2416 = v2415.prototype;
const v2421 = function (i) {
    const v2417 = this.accommodate(4);
    v2417;
    const v2418 = this.data;
    const v2419 = this.write;
    const v2420 = v2418.setInt32(v2419, i);
    v2420;
    this.write += 4;
    return this;
};
v2416.putInt32 = v2421;
const v2422 = util.DataBuffer;
const v2423 = v2422.prototype;
const v2428 = function (i) {
    const v2424 = this.accommodate(2);
    v2424;
    const v2425 = this.data;
    const v2426 = this.write;
    const v2427 = v2425.setInt16(v2426, i, true);
    v2427;
    this.write += 2;
    return this;
};
v2423.putInt16Le = v2428;
const v2429 = util.DataBuffer;
const v2430 = v2429.prototype;
const v2442 = function (i) {
    const v2431 = this.accommodate(3);
    v2431;
    const v2432 = this.data;
    const v2433 = this.write;
    const v2434 = i >> 16;
    const v2435 = v2434 & 255;
    const v2436 = v2432.setInt8(v2433, v2435);
    v2436;
    const v2437 = this.data;
    const v2438 = this.write;
    const v2439 = i >> 8;
    const v2440 = v2439 & 65535;
    const v2441 = v2437.setInt16(v2438, v2440, true);
    v2441;
    this.write += 3;
    return this;
};
v2430.putInt24Le = v2442;
const v2443 = util.DataBuffer;
const v2444 = v2443.prototype;
const v2449 = function (i) {
    const v2445 = this.accommodate(4);
    v2445;
    const v2446 = this.data;
    const v2447 = this.write;
    const v2448 = v2446.setInt32(v2447, i, true);
    v2448;
    this.write += 4;
    return this;
};
v2444.putInt32Le = v2449;
const v2450 = util.DataBuffer;
const v2451 = v2450.prototype;
const v2462 = function (i, n) {
    const v2452 = _checkBitsParam(n);
    v2452;
    const v2453 = n / 8;
    const v2454 = this.accommodate(v2453);
    v2454;
    let v2455 = true;
    while (v2455) {
        n -= 8;
        const v2456 = this.data;
        const v2457 = this.write;
        const v2458 = v2457++;
        const v2459 = i >> n;
        const v2460 = v2459 & 255;
        const v2461 = v2456.setInt8(v2458, v2460);
        v2461;
        v2455 = n > 0;
    }
    return this;
};
v2451.putInt = v2462;
const v2463 = util.DataBuffer;
const v2464 = v2463.prototype;
const v2471 = function (i, n) {
    const v2465 = _checkBitsParam(n);
    v2465;
    const v2466 = n / 8;
    const v2467 = this.accommodate(v2466);
    v2467;
    const v2468 = i < 0;
    if (v2468) {
        const v2469 = n - 1;
        i += 2 << v2469;
    }
    const v2470 = this.putInt(i, n);
    return v2470;
};
v2464.putSignedInt = v2471;
const v2472 = util.DataBuffer;
const v2473 = v2472.prototype;
const v2478 = function () {
    const v2474 = this.data;
    const v2475 = this.read;
    const v2476 = v2475++;
    const v2477 = v2474.getInt8(v2476);
    return v2477;
};
v2473.getByte = v2478;
const v2479 = util.DataBuffer;
const v2480 = v2479.prototype;
const v2483 = function () {
    const v2481 = this.data;
    const v2482 = this.read;
    var rval = v2481.getInt16(v2482);
    this.read += 2;
    return rval;
};
v2480.getInt16 = v2483;
const v2484 = util.DataBuffer;
const v2485 = v2484.prototype;
const v2494 = function () {
    const v2486 = this.data;
    const v2487 = this.read;
    const v2488 = v2486.getInt16(v2487);
    const v2489 = v2488 << 8;
    const v2490 = this.data;
    const v2491 = this.read;
    const v2492 = v2491 + 2;
    const v2493 = v2490.getInt8(v2492);
    var rval = v2489 ^ v2493;
    this.read += 3;
    return rval;
};
v2485.getInt24 = v2494;
const v2495 = util.DataBuffer;
const v2496 = v2495.prototype;
const v2499 = function () {
    const v2497 = this.data;
    const v2498 = this.read;
    var rval = v2497.getInt32(v2498);
    this.read += 4;
    return rval;
};
v2496.getInt32 = v2499;
const v2500 = util.DataBuffer;
const v2501 = v2500.prototype;
const v2504 = function () {
    const v2502 = this.data;
    const v2503 = this.read;
    var rval = v2502.getInt16(v2503, true);
    this.read += 2;
    return rval;
};
v2501.getInt16Le = v2504;
const v2505 = util.DataBuffer;
const v2506 = v2505.prototype;
const v2515 = function () {
    const v2507 = this.data;
    const v2508 = this.read;
    const v2509 = v2507.getInt8(v2508);
    const v2510 = this.data;
    const v2511 = this.read;
    const v2512 = v2511 + 1;
    const v2513 = v2510.getInt16(v2512, true);
    const v2514 = v2513 << 8;
    var rval = v2509 ^ v2514;
    this.read += 3;
    return rval;
};
v2506.getInt24Le = v2515;
const v2516 = util.DataBuffer;
const v2517 = v2516.prototype;
const v2520 = function () {
    const v2518 = this.data;
    const v2519 = this.read;
    var rval = v2518.getInt32(v2519, true);
    this.read += 4;
    return rval;
};
v2517.getInt32Le = v2520;
const v2521 = util.DataBuffer;
const v2522 = v2521.prototype;
const v2530 = function (n) {
    const v2523 = _checkBitsParam(n);
    v2523;
    var rval = 0;
    let v2524 = true;
    while (v2524) {
        const v2525 = rval << 8;
        const v2526 = this.data;
        const v2527 = this.read;
        const v2528 = v2527++;
        const v2529 = v2526.getInt8(v2528);
        rval = v2525 + v2529;
        n -= 8;
        v2524 = n > 0;
    }
    return rval;
};
v2522.getInt = v2530;
const v2531 = util.DataBuffer;
const v2532 = v2531.prototype;
const v2535 = function (n) {
    var x = this.getInt(n);
    const v2533 = n - 2;
    var max = 2 << v2533;
    const v2534 = x >= max;
    if (v2534) {
        x -= max << 1;
    }
    return x;
};
v2532.getSignedInt = v2535;
const v2536 = util.DataBuffer;
const v2537 = v2536.prototype;
const v2551 = function (count) {
    var rval;
    if (count) {
        const v2538 = this.length();
        count = Math.min(v2538, count);
        const v2539 = this.data;
        const v2540 = this.read;
        const v2541 = this.read;
        const v2542 = v2541 + count;
        rval = v2539.slice(v2540, v2542);
        this.read += count;
    } else {
        const v2543 = count === 0;
        if (v2543) {
            rval = '';
        } else {
            const v2544 = this.read;
            const v2545 = v2544 === 0;
            const v2546 = this.data;
            const v2547 = this.data;
            const v2548 = this.read;
            const v2549 = v2547.slice(v2548);
            if (v2545) {
                rval = v2546;
            } else {
                rval = v2549;
            }
            const v2550 = this.clear();
            v2550;
        }
    }
    return rval;
};
v2537.getBytes = v2551;
const v2552 = util.DataBuffer;
const v2553 = v2552.prototype;
const v2565 = function (count) {
    const v2554 = typeof count;
    const v2555 = v2554 === 'undefined';
    const v2556 = this.data;
    const v2557 = this.read;
    const v2558 = v2556.slice(v2557);
    const v2559 = this.data;
    const v2560 = this.read;
    const v2561 = this.read;
    const v2562 = v2561 + count;
    const v2563 = v2559.slice(v2560, v2562);
    let v2564;
    if (v2555) {
        v2564 = v2558;
    } else {
        v2564 = v2563;
    }
    return v2564;
};
v2553.bytes = v2565;
const v2566 = util.DataBuffer;
const v2567 = v2566.prototype;
const v2572 = function (i) {
    const v2568 = this.data;
    const v2569 = this.read;
    const v2570 = v2569 + i;
    const v2571 = v2568.getUint8(v2570);
    return v2571;
};
v2567.at = v2572;
const v2573 = util.DataBuffer;
const v2574 = v2573.prototype;
const v2577 = function (i, b) {
    const v2575 = this.data;
    const v2576 = v2575.setUint8(i, b);
    v2576;
    return this;
};
v2574.setAt = v2577;
const v2578 = util.DataBuffer;
const v2579 = v2578.prototype;
const v2584 = function () {
    const v2580 = this.data;
    const v2581 = this.write;
    const v2582 = v2581 - 1;
    const v2583 = v2580.getUint8(v2582);
    return v2583;
};
v2579.last = v2584;
const v2585 = util.DataBuffer;
const v2586 = v2585.prototype;
const v2588 = function () {
    const v2587 = new util.DataBuffer(this);
    return v2587;
};
v2586.copy = v2588;
const v2589 = util.DataBuffer;
const v2590 = v2589.prototype;
const v2599 = function () {
    const v2591 = this.read;
    const v2592 = v2591 > 0;
    if (v2592) {
        const v2593 = this.data;
        const v2594 = v2593.buffer;
        const v2595 = this.read;
        var src = new Uint8Array(v2594, v2595);
        const v2596 = src.byteLength;
        var dst = new Uint8Array(v2596);
        const v2597 = dst.set(src);
        v2597;
        this.data = new DataView(dst);
        const v2598 = this.read;
        this.write -= v2598;
        this.read = 0;
    }
    return this;
};
v2590.compact = v2599;
const v2600 = util.DataBuffer;
const v2601 = v2600.prototype;
const v2603 = function () {
    const v2602 = new ArrayBuffer(0);
    this.data = new DataView(v2602);
    this.read = this.write = 0;
    return this;
};
v2601.clear = v2603;
const v2604 = util.DataBuffer;
const v2605 = v2604.prototype;
const v2612 = function (count) {
    const v2606 = this.length();
    const v2607 = v2606 - count;
    const v2608 = Math.max(0, v2607);
    this.write = v2608;
    const v2609 = this.read;
    const v2610 = this.write;
    const v2611 = Math.min(v2609, v2610);
    this.read = v2611;
    return this;
};
v2605.truncate = v2612;
const v2613 = util.DataBuffer;
const v2614 = v2613.prototype;
const v2621 = function () {
    var rval = '';
    var i = this.read;
    const v2615 = this.data;
    const v2616 = v2615.byteLength;
    let v2617 = i < v2616;
    while (v2617) {
        const v2619 = this.data;
        var b = v2619.getUint8(i);
        const v2620 = b < 16;
        if (v2620) {
            rval += '0';
        }
        rval += b.toString(16);
        const v2618 = ++i;
        v2617 = i < v2616;
    }
    return rval;
};
v2614.toHex = v2621;
const v2622 = util.DataBuffer;
const v2623 = v2622.prototype;
const v2651 = function (encoding) {
    const v2624 = this.data;
    const v2625 = this.read;
    const v2626 = this.length();
    var view = new Uint8Array(v2624, v2625, v2626);
    encoding = encoding || 'utf8';
    const v2627 = encoding === 'binary';
    const v2628 = encoding === 'raw';
    const v2629 = v2627 || v2628;
    if (v2629) {
        const v2630 = util.binary;
        const v2631 = v2630.raw;
        const v2632 = v2631.encode(view);
        return v2632;
    }
    const v2633 = encoding === 'hex';
    if (v2633) {
        const v2634 = util.binary;
        const v2635 = v2634.hex;
        const v2636 = v2635.encode(view);
        return v2636;
    }
    const v2637 = encoding === 'base64';
    if (v2637) {
        const v2638 = util.binary;
        const v2639 = v2638.base64;
        const v2640 = v2639.encode(view);
        return v2640;
    }
    const v2641 = encoding === 'utf8';
    if (v2641) {
        const v2642 = util.text;
        const v2643 = v2642.utf8;
        const v2644 = v2643.decode(view);
        return v2644;
    }
    const v2645 = encoding === 'utf16';
    if (v2645) {
        const v2646 = util.text;
        const v2647 = v2646.utf16;
        const v2648 = v2647.decode(view);
        return v2648;
    }
    const v2649 = 'Invalid encoding: ' + encoding;
    const v2650 = new Error(v2649);
    throw v2650;
};
v2623.toString = v2651;
const v2656 = function (input, encoding) {
    encoding = encoding || 'raw';
    const v2652 = input !== undefined;
    const v2653 = encoding === 'utf8';
    const v2654 = v2652 && v2653;
    if (v2654) {
        input = util.encodeUtf8(input);
    }
    const v2655 = new util.ByteBuffer(input);
    return v2655;
};
util.createBuffer = v2656;
const v2660 = function (c, n) {
    var s = '';
    let v2657 = n > 0;
    while (v2657) {
        const v2658 = n & 1;
        if (v2658) {
            s += c;
        }
        n >>>= 1;
        const v2659 = n > 0;
        if (v2659) {
            c += c;
        }
        v2657 = n > 0;
    }
    return s;
};
util.fillString = v2660;
const v2668 = function (s1, s2, n) {
    var s3 = '';
    var b = '';
    var t = '';
    var i = 0;
    var c = 0;
    let v2661 = n > 0;
    while (v2661) {
        const v2664 = s1.charCodeAt(i);
        const v2665 = s2.charCodeAt(i);
        b = v2664 ^ v2665;
        const v2666 = c >= 10;
        if (v2666) {
            s3 += t;
            t = '';
            c = 0;
        }
        t += String.fromCharCode(b);
        const v2667 = ++c;
        v2667;
        const v2662 = --n;
        const v2663 = ++i;
        v2661 = n > 0;
    }
    s3 += t;
    return s3;
};
util.xorBytes = v2668;
const v2678 = function (hex) {
    var rval = '';
    var i = 0;
    const v2669 = hex.length;
    const v2670 = 1 == 1;
    const v2671 = v2669 & v2670;
    if (v2671) {
        i = 1;
        const v2672 = hex[0];
        const v2673 = parseInt(v2672, 16);
        rval += String.fromCharCode(v2673);
    }
    const v2674 = hex.length;
    let v2675 = i < v2674;
    while (v2675) {
        const v2676 = hex.substr(i, 2);
        const v2677 = parseInt(v2676, 16);
        rval += String.fromCharCode(v2677);
        v2675 = i < v2674;
    }
    return rval;
};
util.hexToBytes = v2678;
const v2681 = function (bytes) {
    const v2679 = util.createBuffer(bytes);
    const v2680 = v2679.toHex();
    return v2680;
};
util.bytesToHex = v2681;
const v2696 = function (i) {
    const v2682 = i >> 24;
    const v2683 = v2682 & 255;
    const v2684 = String.fromCharCode(v2683);
    const v2685 = i >> 16;
    const v2686 = v2685 & 255;
    const v2687 = String.fromCharCode(v2686);
    const v2688 = v2684 + v2687;
    const v2689 = i >> 8;
    const v2690 = v2689 & 255;
    const v2691 = String.fromCharCode(v2690);
    const v2692 = v2688 + v2691;
    const v2693 = i & 255;
    const v2694 = String.fromCharCode(v2693);
    const v2695 = v2692 + v2694;
    return v2695;
};
util.int32ToBytes = v2696;
var _base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const v2697 = -1;
const v2698 = -1;
const v2699 = -1;
const v2700 = -1;
const v2701 = -1;
const v2702 = -1;
const v2703 = -1;
const v2704 = -1;
const v2705 = -1;
const v2706 = -1;
const v2707 = -1;
const v2708 = -1;
const v2709 = -1;
const v2710 = -1;
const v2711 = -1;
var _base64Idx = [
    62,
    v2697,
    v2698,
    v2699,
    63,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    v2700,
    v2701,
    v2702,
    64,
    v2703,
    v2704,
    v2705,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    v2706,
    v2707,
    v2708,
    v2709,
    v2710,
    v2711,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51
];
var _base58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const v2734 = function (input, maxline) {
    var line = '';
    var output = '';
    var chr1;
    var chr2;
    var chr3;
    var i = 0;
    const v2712 = input.length;
    let v2713 = i < v2712;
    while (v2713) {
        const v2714 = i++;
        chr1 = input.charCodeAt(v2714);
        const v2715 = i++;
        chr2 = input.charCodeAt(v2715);
        const v2716 = i++;
        chr3 = input.charCodeAt(v2716);
        const v2717 = chr1 >> 2;
        line += _base64.charAt(v2717);
        const v2718 = chr1 & 3;
        const v2719 = v2718 << 4;
        const v2720 = chr2 >> 4;
        const v2721 = v2719 | v2720;
        line += _base64.charAt(v2721);
        const v2722 = isNaN(chr2);
        if (v2722) {
            line += '==';
        } else {
            const v2723 = chr2 & 15;
            const v2724 = v2723 << 2;
            const v2725 = chr3 >> 6;
            const v2726 = v2724 | v2725;
            line += _base64.charAt(v2726);
            const v2727 = isNaN(chr3);
            const v2728 = chr3 & 63;
            const v2729 = _base64.charAt(v2728);
            if (v2727) {
                line = '=';
            } else {
                line = v2729;
            }
        }
        const v2730 = line.length;
        const v2731 = v2730 > maxline;
        const v2732 = maxline && v2731;
        if (v2732) {
            const v2733 = line.substr(0, maxline);
            output += v2733 + '\r\n';
            line = line.substr(maxline);
        }
        v2713 = i < v2712;
    }
    output += line;
    return output;
};
util.encode64 = v2734;
const v2761 = function (input) {
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
    var output = '';
    var enc1;
    var enc2;
    var enc3;
    var enc4;
    var i = 0;
    const v2735 = input.length;
    let v2736 = i < v2735;
    while (v2736) {
        const v2737 = i++;
        const v2738 = input.charCodeAt(v2737);
        const v2739 = v2738 - 43;
        enc1 = _base64Idx[v2739];
        const v2740 = i++;
        const v2741 = input.charCodeAt(v2740);
        const v2742 = v2741 - 43;
        enc2 = _base64Idx[v2742];
        const v2743 = i++;
        const v2744 = input.charCodeAt(v2743);
        const v2745 = v2744 - 43;
        enc3 = _base64Idx[v2745];
        const v2746 = i++;
        const v2747 = input.charCodeAt(v2746);
        const v2748 = v2747 - 43;
        enc4 = _base64Idx[v2748];
        const v2749 = enc1 << 2;
        const v2750 = enc2 >> 4;
        const v2751 = v2749 | v2750;
        output += String.fromCharCode(v2751);
        const v2752 = enc3 !== 64;
        if (v2752) {
            const v2753 = enc2 & 15;
            const v2754 = v2753 << 4;
            const v2755 = enc3 >> 2;
            const v2756 = v2754 | v2755;
            output += String.fromCharCode(v2756);
            const v2757 = enc4 !== 64;
            if (v2757) {
                const v2758 = enc3 & 3;
                const v2759 = v2758 << 6;
                const v2760 = v2759 | enc4;
                output += String.fromCharCode(v2760);
            }
        }
        v2736 = i < v2735;
    }
    return output;
};
util.decode64 = v2761;
const v2764 = function (str) {
    const v2762 = encodeURIComponent(str);
    const v2763 = unescape(v2762);
    return v2763;
};
util.encodeUtf8 = v2764;
const v2767 = function (str) {
    const v2765 = escape(str);
    const v2766 = decodeURIComponent(v2765);
    return v2766;
};
util.decodeUtf8 = v2767;
const v2768 = {};
const v2769 = {};
const v2770 = {};
const v2771 = {};
const v2772 = baseN.encode;
const v2773 = baseN.decode;
const v2774 = {};
v2774.encode = v2772;
v2774.decode = v2773;
const v2775 = {};
v2775.raw = v2768;
v2775.hex = v2769;
v2775.base64 = v2770;
v2775.base58 = v2771;
v2775.baseN = v2774;
util.binary = v2775;
const v2776 = util.binary;
const v2777 = v2776.raw;
const v2780 = function (bytes) {
    const v2778 = String.fromCharCode;
    const v2779 = v2778.apply(null, bytes);
    return v2779;
};
v2777.encode = v2780;
const v2781 = util.binary;
const v2782 = v2781.raw;
const v2792 = function (str, output, offset) {
    var out = output;
    const v2783 = !out;
    if (v2783) {
        const v2784 = str.length;
        out = new Uint8Array(v2784);
    }
    offset = offset || 0;
    var j = offset;
    var i = 0;
    const v2785 = str.length;
    let v2786 = i < v2785;
    while (v2786) {
        const v2789 = str.charCodeAt(i);
        out[v2788] = v2789;
        const v2787 = ++i;
        v2786 = i < v2785;
    }
    const v2790 = j - offset;
    let v2791;
    if (output) {
        v2791 = v2790;
    } else {
        v2791 = out;
    }
    return v2791;
};
v2782.decode = v2792;
const v2793 = util.binary;
const v2794 = v2793.hex;
const v2795 = util.bytesToHex;
v2794.encode = v2795;
const v2796 = util.binary;
const v2797 = v2796.hex;
const v2814 = function (hex, output, offset) {
    var out = output;
    const v2798 = !out;
    if (v2798) {
        const v2799 = hex.length;
        const v2800 = v2799 / 2;
        const v2801 = Math.ceil(v2800);
        out = new Uint8Array(v2801);
    }
    offset = offset || 0;
    var i = 0;
    var j = offset;
    const v2802 = hex.length;
    const v2803 = v2802 & 1;
    if (v2803) {
        i = 1;
        const v2805 = hex[0];
        const v2806 = parseInt(v2805, 16);
        out[v2804] = v2806;
    }
    const v2807 = hex.length;
    let v2808 = i < v2807;
    while (v2808) {
        const v2810 = hex.substr(i, 2);
        const v2811 = parseInt(v2810, 16);
        out[v2809] = v2811;
        v2808 = i < v2807;
    }
    const v2812 = j - offset;
    let v2813;
    if (output) {
        v2813 = v2812;
    } else {
        v2813 = out;
    }
    return v2813;
};
v2797.decode = v2814;
const v2815 = util.binary;
const v2816 = v2815.base64;
const v2839 = function (input, maxline) {
    var line = '';
    var output = '';
    var chr1;
    var chr2;
    var chr3;
    var i = 0;
    const v2817 = input.byteLength;
    let v2818 = i < v2817;
    while (v2818) {
        const v2819 = i++;
        chr1 = input[v2819];
        const v2820 = i++;
        chr2 = input[v2820];
        const v2821 = i++;
        chr3 = input[v2821];
        const v2822 = chr1 >> 2;
        line += _base64.charAt(v2822);
        const v2823 = chr1 & 3;
        const v2824 = v2823 << 4;
        const v2825 = chr2 >> 4;
        const v2826 = v2824 | v2825;
        line += _base64.charAt(v2826);
        const v2827 = isNaN(chr2);
        if (v2827) {
            line += '==';
        } else {
            const v2828 = chr2 & 15;
            const v2829 = v2828 << 2;
            const v2830 = chr3 >> 6;
            const v2831 = v2829 | v2830;
            line += _base64.charAt(v2831);
            const v2832 = isNaN(chr3);
            const v2833 = chr3 & 63;
            const v2834 = _base64.charAt(v2833);
            if (v2832) {
                line = '=';
            } else {
                line = v2834;
            }
        }
        const v2835 = line.length;
        const v2836 = v2835 > maxline;
        const v2837 = maxline && v2836;
        if (v2837) {
            const v2838 = line.substr(0, maxline);
            output += v2838 + '\r\n';
            line = line.substr(maxline);
        }
        v2818 = i < v2817;
    }
    output += line;
    return output;
};
v2816.encode = v2839;
const v2840 = util.binary;
const v2841 = v2840.base64;
const v2876 = function (input, output, offset) {
    var out = output;
    const v2842 = !out;
    if (v2842) {
        const v2843 = input.length;
        const v2844 = v2843 / 4;
        const v2845 = Math.ceil(v2844);
        const v2846 = v2845 * 3;
        out = new Uint8Array(v2846);
    }
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
    offset = offset || 0;
    var enc1;
    var enc2;
    var enc3;
    var enc4;
    var i = 0;
    var j = offset;
    const v2847 = input.length;
    let v2848 = i < v2847;
    while (v2848) {
        const v2849 = i++;
        const v2850 = input.charCodeAt(v2849);
        const v2851 = v2850 - 43;
        enc1 = _base64Idx[v2851];
        const v2852 = i++;
        const v2853 = input.charCodeAt(v2852);
        const v2854 = v2853 - 43;
        enc2 = _base64Idx[v2854];
        const v2855 = i++;
        const v2856 = input.charCodeAt(v2855);
        const v2857 = v2856 - 43;
        enc3 = _base64Idx[v2857];
        const v2858 = i++;
        const v2859 = input.charCodeAt(v2858);
        const v2860 = v2859 - 43;
        enc4 = _base64Idx[v2860];
        const v2861 = j++;
        const v2862 = enc1 << 2;
        const v2863 = enc2 >> 4;
        out[v2861] = v2862 | v2863;
        const v2864 = enc3 !== 64;
        if (v2864) {
            const v2865 = j++;
            const v2866 = enc2 & 15;
            const v2867 = v2866 << 4;
            const v2868 = enc3 >> 2;
            out[v2865] = v2867 | v2868;
            const v2869 = enc4 !== 64;
            if (v2869) {
                const v2870 = j++;
                const v2871 = enc3 & 3;
                const v2872 = v2871 << 6;
                out[v2870] = v2872 | enc4;
            }
        }
        v2848 = i < v2847;
    }
    const v2873 = j - offset;
    const v2874 = out.subarray(0, j);
    let v2875;
    if (output) {
        v2875 = v2873;
    } else {
        v2875 = v2874;
    }
    return v2875;
};
v2841.decode = v2876;
const v2877 = util.binary;
const v2878 = v2877.base58;
const v2882 = function (input, maxline) {
    const v2879 = util.binary;
    const v2880 = v2879.baseN;
    const v2881 = v2880.encode(input, _base58, maxline);
    return v2881;
};
v2878.encode = v2882;
const v2883 = util.binary;
const v2884 = v2883.base58;
const v2888 = function (input, maxline) {
    const v2885 = util.binary;
    const v2886 = v2885.baseN;
    const v2887 = v2886.decode(input, _base58, maxline);
    return v2887;
};
v2884.decode = v2888;
const v2889 = {};
const v2890 = {};
const v2891 = {};
v2891.utf8 = v2889;
v2891.utf16 = v2890;
util.text = v2891;
const v2892 = util.text;
const v2893 = v2892.utf8;
const v2903 = function (str, output, offset) {
    str = util.encodeUtf8(str);
    var out = output;
    const v2894 = !out;
    if (v2894) {
        const v2895 = str.length;
        out = new Uint8Array(v2895);
    }
    offset = offset || 0;
    var j = offset;
    var i = 0;
    const v2896 = str.length;
    let v2897 = i < v2896;
    while (v2897) {
        const v2900 = str.charCodeAt(i);
        out[v2899] = v2900;
        const v2898 = ++i;
        v2897 = i < v2896;
    }
    const v2901 = j - offset;
    let v2902;
    if (output) {
        v2902 = v2901;
    } else {
        v2902 = out;
    }
    return v2902;
};
v2893.encode = v2903;
const v2904 = util.text;
const v2905 = v2904.utf8;
const v2909 = function (bytes) {
    const v2906 = String.fromCharCode;
    const v2907 = v2906.apply(null, bytes);
    const v2908 = util.decodeUtf8(v2907);
    return v2908;
};
v2905.decode = v2909;
const v2910 = util.text;
const v2911 = v2910.utf16;
const v2923 = function (str, output, offset) {
    var out = output;
    const v2912 = !out;
    if (v2912) {
        const v2913 = str.length;
        const v2914 = v2913 * 2;
        out = new Uint8Array(v2914);
    }
    const v2915 = out.buffer;
    var view = new Uint16Array(v2915);
    offset = offset || 0;
    var j = offset;
    var k = offset;
    var i = 0;
    const v2916 = str.length;
    let v2917 = i < v2916;
    while (v2917) {
        const v2920 = str.charCodeAt(i);
        view[v2919] = v2920;
        j += 2;
        const v2918 = ++i;
        v2917 = i < v2916;
    }
    const v2921 = j - offset;
    let v2922;
    if (output) {
        v2922 = v2921;
    } else {
        v2922 = out;
    }
    return v2922;
};
v2911.encode = v2923;
const v2924 = util.text;
const v2925 = v2924.utf16;
const v2930 = function (bytes) {
    const v2926 = String.fromCharCode;
    const v2927 = bytes.buffer;
    const v2928 = new Uint16Array(v2927);
    const v2929 = v2926.apply(null, v2928);
    return v2929;
};
v2925.decode = v2930;
const v2937 = function (api, bytes, raw) {
    const v2931 = util.encode64(bytes);
    const v2932 = api.deflate(v2931);
    const v2933 = v2932.rval;
    bytes = util.decode64(v2933);
    if (raw) {
        var start = 2;
        var flg = bytes.charCodeAt(1);
        const v2934 = flg & 32;
        if (v2934) {
            start = 6;
        }
        const v2935 = bytes.length;
        const v2936 = v2935 - 4;
        bytes = bytes.substring(start, v2936);
    }
    return bytes;
};
util.deflate = v2937;
const v2943 = function (api, bytes, raw) {
    const v2938 = util.encode64(bytes);
    const v2939 = api.inflate(v2938);
    var rval = v2939.rval;
    const v2940 = rval === null;
    const v2941 = util.decode64(rval);
    let v2942;
    if (v2940) {
        v2942 = null;
    } else {
        v2942 = v2941;
    }
    return v2942;
};
util.inflate = v2943;
var _setStorageObject = function (api, id, obj) {
    const v2944 = !api;
    if (v2944) {
        const v2945 = new Error('WebStorage not available.');
        throw v2945;
    }
    var rval;
    const v2946 = obj === null;
    if (v2946) {
        rval = api.removeItem(id);
    } else {
        const v2947 = JSON.stringify(obj);
        obj = util.encode64(v2947);
        rval = api.setItem(id, obj);
    }
    const v2948 = typeof rval;
    const v2949 = v2948 !== 'undefined';
    const v2950 = rval.rval;
    const v2951 = v2950 !== true;
    const v2952 = v2949 && v2951;
    if (v2952) {
        const v2953 = rval.error;
        const v2954 = v2953.message;
        var error = new Error(v2954);
        const v2955 = rval.error;
        const v2956 = v2955.id;
        error.id = v2956;
        const v2957 = rval.error;
        const v2958 = v2957.name;
        error.name = v2958;
        throw error;
    }
};
var _getStorageObject = function (api, id) {
    const v2959 = !api;
    if (v2959) {
        const v2960 = new Error('WebStorage not available.');
        throw v2960;
    }
    var rval = api.getItem(id);
    const v2961 = api.init;
    if (v2961) {
        const v2962 = rval.rval;
        const v2963 = v2962 === null;
        if (v2963) {
            const v2964 = rval.error;
            if (v2964) {
                const v2965 = rval.error;
                const v2966 = v2965.message;
                var error = new Error(v2966);
                const v2967 = rval.error;
                const v2968 = v2967.id;
                error.id = v2968;
                const v2969 = rval.error;
                const v2970 = v2969.name;
                error.name = v2970;
                throw error;
            }
            rval = null;
        } else {
            rval = rval.rval;
        }
    }
    const v2971 = rval !== null;
    if (v2971) {
        const v2972 = util.decode64(rval);
        rval = JSON.parse(v2972);
    }
    return rval;
};
var _setItem = function (api, id, key, data) {
    var obj = _getStorageObject(api, id);
    const v2973 = obj === null;
    if (v2973) {
        obj = {};
    }
    obj[key] = data;
    const v2974 = _setStorageObject(api, id, obj);
    v2974;
};
var _getItem = function (api, id, key) {
    var rval = _getStorageObject(api, id);
    const v2975 = rval !== null;
    if (v2975) {
        const v2976 = key in rval;
        const v2977 = rval[key];
        if (v2976) {
            rval = v2977;
        } else {
            rval = null;
        }
    }
    return rval;
};
var _removeItem = function (api, id, key) {
    var obj = _getStorageObject(api, id);
    const v2978 = obj !== null;
    const v2979 = key in obj;
    const v2980 = v2978 && v2979;
    if (v2980) {
        const v2981 = obj[key];
        const v2982 = delete v2981;
        v2982;
        var empty = true;
        let prop;
        for (prop in obj) {
            empty = false;
            break;
        }
        if (empty) {
            obj = null;
        }
        const v2983 = _setStorageObject(api, id, obj);
        v2983;
    }
};
var _clearItems = function (api, id) {
    const v2984 = _setStorageObject(api, id, null);
    v2984;
};
var _callStorageFunction = function (func, args, location) {
    var rval = null;
    const v2985 = typeof location;
    const v2986 = v2985 === 'undefined';
    if (v2986) {
        location = [
            'web',
            'flash'
        ];
    }
    var type;
    var done = false;
    var exception = null;
    let idx;
    for (idx in location) {
        type = location[idx];
        try {
            const v2987 = type === 'flash';
            const v2988 = type === 'both';
            const v2989 = v2987 || v2988;
            if (v2989) {
                const v2990 = args[0];
                const v2991 = v2990 === null;
                if (v2991) {
                    const v2992 = new Error('Flash local storage not available.');
                    throw v2992;
                }
                rval = func.apply(this, args);
                done = type === 'flash';
            }
            const v2993 = type === 'web';
            const v2994 = type === 'both';
            const v2995 = v2993 || v2994;
            if (v2995) {
                args[0] = localStorage;
                rval = func.apply(this, args);
                done = true;
            }
        } catch (ex) {
            exception = ex;
        }
        if (done) {
            break;
        }
    }
    const v2996 = !done;
    if (v2996) {
        throw exception;
    }
    return rval;
};
const v2998 = function (api, id, key, data, location) {
    const v2997 = _callStorageFunction(_setItem, arguments, location);
    v2997;
};
util.setItem = v2998;
const v3000 = function (api, id, key, location) {
    const v2999 = _callStorageFunction(_getItem, arguments, location);
    return v2999;
};
util.getItem = v3000;
const v3002 = function (api, id, key, location) {
    const v3001 = _callStorageFunction(_removeItem, arguments, location);
    v3001;
};
util.removeItem = v3002;
const v3004 = function (api, id, location) {
    const v3003 = _callStorageFunction(_clearItems, arguments, location);
    v3003;
};
util.clearItems = v3004;
const v3032 = function (str) {
    var regex = /^(https?):\/\/([^:&^\/]*):?(\d*)(.*)$/g;
    regex.lastIndex = 0;
    var m = regex.exec(str);
    let url;
    const v3005 = m === null;
    const v3006 = m[1];
    const v3007 = m[2];
    const v3008 = m[3];
    const v3009 = m[4];
    const v3010 = {
        full: str,
        scheme: v3006,
        host: v3007,
        port: v3008,
        path: v3009
    };
    if (v3005) {
        url = null;
    } else {
        url = v3010;
    }
    if (url) {
        const v3011 = url.host;
        url.fullHost = v3011;
        const v3012 = url.port;
        if (v3012) {
            const v3013 = url.port;
            const v3014 = v3013 !== 80;
            const v3015 = url.scheme;
            const v3016 = v3015 === 'http';
            const v3017 = v3014 && v3016;
            if (v3017) {
                const v3018 = url.port;
                url.fullHost += ':' + v3018;
            } else {
                const v3019 = url.port;
                const v3020 = v3019 !== 443;
                const v3021 = url.scheme;
                const v3022 = v3021 === 'https';
                const v3023 = v3020 && v3022;
                if (v3023) {
                    const v3024 = url.port;
                    url.fullHost += ':' + v3024;
                }
            }
        } else {
            const v3025 = url.scheme;
            const v3026 = v3025 === 'http';
            if (v3026) {
                url.port = 80;
            } else {
                const v3027 = url.scheme;
                const v3028 = v3027 === 'https';
                if (v3028) {
                    url.port = 443;
                }
            }
        }
        const v3029 = url.scheme;
        const v3030 = v3029 + '://';
        const v3031 = url.fullHost;
        url.full = v3030 + v3031;
    }
    return url;
};
util.parseUrl = v3032;
var _queryVariables = null;
const v3064 = function (query) {
    var parse = function (q) {
        var rval = {};
        var kvpairs = q.split('&');
        var i = 0;
        const v3033 = kvpairs.length;
        let v3034 = i < v3033;
        while (v3034) {
            const v3036 = kvpairs[i];
            var pos = v3036.indexOf('=');
            var key;
            var val;
            const v3037 = pos > 0;
            if (v3037) {
                const v3038 = kvpairs[i];
                key = v3038.substring(0, pos);
                const v3039 = kvpairs[i];
                const v3040 = pos + 1;
                val = v3039.substring(v3040);
            } else {
                key = kvpairs[i];
                val = null;
            }
            const v3041 = key in rval;
            const v3042 = !v3041;
            if (v3042) {
                rval[key] = [];
            }
            const v3043 = Object.prototype;
            const v3044 = key in v3043;
            const v3045 = !v3044;
            const v3046 = val !== null;
            const v3047 = v3045 && v3046;
            if (v3047) {
                const v3048 = rval[key];
                const v3049 = unescape(val);
                const v3050 = v3048.push(v3049);
                v3050;
            }
            const v3035 = i++;
            v3034 = i < v3033;
        }
        return rval;
    };
    var rval;
    const v3051 = typeof query;
    const v3052 = v3051 === 'undefined';
    if (v3052) {
        const v3053 = _queryVariables === null;
        if (v3053) {
            const v3054 = typeof window;
            const v3055 = v3054 !== 'undefined';
            const v3056 = window.location;
            const v3057 = v3055 && v3056;
            const v3058 = window.location;
            const v3059 = v3058.search;
            const v3060 = v3057 && v3059;
            if (v3060) {
                const v3061 = window.location;
                const v3062 = v3061.search;
                const v3063 = v3062.substring(1);
                _queryVariables = parse(v3063);
            } else {
                _queryVariables = {};
            }
        }
        rval = _queryVariables;
    } else {
        rval = parse(query);
    }
    return rval;
};
util.getQueryVariables = v3064;
const v3077 = function (fragment) {
    var fp = fragment;
    var fq = '';
    var pos = fragment.indexOf('?');
    const v3065 = pos > 0;
    if (v3065) {
        fp = fragment.substring(0, pos);
        const v3066 = pos + 1;
        fq = fragment.substring(v3066);
    }
    var path = fp.split('/');
    const v3067 = path.length;
    const v3068 = v3067 > 0;
    const v3069 = path[0];
    const v3070 = v3069 === '';
    const v3071 = v3068 && v3070;
    if (v3071) {
        const v3072 = path.shift();
        v3072;
    }
    let query;
    const v3073 = fq === '';
    const v3074 = {};
    const v3075 = util.getQueryVariables(fq);
    if (v3073) {
        query = v3074;
    } else {
        query = v3075;
    }
    const v3076 = {};
    v3076.pathString = fp;
    v3076.queryString = fq;
    v3076.path = path;
    v3076.query = query;
    return v3076;
};
util.parseFragment = v3077;
const v3097 = function (reqString) {
    var frag = util.parseFragment(reqString);
    const v3078 = frag.pathString;
    const v3079 = frag.queryString;
    const v3086 = function (i) {
        const v3080 = typeof i;
        const v3081 = v3080 === 'undefined';
        const v3082 = frag.path;
        const v3083 = frag.path;
        const v3084 = v3083[i];
        let v3085;
        if (v3081) {
            v3085 = v3082;
        } else {
            v3085 = v3084;
        }
        return v3085;
    };
    const v3093 = function (k, i) {
        var rval;
        const v3087 = typeof k;
        const v3088 = v3087 === 'undefined';
        if (v3088) {
            rval = frag.query;
        } else {
            const v3089 = frag.query;
            rval = v3089[k];
            const v3090 = typeof i;
            const v3091 = v3090 !== 'undefined';
            const v3092 = rval && v3091;
            if (v3092) {
                rval = rval[i];
            }
        }
        return rval;
    };
    const v3096 = function (k, _default) {
        var rval;
        var vals = req.getQuery(k);
        if (vals) {
            const v3094 = vals.length;
            const v3095 = v3094 - 1;
            rval = vals[v3095];
        } else {
            rval = _default;
        }
        return rval;
    };
    var req = {};
    req.path = v3078;
    req.query = v3079;
    req.getPath = v3086;
    req.getQuery = v3093;
    req.getQueryLast = v3096;
    return req;
};
util.makeRequest = v3097;
const v3112 = function (path, query, fragment) {
    const v3098 = jQuery.isArray(path);
    const v3099 = path.join('/');
    if (v3098) {
        path = v3099;
    } else {
        path = path;
    }
    const v3100 = {};
    const v3101 = query || v3100;
    var qstr = jQuery.param(v3101);
    fragment = fragment || '';
    const v3102 = qstr.length;
    const v3103 = v3102 > 0;
    const v3104 = '?' + qstr;
    let v3105;
    if (v3103) {
        v3105 = v3104;
    } else {
        v3105 = '';
    }
    const v3106 = path + v3105;
    const v3107 = fragment.length;
    const v3108 = v3107 > 0;
    const v3109 = '#' + fragment;
    let v3110;
    if (v3108) {
        v3110 = v3109;
    } else {
        v3110 = '';
    }
    const v3111 = v3106 + v3110;
    return v3111;
};
util.makeLink = v3112;
const v3131 = function (object, keys, value) {
    const v3113 = typeof object;
    const v3114 = v3113 === 'object';
    const v3115 = object !== null;
    const v3116 = v3114 && v3115;
    if (v3116) {
        var i = 0;
        var len = keys.length;
        let v3117 = i < len;
        while (v3117) {
            const v3118 = i++;
            var next = keys[v3118];
            const v3119 = i == len;
            if (v3119) {
                object[next] = value;
            } else {
                var hasNext = next in object;
                const v3120 = !hasNext;
                const v3121 = object[next];
                const v3122 = typeof v3121;
                const v3123 = v3122 !== 'object';
                const v3124 = hasNext && v3123;
                const v3125 = v3120 || v3124;
                const v3126 = object[next];
                const v3127 = v3126 === null;
                const v3128 = hasNext && v3127;
                const v3129 = v3125 || v3128;
                if (v3129) {
                    const v3130 = {};
                    object[next] = v3130;
                }
                object = object[next];
            }
            v3117 = i < len;
        }
    }
};
util.setPath = v3131;
const v3141 = function (object, keys, _default) {
    var i = 0;
    var len = keys.length;
    var hasNext = true;
    const v3132 = i < len;
    const v3133 = hasNext && v3132;
    const v3134 = typeof object;
    const v3135 = v3134 === 'object';
    const v3136 = v3133 && v3135;
    const v3137 = object !== null;
    let v3138 = v3136 && v3137;
    while (v3138) {
        const v3139 = i++;
        var next = keys[v3139];
        hasNext = next in object;
        if (hasNext) {
            object = object[next];
        }
        v3138 = v3136 && v3137;
    }
    let v3140;
    if (hasNext) {
        v3140 = object;
    } else {
        v3140 = _default;
    }
    return v3140;
};
util.getPath = v3141;
const v3160 = function (object, keys) {
    const v3142 = typeof object;
    const v3143 = v3142 === 'object';
    const v3144 = object !== null;
    const v3145 = v3143 && v3144;
    if (v3145) {
        var i = 0;
        var len = keys.length;
        let v3146 = i < len;
        while (v3146) {
            const v3147 = i++;
            var next = keys[v3147];
            const v3148 = i == len;
            if (v3148) {
                const v3149 = object[next];
                const v3150 = delete v3149;
                v3150;
            } else {
                const v3151 = next in object;
                const v3152 = !v3151;
                const v3153 = object[next];
                const v3154 = typeof v3153;
                const v3155 = v3154 !== 'object';
                const v3156 = v3152 || v3155;
                const v3157 = object[next];
                const v3158 = v3157 === null;
                const v3159 = v3156 || v3158;
                if (v3159) {
                    break;
                }
                object = object[next];
            }
            v3146 = i < len;
        }
    }
};
util.deletePath = v3160;
const v3162 = function (obj) {
    let prop;
    for (prop in obj) {
        const v3161 = obj.hasOwnProperty(prop);
        if (v3161) {
            return false;
        }
    }
    return true;
};
util.isEmpty = v3162;
const v3183 = function (format) {
    var re = /%./g;
    var match;
    var part;
    var argi = 0;
    var parts = [];
    var last = 0;
    while (match = re.exec(format)) {
        const v3163 = re.lastIndex;
        const v3164 = v3163 - 2;
        part = format.substring(last, v3164);
        const v3165 = part.length;
        const v3166 = v3165 > 0;
        if (v3166) {
            const v3167 = parts.push(part);
            v3167;
        }
        last = re.lastIndex;
        const v3168 = match[0];
        var code = v3168[1];
        switch (code) {
        case 's':
        case 'o':
            const v3169 = arguments.length;
            const v3170 = argi < v3169;
            if (v3170) {
                const v3171 = argi++;
                const v3172 = v3171 + 1;
                const v3173 = arguments[v3172];
                const v3174 = parts.push(v3173);
                v3174;
            } else {
                const v3175 = parts.push('<?>');
                v3175;
            }
            break;
        case '%':
            const v3176 = parts.push('%');
            v3176;
            break;
        default:
            const v3177 = '<%' + code;
            const v3178 = v3177 + '?>';
            const v3179 = parts.push(v3178);
            v3179;
        }
    }
    const v3180 = format.substring(last);
    const v3181 = parts.push(v3180);
    v3181;
    const v3182 = parts.join('');
    return v3182;
};
util.format = v3183;
const v3211 = function (number, decimals, dec_point, thousands_sep) {
    var n = number;
    let c;
    const v3184 = isNaN(decimals = Math.abs(decimals));
    if (v3184) {
        c = 2;
    } else {
        c = decimals;
    }
    let d;
    const v3185 = dec_point === undefined;
    if (v3185) {
        d = ',';
    } else {
        d = dec_point;
    }
    let t;
    const v3186 = thousands_sep === undefined;
    if (v3186) {
        t = '.';
    } else {
        t = thousands_sep;
    }
    let s;
    const v3187 = n < 0;
    if (v3187) {
        s = '-';
    } else {
        s = '';
    }
    const v3188 = +n;
    const v3189 = v3188 || 0;
    const v3190 = Math.abs(v3189);
    const v3191 = parseInt(n = v3190.toFixed(c), 10);
    var i = v3191 + '';
    let j;
    const v3192 = i.length;
    const v3193 = v3192 > 3;
    const v3194 = i.length;
    const v3195 = v3194 % 3;
    if (v3193) {
        j = v3195;
    } else {
        j = 0;
    }
    const v3196 = i.substr(0, j);
    const v3197 = v3196 + t;
    let v3198;
    if (j) {
        v3198 = v3197;
    } else {
        v3198 = '';
    }
    const v3199 = s + v3198;
    const v3200 = i.substr(j);
    const v3201 = '$1' + t;
    const v3202 = v3200.replace(/(\d{3})(?=\d)/g, v3201);
    const v3203 = v3199 + v3202;
    const v3204 = n - i;
    const v3205 = Math.abs(v3204);
    const v3206 = v3205.toFixed(c);
    const v3207 = v3206.slice(2);
    const v3208 = d + v3207;
    let v3209;
    if (c) {
        v3209 = v3208;
    } else {
        v3209 = '';
    }
    const v3210 = v3203 + v3209;
    return v3210;
};
util.formatNumber = v3211;
const v3222 = function (size) {
    const v3212 = size >= 1073741824;
    if (v3212) {
        const v3213 = size / 1073741824;
        const v3214 = util.formatNumber(v3213, 2, '.', '');
        size = v3214 + ' GiB';
    } else {
        const v3215 = size >= 1048576;
        if (v3215) {
            const v3216 = size / 1048576;
            const v3217 = util.formatNumber(v3216, 2, '.', '');
            size = v3217 + ' MiB';
        } else {
            const v3218 = size >= 1024;
            if (v3218) {
                const v3219 = size / 1024;
                const v3220 = util.formatNumber(v3219, 0);
                size = v3220 + ' KiB';
            } else {
                const v3221 = util.formatNumber(size, 0);
                size = v3221 + ' bytes';
            }
        }
    }
    return size;
};
util.formatSize = v3222;
const v3231 = function (ip) {
    const v3223 = ip.indexOf('.');
    const v3224 = -1;
    const v3225 = v3223 !== v3224;
    if (v3225) {
        const v3226 = util.bytesFromIPv4(ip);
        return v3226;
    }
    const v3227 = ip.indexOf(':');
    const v3228 = -1;
    const v3229 = v3227 !== v3228;
    if (v3229) {
        const v3230 = util.bytesFromIPv6(ip);
        return v3230;
    }
    return null;
};
util.bytesFromIP = v3231;
const v3241 = function (ip) {
    ip = ip.split('.');
    const v3232 = ip.length;
    const v3233 = v3232 !== 4;
    if (v3233) {
        return null;
    }
    var b = util.createBuffer();
    var i = 0;
    const v3234 = ip.length;
    let v3235 = i < v3234;
    while (v3235) {
        const v3237 = ip[i];
        var num = parseInt(v3237, 10);
        const v3238 = isNaN(num);
        if (v3238) {
            return null;
        }
        const v3239 = b.putByte(num);
        v3239;
        const v3236 = ++i;
        v3235 = i < v3234;
    }
    const v3240 = b.getBytes();
    return v3240;
};
util.bytesFromIPv4 = v3241;
const v3265 = function (ip) {
    var blanks = 0;
    const v3242 = ip.split(':');
    const v3246 = function (e) {
        const v3243 = e.length;
        const v3244 = v3243 === 0;
        if (v3244) {
            const v3245 = ++blanks;
            v3245;
        }
        return true;
    };
    ip = v3242.filter(v3246);
    const v3247 = ip.length;
    const v3248 = 8 - v3247;
    const v3249 = v3248 + blanks;
    var zeros = v3249 * 2;
    var b = util.createBuffer();
    var i = 0;
    let v3250 = i < 8;
    while (v3250) {
        const v3252 = ip[i];
        const v3253 = !v3252;
        const v3254 = ip[i];
        const v3255 = v3254.length;
        const v3256 = v3255 === 0;
        const v3257 = v3253 || v3256;
        if (v3257) {
            const v3258 = b.fillWithByte(0, zeros);
            v3258;
            zeros = 0;
            continue;
        }
        const v3259 = ip[i];
        var bytes = util.hexToBytes(v3259);
        const v3260 = bytes.length;
        const v3261 = v3260 < 2;
        if (v3261) {
            const v3262 = b.putByte(0);
            v3262;
        }
        const v3263 = b.putBytes(bytes);
        v3263;
        const v3251 = ++i;
        v3250 = i < 8;
    }
    const v3264 = b.getBytes();
    return v3264;
};
util.bytesFromIPv6 = v3265;
const v3272 = function (bytes) {
    const v3266 = bytes.length;
    const v3267 = v3266 === 4;
    if (v3267) {
        const v3268 = util.bytesToIPv4(bytes);
        return v3268;
    }
    const v3269 = bytes.length;
    const v3270 = v3269 === 16;
    if (v3270) {
        const v3271 = util.bytesToIPv6(bytes);
        return v3271;
    }
    return null;
};
util.bytesToIP = v3272;
const v3281 = function (bytes) {
    const v3273 = bytes.length;
    const v3274 = v3273 !== 4;
    if (v3274) {
        return null;
    }
    var ip = [];
    var i = 0;
    const v3275 = bytes.length;
    let v3276 = i < v3275;
    while (v3276) {
        const v3278 = bytes.charCodeAt(i);
        const v3279 = ip.push(v3278);
        v3279;
        const v3277 = ++i;
        v3276 = i < v3275;
    }
    const v3280 = ip.join('.');
    return v3280;
};
util.bytesToIPv4 = v3281;
const v3334 = function (bytes) {
    const v3282 = bytes.length;
    const v3283 = v3282 !== 16;
    if (v3283) {
        return null;
    }
    var ip = [];
    var zeroGroups = [];
    var zeroMaxGroup = 0;
    var i = 0;
    const v3284 = bytes.length;
    let v3285 = i < v3284;
    while (v3285) {
        const v3286 = bytes[i];
        const v3287 = i + 1;
        const v3288 = bytes[v3287];
        const v3289 = v3286 + v3288;
        var hex = util.bytesToHex(v3289);
        const v3290 = hex[0];
        const v3291 = v3290 === '0';
        const v3292 = hex !== '0';
        let v3293 = v3291 && v3292;
        while (v3293) {
            hex = hex.substr(1);
            v3293 = v3291 && v3292;
        }
        const v3294 = hex === '0';
        if (v3294) {
            const v3295 = zeroGroups.length;
            const v3296 = v3295 - 1;
            var last = zeroGroups[v3296];
            var idx = ip.length;
            const v3297 = !last;
            const v3298 = last.end;
            const v3299 = v3298 + 1;
            const v3300 = idx !== v3299;
            const v3301 = v3297 || v3300;
            if (v3301) {
                const v3302 = {
                    start: idx,
                    end: idx
                };
                const v3303 = zeroGroups.push(v3302);
                v3303;
            } else {
                last.end = idx;
                const v3304 = last.end;
                const v3305 = last.start;
                const v3306 = v3304 - v3305;
                const v3307 = zeroGroups[zeroMaxGroup];
                const v3308 = v3307.end;
                const v3309 = zeroGroups[zeroMaxGroup];
                const v3310 = v3309.start;
                const v3311 = v3308 - v3310;
                const v3312 = v3306 > v3311;
                if (v3312) {
                    const v3313 = zeroGroups.length;
                    zeroMaxGroup = v3313 - 1;
                }
            }
        }
        const v3314 = ip.push(hex);
        v3314;
        v3285 = i < v3284;
    }
    const v3315 = zeroGroups.length;
    const v3316 = v3315 > 0;
    if (v3316) {
        var group = zeroGroups[zeroMaxGroup];
        const v3317 = group.end;
        const v3318 = group.start;
        const v3319 = v3317 - v3318;
        const v3320 = v3319 > 0;
        if (v3320) {
            const v3321 = group.start;
            const v3322 = group.end;
            const v3323 = group.start;
            const v3324 = v3322 - v3323;
            const v3325 = v3324 + 1;
            const v3326 = ip.splice(v3321, v3325, '');
            v3326;
            const v3327 = group.start;
            const v3328 = v3327 === 0;
            if (v3328) {
                const v3329 = ip.unshift('');
                v3329;
            }
            const v3330 = group.end;
            const v3331 = v3330 === 7;
            if (v3331) {
                const v3332 = ip.push('');
                v3332;
            }
        }
    }
    const v3333 = ip.join(':');
    return v3333;
};
util.bytesToIPv6 = v3334;
const v3434 = function (options, callback) {
    const v3335 = typeof options;
    const v3336 = v3335 === 'function';
    if (v3336) {
        callback = options;
        options = {};
    }
    const v3337 = {};
    options = options || v3337;
    const v3338 = 'cores' in util;
    const v3339 = options.update;
    const v3340 = !v3339;
    const v3341 = v3338 && v3340;
    if (v3341) {
        const v3342 = util.cores;
        const v3343 = callback(null, v3342);
        return v3343;
    }
    const v3344 = typeof navigator;
    const v3345 = v3344 !== 'undefined';
    const v3346 = 'hardwareConcurrency' in navigator;
    const v3347 = v3345 && v3346;
    const v3348 = navigator.hardwareConcurrency;
    const v3349 = v3348 > 0;
    const v3350 = v3347 && v3349;
    if (v3350) {
        const v3351 = navigator.hardwareConcurrency;
        util.cores = v3351;
        const v3352 = util.cores;
        const v3353 = callback(null, v3352);
        return v3353;
    }
    const v3354 = typeof Worker;
    const v3355 = v3354 === 'undefined';
    if (v3355) {
        util.cores = 1;
        const v3356 = util.cores;
        const v3357 = callback(null, v3356);
        return v3357;
    }
    const v3358 = typeof Blob;
    const v3359 = v3358 === 'undefined';
    if (v3359) {
        util.cores = 2;
        const v3360 = util.cores;
        const v3361 = callback(null, v3360);
        return v3361;
    }
    const v3368 = function () {
        const v3366 = function (e) {
            var st = Date.now();
            var et = st + 4;
            const v3362 = Date.now();
            let v3363 = v3362 < et;
            while (v3363) {
                ;
                v3363 = v3362 < et;
            }
            const v3364 = {
                st: st,
                et: et
            };
            const v3365 = self.postMessage(v3364);
            v3365;
        };
        const v3367 = self.addEventListener('message', v3366);
        v3367;
    };
    const v3369 = v3368.toString();
    const v3370 = [
        '(',
        v3369,
        ')()'
    ];
    const v3371 = { type: 'application/javascript' };
    const v3372 = new Blob(v3370, v3371);
    var blobUrl = URL.createObjectURL(v3372);
    const v3373 = [];
    const v3374 = sample(v3373, 5, 16);
    v3374;
    const sample = function (max, samples, numWorkers) {
        const v3375 = samples === 0;
        if (v3375) {
            const v3377 = function (avg, x) {
                const v3376 = avg + x;
                return v3376;
            };
            const v3378 = max.reduce(v3377, 0);
            const v3379 = max.length;
            const v3380 = v3378 / v3379;
            var avg = Math.floor(v3380);
            const v3381 = Math.max(1, avg);
            util.cores = v3381;
            const v3382 = URL.revokeObjectURL(blobUrl);
            v3382;
            const v3383 = util.cores;
            const v3384 = callback(null, v3383);
            return v3384;
        }
        const v3389 = function (err, results) {
            const v3385 = reduce(numWorkers, results);
            const v3386 = max.push(v3385);
            v3386;
            const v3387 = samples - 1;
            const v3388 = sample(max, v3387, numWorkers);
            v3388;
        };
        const v3390 = map(numWorkers, v3389);
        v3390;
    };
    const map = function (numWorkers, callback) {
        var workers = [];
        var results = [];
        var i = 0;
        let v3391 = i < numWorkers;
        while (v3391) {
            var worker = new Worker(blobUrl);
            const v3402 = function (e) {
                const v3393 = e.data;
                const v3394 = results.push(v3393);
                v3394;
                const v3395 = results.length;
                const v3396 = v3395 === numWorkers;
                if (v3396) {
                    var i = 0;
                    let v3397 = i < numWorkers;
                    while (v3397) {
                        const v3399 = workers[i];
                        const v3400 = v3399.terminate();
                        v3400;
                        const v3398 = ++i;
                        v3397 = i < numWorkers;
                    }
                    const v3401 = callback(null, results);
                    v3401;
                }
            };
            const v3403 = worker.addEventListener('message', v3402);
            v3403;
            const v3404 = workers.push(worker);
            v3404;
            const v3392 = ++i;
            v3391 = i < numWorkers;
        }
        var i = 0;
        let v3405 = i < numWorkers;
        while (v3405) {
            const v3407 = workers[i];
            const v3408 = v3407.postMessage(i);
            v3408;
            const v3406 = ++i;
            v3405 = i < numWorkers;
        }
    };
    const reduce = function (numWorkers, results) {
        var overlaps = [];
        var n = 0;
        let v3409 = n < numWorkers;
        while (v3409) {
            var r1 = results[n];
            overlaps[n] = [];
            var overlap = overlaps[n];
            var i = 0;
            let v3411 = i < numWorkers;
            while (v3411) {
                const v3413 = n === i;
                if (v3413) {
                    continue;
                }
                var r2 = results[i];
                const v3414 = r1.st;
                const v3415 = r2.st;
                const v3416 = v3414 > v3415;
                const v3417 = r1.st;
                const v3418 = r2.et;
                const v3419 = v3417 < v3418;
                const v3420 = v3416 && v3419;
                const v3421 = r2.st;
                const v3422 = r1.st;
                const v3423 = v3421 > v3422;
                const v3424 = r2.st;
                const v3425 = r1.et;
                const v3426 = v3424 < v3425;
                const v3427 = v3423 && v3426;
                const v3428 = v3420 || v3427;
                if (v3428) {
                    const v3429 = overlap.push(i);
                    v3429;
                }
                const v3412 = ++i;
                v3411 = i < numWorkers;
            }
            const v3410 = ++n;
            v3409 = n < numWorkers;
        }
        const v3432 = function (max, overlap) {
            const v3430 = overlap.length;
            const v3431 = Math.max(max, v3430);
            return v3431;
        };
        const v3433 = overlaps.reduce(v3432, 0);
        return v3433;
    };
};
util.estimateCores = v3434;