'use strict';

var assert = require("power-assert"); // assertモジュールのinclude
const fs = require('fs');
//const path = require('path');

const kuromoji = require("kuromoji");

//const datafile = path.join(__dirname, 'example.txt');
//console.log('path:',datafile);
const datafile = 'example.txt';
const text = fs.readFileSync(datafile, 'utf8');
//console.log('read:',text);


it ("kuromoji", function() {

	kuromoji.builder({
		dicPath: 'node_modules/kuromoji/dict'
	}).build(function (err, tokenizer) {
		// @todo 文法エラー(let忘れ等)まで握りつぶしてしまうようなのでなんとかする。

		console.log("## kuromoji");

		/**
		// tokenizer is ready
		var path = tokenizer.tokenize("すもももももももものうち");
		console.log(path);
		*/

		const lines = text.split(/\n/);
		//console.log('read:',lines.length);
		for(let i = 0; i < lines.length; i++){
			const line = lines[i];
			console.log('line:', line);

			if(0 === line.length){
				break;
			}

			let path = tokenizer.tokenize(line);

			let surface_form = '';
			path.forEach(word => {
				surface_form = surface_form + '-' + word.surface_form;
			});
			console.log('segment:', surface_form);		// 表層系

			let basic_form = '';
			path.forEach(word => {
				basic_form = basic_form + '-' + word.basic_form;		// 基本形
			});
			console.log('basic:', basic_form);
		}
	});

});

