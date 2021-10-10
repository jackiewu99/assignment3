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
}

//Remove a row
function removeR() {
    document.getElementById("grid").deleteRow(0);
    numRows = numRows - 1;
    if(numRows === 0)
    {
        numCols = 0
    }
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}