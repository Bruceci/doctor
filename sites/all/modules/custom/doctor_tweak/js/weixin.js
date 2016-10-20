(function($){
	var is_weixin = (function () {
	    return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
	})();

	var browser={
	    versions:function(){
	        var u = navigator.userAgent, app = navigator.appVersion;
	        return {//移动终端浏览器版本信息
	            trident: u.indexOf('Trident') > -1, //IE内核
	            presto: u.indexOf('Presto') > -1, //opera内核
	            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
	            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
	            mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
	            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
	            android: u.indexOf('Android') > -1 , //android终端或者uc浏览器//|| u.indexOf('Linux') > -1
	            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器//|| u.indexOf('Mac') > -1
	            iPad: u.indexOf('iPad') > -1, //是否iPad
	            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
	        };
	    }(),
	    language:(navigator.browserLanguage || navigator.language).toLowerCase()
	}



    $(function(){
    	$flow_bar = $('.block-flow-bar');
    	if(browser.versions.android == true){
    	   $('#dl_dl a').attr({'href': 'http://android.myapp.com/myapp/detail.htm?apkName=ez08.com.zydoctor'});
    	}else if(1){
           $('#dl_dl a').attr({'href': 'https://itunes.apple.com/cn/app/yu-yi-yun-zhen-suo/id1135438446?mt=8'});
        }
        if(is_weixin) {
        	$('#dl_dl a').attr({'href': 'http://a.app.qq.com/o/simple.jsp?pkgname=ez08.com.zydoctor'});
        }
       $('#dl_close').click(function(){
       	  $flow_bar.css({'display': 'none'});
       });

    });


})(jQuery);


