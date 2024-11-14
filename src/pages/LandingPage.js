import React from 'react';
import { HeaderLanding, Text, H1, IconStyled } from '../styles/LandingPage';
import Icon from "../assets/imgs/Icon.png";
import IconWithName from "../assets/imgs/IconWithName.png";
import { LoginButton } from '../styles/HeaderStyles';

export function LandingPage() {
    return (
        <HeaderLanding> 
            {/* <IconStyled src={Icon} alt="Capa do blog" /> */}
            <IconStyled src={IconWithName} alt="Capa do blog" />

            <Text>tejdnskjfdksjhfksdhjkfdskjfhkjsdfkhsdjkf</Text>
            <LoginButton>Login</LoginButton>
        </HeaderLanding>
    );
}

