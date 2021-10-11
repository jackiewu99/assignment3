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
        let b =document.querySelector("tr").appendChild(document.createElement("td"));
        b.style.backgroundColor = "white"
        return;
    }

    var row = aGrid.insertRow(0);
    for(let i = 0;i < numCols;i++)
    {
        let b = document.querySelector("tr").appendChild(document.createElement("td"));
        b.style.backgroundColor = "white"
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
        let b = document.querySelector("tr").appendChild(document.createElement("td"));
        b.style.backgroundColor = "white";
        return;
    }

    for(let i = 0;i < numRows;i++)
    {
        let b = document.querySelectorAll("tr")[i].appendChild(document.createElement("td"));
        b.style.backgroundColor = "white"
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
    
    for(let i = 0; i < numRows * numCols;i++)
    {
        let a = document.querySelectorAll("tr td")[i].style.backgroundColor
        if(a === "white") 
        {
            document.querySelectorAll("tr td")[i].style.backgroundColor = colorSelected;
        }
    }
}