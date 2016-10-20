(function($){
    $(function(){


    });


// var is_weixin = (function () {
//     return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
// })();

// var browser={
//     versions:function(){
//         var u = navigator.userAgent, app = navigator.appVersion;
//         return {//移动终端浏览器版本信息
//             trident: u.indexOf('Trident') > -1, //IE内核
//             presto: u.indexOf('Presto') > -1, //opera内核
//             webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
//             gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
//             mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
//             ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
//             android: u.indexOf('Android') > -1 , //android终端或者uc浏览器//|| u.indexOf('Linux') > -1
//             iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器//|| u.indexOf('Mac') > -1
//             iPad: u.indexOf('iPad') > -1, //是否iPad
//             webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
//         };
//     }(),
//     language:(navigator.browserLanguage || navigator.language).toLowerCase()
// }

// window.onload = function() {
//     var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight; //兼容IOS，不需要的可以去掉
//     var btn = document.getElementById('J_weixin');
//     var tip = document.getElementById('weixin-tip');
//     var close = document.getElementById('close');
//     var navbar = document.getElementById('id_navbar');
//     if(browser.versions.android == true || browser.versions.iPhone == true)
//     {
//         navbar.style.display = 'none';
//     }
//     else
//     {
//         //document.writeln(browser.versions.android + "-" +navigator.userAgent);
//     }
//     if (is_weixin && browser.versions.android == true) {
//         btn.onclick = function(e) {
//             tip.style.height = winHeight + 'px'; //兼容IOS弹窗整屏
//             tip.style.display = 'block';
//             return false;
//         }
//         close.onclick = function() {
//             tip.style.display = 'none';
//         }
//     }
// }

// /**
//  * 云诊所app
//  */
// function download_doctor() {
//     //alert("is_weixin:" + is_weixin);
//     var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight; //兼容IOS，不需要的可以去掉
//     var btn = document.getElementById('J_weixin');
//     var tip = document.getElementById('weixin-tip');
//     var close = document.getElementById('close');
//     var navbar = document.getElementById('id_navbar');
//     if(browser.versions.android == true || browser.versions.iPhone == true)
//     {
//         navbar.style.display = 'none';
//     }
//     else
//     {
//         //document.writeln(browser.versions.android + "-" +navigator.userAgent);
//     }
//     //if (is_weixin && browser.versions.android == true) {
//     if (browser.versions.android == true) {
//         window.location.href="http://android.myapp.com/myapp/detail.htm?apkName=ez08.com.zydoctor"; //安卓云诊所
//         btn.onclick = function(e) {
//             tip.style.height = winHeight + 'px'; //兼容IOS弹窗整屏
//             tip.style.display = 'block';
//             return false;
//         }
//         close.onclick = function() {
//             tip.style.display = 'none';
//         }
//     }
//     else if (browser.versions.ios == true || browser.versions.iPhone == true || browser.versions.iPad == true) {
//         if (is_weixin) {
//             window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=ez08.com.zydoctor"; //ios云诊所 微信分发，跳转不到appstore。解决方法：通过应用宝转发
//         }
//         else {
//             window.location.href="https://itunes.apple.com/cn/app/yu-yi-yun-zhen-suo/id1135438446?mt=8"; //ios云诊所
//         }
//         btn.onclick = function(e) {
//             tip.style.height = winHeight + 'px'; //兼容IOS弹窗整屏
//             tip.style.display = 'block';
//             return false;
//         }
//         close.onclick = function() {
//             tip.style.display = 'none';
//         }
//     }
//     else { //浏览器
//         window.location.href="index_pc.html"; //电脑端浏览器
//     }
// }

// /**
//  * 用户端app
//  */
// function download_user() {
//     var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight; //兼容IOS，不需要的可以去掉
//     var btn2 = document.getElementById('J_weixin2');
//     var tip = document.getElementById('weixin-tip');
//     var close = document.getElementById('close');
//     var navbar = document.getElementById('id_navbar');
//     if(browser.versions.android == true || browser.versions.iPhone == true)
//     {
//         navbar.style.display = 'none';
//     }
//     else
//     {
//         //document.writeln(browser.versions.android + "-" +navigator.userAgent);
//     }
//     //if (is_weixin && browser.versions.android == true) {
//     if (browser.versions.android == true) {
//         window.location.href="http://android.myapp.com/myapp/detail.htm?apkName=ez08.com.zyuser"; //安卓用户端
//         btn2.onclick = function(e) {
//             tip.style.height = winHeight + 'px'; //兼容IOS弹窗整屏
//             tip.style.display = 'block';
//             return false;
//         }
//         close.onclick = function() {
//             tip.style.display = 'none';
//         }
//     }
//     else if (browser.versions.ios == true || browser.versions.iPhone == true || browser.versions.iPad == true) {
//         if (is_weixin) {
//             window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=ez08.com.zyuser"; //ios用户端 微信分发，跳转不到appstore。解决方法：通过应用宝转发
//         }
//         else {
//             window.location.href="https://itunes.apple.com/cn/app/yu-yi/id1135871906?mt=8"; //ios用户端
//         }
//         btn2.onclick = function(e) {
//             tip.style.height = winHeight + 'px'; //兼容IOS弹窗整屏
//             tip.style.display = 'block';
//             return false;
//         }
//         close.onclick = function() {
//             tip.style.display = 'none';
//         }
//     }
//     else { //浏览器
//         window.location.href="index_pc.html"; //电脑端浏览器
//     }
// }

// /**
//  * 判断是否为电脑端浏览器
//  */
// function browser_pc() {
//     if (!(browser.versions.android == true || browser.versions.ios == true || browser.versions.iPhone == true || browser.versions.iPad == true)) {
//         window.location.href = "index_pc.html"; //电脑端浏览器
//     }
// }





})(jQuery);


