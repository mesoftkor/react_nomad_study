import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
    //https://yts.mx/api/v2/movie_details.json?movie_id=15527
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    console.log(id);

    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
        setMovies(json);
    };

    useEffect(() => {
        getMovie();
    }, []);
    return <h1>Detail {id}</h1>;
}

export default Detail;
