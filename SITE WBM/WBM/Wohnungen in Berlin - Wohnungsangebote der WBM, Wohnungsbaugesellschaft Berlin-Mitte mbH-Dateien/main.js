document.addEventListener("DOMContentLoaded", function () {
  function injectJS(js) {
    var newScript = document.createElement("script");
    newScript.classList.add('gdpr-script');
    var inlineScript = document.createTextNode(js);
    newScript.appendChild(inlineScript);
    document.getElementsByTagName('body')[0].appendChild(newScript);
  }

  function injectSource(src) {
    var newScript = document.createElement("script");
    newScript.classList.add('gdpr-script');
    newScript.async = true;
    newScript.src = src;
    document.getElementsByTagName('body')[0].appendChild(newScript);
  }

  function injectNoScript(noscript) {
    var newScript = document.createElement("noscript");
    newScript.classList.add('gdpr-script');
    var inlineScript = document.createTextNode(noscript);
    newScript.appendChild(inlineScript);
    document.getElementsByTagName('body')[0].appendChild(newScript);
  }

  function setGDPRScripts(status) {
    document.querySelectorAll('.gdpr-script').forEach(function (elem) {
      return elem.remove();
    });
    if (!status) return;
    var statusDefault = status.indexOf("default") !== -1 ? true : false;
    var statusStatistics = status.indexOf("statistics") !== -1 ? true : false;
    var statusMarketing = status.indexOf("marketing") !== -1 ? true : false;
    var statusComfort = status.indexOf("comfort") !== -1 ? true : false;

    if (statusDefault) {// Only for System Stuff
    }

    if (statusStatistics) {
      injectSource("https://www.googletagmanager.com/gtag/js?id=UA-39200005-1");
      injectJS("(function(){ window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-39200005-1', { 'anonymize_ip': true }); })();");
    }

    if (statusMarketing) {// Google Tag Manager
      //injectNoScript('<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THFP9F" height="0" width="0" style="display:none;visibility:hidden"></iframe>');
      //injectJS("(function(){ (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-THFP9F'); })();");
    }

    if (statusComfort) {}
  }

  function cookieSettings() {
    var elem = document.querySelector('#gdpr');
    var status = elem.getGDPRStatus();
    setGDPRScripts(status);
    return status;
  }

  cookieSettings();
  document.querySelector('#gdpr').addEventListener('gdprChanged', function () {
    // GDPR SETTINGS CHANGED EVENT
    cookieSettings();
  });
});
// Browserdetect
var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            this.versionSearchString = data[i].subString;

            if (dataString.indexOf(data[i].subString) !== -1) {
                return data[i].identity;
            }
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index === -1) {
            return;
        }

        var rv = dataString.indexOf("rv:");
        if (this.versionSearchString === "Trident" && rv !== -1) {
            return parseFloat(dataString.substring(rv + 3));
        } else {
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        }
    },

    dataBrowser: [
        {string: navigator.userAgent, subString: "Edge", identity: "MS Edge"},
        {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
        {string: navigator.userAgent, subString: "Opera", identity: "Opera"},  
        {string: navigator.userAgent, subString: "OPR", identity: "Opera"},  

        {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"}, 
        {string: navigator.userAgent, subString: "Safari", identity: "Safari"}       
    ]
};

BrowserDetect.init();

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}


//document.body.classList.add(BrowserDetect.browser+'-'+BrowserDetect.version);
//document.write("You are using <b>" + BrowserDetect.browser + "</b> with version <b>" + BrowserDetect.version + "</b>");

