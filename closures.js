//a function that has access to a private function

function Person(pName){
	var _name = pName;

	this.getName = function(){
		return _name;
	}
}

var me = new Person('Lucas')
console.log(me.getName());