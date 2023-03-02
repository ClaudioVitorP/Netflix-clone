import React from "react";
import Fullflix from './Fullflix.png'
import { Global, ImgFullflix, ImgUsuario, Logo, Usuario } from "./HeaderStyle";

export default ({Black}) =>{
    return (
        <Global className={Black ? 'Black' : ''}>
            <Logo>
                <ImgFullflix src={Fullflix} />
            </Logo>
            <Usuario>
                <ImgUsuario src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário" />
            </Usuario>
        </Global>
    )
}