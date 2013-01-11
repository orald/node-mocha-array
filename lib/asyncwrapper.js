var asyncwrapper = {
    CallFn: function(which, fn, timeout){
        setTimeout(function(){
        	fn(which());
        }, timeout);
    }
}

module.exports = asyncwrapper;
