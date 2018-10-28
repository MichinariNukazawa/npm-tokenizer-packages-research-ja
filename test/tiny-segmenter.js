'use strict';

var assert = require("power-assert"); // assertモジュールのinclude
const fs = require('fs');

const TinySegmenter = require('tiny-segmenter');

const datafile = 'example.txt';
const text = fs.readFileSync(datafile, 'utf8');
// console.log('read:',text);


it ("tiny-segmenter", function() {
	console.log("## tiny-segmenter");
/*
	// sample code from http://chasen.org/~taku/software/TinySegmenter/
	var segmenter = new TinySegmenter(); // インスタンス生成
	var segs = segmenter.segment("私の名前は中野です"); // 単語の配列が返る
	console.log(segs.join(" | ")); // 表示
*/

	const segmenter = new TinySegmenter(); // インスタンス生成
	const lines = text.split(/\n/);
	console.log('read:',lines.length);
	for(let i = 0; i < lines.length; i++){
		const line = lines[i];
		console.log('line:', line);

		if(0 === line.length){
			break;
		}

		const segs = segmenter.segment(line);
		console.log('segment:', segs.join("-"));
	}
});