// functions
jQuery(function ($) {

  $('body').attr('data-browser', BrowserDetect.browser+'-'+BrowserDetect.version);

  $("#mobile-menu").on('click', function () {
    $('body').toggleClass("menu-open");
    return false;
  });




  $('nav#main a').on('click', function () {
    var target = '#' + this.hash.substr(1);
    $('html, body').animate({
      scrollTop: $(target).offset().top - 200
    }, 750);
  });

  if (window.location.hash != '' && $(window.location.hash).offset()) {
    $('#content>section.container').addClass('loaded');
    $('html, body').animate({
      scrollTop: $(window.location.hash).offset().top - 200
    }, 750);
  }


  $('.fancy').fancybox({
    // Options will go here
  });

  $('.fancy-iframe').fancybox({
      type: 'iframe',
      toolbar  : false,
      smallBtn : true,
      iframe : {
        preload : false
      }
  });

  $('#stickyIcons .arrow').on('click', function () {
    $(this).parent("#stickyIcons").toggleClass('active');
    // $(this).toggleClass('open');
  });


  // $('nav#main > ul > li').on('click', function () {
  //   if (!$(this).hasClass('open')) {
  //     $("nav#main > ul > li").removeClass('open');
  //     $(this).addClass('open');
  //     return false;
  //   } else {
  //     $(this).toggleClass('open');
  //   }

  // });


  // $(document).on('click', function (event) {
  //   if (!$(event.target).closest('nav#main > ul > li').length) {
  //     $('nav#main > ul > li').toggleClass('open', false);
  //   }
  // });

  $(window).on('scroll', function () {
    var scrollTopPos = $('html').scrollTop() + $('body').scrollTop();
    if (scrollTopPos > 150) {
      $('body').addClass('scrolled');
    } else {
      $('body').removeClass('scrolled');
    }
  });

  $('.ui-datepicker').datepicker({
      beforeShowDay: function (date) {
        var result = [true, '', null];
        var matching = $.grep(events, function (event) {
          return event.Date.valueOf() === date.valueOf();
        });

        if (matching.length) {
          result = [true, 'event', null];
        }
        return result;
      },
      prevText: '&#x3c;zurück', prevStatus: '',
      prevJumpText: '&#x3c;&#x3c;', prevJumpStatus: '',
      nextText: 'Vor&#x3e;', nextStatus: '',
      nextJumpText: '&#x3e;&#x3e;', nextJumpStatus: '',
      currentText: 'heute', currentStatus: '',
      todayText: 'heute', todayStatus: '',
      clearText: '-', clearStatus: '',
      closeText: 'schließen', closeStatus: '',
      monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
      monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
      dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
      dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
      dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
      showMonthAfterYear: false,
      showOn: 'both',
      buttonImage: 'media/img/calendar.png',
      buttonImageOnly: true,
      dateFormat: 'd MM, y'
    }
  );

  $(document).on('click','.scrollLink',function(event){
    event.preventDefault();
    var target = $($(this).attr('data-target'));
    if (target.length > 0) {
      $('html, body').animate({
        scrollTop: $(target).offset().top - 100
      }, 750);
    }
    return false;
  });

  $(document).on('click','#extendedSearch',function(event){
    var form = $(this).parents('form');
    setTimeout(function(){ form.submit(); }, 3000);
  });


  // SPECIAL FORM
  // MD5 JQUERY
  (function(a){var b;b=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O;p=function(a,b){return a<<b|a>>>32-b};c=function(a,b){var c,d,e,f,g;e=a&2147483648;g=b&2147483648;d=a&1073741824;f=b&1073741824;c=(a&1073741823)+(b&1073741823);if(d&f){return c^2147483648^e^g}if(d|f){if(c&1073741824){return c^3221225472^e^g}else{return c^1073741824^e^g}}else{return c^e^g}};h=function(a,b,c){return a&b|~a&c};j=function(a,b,c){return a&c|b&~c};l=function(a,b,c){return a^b^c};n=function(a,b,c){return b^(a|~c)};i=function(a,b,d,e,f,g,i){a=c(a,c(c(h(b,d,e),f),i));return c(p(a,g),b)};k=function(a,b,d,e,f,g,h){a=c(a,c(c(j(b,d,e),f),h));return c(p(a,g),b)};m=function(a,b,d,e,f,g,h){a=c(a,c(c(l(b,d,e),f),h));return c(p(a,g),b)};o=function(a,b,d,e,f,g,h){a=c(a,c(c(n(b,d,e),f),h));return c(p(a,g),b)};f=function(a){var b,c,d,e,f,g,h,i;d=a.length;f=d+8;g=(f-f%64)/64;e=(g+1)*16;h=Array(e-1);c=0;b=0;while(b<d){i=(b-b%4)/4;c=b%4*8;h[i]=h[i]|a.charCodeAt(b)<<c;b++}i=(b-b%4)/4;c=b%4*8;h[i]=h[i]|128<<c;h[e-2]=d<<3;h[e-1]=d>>>29;return h};H=function(a){var b,c,d,e;b="";c="";e=0;while(e<=3){d=a>>>e*8&255;c="0"+d.toString(16);b=b+c.substr(c.length-2,2);e++}return b};G=function(a){var b,c,d;a=a.replace(/\r\n/g,"\n");d="";c=0;while(c<a.length){b=a.charCodeAt(c);if(b<128){d+=String.fromCharCode(b)}else if(b>127&&b<2048){d+=String.fromCharCode(b>>6|192);d+=String.fromCharCode(b&63|128)}else{d+=String.fromCharCode(b>>12|224);d+=String.fromCharCode(b>>6&63|128);d+=String.fromCharCode(b&63|128)}c++}return d};O=Array();q=7;r=12;s=17;t=22;u=5;v=9;w=14;x=20;y=4;z=11;A=16;B=23;C=6;D=10;E=15;F=21;a=G(a);O=f(a);I=1732584193;J=4023233417;K=2562383102;L=271733878;M=0;while(M<O.length){b=I;d=J;e=K;g=L;I=i(I,J,K,L,O[M+0],q,3614090360);L=i(L,I,J,K,O[M+1],r,3905402710);K=i(K,L,I,J,O[M+2],s,606105819);J=i(J,K,L,I,O[M+3],t,3250441966);I=i(I,J,K,L,O[M+4],q,4118548399);L=i(L,I,J,K,O[M+5],r,1200080426);K=i(K,L,I,J,O[M+6],s,2821735955);J=i(J,K,L,I,O[M+7],t,4249261313);I=i(I,J,K,L,O[M+8],q,1770035416);L=i(L,I,J,K,O[M+9],r,2336552879);K=i(K,L,I,J,O[M+10],s,4294925233);J=i(J,K,L,I,O[M+11],t,2304563134);I=i(I,J,K,L,O[M+12],q,1804603682);L=i(L,I,J,K,O[M+13],r,4254626195);K=i(K,L,I,J,O[M+14],s,2792965006);J=i(J,K,L,I,O[M+15],t,1236535329);I=k(I,J,K,L,O[M+1],u,4129170786);L=k(L,I,J,K,O[M+6],v,3225465664);K=k(K,L,I,J,O[M+11],w,643717713);J=k(J,K,L,I,O[M+0],x,3921069994);I=k(I,J,K,L,O[M+5],u,3593408605);L=k(L,I,J,K,O[M+10],v,38016083);K=k(K,L,I,J,O[M+15],w,3634488961);J=k(J,K,L,I,O[M+4],x,3889429448);I=k(I,J,K,L,O[M+9],u,568446438);L=k(L,I,J,K,O[M+14],v,3275163606);K=k(K,L,I,J,O[M+3],w,4107603335);J=k(J,K,L,I,O[M+8],x,1163531501);I=k(I,J,K,L,O[M+13],u,2850285829);L=k(L,I,J,K,O[M+2],v,4243563512);K=k(K,L,I,J,O[M+7],w,1735328473);J=k(J,K,L,I,O[M+12],x,2368359562);I=m(I,J,K,L,O[M+5],y,4294588738);L=m(L,I,J,K,O[M+8],z,2272392833);K=m(K,L,I,J,O[M+11],A,1839030562);J=m(J,K,L,I,O[M+14],B,4259657740);I=m(I,J,K,L,O[M+1],y,2763975236);L=m(L,I,J,K,O[M+4],z,1272893353);K=m(K,L,I,J,O[M+7],A,4139469664);J=m(J,K,L,I,O[M+10],B,3200236656);I=m(I,J,K,L,O[M+13],y,681279174);L=m(L,I,J,K,O[M+0],z,3936430074);K=m(K,L,I,J,O[M+3],A,3572445317);J=m(J,K,L,I,O[M+6],B,76029189);I=m(I,J,K,L,O[M+9],y,3654602809);L=m(L,I,J,K,O[M+12],z,3873151461);K=m(K,L,I,J,O[M+15],A,530742520);J=m(J,K,L,I,O[M+2],B,3299628645);I=o(I,J,K,L,O[M+0],C,4096336452);L=o(L,I,J,K,O[M+7],D,1126891415);K=o(K,L,I,J,O[M+14],E,2878612391);J=o(J,K,L,I,O[M+5],F,4237533241);I=o(I,J,K,L,O[M+12],C,1700485571);L=o(L,I,J,K,O[M+3],D,2399980690);K=o(K,L,I,J,O[M+10],E,4293915773);J=o(J,K,L,I,O[M+1],F,2240044497);I=o(I,J,K,L,O[M+8],C,1873313359);L=o(L,I,J,K,O[M+15],D,4264355552);K=o(K,L,I,J,O[M+6],E,2734768916);J=o(J,K,L,I,O[M+13],F,1309151649);I=o(I,J,K,L,O[M+4],C,4149444226);L=o(L,I,J,K,O[M+11],D,3174756917);K=o(K,L,I,J,O[M+2],E,718787259);J=o(J,K,L,I,O[M+9],F,3951481745);I=c(I,b);J=c(J,d);K=c(K,e);L=c(L,g);M+=16}N=H(I)+H(J)+H(K)+H(L);return N.toLowerCase()};return a.extend({MD5:b})})(jQuery)

  if($('#powermail_field_fingerprint').length === 1) {
    $('button[type="submit"]').on('click', function(e) {
      e.preventDefault();
      var objectID = $('#powermail_field_objekt').val();
      var currentDate = new Date();
      var month = currentDate.getMonth();
      var year = currentDate.getFullYear();
      var dateString = (month + 1) + "-" + year;
      var email = $('#powermail_field_e_mail').val();
      var rawString = objectID+'-'+dateString+email;
      var md5 = $.MD5(rawString, null, true);
      $('#powermail_field_fingerprint').val(md5);
      $('form').submit();
    });
    $('#powermail_field_e_mail').on('keyup', function(e) {
      var objectID = $('#powermail_field_objekt').val();

      var currentDate = Date.now();
      var dateString = currentDate.toString().slice(0,-6);
      var email = $('#powermail_field_e_mail').val();
      var rawString = objectID+'-'+dateString+email;
      var md5 = $.MD5(rawString, null, true);
      $('#powermail_field_fingerprint').val(md5);
    });
  }

});


