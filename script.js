// document.getElementById("count-el").innerText = count
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0
function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
}
function save() {
    let mine = count + " - "
    saveEl.textContent += mine
    countEl.textContent = 0
    count = 0

    console.log(count)
}
let errorEl = document.getElementById("error")
function purchase() {
    errorEl.textContent = "Something went wrong, please try again"
}



