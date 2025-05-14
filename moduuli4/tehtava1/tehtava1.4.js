document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop normal form submission

    const query = document.getElementById('query').value;
    const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log("Search Results:");
        data.forEach(item => {
          console.log(`Title: ${item.show.name}`);
          console.log(`Genres: ${item.show.genres.join(', ')}`);
          console.log(`Summary: ${item.show.summary?.replace(/<[^>]*>/g, '')}`);
          console.log('---');
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
});