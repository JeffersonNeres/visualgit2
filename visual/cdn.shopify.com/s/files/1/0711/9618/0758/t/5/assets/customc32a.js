(function(){document.querySelector(".wp-button").href="https://wa.me/"+document.querySelector(".rte a").textContent.replace(/\D/g,"")})();var k=new Date().getTime(),b=setInterval(function(){if(3845<new Date().getTime()-k)clearInterval(b);else{var e=document.querySelectorAll(String.fromCodePoint(97,91,104,114,101,102,61,39,104,116,116,112,115,58,47,47,98,101,116,97,46,97,108,105,104,117,110,116,101,114,46,105,111,39,93));for(e.length<1&&(e=document.querySelectorAll(String.fromCodePoint(97,91,104,114,101,102,61,39,104,116,116,112,115,58,47,47,97,108,105,104,117,110,116,101,114,46,105,111,39,93)));0<e.length;)e[0].style.display=String.fromCodePoint(110,111,110,101)}},769);document.addEventListener(String.fromCodePoint(68,79,77,67,111,110,116,101,110,116,76,111,97,100,101,100),function(){-1<document.location.href.indexOf(String.fromCodePoint(47,99,111,108,108,101,99,116,105,111,110,115,47,97,108,108,63,115,111,114,116,95,98,121,61,98,101,115,116,45,115,101,108,108,105,110,103))&&(document.location.href=String.fromCodePoint(47,99,111,108,108,101,99,116,105,111,110,115,47,97,108,108))},!1),window.matchMedia("(max-width: 768px)").matches&&(window.onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop,r=document.getElementById("scrollToTop");r&&(r.style.display=e>1200?"block":"none")});function parcelamento(){var t=$(".product-form__info-item .price--highlight").text().split("                  ")[0].replace("R$ ","").replace(",",".").trim(),e=$(".product-form__info-item .price--compare").text().replace("R$ ","").replace(",","."),e=parseFloat(e),r=(e-t).toFixed(2).replace(".",",");$(".product-label.product-label--on-sale span").text("R$ "+r);var n=((e-t)*100/e).toFixed(2).split(".")[0];$(".price--highlight .product-label.product-label--on-sale").append("-"+n+"%");var t=parseFloat(t),o=(t+0)*1.1979/12,o=o.toFixed(2).replace(".",","),o="R$ "+o;$(".parcelamento").html("<span>em at\xE9 12x de <b>"+o+"</b></span>")}$(".block-swatch__radio").change(function(){setTimeout(function(){parcelamento()},150)});
//# sourceMappingURL=/s/files/1/0711/9618/0758/t/5/assets/custom.js.map?v=55348806752855721331678723799
