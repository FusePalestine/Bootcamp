var Storage = require("FuseJS/Storage");
var Observable = require("FuseJS/Observable");

var ListOfTasks = Observable();

/// For the first time ;) 

var contents = Storage.readSync("tasks.js");

if(contents !== null && contents !== "")
{
	contents = JSON.parse(contents);
	// for (var i a= 0; i < contents.length; i++) {
	// 	var task = contents[i];
	// 	ListOfTasks.dd(task);
	// }
	contents = contents.map(function(items){
		items.Status = Observable(items.Status);
		return items;
	});
	ListOfTasks.addAll(contents);
}

module.exports={
	ListOfTasks,
	UpdateFile:function()
	{
		my_tasks = ListOfTasks.toArray();
		my_tasks = my_tasks.map(function(t){
			if(t.Status.value == null || t.Status.value == undefined)
				return t;
			else
				t.Status = t.Status.value;
			return t;
		});
		// console.log(JSON.stringify(my_tasks));
		Storage.writeSync("tasks.js",JSON.stringify(my_tasks));
	}
}