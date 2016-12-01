$(document).ready(function(){

    var rawJson = '{ "week1" : { "day" : ['+
        '{ "appointment" : [ ' +  
                '{"time" : "12.00" , "descript" : "Doing something in between"},'   +  
                '{"time" : "20.00" , "descript" : "Not done yet so I need something to do"}' +
                ']},' +
        '{ "appointment" : [ ' +
                '{"time" : "08.00" , "descript" : "Making a time table for a project"},' +
                '{"time" : "10.00" , "descript" : "Debug v1"},' +
                '{"time" : "20.00" , "descript" : "Not done yet so I need something to do"}' +
                ']},' +
        '{ "appointment" : [ '+
                '{"time" : "10.00" , "descript" : "Debug v1"},' +
                '{"time" : "16.00" , "descript" : "Going back to original type"}' +
                ']},' +
        '{ "appointment" : [ ' +
                '{"time" : "14.00" , "descript" : "Break time in between"},' +
                '{"time" : "16.00" , "descript" : "Going back to original type"},' +
                '{"time" : "18.00" , "descript" : "Debug V2"}' +
                ']},' +
        '{ "appointment" : [ ' +
                '{"time" : "00.00" , "descript" : "NOTHING"}' +
                ']},' +
        '{ "appointment" : [ ' +
                '{"time" : "08.00" , "descript" : "Making a time table for a project"},' +
                '{"time" : "10.00" , "descript" : "Debug v1"}' +
                ']},' +
        '{ "appointment" : [ ' +
                '{"time" : "03.00" , "descript" : "LOREM ispsum"},' +
                '{"time" : "18.00" , "descript" : "DONE"}' +
                ']}' +
    ']}}';

    var json = JSON.parse(rawJson);

    function addItemToList(json, day, int, id){
        $('#'+ id).append("\<table border = \"0\"><tr>" +
            "<td width=\"20px\" class=\"time\" style=\"padding-right:10px\">" + json.week1.day[day].appointment[int].time + "</td>" +
            "<td width=\"130px\" class=\"time\">" + json.week1.day[day].appointment[int].descript + "</td></tr><hr>");
    }

    function addall(json) {
        var mon = json.week1.day[0].appointment;
        var tue = json.week1.day[1].appointment;
        var wed = json.week1.day[2].appointment;
        var thu = json.week1.day[3].appointment;
        var fri = json.week1.day[4].appointment;
        var sat = json.week1.day[5].appointment;
        var sun = json.week1.day[6].appointment;

        for (var i = 0; i < mon.length; i++) {
            addItemToList(json, 0, i, 'monday');
        }
        for (var i = 0; i < tue.length; i++) {
            addItemToList(json, 1, i, 'tuesday');
        }
        for (var i = 0; i < wed.length; i++) {
            addItemToList(json, 2, i, 'wednesday');
        }
        for (var i = 0; i < thu.length; i++) {
            addItemToList(json, 3, i, 'thursday');
        }
        for (var i = 0; i < fri.length; i++) {
            addItemToList(json, 4, i, 'friday');
        }
        for (var i = 0; i < sat.length; i++) {
            addItemToList(json, 5, i, 'saturday');
        }
        for (var i = 0; i < sun.length; i++) {
            addItemToList(json, 6, i, 'sunday');
        }
    }


    var main = addall(json);
});