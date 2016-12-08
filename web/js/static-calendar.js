$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
        // options
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'
        },
        defaultDate: '2016-12-11',
        navLinks: true,
        editable: false,
        eventLimit: true,
        firstDay: 1,
        // locale: 'ru',
        events: [
            {
                id: 1,
                title: 'Lesson',
                start: '2016-12-13T18:00:00',
                end: '2016-12-13T20:15:00'
            },
            {
                id: 1,
                title: 'Lesson',
                start: '2016-12-20T18:00:00',
                end: '2016-12-20T20:15:00'
            },
            {
                id: 1,
                title: 'Lesson',
                start: '2016-12-27T18:00:00',
                end: '2016-12-27T20:15:00'
            },
            {
                id: 1,
                title: 'Lesson',
                start: '2017-01-03T18:00:00',
                end: '2017-01-03T20:15:00'
            }
        ]
    })

});