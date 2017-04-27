var BasicCard = require("./BasicCard");
var CloseCard = require("./ClozeCard");
var inquirer = require("inquirer");
var basicData = require("./The_BasicCard.json");
var clozeData = require ("./CloseCard.json");
var fs = require("fs");
var correct = 0;
var wrong = 0;
//var cardArray = [];
var action = process.argv[2];
var x = 0;
var grabingbasic= basicData.cards;
var grabingclose= clozeData.cards;
//********************************************************************************
var quiz = function (){
if (x < 10) {

            if (action === "basic") {

                var gameCard = new BasicCard(grabingbasic[x].front, grabingbasic[x].back);
                var gameQuestion = gameCard.front;
                var gameAnswer = gameCard.back.toLowerCase();
            } else {
                var gameCard = new CloseCard(grabingclose[x].text, grabingclose[x].cloze);
                var gameQuestion = gameCard.partial;
                var gameAnswer = gameCard.cloze.toLowerCase();
            }

            inquirer.prompt([{
                name: "question",
                message: gameQuestion,
                validate: function(value) {

                    if (value.length > 0) {
                        return true;
                    }
                    return 'Come on, at least take a guess!';
                }

            }]).then(function(answers) {

                if (answers.question.toLowerCase().indexOf(gameAnswer) > -1) {
                    console.log('Correct!');
                    correct++;
                    x++;
                    quiz( x);
                } else {
                    gameCard.printAnswer();
                    wrong++;
                    x++;
                    quiz (x);
                }

            })

        } else {
            console.log('Here\'s how you did: ');
            console.log('correct: ' + correct);
            console.log('wrong: ' + wrong);
            correct = 0;
            wrong = 0;
            //flashcards();
        }
    }
    quiz();