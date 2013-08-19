module.exports = function(){
	console.log("Installed JS Extentions");
}();

Array.prototype.unique = function() {
    var o = {}, i, l = this.length, r = [];
    for(i=0; i<l;i+=1) o[this[i]] = this[i];
    for(i in o) r.push(o[i]);
    return r;
};

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

String.prototype.startsWith = function(suffix) {
    return this.indexOf(suffix, 0) !== -1;
};

Object.prototype.length = function(){
	var count = 0;
	for(var key in this) {
		if(this.hasOwnProperty(key)) {
			count++;
		}
	}
	return count;
};