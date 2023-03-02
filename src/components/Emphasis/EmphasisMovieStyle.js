import styled from "styled-components"

export const Destaque = styled.section`
    height: 100vh;
    @media (max-width:760px) {
        height: 90vh;
    }
`

export const DgradVertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);

    @media (max-width:760px) {
        background: none;
    }   
`

export const DgradHorizontal = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 90%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 150px;
    padding-top: 70px;

    @media (max-width:760px) {
        background: none;
    }   
`

export const Name = styled.div`
    font-size: 60px;
    font-weight: bold;

    @media (max-width:760px) {
        font-size: 40px;
    }
`

export const Info = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;

    @media (max-width:760px) {
        font-size: 16px;
    }
`

export const Points = styled.div`
    display: inline-block;
    color: #46d369;
    margin-right: 15px;
`

export const Description = styled.div`
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 40%;

    @media (max-width:760px) {
        font-size: 14px;
        max-width: 100%;
        margin-right: 30px;
        color: #fff
    }
`

export const Buttons = styled.div`
    margin-top: 15px;

    @media (max-width:760px) {
        font-size: 16px;
    }
`

export const Play = styled.div`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    background-color: #FFF;
    color: #000;
    cursor: pointer;
    opacity: 1;
    transition : 0.2s;
    :hover{
        opacity: 0.7;

    }

    @media (max-width:760px) {
        font-size: 16px;
    }
`
export const MyList = styled(Play)`
    background-color: #333;
    color: #FFF;

`
export const Genres = styled.div`
    margin-top: 15px;
    color: #999;
    font-size: 18px;

    @media (max-width:760px) {
        font-size: 14px;
        color: #fff;
    }

`
