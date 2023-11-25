
function populateList(data) {
  const itemsList = document.getElementById('items-list');

  // Clear any existing list items
  itemsList.innerHTML = '';

  // Loop through the retrieved data and create list items
  data.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div class="items-card">
        <p class="item">${item.item}</p>
        <p class="place">${item.place}</p>
        <div class="rating">
          <span class="star-icon"><i class="fas fa-star"></i></span>
          <span class="number">${item.item_rating}</span>
        </div>
      </div>
    `;
    itemsList.appendChild(listItem);
  });
}

// Fetch data from the REST API endpoint
fetch('https://script.google.com/macros/s/AKfycbzlBsu7t_UJyh97_NpZV0bbuN0rquLOaP4XwVXfIqpQn0UhIqWh5nn6tRJhZ31VODbxIg/exec?path=dishes-table&subscription_key=jqZiBkxZayNRgQZpEU8ZlYF3EgNZRbJ3HY24bi') // Replace with your API endpoint
  .then(response => response.json())
  .then(data => {
    // Call the function to populate the list with fetched data
    populateList(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
