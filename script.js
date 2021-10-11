let numRows = 0;
let numCols = 0;
let colorSelected; 


//Add a row
function addR() {
    numRows = numRows + 1;
    var aGrid = document.getElementById("grid");


    if(numRows === 1 && numCols === 0)
    {
        numCols = 1;
        var row = aGrid.insertRow(0);
        document.querySelector("tr").appendChild(document.createElement("td"));
        return;
    }

    var row = aGrid.insertRow(0);
    for(let i = 0;i < numCols;i++)
    {
        document.querySelector("tr").appendChild(document.createElement("td"));
    }

}
//Add a column
function addC() {
    numCols = numCols + 1;
    var aGrid = document.getElementById("grid");

    if(numCols === 1 && numRows === 0)
    {
        numRows = 1;
        var col = aGrid.insertRow(0);
        document.querySelector("tr").appendChild(document.createElement("td"));
        return;
    }

    for(let i = 0;i < numRows;i++)
    {
        document.querySelectorAll("tr")[i].appendChild(document.createElement("td"));
    }
    
}

//Remove a row
function removeR() {
    if(numRows === 0 && numCols ===0)
    {
        return;
    }
    numRows = numRows - 1;
    document.getElementById("grid").deleteRow(0);
    if(numRows === 0)
    {
        numCols = 0
    }

}
//Remove a column
function removeC() {
    if(numRows === 0 && numCols ===0)
    {
        return;
    }
    numCols = numCols - 1;

    for(let i = 0;i < numRows;i++)
    {
        let deleteCol = document.querySelectorAll("tr")[i]
        deleteCol.removeChild(deleteCol.lastElementChild)
    }
    if(numCols === 0)
    {
        numRows = 0
    }
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    for(let i = 0; i < numRows * numCols;i++)
    {
        document.querySelectorAll("tr td")[i].style.backgroundColor = colorSelected;
    }
}

function clearAll(){
        for(let i = 0; i < numRows * numCols;i++)
        {
            document.querySelectorAll("tr td")[i].style.backgroundColor = "white";
        }
}


function fillU(){
    alert("Clicked Fill All Uncolored")
}