highlight_row();
function highlight_row() {
    var table = document.getElementById("stat-table");
    var cells = table.getElementsByTagName("td");

    for (var i = 0; i < cells.length; i++) {
        // Take each cell
        var cell = cells[i];
        // do something on onclick event for cell
        cell.onclick = function () {
            // Get the row id where the cell exists
            var rowId = this.parentNode.rowIndex;

            var rowsNotSelected = table.getElementsByTagName("tr");
            for (var row = 0; row < rowsNotSelected.length; row++) {
                rowsNotSelected[row].style.fontWeight = "";
                rowsNotSelected[row].style.fontSize = "";
                rowsNotSelected[row].style.backgroundColor = "";
                rowsNotSelected[row].classList.remove("selected");
            }
            var rowSelected = table.getElementsByTagName("tr")[rowId];
            rowSelected.style.fontWeight = "900";
            rowSelected.style.fontSize = "20px";
            rowSelected.style.backgroundColor = "yellow";
            rowSelected.className += " selected";

            // msg = "The ID of the company is: " + rowSelected.cells[0].innerHTML;
            // msg += "\nThe cell value is: " + this.innerHTML;
            // alert(msg);
        };
    }
}

// --------------------------------------------------------------------------------------------------------
color_table();
function color_table() {
    var allTableCells = document.getElementsByTagName("td");

    for (var i = 0, max = allTableCells.length; i < max; i++) {
        var node = allTableCells[i];

        //get the text from the first child node - which should be a text node
        var currentText = node.childNodes[0].nodeValue;

        //check for specific values and assign this table cell's background color accordingly
        if (currentText === "0" || currentText === "5") {
            node.style.backgroundColor = "#ffffff";
        } else if (currentText === "10" || currentText === "15") {
            node.style.backgroundColor = "#c1e7ff";
        } else if (currentText === "20" || currentText === "25") {
            node.style.backgroundColor = "#9dc6e0";
        } else if (currentText === "30" || currentText === "35") {
            node.style.backgroundColor = "#7aa6c2";
        } else if (currentText === "40" || currentText === "45") {
            node.style.backgroundColor = "#5886a5";
            node.style.color = "#ffffff";
        } else if (currentText === "50" || currentText === "55") {
            node.style.backgroundColor = "#2D5A76";
            node.style.color = "#ffffff";
        } else if (currentText === "60" || currentText === "65") {
            node.style.backgroundColor = "#004c6d";
            node.style.color = "#ffffff";
        } else if (currentText === "70" || currentText === "75") {
            node.style.backgroundColor = "#0A2F51";
            node.style.color = "#ffffff";
        } else if (currentText === "80" || currentText === "85") {
            node.style.backgroundColor = "#062029";
            node.style.color = "#ffffff";
        }
        // values for total section
        else if (currentText === "225" || currentText === "230") {
            node.style.backgroundColor = "#ffffff";
        } else if (currentText === "235" || currentText === "240") {
            node.style.backgroundColor = "#c1e7ff";
        } else if (currentText === "255" || currentText === "260") {
            node.style.backgroundColor = "#9dc6e0";
        } else if (currentText === "265" || currentText === "270" || currentText === "275" ) {
            node.style.backgroundColor = "#7aa6c2";
        } else if (currentText === "280" || currentText === "285") {
            node.style.backgroundColor = "#5886a5";
            node.style.color = "#ffffff";
        } else if (currentText === "290" || currentText === "295") {
            node.style.backgroundColor = "#2D5A76";
            node.style.color = "#ffffff";
        } else if (currentText === "300" ||currentText === "305" || currentText === "310") {
            node.style.backgroundColor = "#004c6d";
            node.style.color = "#ffffff";
        } else if (currentText === "315" || currentText === "320" || currentText === "325") {
            node.style.backgroundColor = "#0A2F51";
            node.style.color = "#ffffff";
        } else if (currentText === "345") {
            node.style.backgroundColor = "#062029";
            node.style.color = "#ffffff";
        }
    }
}

// -------------------------------------------------------------------------------

