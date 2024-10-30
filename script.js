// let border = document.getElementsByClassName("border-bottom");

// window.onscroll = function () {
//     if(window.onscrollY > 10){
//         border.style.borderbottom = 'none';
//     }else{
//         border.style.borderBottom = ' 2px solid grey';

//     }
//     }
 
window.onscroll = function() {
    const navbar = document.getElementById('navbars');

    if (window.scrollY > 10) {
        navbar.style.borderBottom = '0.5px solid grey';
    } else {
        navbar.style.borderBottom = 'none';
    }
  };
  window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let image = document.getElementById('scrollImage');
    let image2 = document.getElementById('scrollImage2');
    
    // Calculate the movement. You can adjust the multiplier (0.5) for speed.
    let moveDistance = scrollPosition * 0.1233;
  
    // Apply transformation to the image
    image.style.transform = `translateY(${moveDistance}px)`;
    image2.style.transform = `translateY(${moveDistance}px)`;
  });