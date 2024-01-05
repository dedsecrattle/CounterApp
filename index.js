let count = 0
let countEl = document.getElementById("count-el")
let tableEl = document.getElementById("hist-el")
let index = 1

function increment() {
    count += 1
    countEl.textContent = count
}

function reset() {
    count = 0
    countEl.textContent = count
}


function save(){
    if(count > 0){
        var row = tableEl.insertRow(index);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = index
        cell2.textContent = count
        reset()
        index += 1
    }
}