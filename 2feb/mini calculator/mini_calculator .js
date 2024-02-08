function add(){
  let num1 = +(document.getElementById('num1').value)
  let num2 = +(document.getElementById('num2').value)
    window.alert(num1+num2)
}

function substract(){
  let num1= +(document.getElementById("num1").value);
  let num2= +(document.getElementById('num2').value);
  window.alert(num1-num2);
  
}

function multiply(){
  let num1 = +(document.getElementById('num1').value);
  let num2 = +(document.getElementById('num2').value);
  window.alert(num1*num2);
  
}

function divide(){
  let num1 = +(document.getElementById('num1').value);
  let num2 = +(document.getElementById('num2').value);
  if(num2==0){
    alert("cannot divide  by zero");
  }else{
    alert(num1/num2);
  }
}