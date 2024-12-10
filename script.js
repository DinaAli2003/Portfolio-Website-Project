
//welcoming message

document.getElementById("welcome-message").textContent="welcome to my website! Enjoy your visit";

//greeting message

const hour = new Date().getHours();
const greetingElement = document.getElementById("greeting");

if (hour < 12) {
greetingElement.textContent = "Good Morning!";
} else if (hour < 18) {
greetingElement.textContent = "Good Afternoon!";
} else {
greetingElement.textContent = "Good Evening!";
}

// function of Resposiveness

function toggleMenu(){
    let elem =document.getElementById("navlinks");
    elem.classList.toggle("active");

}

//download button

let button_click=document.getElementById("btn");
button_click.addEventListener("click",click);

function click(){
    confirm("I will accept you as soon as possible,Thank you");
}

//articel accordin

let answers=document.querySelectorAll(".accordion");
answers.forEach((event)=>{
    event.addEventListener("click",()=>{
        if (event.classList.contains("active")){
            event.classList.remove("active");
        }
        else{
            event.classList.add("active");
        }
    });
    
    
});
