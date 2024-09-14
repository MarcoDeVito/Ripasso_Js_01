const btn = document.querySelector('#btn')
const inputCharacter = document.querySelector('#inputCharacter')
const resultp = document.querySelector('#result')
let character = "#";

let printPyramid = (count = 8) => {



    const rows = [];
    let inverted = true;

    function padRow(rowNumber, rowCount, char) {
        return " ".repeat(rowCount - rowNumber) + char.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
    }

    for (let i = 1; i <= count; i++) {
        if (inverted) {
            rows.unshift(padRow(i, count, character));
        } else {
            rows.push(padRow(i, count, character));
        }
    }

    let result = ""

    for (const row of rows) {
        result = result + "\n" + row;
    }

    resultp.innerText = result

}

printPyramid()

btn.addEventListener("click", () => {
    // console.log(typeof(inputCharacter.value));

    if (inputCharacter.value !== null && inputCharacter.value.length === 1) {
        character = inputCharacter.value
        printPyramid()
    }
    if (inputCharacter.value !== null && inputCharacter.value.length > 1) {

        alert("Inserisci un solo carattere come input")
    }

})




