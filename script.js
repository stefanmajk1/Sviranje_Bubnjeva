/*

let link = document.querySelector('#link');

link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target);
});

let form = document.querySelector('form');

form.addEventListener("submit", (event) =>{
    event.preventDefault();
});

let opcije = document.querySelector('select');

opcije.addEventListener("change", (event) => {
    console.log(event.target.value);
});

window.addEventListener("resize", ()=>{
    alert("NE diraj to");
});

let input = document.querySelector('input');

input.addEventListener('keydown', (event) => {
    console.log(event.key);
});

window.addEventListener("mousemove", (event) => {
    console.log(event)
});*/

window.addEventListener("keydown", (event)=>{
    let code = event.keyCode;
    let keyElement = document.querySelector(`div[data-key="${code}"]`);

    if(keyElement != null){
        let audio = document.querySelector(`audio[data-key="${code}"]`);
        audio.currentTime = 0;
        audio.play();

        switch(code){
            case 69:
            case 82:
                animateCrashOrRide();
                break;
            case 75:
            case 73:
                animatehiHatClosed();
                break;
        }

        keyElement.target.classList.add('playing');

    }else{
        console.log("Ne postoji");
        return;
    }
    
});
let crashRide = document.querySelector('#crash-ride');
let hiTop = document.querySelector('#hihat-top');

const animateCrashOrRide = () => {
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
}
const animatehiHatClosed = () => {
    hiTop.style.top = '171px';
}

const removeCrashRideTransition = e =>{
    if(e.propertyName != 'transform') return;

    e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
}
const removeHiHatTopTransition = e => {
    if(e.propertyName != 'top')return;

    e.target.style.top= "166px";
}

const removeKeyTransition = e => {
    if(e.propertyName !== 'transform')return;

    e.target.classList.remove('playing');
}

let drumKeys = document.querySelectorAll('key');

drumKeys.forEach((key)=>{
    key.addEventListener("transitionend", removeKeyTransition);
});

crashRide.addEventListener("transitionend", removeCrashRideTransition);

hiTop.addEventListener("transitionend", removeHiHatTopTransition);