const baseUrlPath = 'CuteUnionHexoWeb';

window.onscroll = function() {
  'use strict';
  if (window.scrollY > 200 || document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById('back-to-top').style.display = 'block';
  } else {
    document.getElementById('back-to-top').style.display = 'none';
  }
};

window.onresize = backgroundAdapt;



function scrollToTop() {
  'use strict';
  window.scrollTo(0,0);
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}

function tocToggle() {
  'use strict';
  var tocContainer = document.getElementById('post-toc');
  if (tocContainer != null){
    if (!tocContainer.getAttribute('toc-show')) {
      tocContainer.setAttribute('toc-show', true);
    } else {
      tocContainer.removeAttribute('toc-show')
    }
  }
}



function backgroundAdapt(){
  const screenRatio = window.innerHeight / window.innerWidth;
  let background_url = `url(/${baseUrlPath}/img/background.jpg)`;
  if (screenRatio >= 1){
    background_url = `url(/${baseUrlPath}/img/background_mobile.jpg)`
  }
  document.getElementsByTagName("html")[0].style.backgroundImage = background_url;
}

(function setRandomGif(){
  var randomNumber = (Math.floor(Math.random() * 100))%25 + 1;
  const gif_url = `/${baseUrlPath}/img/ddkk_gif/${randomNumber}.gif`;
  document.querySelector("#blog-pic").setAttribute("src", gif_url);
  document.querySelector("#nav-icon").setAttribute("src", gif_url);
  backgroundAdapt();
})()


