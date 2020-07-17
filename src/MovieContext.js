import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
          name: "Harry Potter",
          price: "$10",
          id: 23143,
        },
        {
          name: "Game of Thrones",
          price: "$10",
          id: 23144,
        },
        {
          name: "Inception",
          price: "$10",
          id: 23145,
        },
      ]);

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}