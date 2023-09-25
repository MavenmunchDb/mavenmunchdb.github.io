$(document).ready(function () {
    // Make a REST API call to retrieve JSON data
    $.ajax({
        url: process.env.FINAL_URL,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            // Initialize DataTable
            $('#dataTable').DataTable({
                data: data,
                columns: [
                    { data: 'item' },
                    { data: 'place' },
                    { data: 'rating' }
                ]
            });
        },
        error: function (error) {
            console.error('Error fetching data from the API:', error);
        }
    });
});

