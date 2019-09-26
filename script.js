function generate_table() {
    let body = document.getElementById('gameoflife');
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
    let nbtab;

    if (document.getElementById('32').checked) nbtab = 32;
    else if (document.getElementById('64').checked) nbtab = 64; 
    else nbtab = 128;

    for (let i = 0; i < nbtab; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < nbtab; j++) {
            let cell = document.createElement("td");
            if (nbtab === 32) {
                cell.classList.add('mini');
                body.classList.add('col-lg-8');
                body.classList.add('littlemargin');
            } 
            else if (nbtab === 64) {
                cell.classList.add('middle');
                body.classList.add('col-lg-6');
                body.classList.add('middlemargin');
            } else {
                cell.classList.add("big");
                body.classList.add('col-lg-8');
                body.classList.add('bigmargin');
            }
        row.appendChild(cell);
        }
        tblBody.appendChild(row);
        let td = document.getElementsByTagName('td');
        for (let n = 0 ; n < td.length ; n++) {
            td[n].addEventListener('click' , (e) => {
                td[n].style.backgroundColor = "black";
            })
        }
    let move = document.getElementById('move');
    move.classList.add('move');
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "2");
    }
}
    // rester appuyer sur la souris et modifier