//   Splash    //
function closeSplash(){
    document.getElementById("fade-out").style.visibility = "collapse";
  }
  document.getElementById("splash-closebtn").addEventListener("click",closeSplash, false);

// PROMISE
const introElement = document.getElementById('fade-out');
const promiseEvents = new Promise(function(resolve, reject) {
  if (introElement.classList.contains('fade-out')) {
    window.setTimeout(function() {
      resolve();
    }, 6000);
  }
});

promiseEvents.then(function() {
  closeSplash();
})

// //  LOCAL STORAGE /////

const introWatched = localStorage.getItem('introWatched');
if (introWatched === 'true') 
{
  introElement.setAttribute.visibility = "none";
  console.log('Intro Played');
}

localStorage.setItem('introWatched','true');

console.log(introWatched);