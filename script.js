$(document).ready(function () {
    // Load JSON data using jQuery
    $.getJSON('./data.json', function (data) {
        // Initialize DataTable
        $('#dataTable').DataTable({
            data: data, // Assuming data is an array of objects
            columns: [
                { data: 'item' },
                { data: 'place' },
                { data: 'rating' }
            ]
        });
    });
});
