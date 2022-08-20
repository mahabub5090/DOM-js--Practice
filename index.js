
let h1$1= document.createElement("h1")
h1$1.innerText = "Exploring DOM"
h1$1.style.textAlign = "center"
h1$1.classList.add("p-3")
let bodyMain = document.querySelector("body")
bodyMain.appendChild(h1$1)
const firstOne = document.querySelector("h1")
firstOne.classList.add("first-h1")
const firstClass=document.querySelectorAll(".first-h1")
firstOne.style.backgroundColor = 'tomato'

const div = document.createElement("div") 
div.style.textAlign = "center"
const buttonRed = document.createElement("button")
buttonRed.innerText = "button red"
buttonRed.classList.add("btn")
buttonRed.classList.add("btn-danger")
const buttonGreen = document.createElement("button")
buttonGreen.innerText = "button green"
buttonGreen.classList.add("btn")
buttonGreen.classList.add("btn-primary")
buttonGreen.classList.add("mx-3")
bodyMain.appendChild(div)
div.appendChild(buttonRed)
div.appendChild(buttonGreen)

buttonRed.addEventListener("click",function(){
bodyMain.style.backgroundColor="red"
})

buttonGreen.onclick = makeGreen;
function makeGreen(){
    bodyMain.style.backgroundColor="green"
}