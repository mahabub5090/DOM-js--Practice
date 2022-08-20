
let h1$1 = document.createElement("h1")
h1$1.innerText ="Do You Love Me?💌"
h1$1.style.textAlign = "center"
h1$1.classList.add("p-3")
let bodyMain = document.querySelector("body")
bodyMain.appendChild(h1$1)
const firstOne = document.querySelector("h1")
firstOne.classList.add("first-h1")
const firstClass = document.querySelectorAll(".first-h1")
firstOne.style.backgroundColor = 'pink'

const div = document.createElement("div")
div.style.textAlign = "center"
const yes = document.createElement("button")
yes.innerText = "Yes"
yes.classList.add("btn")
yes.classList.add("btn-danger")
const ofCourse = document.createElement("button")
ofCourse.innerText = "Of Coursre! Yes"
ofCourse.classList.add("btn")
ofCourse.classList.add("btn-primary")
ofCourse.classList.add("mx-3")
bodyMain.appendChild(div)
div.appendChild(yes)
div.appendChild(ofCourse)

yes.addEventListener("click", function () {
    bodyMain.style.backgroundColor = "red"
    h1$1.innerText = "I Love You💕🥰💕"
   
})

ofCourse.onclick = makeGreen;
function makeGreen() {
    bodyMain.style.backgroundColor = "purple"
    h1$1.innerText = "I Love You More💕🥰💕"

}