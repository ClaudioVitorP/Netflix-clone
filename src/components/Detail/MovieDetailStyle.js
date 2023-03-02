import styled from "styled-components";

export const Grid = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    

    @media (max-width:760px) {
        flex-direction: column;
    }
`

export const Gridcoluns = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2vw;
`

export const Posterpatch = styled.div`
    padding: 30px 50px;
`
export const ImgPosterpatch = styled.img`
    display: flex;
    width: 100%;
    border: 1px solid #FF00;
    border: 3px solid #FF0000;

    @media (max-width:760px) {
        justify-content: center;
    }

    @media (min-width:760px) {
        width: 240px;
    }
`

export const Title = styled.div`
    font-size: 50px;
    font-weight: bold;

    @media (max-width:760px) {
        font-size: 20px;
    }
`

export const Votos = styled.div`
    display: inline-block;
    color: #46d369;
    margin-right: 15px;
`

export const Overwide = styled.div`
    display: flex;
    width: 100%;
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 90%;

    @media (max-width:760px) {
        font-size: 14px;
        max-width: 100%;
        margin-right: 30px;
        color: #fff;
        justify-content: center;
        
    }
`

export const Buttoms = styled.div`
    margin-top: 15px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width:760px) {
        font-size: 16px;
        justify-content: center;
    }
`

export const ButtonPlay = styled.div`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    background-color: #FFF;
    color: #000;
    cursor: pointer;
    opacity: 1;
    transition : 0.2s;
    :hover{
        opacity: 0.7;

    }

    @media (max-width:760px) {
        font-size: 14px;
        
    }
`
export const ButtonMyList = styled(ButtonPlay)`
    background-color: #333;
    color: #FFF;

`

export const BackHome = styled(ButtonPlay)`
    background-color: #FF0000;
    color: #FFF;


`

export const DetailGenres = styled.div`
    display: flex;
    width: 100%;
    margin-top: 15px;
    color: #999;
    font-size: 18px;
    

    @media (max-width:760px) {
        font-size: 14px;
        color: #fff;
        justify-content: center;
    }

`

export const Hifen = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    align-items: center;
`

