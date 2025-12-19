const btn1 = document.getElementById("plus")
const btn2 = document.getElementById("reset")
const btn3 = document.getElementById("mine")

let num = 0

const plushandler = (e) => {
    num += 1
        e.target.parentElement.parentElement.children[0].children[0].innerText = num
}

const resethandeler = (e) => {
    num = 0
        e.target.parentElement.parentElement.children[0].children[0].innerText = num
}

const minehandeler = (e) => {
    num -= 1
    e.target.parentElement.parentElement.children[0].children[0].innerText = num
}

btn1.addEventListener("click" , plushandler)
btn2.addEventListener("click" , resethandeler)
btn3.addEventListener("click" , minehandeler)
