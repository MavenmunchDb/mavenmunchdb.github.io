// Get the input field and list
const searchBar = document.getElementById('search-bar');
const itemList = document.getElementById('items-list').getElementsByTagName('li');

// Add event listener for keyup event on search bar
searchBar.addEventListener('keyup', function() {
  const searchText = searchBar.value.toLowerCase();

  // Loop through all list items
  for (let i = 0; i < itemList.length; i++) {
    const item = itemList[i].getElementsByClassName('item')[0].textContent.toLowerCase();
    const place = itemList[i].getElementsByClassName('place')[0].textContent.toLowerCase();
    
    // Check if either item or place matches the search text
    if (item.includes(searchText) || place.includes(searchText)) {
      itemList[i].style.display = 'block'; // Display the item if it matches
    } else {
      itemList[i].style.display = 'none'; // Hide the item if it doesn't match
    }
  }
});
