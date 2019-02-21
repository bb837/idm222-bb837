//   Splash    //
function closeSplash(){
  document.getElementById("fade-out").style.visibility = "collapse";
}
document.getElementById("splash-closebtn").addEventListener("click",closeSplash, false);

//    NAV      //

function openNav(){
  document.getElementById("myNav").style.height = "100%";
}

document.getElementById("icon").addEventListener("click", openNav, false);

function closeNav(){
  document.getElementById("myNav").style.height = "0%";
}
document.getElementById("closebtn").addEventListener("click",closeNav, false);





// /* Open */
// function openNav() {
//     document.getElementById("myNav").style.height = "100%";
//   }
  
// /* Close */
//   function closeNav() {
//     document.getElementById("myNav").style.height = "0%";
//   }
//   console.log(myNav)