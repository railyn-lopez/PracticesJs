'use strict';

const readline = require('readline');

const READLINE = function READLINE(){
	const inputInterface = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	return inputInterface;
}

module.exports = function (){
	return {
		READLINE: READLINE
	};
};
