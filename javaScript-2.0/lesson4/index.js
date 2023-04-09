"use strict";
document.querySelector('button').onclick=()=>{
  console.log(document.getElementById('one').value)
  document.querySelector('button').style.backgroundColor =  document.getElementById('one').value;
}

document.getElementById('one').oninput = () =>{
  console.log(document.getElementById('one').value)

  document.querySelector('span').textContent = document.getElementById('one').value
};

 document.querySelector('button').onclick=()=>{
  console.log(document.getElementById('i-2').value);
  let myCheckBox = document.getElementById('i-2');

  if(myCheckBox.checked){
   console.log('отжат')
  }else{
    console.log('не отжат')
  }
 }


document.querySelector('#btn-area').onclick = (event) =>{
  event.preventDefault();
  let textArea = document.querySelector('textarea');

  console.log(textArea.value);
  textArea.value = ''
}