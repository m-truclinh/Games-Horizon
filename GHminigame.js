


/* load lädt das HTML-Dokument und alle verknüpften Ressourcen */

 //function init(){

window.onload = function() {
    // Variablen für Rock,Paper,Scissors - jeweils Player & Computer      
    
    var rockPlayer      = document.getElementById('rock1');
    var paperPlayer     = document.getElementById('paper1');
    var scissorsPlayer  = document.getElementById('scissors1');
    var rockComp        = document.getElementById('rock2');
    var paperComp       = document.getElementById('paper2');
    var scissorsComp    = document.getElementById('scissors2');

    var images          = document.getElementsByTagName('img'); //  alle 6 Bilder

    var score = 0;
    var Lose = 0;


        function tie() {
            //var i;
            var gameTied = confirm("It's a tie. Do you want to play again?");
            if (gameTied === true) {
                for (var i = 0; i < images.length; i++) {
                    images[i].style.visibility = 'visible';
                }
            } else {
                //location.reload()
                alert('Thanks for playing the game!')
            }
        }

        function win() {
            //var i;
            var gameWon = confirm("You won! Do you want to play again?");
            if (gameWon === true) {
                for (var i = 0; i < images.length; i++) {
                    images[i].style.visibility = 'visible';
                }
                score++;
            } else {
                alert("Thanks for playing the game!");
            }
        }

        function lose() {
            var i;
            var gameLost = confirm("You lost! Do you want to play");
            if (gameLost == true) {
                for (i = 0; i < images.length; i++) {
                    images[i].style.visibility = 'visible';
                }
                Lose++;
            } else {
                alert("Thanks for playing the game!");
            }
        }

// Auswahl Spieler     
        /* rockPlayer.onclick=function() {
            hidden(paperPlayer, scissorsPlayer);
        }

        paperPlayer.onclick=function() {
            hidden(rockPlayer, scissorsPlayer);
        }

        scissorsPlayer.onclick=function() {
            hidden(rockPlayer, paperPlayer);
        } */

        // Math.floor() = round the number auf kleinste
        // Math.random() = random generator für ne zahl

        function computer() {
            var computerChoice = Math.floor(Math.random() * 3 + 1);
            console.log(computerChoice);
            if (computerChoice == 1) {
                computerChoice = '1';
                scissorsComp.style.visibility = 'hidden';
                rockComp.style.visibility = 'hidden';
                setTimeout(tie, 1000);

            } else if (computerChoice == 2) {
                computerChoice = '2';
                paperComp.style.visibility = 'hidden';
                rockComp.style.visibility = 'hidden';
                setTimeout(lose, 1000);

            } else if (computerChoice == 3) {
                computerChoice = '3';
                paperComp.style.visibility = 'hidden';
                scissorsComp.style.visibility = 'hidden';
                setTimeout(win, 1000);
            }
        } //end computer

        paperPlayer.onclick = function () {
            hidden(scissorsPlayer, rockPlayer);
            computer();
        }
        scissorsPlayer.onclick = function () {
            hidden(paperPlayer, rockPlayer);
            computer()
        }

        rockPlayer.onclick = function(){
            hidden(paperPlayer, scissorsPlayer);
            computer()
        }


        function hidden(firstElement, secondElement) {
            firstElement.style.visibility = 'hidden';
            secondElement.style.visibility = 'hidden';
        }

    }