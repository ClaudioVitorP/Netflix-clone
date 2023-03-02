import React from "react";
import Fullflix from './Fullflix.png'
import { FullflixDetail, HeaderDetail, LogoDetail } from "./HdetailStyle";


export default ({Black}) =>{
    return (
        <HeaderDetail>
            <LogoDetail>
                <FullflixDetail src={Fullflix} />
            </LogoDetail>
        </HeaderDetail>
    )
}