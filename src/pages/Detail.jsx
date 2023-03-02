import React, {useState, useEffect} from "react";
import MovieDetail from "../components/Detail/MovieDetail";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import TmdbApi from "../api/Tmdb-api";
import Hdetail from "../components/Top-padding/Hdetail";

function Detail(){

    const[Movie, SetMovie ] = useState({})
    const {id} = useParams()

    useEffect(()=> {
        TmdbApi.getMovieInfo(id, SetMovie);
    })

    return(
        <div>
            <Hdetail/>
                <div>
                    <MovieDetail item={Movie}/> 
                </div>
            <Footer/>
        </div>
    )
}

export default Detail;