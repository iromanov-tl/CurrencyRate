$(document).ready(function () {
    $('.datepicker').datepicker();
    $.datepicker.formatDate( "yy-mm-dd", new Date() );
});