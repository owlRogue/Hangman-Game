$(document).ready(function () {
        var vocabList = [{
                "vocabWord": "AASI",
                "vocabDef": "American Association of Snowboard Instructors."
            },
            {
                "vocabWord": "Air",
                "vocabDef": "A jump or leap where the snowboard lifts off the ground."
            },
            {
                "vocabWord": "Air-to-Fakie",
                "vocabDef": "A half pipe trick where the wall is approached riding forward, no rotation is made in the air, and the boarder lands riding backward *or fakie*."
            },
            {
                "vocabWord": "All-Mountain",
                "vocabDef": "Type of snowboard designed to ride any type of terrain including groomers, powder, park and half pipe."
            },
            {
                "vocabWord": "Alley-Oop",
                "vocabDef": "Spinning frontside on the backside wall of the pipe; popping off of ones toe edge and executing a backside spin or off of ones heel edge and executing a frontside spin."
            },
            {
                "vocabWord": "Backcountry",
                "vocabDef": "Terrain outside of resort boundaries with no marked trails and natural obstacles like trees and cliffs."
            },
            {
                "vocabWord": "Backside",
                "vocabDef": "A term originating from surfing, the direction in which you turn if you are traveling up a wave and turn so as you back faces the wave. In snowboarding, it is used to describe your direction of rotation in which the rider spins clockwise in the air if their left foot is facing down the hill *regular*. It is the opposite of frontside."
            },
            {
                "vocabWord": "Backside 180",
                "vocabDef": "An aerial move where the rider makes a 180 degree rotatation off the jump leading with the heelside *clockwise for a regular stance and counterclockwise for goofy*."
            }];
            

            startNewRound(event);
            var used = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
                            "T", "U", "V", "W", "X", "Y", "Z"
                        ];

            for (var i = 0; i < letters.length; i++) {

                var letterBtn = $("<button>").addClass("letter-button letterButton")
                    .attr("data-letter", letters[i])
                    .text(letters[i])
                    .appendTo("#buttons");
                console.log(letters[i]);
            };

            function processLetter(letter) {
                //removeChildElements(document.getElementById("button.letter-button.letterButton"));
                console.log("length=" + letter.length);
                if (letter >= 95) {
                    letter -= 32;
                }

                console.log("Letter = " + letter);
                used[letter.val() - 65] = " ";

                $("#letterBox").text(letter);
            }

                    


                    // Arrays
                    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
                        "T", "U", "V", "W", "X", "Y", "Z", "_"
                    ];


                    // Basic Variables
                    var jumpsTaken = 0;
                    var isFirstPress = true;
                    var curRow = 0;

                    // Media Variables
                    var snowboardDepart = new Audio('assets/audio/snowboardDepart.m4a');
                    var themeSound = new Audio('assets/audio/Wind-Mark_DiAngelo-1940285615.mp3');



                    // New Rounf
                    function startNewRound(event) {
                        used = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
                            "T", "U", "V", "W", "X", "Y", "Z"
                        ];

                        console.log(vocabList[curRow].vocabWord);

                        $("#vocab").text(vocabList[curRow].vocabDef);

                        snowboardDepart.play();
                        console.log("started snowboardDepart");

                        themeSound.loop = true;
                        console.log("loop set");
                        themeSound.play();
                        console.log("started themeSound");

                        curRow++;
                    }

            $("document").on("keydown", function(event) {
                console.log("here");
                processLetter(event.key);
            });

            $(".letterButton").on("click", function (event) {
                guessedLetter = $("<div>")
                    guessedLetter.addClass("guess-color")
                    guessedLetter.text($(this).attr("data-letter"));

                console.log("Guess="+guessedLetter);
                processLetter(guessedLetter);

            });

        });

        

        function execNewLetter(event) {



            //
            //            $(".letterButton").on("click", function () {
            //                var guessedLetter = $("<div>")
            //                guessedLetter.addClass("guess-color");
            //                guessedLetter.text($(this).attr("data-letter"));
            //                $("#letterBox").append(guessedLetter);
            //            });
            //
            //            $("#clear").on("click", function () {
            //                $("#letterBox").empty();
            //            });
        };


        /*

        function setupBoard() {

          //reset variables
          jumpsTaken = 0;
          jumpsCrashed = 0;
          gnarlyCriticalHits = 0; // AKA deaths aka lives
          winningRound = [];
          correctLetter= [];
          
          
            removeChildElements(document.getElementById("guessedLetter"));
            removeChildElements(document.getElementById("vocabText"));
          
            wordInPlay = wordList[Math.floor(Math.random() * wordList.length)];
            //console.log(wordInPlay);
              console.log("---------");

        */