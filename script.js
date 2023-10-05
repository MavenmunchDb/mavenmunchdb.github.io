$(document).ready(function () {
    // Make a REST API call to retrieve JSON data
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbzlBsu7t_UJyh97_NpZV0bbuN0rquLOaP4XwVXfIqpQn0UhIqWh5nn6tRJhZ31VODbxIg/exec?path=dishes-table&subscription_key=jqZiBkxZayNRgQZpEU8ZlYF3EgNZRbJ3HY24bi',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            // Initialize DataTable
            $('#dataTable').DataTable({
                data: data.data,
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



