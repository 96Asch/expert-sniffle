$(document).ready(function () {

    // Unbelievably long JavaScript object literal, should be in it's own file.
    // Actually better to use DB.
    // But fun experimenting with JSON notation.
    var rawJson = '{ "week" : ['+
                        '{ "day" : ['+
                            '{ "appointment" : [ ' +  
                                    '{"time" : "11.15" , "descript" : "Linear Algebra 1"},'   +  
                                    '{"time" : "13.45" , "descript" : "Digital Techniques"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "09.00" , "descript" : "Studeren & Presenteren"},' +
                                    '{"time" : "11.15" , "descript" : "FREE"},' +
                                    '{"time" : "13.45" , "descript" : "Orientation Informatics"},' +
                                    '{"time" : "15.45" , "descript" : "Question time PM"}' +
                                    ']},' +
                            '{ "appointment" : [ '+
                                    '{"time" : "11.15" , "descript" : "Programming Methods"},' +
                                    '{"time" : "13.45" , "descript" : "Werk College PM"},' +
                                    '{"time" : "15.45" , "descript" : "FREE?"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "11.15" , "descript" : "Linear Algebra 1"},' +
                                    '{"time" : "13.45" , "descript" : "Digital Techniques"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "00.00" , "descript" : "NOTHING"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "08.00" , "descript" : "Making a time table for a project"},' +
                                    '{"time" : "10.00" , "descript" : "Debug v1"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "03.00" , "descript" : "LOEM ispsum"},' +
                                    '{"time" : "18.00" , "descript" : "DONE? AM I?"}' +
                                    ']}' +
                             ']},' +
                      '{ "day" : [' +
                                 '{ "appointment" : [ ' +
                                    '{"time" : "11.15" , "descript" : "Linear Algebra 1"},' +
                                    '{"time" : "13.45" , "descript" : "Digital Techniques"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "09.00" , "descript" : "Studeren & Presenteren"},' +
                                    '{"time" : "11.15" , "descript" : "FREE"},' +
                                    '{"time" : "13.45" , "descript" : "Orientation Informatics"},' +
                                    '{"time" : "15.45" , "descript" : "Question time PM"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "11.15" , "descript" : "Programming Methods"},' +
                                    '{"time" : "13.45" , "descript" : "Werk College PM"},' +
                                    '{"time" : "15.45" , "descript" : "FREE?"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "11.15" , "descript" : "Linear Algebra 1"},' +
                                    '{"time" : "13.45" , "descript" : "Digital Techniques"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "00.00" , "descript" : "NOTHING"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "08.00" , "descript" : "Making a time table for a project"},' +
                                    '{"time" : "10.00" , "descript" : "Debug v1"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "03.00" , "descript" : "LOEM ispsum"},' +
                                    '{"time" : "18.00" , "descript" : "DONE? AM I?"}' +
                                    ']}' +
                             ']},' +
                 '{ "day" : [' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "11.15" , "descript" : "Linear Algebra 1"},' +
                                    '{"time" : "13.45" , "descript" : "Digital Techniques"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "09.00" , "descript" : "Studeren & Presenteren"},' +
                                    '{"time" : "11.15" , "descript" : "FREE"},' +
                                    '{"time" : "13.45" , "descript" : "Orientation Informatics"},' +
                                    '{"time" : "15.45" , "descript" : "Question time PM"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "11.15" , "descript" : "Programming Methods"},' +
                                    '{"time" : "13.45" , "descript" : "Werk College PM"},' +
                                    '{"time" : "15.45" , "descript" : "FREE?"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "11.15" , "descript" : "Linear Algebra 1"},' +
                                    '{"time" : "13.45" , "descript" : "Digital Techniques"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "00.00" , "descript" : "welp there ya go"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "08.00" , "descript" : "Making a time table for a project"},' +
                                    '{"time" : "10.00" , "descript" : "Debug v1"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "23.00" , "descript" : "Got nothing to do"},' +
                                    '{"time" : "23.00" , "descript" : "AM I donwe?"}' +
                                    ']}' +
                             ']},' +
                     '{ "day" : [' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "12.00" , "descript" : "Doing something in between"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "14.00   " , "descript" : "End Term Programming Methods"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "10.00" , "descript" : "Debug v1"},' +
                                    '{"time" : "16.00" , "descript" : "Going back to original type"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "14.00" , "descript" : "Break time in between"},' +
                                    '{"time" : "16.00" , "descript" : "Going back to original type"},' +
                                    '{"time" : "18.00" , "descript" : "Debug V2"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "00.00" , "descript" : "TESTING"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "08.00" , "descript" : "Making a time table for a project"},' +
                                    '{"time" : "10.00" , "descript" : "Debug v1"}' +
                                    ']},' +
                            '{ "appointment" : [ ' +
                                    '{"time" : "03.00" , "descript" : "LOREM ispsum"},' +
                                    '{"time" : "18.00" , "descript" : "YES DONE"}' +
                                    ']}' +
                             ']}' +
                   ']}';

    //Gets the JSON notation from a raw string.
    var json = JSON.parse(rawJson);


   
    //Add an item to the list.
    function addItemToList(json, week, day, int, id) {
        var appointID = Math.floor((Math.random() * 100) + 1);
        $('#' + id).append("\<div class=\"itemdata\"><table class="+appointID+" border = \"1\"><tr>" +
            "<td width=\"20px\" style=\"padding-right:10px\">" + json.week[week].day[day].appointment[int].time + "</td>" +
            "<td width=\"130px\">" + json.week[week].day[day].appointment[int].descript + "</td>" +
            "<td width=\"20px\"><div class=\"Delete\" id=" + [week, day, int] + ">" +
            "<a style=\"font-family:'Segoe UI Symbol';color:black;font-size:17px;\">&#xe107;</a></div></td></tr><\div>");
    };

    //Show all items for a particular week
    function addall(json, week) {
        $(".itemdata").remove();
        var mon = json.week[week].day[0].appointment;
        var tue = json.week[week].day[1].appointment;
        var wed = json.week[week].day[2].appointment;
        var thu = json.week[week].day[3].appointment;
        var fri = json.week[week].day[4].appointment;
        var sat = json.week[week].day[5].appointment;
        var sun = json.week[week].day[6].appointment;

        for (var i = 0; i < mon.length; i++) {
            addItemToList(json, week, 0, i, 'monday');
        }
        for (var i = 0; i < tue.length; i++) {
            addItemToList(json, week, 1, i, 'tuesday');
        }
        for (var i = 0; i < wed.length; i++) {
            addItemToList(json, week, 2, i, 'wednesday');
        }
        for (var i = 0; i < thu.length; i++) {
            addItemToList(json, week, 3, i, 'thursday');
        }
        for (var i = 0; i < fri.length; i++) {
            addItemToList(json, week, 4, i, 'friday');
        }
        for (var i = 0; i < sat.length; i++) {
            addItemToList(json, week, 5, i, 'saturday');
        }
        for (var i = 0; i < sun.length; i++) {
            addItemToList(json, week, 6, i, 'sunday');
        }
    };

    //Change the week number shown.
    function changeweeknr(week) {
        $('.weeknr').text(week);
    }

    //Shows all items for week 1
    $('.buttonwk1').on('click', function () {
        var val = $(this).attr("value");
        var week = $(this).text();
        changeweeknr(week);
        addall(json, val);
    });

    //Shows all items for week 2
    $('.buttonwk2').on('click', function () {
        var val = $(this).attr("value");
        var week = $(this).text();
        changeweeknr(week);
        addall(json, val);
    });

    //Shows all items for week 3
    $('.buttonwk3').on('click', function () {
        var val = $(this).attr("value");
        var week = $(this).text();
        changeweeknr(week);
        addall(json, val);
    });

    //Shows all items for week 4
    $('.buttonwk4').on('click', function () {
        var val = $(this).attr("value");
        var week = $(this).text();
        changeweeknr(week);
        addall(json, val);
    });



    // Adds a user item to the JSON string.
    function adduseritem(time) {
        json.week[$('#weekid').val()].day[$('#dayid').val()].appointment
        .push({ "time": time, "descript": $('#descriptinput').val() });
        rawJSON = JSON.stringify(json);
        addall(json, $('#weekid').val());
    };

    // Adds user item when button is clicked.
    $('.input').on('click', function () {
        var time = $('#timeinput').val();
        if ((time !== "")
              && ($('#descriptinput').val() !== "")
            && !(time.match(/[a-z]/i))) {

            if ($('#timeinput').val().charAt(2) !== '.') { time = "00.00" }
            adduseritem(time);
        }
        else{
            alert("Please enter all fields correctly");
        }
    });

    // Presses the submit button when enter key is pressed in textfield.
    $('.enterinput').keyup(function (event) {
        if (event.keyCode == 13) {
            $("#addButton").click();
        }
    });

    //Deletes an item in the array.
    $(document).on("click", "div.Delete", function () {
        var id = $(this).attr('id');
        json.week[id[0]].day[id[2]].appointment.splice(id[4], 1);
        addall(json, id[0]);
    });


    //Function that should be run when the page is loaded
    var main = addall(json, 0);
    var main2 = changeweeknr(48);
   
});