// array to hold our object collection
var objects = [];

// adds a new object to the array, only objects
// with .id specified are added.
exports.add = function(obj)
{
	
	//if (obj.id && !this.getById(obj.id)) {
	
		objects.push(obj);
	//}
	exports.length = objects.length;
};

// allows .item("123") to retrieve an object
exports.item = function(id)
{
	return this.getById(id);
}

// allows retrival based on order in array
exports.getByIndex = function(index)
{
	if (!objects.length == 0) {

		return objects[index];

	}
	else {
		return [];
	}
}

// allow retrieval by id ref (same as .item("123"))
exports.getById = function(id)
{
	for (i in objects) {

		objects[i].index = i;
	

		if (objects[i].id == id) {

			return objects[i];
		}
	}
	
	return [];

};

// removes an item from the array based on id
exports.remove = function(id)
{
	var obj = this.getById(id);

	objects.splice(obj.index, 1);

	exports.length = objects.length;
};
