Cargo
=====

A simple JavaScript object manager, designed for Titanium projects.

Cargo allows you store pointers to objects your create, mainly controls but could be used for anything, and using an .id attribute, allows you to retrieve these objects easily.

I created it because on occassion, I needed to reference a specific control in a row on a tableview and didn't want to have to navigate through the hierarchy or tie eventhandlers to every row.

Typically you'd define a control as follows :-

    var label = Ti.UI.createLabel({text:"foo"});
    
and then reference it with

    label.text = "bar";
    
Easy enough and for most cases, fine. It gets trickier if your label is one of many in rows on a table and for some reason you need to access it specifically.

With Cargo, this is easy. Simple include the module in your js file

    var $ = require("cargo");
    
And when you want to store a control, specify an id and then use the cargo .add method

    var label = Ti.UI.createLabel({id:"foo",text:"foo"});
    $.add(label);
    
Cargo stores the object for you and you can retrieve it using

    $.item("foo");
    
or

    $.getById("foo");
    
or, if you want to get a specific index in order

    $.getByIndex(0);
    
    
Here's an example where we're populating a table

    var table = Titanium.UI.createTableView({bottom:50});
    
    var rowData = [];
    
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
    	
    	$.add(rowLabel);
    	
    	row.add(rowLabel);
    	row.bartitle = "test" + i;
    	rowData[i] = row;
    }
    
    // fill the table
    table.data = rowData;

and now we can, outside of the table/loop access a *specific* label by simply doing

    $.getById("row4").text = "Voila!";  	
    
To remove/destroy a pointer stored in Cargo, use

    $.remove('foo');

    