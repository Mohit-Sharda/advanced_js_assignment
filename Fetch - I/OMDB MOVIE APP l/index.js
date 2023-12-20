document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.getElementById('searchBtn');
    const movieInput = document.getElementById('movieInput');
    const movieDetails = document.getElementById('movieDetails');

    searchBtn.addEventListener('click', function () {
        const searchTerm = movieInput.value.trim();

        if (searchTerm !== '') {
            // Make a fetch request to OMDB API
            fetch(`https://www.omdbapi.com/?apikey=b966fd2c&t=${searchTerm}`)
                .then(response => response.json())
                .then(data => {
                    // Display movie data on the app
                    renderMovieDetails(data);
                })
                .catch(error => console.error('Error fetching movie data:', error));
        }
    });

    function renderMovieDetails(movie) {
        // Clear previous movie details
        movieDetails.innerHTML = '';

        if (movie.Response === 'True') {
            const title = document.createElement('h2');
            title.textContent = movie.Title;

            const poster = document.createElement('img');
            poster.src = movie.Poster;
            poster.alt = 'Movie Poster';

            const detailsList = document.createElement('ul');
            detailsList.innerHTML = `
                <li><strong>Year:</strong> ${movie.Year}</li>
                <li><strong>Genre:</strong> ${movie.Genre}</li>
                <li><strong>Director:</strong> ${movie.Director}</li>
                <li><strong>Plot:</strong> ${movie.Plot}</li>
            `;

            movieDetails.appendChild(title);
            movieDetails.appendChild(poster);
            movieDetails.appendChild(detailsList);
        } else {
            // Display an error message if no movie found
            movieDetails.textContent = 'Movie not found.';
        }
    }
});
