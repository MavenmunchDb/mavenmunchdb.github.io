$(document).ready(function () {
    // Make a REST API call to retrieve JSON data
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbz6aNo8pfxeMx0r09jkAjE2J-ZJw4a2Blva4EG8NNqfQzhp0aKRAaJKwipvV9hYrbGSKQ/exec?path=dishes-table',
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

