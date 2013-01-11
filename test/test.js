var assert = require("assert")
//var should = require('should');
var expect = require('expect.js');
var node_array = require('../src/node_array');
var asyncwrapper = require('../lib/asyncwrapper');

var $ = require('jquery');

describe('Array', function(){
	var n = node_array.create("0", 1, 2, 3, undefined, 4, 5, undefined);
	describe('#indexOf()', function(){
		it('should return -1 when the value is not present', function(){
			expect(n.indexOf(5)).to.eql(5);
			expect(n.indexOf("0")).to.eql(0);
		})
	}),
	describe('#max/min()', function(){
		it('max/min in array', function(){
			expect(n.max()).to.eql(5);
			expect(n.min()).to.eql(0);
		})
	}),
	describe('#unique()', function(){
		it('unique values in array', function(){
			assert.deepEqual(n.unique(), [0,1,2,3,4,5]);
		})
	}),

	describe('#get()', function(){
		it('async call test', function(done){
			asyncwrapper.CallFn(n.get, function(data){
				expect(data).to.eql('SA');
				done();
			}, 1);
		})
	})
})
