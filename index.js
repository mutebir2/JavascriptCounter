//document.getElementById("count-el").innerText = 45;

let count = 0;
let displayx = document.getElementById("save-el");

function IncrementMyCount()
{
  count = count+1
  document.getElementById("count-el").innerText = count;
  console.log(count);
}


function Increment(){
    IncrementMyCount();

}

function Save(){
  let counterSep = count+"_"



  displayx.innerText =displayx.innerText+counterSep
  

  

}