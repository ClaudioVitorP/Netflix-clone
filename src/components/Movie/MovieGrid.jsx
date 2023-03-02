import React, {useState} from 'react';
import { Itens, Title, Movie, ListImg, Arrow, Carrosel, Poster } from "./MovieGridStyle";
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import {Link} from 'react-router-dom'

export default ({title, items}) => {
    const[scrollX, settScrollX] = useState(0);

    const pointLeft = () =>{
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        settScrollX(x);
    }

    const pointright = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        settScrollX(x);
    }

    return (
         <Itens>
            <Title>{title}</Title>
            <Arrow className='left' onClick={pointLeft}>
                <NavigateBeforeOutlinedIcon style={{fontSize:40}}/>
            </Arrow>
            <Arrow className='right' onClick={pointright}>
                <NavigateNextOutlinedIcon style={{fontSize:40}}/>
            </Arrow>
            
            <Movie>
                <ListImg style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <Link to={`/detail/${item.id}`}>
                            <Carrosel key={key}> 
                                <Poster src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                            </Carrosel>
                        </Link>
                    ))}
                </ListImg>
             </Movie>  
        </Itens>
    )
}