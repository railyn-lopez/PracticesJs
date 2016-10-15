'use strict';

const inputMessage = function inputMessage(intents, hiddingWord){
	return '\n\nTell a word to save your soul HUMAN!\n'+
		'INTENTS REMAIN:\t' + intents 		 + '\n' +
		'HIDDING WORD:\t'   + hiddingWord  + '\n\n'
}

module.exports.WORDS = (function (){
	return [
	  'cerveza',
	  'banana',
	  'javascript is awsome',
	  'intellisys'
	]
})();

module.exports.GAME_TEXT = (function (){
	return {
		MESSAGE: {
			INPUT: inputMessage,
			WIN: 	'Yay, You have won the game',
			LOSE: 	'You are a dead-man (X_X)'
		},
		INVALID_INPUT: 	'Insert a valid word o character HUMAN!'
	};
})();
