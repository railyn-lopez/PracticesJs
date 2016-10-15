'use strict';

const GAME_TEXT = require('./words').GAME_TEXT;
const INPUT_MANAGER = require('./input-helper');
const WORDS = require('./words').WORDS;
const RANDOM_INDEX = parseInt(Math.random()*100) % WORDS.length;
const SELECTED_WORD = WORDS[RANDOM_INDEX];

let isWin = false;
let secretWord = '';
let hiddingWord = '*'.repeat(SELECTED_WORD.length);
let messageInput = GAME_TEXT.MESSAGE.INPUT;

const unmaskCharacters = function unmaskCharacters(char, words){
	let output = '';
	for(let i=0;i<words.length;i++){
		if(char === words[i])
			output += char;
		output += hiddingWord[i];;
	}
	return output;
}

const getUserInput = function getUserInput(message, callback){
	let readline = INPUT_MANAGER().READLINE();
	return readline.question(message, (userInput, err)=>{
		readline.close();
		if(err)
			console.error(err);
		callback(userInput);
	});
}

this.hangMan = function hangMan(userIntents){
	if(userIntents<=0){
		console.log(GAME_TEXT.MESSAGE.LOSE);
		return false;//you have lost
	}
	let userMessage = messageInput(userIntents, hiddingWord);
	getUserInput(userMessage, (userInput, err)=>{
		if(err)
			console.error(err);

		if(userInput.match(/\w+/)){
			if(userInput.length === 1 && SELECTED_WORD.indexOf(userInput) >=0 ){
				hiddingWord = unmaskCharacters(userInput, SELECTED_WORD);
				this.hangMan(userIntents);
			}
			else if (SELECTED_WORD === userInput){
				console.log(GAME_TEXT.MESSAGE.WIN);
				return true;
			}else{//wrong character
				this.hangMan(userIntents-1);
			}
		}
	});
}

module.exports = this;
