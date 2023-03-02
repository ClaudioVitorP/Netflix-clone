import React from "react";
import './EmphasisMovieStyle'
import { Buttons, Description, Destaque, DgradHorizontal, DgradVertical, Genres, Info, MyList, Name, Play, Points } from "./EmphasisMovieStyle";

export default ({item}) => {
    
    let genres = [];
    
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if(description.length > 200 ) {
        description = description.substring(0, 200)+'...';
    }

    return (

        <Destaque style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
        }}>
            <DgradVertical>
                <DgradHorizontal>
                    <Name>{item.original_title}</Name>
                    <Info>
                        <Points>{item.vote_average} pontos</Points>
                        <Description>{description}</Description>
                        <Buttons>
                            <Play href="">► Assistir</Play>
                            <MyList href="">+ Minha Lista</MyList>
                        </Buttons>
                        <Genres><strong>Gêneros:</strong> {genres.join(', ')}.</Genres>
                    </Info>
                </DgradHorizontal>
            </DgradVertical>
        </Destaque>
    );
}