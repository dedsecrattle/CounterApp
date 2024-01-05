let count = 0
let countEl = document.getElementById("count-el")
let tableEl = document.getElementById("hist-el")
let index = 1
let commentEl = document.getElementById("save-cmnt")

function increment() {
    count += 1
    countEl.textContent = count
}

function reset() {
    count = 0
    countEl.textContent = count
}


function save(){
    if(commentEl.value == ""){
        alert("Comment can't be Empty !")
    }
    else{
        if(count > 0){
            var row = tableEl.insertRow(index);
            var cell1 = row.insertCell(0)
            var cell2 = row.insertCell(1)
            var cell3 = row.insertCell(2)
            cell1.textContent = index
            cell2.textContent = count
            cell3.textContent = commentEl.value
            reset()
            index += 1
            commentEl.value = ""
        }
    }
}

function clearTable() {
    index -= 1
    while(index >= 1){
        tableEl.deleteRow(index)
        index -= 1
    }
    index = 1
}