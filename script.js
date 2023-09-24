$(document).ready(function () {
    // Load JSON data using jQuery
    $.getJSON('data.json', function (data) {
        // Initialize DataTable
        $('#dataTable').DataTable({
            data: data, // Assuming data is an array of objects
            columns: [
                { data: 'Name' },
                { data: 'Age' },
                { data: 'Email' }
            ]
        });
    });
});
