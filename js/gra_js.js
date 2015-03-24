//alert('hello');
var i=0;
var form=document.getElementsByTagName('form')[0];
//var paragraf= document.createElement('p');
function  createElementWithText(tag,tekst){
  var paragraf = document.createElement(tag);
  paragraf.innerText=tekst;
  document.body.appendChild(paragraf);

};
//////////
var dataPoczatkowa = new Date();
var poczatekCzasu=dataPoczatkowa.getTime();
console.log(poczatekCzasu);

//losujemyliczbę
var computerChoice=Math.round((Math.random())*100);
console.log(computerChoice);

 var i=0;

  form.addEventListener('submit',function(e){
  //console.log(document.querySelector('form input[type="text"]').value);
  e.preventDefault();

  var userChoice=parseInt(document.querySelector('form input').value);
  console.log(userChoice);

  i++;

  compareNumbers(computerChoice,userChoice,i);


});


function compareNumbers(komputer,user,ilosc){
  //var paragraf= document.createElement('p');
if(ilosc<=5){
  if(komputer>user){
    createElementWithText('p','Proba nr: '+ilosc+' - wybierz większą liczbę');
    document.querySelector('form input').value='';
  }
  else if(komputer<user){
    createElementWithText('p','Proba nr: '+ilosc+' - wybierz mniejszą liczbę');
    document.querySelector('form input').value='';
  }
  else if(komputer===user){
    createElementWithText('p','Proba nr: '+ilosc+' Zgadłes!!!');
    document.querySelector('body').removeChild(form);
    var dataKoncowa = new Date();
    var koniecCzasu=dataKoncowa.getTime();
    var czasGry=Math.round((dataKoncowa-dataPoczatkowa)/1000);
    createElementWithText('p','Czas gry: '+czasGry+' sek.');
  }

}
else{
  createElementWithText('p','Koniec - wyczerpales limit 5 prob!');
}
}



var myVar = setInterval(function () {myTimer()}, 1000);
function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}


//funkcja losuj liczbę w zakresie od 3 do 6
function drawNumber(min,max){

}
