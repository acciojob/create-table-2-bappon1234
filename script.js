
function createTable() {
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");

    // Check for non-numeric or empty input
    if (rn === null || cn === null || rn.trim() === "" || cn.trim() === "") {
        return;
    }

    rn = Number(rn);
    cn = Number(cn);

    if (!Number.isFinite(rn) || !Number.isFinite(cn)) {
        return;
    }

    // Check for zero or negative values
    if (rn <= 0 || cn <= 0) {
        alert("Please enter positive numbers");
        return;
    }

    if (!Number.isInteger(rn) || !Number.isInteger(cn)) {
        return;
    }

    let table = document.getElementById("myTable");

    // Clear previous table
    table.innerHTML = "";

    for (let i = 0; i < rn; i++) {
        let row = table.insertRow();

        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell();
            cell.innerHTML = `Row-${i} Column-${j}`;
        }
    }
}
