$(document).ready(function(){

    var rawJson = '{ "week1" : { "monday" : { "appointment" : [ ' +
                '{"time" : "08.00" , "descript" : "Making a time table for a project"},'      +        
                '{"time" : "10.00" , "descript" : "Debug v1"},'     +   
                '{"time" : "12.00" , "descript" : "Doing something in between"},'   + 
                '{"time" : "14.00" , "descript" : "Break time in between"},'    +   
                '{"time" : "16.00" , "descript" : "Going back to original type"},'      +   
                '{"time" : "18.00" , "descript" : "Debug V2"},'    +   
                '{"time" : "20.00" , "descript" : "Not done yet so I need something to do"}]}}}';

    var json = JSON.parse(rawJson);

    function addItemToList(json, int){
        $("#datalist").append("\<table border = \"0\">"+
            "<td width=\"20px\" class=\"time\" style=\"padding-right:10px\">" + json.week1.monday.appointment[int].time + "</td>" +
            "<td width=\"130px\" class=\"time\">" + json.week1.monday.appointment[int].descript + "</td><hr>");
    }

    var main = addItemToList(json, 0);
    var main = addItemToList(json, 1);
    var main = addItemToList(json, 2);
    var main = addItemToList(json, 3);
    var main = addItemToList(json, 4);
    var main = addItemToList(json, 5);
    var main = addItemToList(json, 6);



});