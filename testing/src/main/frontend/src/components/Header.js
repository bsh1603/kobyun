import React from 'react';
import styled from 'styled-components';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userState } from "../recoil/atom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";


// 상단 고정, 그림자
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    width: 100%;
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    height: auto;
`;

// 해더의 내용
const HeaderContents = styled.div`
    width: 1200px;
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
`;

// 로고
const Logo = styled.button`
    position : fixed;
    left : 8rem;
    background : white;
    border : white;
    cursor : pointer;
    font-size: 2rem;
    letter-spacing: 5px;
    font-family: 'Rajdhani';
`;

//커스텀 버튼
const Butt = styled.button`
    position : relative;
    margin-right : 1px;
    width : 90px;
    height : 35px;
    color : white;
    background : black;
    border-radius: 50px;
    cursor : pointer;
    font-size : 1.0rem;
    font-family: 'Rajdhani'
`;

const Welcome = styled.div`
    position : relative;
    right : 1rem;
    text-align : center;
    width: 180px;
    height : 15px;
    border-radius : 50px;
    font-size : 1.0rem;
`

// 중간 여백
const Spacer = styled.div`
    flex-grow: 1;
`;

const Formatter = styled.div`
    position : fixed;
    right : 3rem;
`;

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
    height: 3px;
`;

const Header = () => {

    const [user, setUser] = useRecoilState(userState);
    const navigate = useNavigate();

    return (
        <Positioner>
            <WhiteBackground>
                <HeaderContents>
                    <Logo
                        onClick = { () => navigate("/")}
                    >
                    ALBA 24</Logo>
                    <Spacer/>
                    <Welcome>
                    {user.name} 님 환영합니다.
                    </Welcome>
                    <Butt
                        variant = "contained"
                        onClick = { () => navigate("/login")}>
                    Log Out
                    </Butt>
                </HeaderContents>
            </WhiteBackground>
            <GradientBorder/>
        </Positioner>
    );
};

export default Header;