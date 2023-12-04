import React from 'react';

const moviesData = [
  {
    name: 'The Shawshank Redemption',
    actors: 'Tim Robbins, Morgan Freeman',
    releaseDate: 'September 10, 1994',
  },
  {
    name: 'The Godfather',
    actors: 'Marlon Brando, Al Pacino',
    releaseDate: 'March 24, 1972',
  },
  {
    name: 'The Dark Knight',
    actors: 'Christian Bale, Heath Ledger',
    releaseDate: 'July 18, 2008',
  },
  {
    name: 'Pulp Fiction',
    actors: 'John Travolta, Samuel L. Jackson',
    releaseDate: 'October 14, 1994',
  },
  {
    name: 'Forrest Gump',
    actors: 'Tom Hanks, Robin Wright',
    releaseDate: 'July 6, 1994',
  },
  {
    name: 'Inception',
    actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt',
    releaseDate: 'July 16, 2010',
  },
  {
    name: 'The Matrix',
    actors: 'Keanu Reeves, Laurence Fishburne',
    releaseDate: 'March 31, 1999',
  },
  {
    name: 'The Lord of the Rings: The Fellowship of the Ring',
    actors: 'Elijah Wood, Ian McKellen',
    releaseDate: 'December 19, 2001',
  },
  {
    name: 'Schindler\'s List',
    actors: 'Liam Neeson, Ralph Fiennes',
    releaseDate: 'December 15, 1993',
  },
  {
    name: 'Gladiator',
    actors: 'Russell Crowe, Joaquin Phoenix',
    releaseDate: 'May 5, 2000',
  },
];



const Movies = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">List of Movies</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {moviesData.map((movie, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <h2 className="text-lg font-semibold">{movie.name}</h2>
            <p className="text-sm text-gray-600">{`Actors: ${movie.actors}`}</p>
            <p className="text-sm text-gray-600">{`Release Date: ${movie.releaseDate}`}</p>
          </div>
        ))}
      </div>
      <footer className="mt-4 p-4 border-t border-gray-300 text-center">
        <p>&copy; 2023 Internet Movies Rental Company</p>
        <p>Contact: contact@imr.com</p>
      </footer>
    </div>
  );
};

export default Movies;
