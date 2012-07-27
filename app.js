// add our module
var o = require("cargo");

// create a window
var win1 = Titanium.UI.createWindow();

// create a demo table
var table = Titanium.UI.createTableView({bottom:50});

// setup the data
var rowData = [];

// populate with test data
for(i=0; i<10; i++)
{
	var row = Titanium.UI.createTableViewRow({height:50});
	var rowLabel = Ti.UI.createLabel({
	  	font:{fontSize:18,fontWeight:'bold'},
	  	id : "row" + i,
	  	text:"row" + i,
	   	width:320,
	   	top:15,	
	  	left:10
	});
	
	o.add(rowLabel);
	
	row.add(rowLabel);
	row.bartitle = "test" + i;
	rowData[i] = row;
}

// fill the table
table.data = rowData;

// add to the window
win1.add(table);

// let's create a button to test
var button = Titanium.UI.createButton({
				Title:'Change Label row 4',
				bottom:5,
				left:5,
				width:315,
				height:30
				});
				
// add the event listener
button.addEventListener("click",function() {
	// now we can target a row label specifically based on it's id	
	o.getById("row4").text = "Voila!";		

});

// add it to the view
win1.add(button);

// open the view
win1.open();

