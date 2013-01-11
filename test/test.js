var assert = require("assert")
//var should = require('should');
var expect = require('expect.js');
var node_array = require('../src/node_array');

describe('Array', function(){
	var n = node_array.create(1, 2, 3, undefined, 4, 5, undefined);
	describe('#indexOf()', function(){
		it('should return -1 when the value is not present', function(){
			expect(n.indexOf(5)).to.eql(4);
			expect(n.indexOf(0)).to.eql(-1);
		})
	}),
	describe('#max/min()', function(){
		it('max/min in array', function(){
			expect(n.max()).to.eql(5);
			expect(n.min()).to.eql(1);
		})
	}),
	describe('#unique()', function(){
		it('unique values in array', function(){
			assert.deepEqual(n.unique(), [1,2,3,4,5]);
		})
	})
})
