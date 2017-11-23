var Observable = require("FuseJS/Observable");

var ListOfTasks = Observable();

	ListOfTasks.add({
		TaskName:"Task #1",
		Description : "Design the app using UX",
		StartDate : "11/21/2017",
		EndDate : "11/25/2017",
		Status : Observable(false)
	});
	ListOfTasks.add({
		TaskName:"Task #2",
		Description : "Design the app using UX",
		StartDate : "11/21/2017",
		EndDate : "11/25/2017",
		Status : Observable(false)
	});
	ListOfTasks.add({
		TaskName:"Task #3",
		Description : "Design the app using UX",
		StartDate : "11/21/2017",
		EndDate : "11/25/2017",
		Status : Observable(false)
	});
	ListOfTasks.add({
		TaskName:"Task #4",
		Description : "Design the app using UX",
		StartDate : "11/21/2017",
		EndDate : "11/25/2017",
		Status : Observable(false)
	});


module.exports={
	ListOfTasks
}