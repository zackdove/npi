// Adapated from https://codepen.io/J-Roel/pen/wWGNQN
let body = document.body;

body.onload = function(){

  moveEyes();
}

var pupil = document.getElementById("pupil");
if (pupil !== null){
  pupil.onload = moveEyes();
}

function moveEyes(){
  console.log("FUCK");
  var rot;
  var new_rot;
  body.addEventListener("mousemove", function(event) {
    var pupil = document.getElementById("pupil");
    var rect = document.getElementById("eyeContainer").getBoundingClientRect();
    console.log(window.scrollY);
    // var offset = {
    //               top: rect.top + window.scrollY,
    //               left: rect.left + window.scrollX,
    //           };
    console.log("w"+pupil.style.width);
    var x = (rect.left) + (rect.width / 2);
    // console.log(x);
    var y = (rect.top) + (rect.height / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    new_rot = ((rad * (180 / Math.PI) * -1) + 180 -45);
    new_rot = ((new_rot % 360) + 360) % 360;
    var apparent_rot;
    rot = rot || 0;
    apparent_rot = rot % 360;
    if ( apparent_rot < 0 ) { apparent_rot += 360; }
    if ( apparent_rot < 180 && (new_rot > (apparent_rot + 180)) ) { rot -= 360; }
    if ( apparent_rot >= 180 && (new_rot <= (apparent_rot - 180)) ) { rot += 360; }
    rot += (new_rot - apparent_rot);
    console.log(rot);
    pupil.style.setProperty("-webkit-transform", 'rotate(' + rot + 'deg)');
    pupil.style.setProperty('-moz-transform', 'rotate(' + rot + 'deg)');
    pupil.style.setProperty('-ms-transform', 'rotate(' + rot + 'deg)');
    pupil.style.setProperty('transform', 'rotate(' + rot + 'deg)');
  });
}
