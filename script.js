$(document).ready(function () {
    // Make a REST API call to retrieve JSON data
    $.ajax({
        url: 'https://dummy.restapiexample.com/api/v1/employees',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            // Initialize DataTable
            $('#dataTable').DataTable({
                data: data.data,
                columns: [
                    { data: 'id' },
                    { data: 'employee_name' },
                    { data: 'employee_salary' }
                ]
            });
        },
        error: function (error) {
            console.error('Error fetching data from the API:', error);
        }
    });
});



