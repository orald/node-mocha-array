
var SH = require('../lib/SH');

var node_array = {
	
    create: function () {
        var arr = [].slice.call(arguments);
        // cleanup empty indexes
        arr.forEach(function(element, index, array){
            if(!element)
                array.splice(index, 1);
        });
        arr.__proto__ = this.proto;
        return arr;    
    },

    proto: {
        __proto__ : Array.prototype,
        last : function () {
            return this[this.length - 1];    
        },
        
        max : function () {
            return Math.max.apply(null, this);
        },
        
        min : function () {
            return Math.min.apply(null, this);
        },
        // Delegate to SHJS unique function if present.
        unique : function(){
            var u;
            return SH.unique?SH.unique(this):(
                u = [],
                this.forEach(function(element, index, array){
                    if(u.indexOf(element) < 0){
                        u.push(element);
                    }
                })
            )();
        }
    }
}

module.exports = node_array;
