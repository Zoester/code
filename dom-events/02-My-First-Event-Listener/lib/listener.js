// TODO: React to a click on the button!
const clickButtonDisable = () => {
  const button = document.querySelector('button');
  button.onclick = () => {
    document.querySelector('button').disabled = true;
    document.querySelector('button').innerHTML = "Bingo!";
    document.querySelector('audio').play();
  }
}



console.log(clickButtonDisable())





/*const button = document.querySelector('button'); //this is selecting the element

const disableBtn = () => {
  document.querySelector('button').disabled = true;
} //this is creating a function to disable my btn

const enableBtn = () => {
  document.querySelector('button').disabled = false;
} //this is creating a function to enable my btn


console.log(onclick, disableBtn())//this is to run my function to disable btn */




/*clickButton.disableBtn('click', disableBtn)*/

/*buttonDisable ("change", function(event) {
  if (event.target.checked) {
    buttonDisable = false;
  } else {
    buttonDisable = true;
  }
}, false);  */ //tried to make a boolean, doesnt work


