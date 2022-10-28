var expect = require('chai').expect;


const myAsyncFunction = async(callback) => {
	setTimeout(function(){
		callback("blah");
	}, 50)
}


function myPromiseFunction(){
	return new Promise( function(resolve, reject) {
		setTimeout(function(){
			resolve("blah blah blah Promises are old")
		}, 50)
	});
}


	
	
			expect(str).to.equal('blah')

