//stores form submit variable
const submitted = document.getElementById('sizePicker');


// function for creating grid
function makeGrid(height, width, table){
  for(let i = 0; i<height; i++){
    table.appendChild(document.createElement('tr'));//adds a row for every height value
  };
  var allRows = document.getElementsByTagName("tr");
  for (var j = 0; j<height; j++){
    for (var k = 0; k<width; k++){
      allRows[j].appendChild(document.createElement('td'));//adds cells to each row until width value is reached
  };
  };
}


function addCellClickListen(){
  let cell = document.getElementsByTagName('td');
  for(let i = 0; i < cell.length; i++){
    cell[i].addEventListener("click", function (event){//listens for cell click and applies background color
      let clickedCell = event.target;
      clickedCell.style.backgroundColor = document.getElementById("colorPicker").value;
    });
  };
}


//waits for submit button to implememnt required functions
submitted.addEventListener('submit', function submit(event){
  event.preventDefault();
  let width = document.getElementById('inputWidth').value;
  let height = document.getElementById('inputHeight').value;
  let table = document.getElementById('pixelCanvas');
  table.replaceChildren(" ");
  makeGrid(height, width, table);
  addCellClickListen();

});
