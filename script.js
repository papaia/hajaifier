!function(){var e=document.getElementById("input"),t=document.getElementById("generated");e.oninput=window.onload=function(){t.innerHTML="Ha"+(/^\s*[a-z\s]+\s*$/i.test(e.value)?e.value.trim().split(/\s+/).map(function(e){return(e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).replace(/^[YI]/,"J").replace(/^[AEIOU]/,function(e){return"J"+e.toLowerCase()}).replace(/[yi][aeiou]/g,function(e){return e.charAt(0)+"j"+e.charAt(1)})}).join(""):"...")+"Haja"}}();