function sortTable(tableClass, n) {
    var table,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch,
        dir,
        switchcount = 0;

    table = document.getElementsByClassName(tableClass)[0];
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            var cmpX = isNaN(parseInt(x.innerHTML)) ? x.innerHTML.toLowerCase() : parseInt(x.innerHTML);
            var cmpY = isNaN(parseInt(y.innerHTML)) ? y.innerHTML.toLowerCase() : parseInt(y.innerHTML);
            cmpX = cmpX == "-" ? 0 : cmpX;
            cmpY = cmpY == "-" ? 0 : cmpY;
            if (dir == "asc") {
                if (cmpX > cmpY) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (cmpX < cmpY) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }

    document.getElementById("NameUp").style.visibility = "hidden";
    document.getElementById("NameDown").style.visibility = "hidden";

    document.getElementById("HpUp").style.visibility = "hidden";
    document.getElementById("HpDown").style.visibility = "hidden";

    document.getElementById("StrUp").style.visibility = "hidden";
    document.getElementById("StrDown").style.visibility = "hidden";

    document.getElementById("MagUp").style.visibility = "hidden";
    document.getElementById("MagDown").style.visibility = "hidden";

    document.getElementById("DexUp").style.visibility = "hidden";
    document.getElementById("DexDown").style.visibility = "hidden";

    document.getElementById("SpdUp").style.visibility = "hidden";
    document.getElementById("SpdDown").style.visibility = "hidden";

    document.getElementById("DefUp").style.visibility = "hidden";
    document.getElementById("DefDown").style.visibility = "hidden";

    document.getElementById("ResUp").style.visibility = "hidden";
    document.getElementById("ResDown").style.visibility = "hidden";

    document.getElementById("LckUp").style.visibility = "hidden";
    document.getElementById("LckDown").style.visibility = "hidden";

    document.getElementById("BldUp").style.visibility = "hidden";
    document.getElementById("BldDown").style.visibility = "hidden";

    document.getElementById("TotalUp").style.visibility = "hidden";
    document.getElementById("TotalDown").style.visibility = "hidden";

    // Name
    if (n == 0) {
        if (dir == "asc") {
            document.getElementById("NameUp").style.visibility = "visible";
        } else {
            document.getElementById("NameDown").style.visibility = "visible";
        }
    }
    // Hp
    else if (n == 1) {
        if (dir == "asc") {
            document.getElementById("HpUp").style.visibility = "visible";
        } else {
            document.getElementById("HpDown").style.visibility = "visible";
        }
    }
    // Str
    else if (n == 2) {
        if (dir == "asc") {
            document.getElementById("StrUp").style.visibility = "visible";
        } else {
            document.getElementById("StrDown").style.visibility = "visible";
        }
    }
    // Mag
    else if (n == 3) {
        if (dir == "asc") {
            document.getElementById("MagUp").style.visibility = "visible";
        } else {
            document.getElementById("MagDown").style.visibility = "visible";
        }
    }
    // Dex
    else if (n == 4) {
        if (dir == "asc") {
            document.getElementById("DexUp").style.visibility = "visible";
        } else {
            document.getElementById("DexDown").style.visibility = "visible";
        }
    }
    // Str
    else if (n == 5) {
        if (dir == "asc") {
            document.getElementById("SpdUp").style.visibility = "visible";
        } else {
            document.getElementById("SpdDown").style.visibility = "visible";
        }
    }
    // Str
    else if (n == 6) {
        if (dir == "asc") {
            document.getElementById("DefUp").style.visibility = "visible";
        } else {
            document.getElementById("DefDown").style.visibility = "visible";
        }
    }
    // Res
    else if (n == 7) {
        if (dir == "asc") {
            document.getElementById("ResUp").style.visibility = "visible";
        } else {
            document.getElementById("ResDown").style.visibility = "visible";
        }
    }
    // Lck
    else if (n == 8) {
        if (dir == "asc") {
            document.getElementById("LckUp").style.visibility = "visible";
        } else {
            document.getElementById("LckDown").style.visibility = "visible";
        }
    }
    // Bld
    else if (n == 9) {
        if (dir == "asc") {
            document.getElementById("BldUp").style.visibility = "visible";
        } else {
            document.getElementById("BldDown").style.visibility = "visible";
        }
    }
    // Total
    else if (n == 10) {
        if (dir == "asc") {
            document.getElementById("TotalUp").style.visibility = "visible";
        } else {
            document.getElementById("TotalDown").style.visibility = "visible";
        }
    }
}
