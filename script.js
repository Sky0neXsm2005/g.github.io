function generateMultiplicationTable() {
    const number = document.getElementById('number').value;
    const multiplicationTable = document.getElementById('multiplicationTable');
    multiplicationTable.innerHTML = '';

    if (number) {
        let table = '<ul>';
        for (let i = 1; i <= 12; i++) {
            table += `<li>${number} x ${i} = ${number * i}</li>`;
        }
        table += '</ul>';
        multiplicationTable.innerHTML = table;
    }
}