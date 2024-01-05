let count = 0
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function reset() {
    count = 0
    countEl.textContent = count
}