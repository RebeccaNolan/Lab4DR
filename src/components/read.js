import Movies from "./movies";
import axios from "axios";
import { useEffect, useState } from "react";

//useState - allows functional components can store and manage state
//axios - fetches data/used to make asynchronous HTTP requests to server

const Read = () => {

  //created state variable movies
  const [movies, setMovies] = useState([]); //initial value of empty array

      useEffect(
        ()=> {
          //calls API
          axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872') 
          .then((response) => {
            console.log(response.data);
            setMovies(response.data.movies)
          })
          //log error
          .catch((error) => {
            console.log(error);
          })
        },[]
      );

    return (
        <div>
            <h3>Hello from read component!</h3>
            { <Movies myMovies={movies}/> /*get movie data */}
        </div>
    );
}

export default Read;