import React from "react";
import { Buttoms, Overwide, Title, Votos, Posterpatch, ImgPosterpatch, Grid, Gridcoluns, BackHome, Hifen, ButtonPlay, ButtonMyList, DetailGenres } from "./MovieDetailStyle";
import { Link } from "react-router-dom";

export default ({item}) => {


    return (

        <div>
            <Grid>
                <Posterpatch><ImgPosterpatch src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/></Posterpatch>
                 <Gridcoluns>

                    <Hifen>
                        <Title>{item.original_title}</Title> 
                        <Votos>Pontuação: {item.vote_average}</Votos>
                    </Hifen>
                    
                    <Overwide>{item.overview}</Overwide> 

                    <Buttoms>
                        <ButtonPlay href="/">► Assistir</ButtonPlay>
                        <ButtonMyList href="/">+ Minha Lista</ButtonMyList>
                        <Link to={`/`}>
                        <BackHome>Voltar para a Home</BackHome>
                        </Link> 
                    </Buttoms> 

                     <DetailGenres>
                        <strong>Gêneros:</strong> {item.genres?.map((item) => (
                        <span>{item.name}</span>
                    ))}</DetailGenres>

                </Gridcoluns> 
            </Grid>
        </div>
    )     
}