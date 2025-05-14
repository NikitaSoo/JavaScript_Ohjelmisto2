document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent actual form submission

    const queryValue = document.getElementById('query').value.trim();
    if (!queryValue) {
      console.log("Please enter a search term.");
      return;
    }

    const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(queryValue)}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Search Results:");
        if (data.length === 0) {
          console.log("No results found.");
        } else {
          data.forEach(item => {
            const show = item.show;
            console.log(`Title: ${show.name}`);
            console.log(`Genres: ${show.genres.join(', ')}`);
            console.log(`Summary: ${show.summary?.replace(/<[^>]*>/g, '') || 'No summary available.'}`);
            console.log('---');
          });
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
});