/** 
 * CountDown Formule 
*/


const countdown = document.querySelector('.countdown');


// Set Launch Date
const launchDate = new Date ('Mar 01, 2020 17:20:00').getTime();

// console.log(launchDate);

// Updata every second
const intvl = setInterval(() => {
    //Get today date time and time (ms)
    const now = new Date().getTime();
   
    // Distance from now to the launch date
    const distance = launchDate - now;

    // Time calculcations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const mins = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60 )) / 1000 );

    // Display result
    countdown.innerHTML = `
    <div>${days}<span>Days</span></div>   
    <div>${hours}<span>Hours</span></div>   
    <div>${mins}<span>Minutes</span></div>   
    <div>${seconds}<span>Secondes</span></div>   
        
    `;
    // If Launch date passed
    if(distance < 0){
        // Stop countdown
        clearInterval(intvl);
        // Style and output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched!';
    }
}, 1000);

/**
 * Apparition de text  baffle
 */

const text = baffle(".data");
text.set({
    characters : '░░█ ▓▓<██ ▓▓<░░ █▒< <▒▓█░ >>>█ ░▒█ ░███ █▒<░',
    speed: 120
})
text.start();
text.reveal(4000);


/**
 * defilement des logo
 */

 window.onload = function() {
     var picto = this.document.getElementById('picto');
     var images = picto.getElementsByTagName("img");

     for (var i = 1; i < images.length; i++) {
         images[i].style.display = "none";
     }
     var counter = 1;
     setInterval ( function () {
         for(var i = 0; i < images.length; i++){
             images[i].style.display = "none";
         }
         images[counter].style.display = "block";
         counter++;
         if(counter == images.length) {
             counter = 0;
         }
     },1000);
 };

$(".scroll").click(function(){
    var section = $("." + this.id);
    $("html,body").animate({scrollTop: section.offset().top}, 'slow')
});

// On gère l'affichage des progressbar pour les compétences
window.sr = ScrollReveal();
sr.reveal('.progress-bar', {
    origin: 'left',
    duration: 2000,
    distance: '100%'
})