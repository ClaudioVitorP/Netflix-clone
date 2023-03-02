import styled from "styled-components";

export const Itens = styled.div`
    margin-bottom: 30px;

`

export const Title = styled.h2`
    margin: 0px 0px 10px 25px;
    font-size: 24px;
    
`

export const Movie = styled.div`
    overflow-x: hidden;
    padding-left: 25px;
`

export const ListImg = styled.div`
    transition: 0.4s;
`

export const Carrosel = styled.div`
    display: inline-block;
    width: 150px;
    cursor: pointer;

`
export const Poster = styled.img`
    width: 100%;
    transform: scale(0.90);
    transition: all ease 0,2s;
    :hover{

        transform: scale(1);

    }

`
export const List = styled.section`
    margin-top: -150px;
`

export const Arrow = styled.div`
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba( 0, 0, 0, 0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0.4;

    &.left{left:0}

    &.right{right:0}

    :hover{
        opacity: 1;
    }

    @media (max-width:760px) {
        opacity: 1;
    }
`

