//    NAV      //

function openNav(){
  console.log('open');
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