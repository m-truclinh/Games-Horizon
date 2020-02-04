window.onload=function(){

  var spiel = document.getElementById("game");
  spiel.onclick=function(){
      spiel.removeAttribute("href");
      alert("Please fill in the survey before playing the game");
      return false;
  }

  var formular = document.getElementById("form1");

  formular.onsubmit = function() {
      Validator();
      SumbitValidator();
  }

  var value1;
  var value2;
  var value3;
  var value4;

  function Validator() {

      var q1 = document.getElementsByName('gender');
      for(var i = 0; i < q1.length; i++ ){
          if (q1[i].checked) {
              value1 = true;
              break;
          }
          else value1 = false;
      }

      var q2 = document.getElementsByName('time');
      for(var i = 0; i < q2.length; i++ ){
          if (q2[i].checked) {
              value2 = true;
              break;
          }
          else value2 = false;
      }

      var q3 = document.getElementsByName('device');
      for(var i = 0; i < q3.length; i++ ){
          if (q3[i].checked) {
              value3 = true;
              break;
          }
          else value3 = false;
      }

      var q4 = document.getElementById('textbox');
      if(q4.value == ""){
          value4 = false;
      }
      else value4 = true;
  }

  function SumbitValidator(){
      if ((value1 == true) && (value2 == true) && (value3 == true) && (value4 == true)){
          formular.setAttribute("action","GHminiGame.html");
      }

      else if ((value1 == false) || (value2 == false) || (value3 == false) || (value4 == false)) {
          alert("Please fill the survey!");
          return false;
      }
  }

}//load ende
