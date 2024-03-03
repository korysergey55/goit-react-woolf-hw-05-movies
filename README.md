Movie search App

Task - Create basic routing for a movie search and storage application.

- For the backend, use themoviedb.org API. You need to register (you can enter
  arbitrary data) and get an API key.

- The following endpoints will be used in this work:
- /trending/get-trending list of today's most popular movies to create a
  collection on the main page.
- /search/search-movies search for a movie by keyword on the movies page.
- /movies/get-movie-details request full movie details for movie page.
- /movies/get-movie-credits request cast information for a movie page.
- /movies/get-movie-reviews request reviews for a movie page.

- Add asynchronous loading of JS code for application routes using React.lazy()
  and Suspense.
