import { useEffect, useState } from "react"
import TmdbApi from "../api/Tmdb-api";
import MovieGrid from "../components/Movie/MovieGrid";
import EmphasisMovie from "../components/Emphasis/EmphasisMovie";
import { List } from "../components/Movie/MovieGridStyle";
import Header from "../components/Top-padding/Header";
import Footer from "../components/Footer/Footer";

export default () => {

    const [movieList, setMovieList] = useState([]);
    const [emphasisData, setEmphasisData] = useState(null);
    const [black, setBlack] = useState(false);

    useEffect(()=>{
        const LoadAll = async () => {
            let list = await TmdbApi.getHomeList();
            setMovieList(list);

            let originals = list.filter(i=>i.slug === 'originals');
            let randomchosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomchosen];
            console.log(originals)
            TmdbApi.getMovieInfo(chosen.id, setEmphasisData);
        }

        LoadAll();

        const scrollListener = () => {
            if(window.scrollY > 10){
                setBlack(true);
            } else {
                setBlack(false);
            }
        }

        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }

    }, []);


    return (
        <div>
            <Header Black={black}/>

            {emphasisData && <EmphasisMovie item={emphasisData}/>}

                <div>
                    <List>
                        {movieList.map((item, key)=>(
                        <MovieGrid key={key} title={item.title} items={item.items}/>
                        ))}
                    </List>
                </div>  
            <Footer/>  
            </div>
    )
}
