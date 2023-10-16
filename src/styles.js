import styled from "styled-components";


export const Title = styled.h1`
    color: black;
`;

export const Container = styled.div`
    border: 3px solid black;
    padding: 1em;
    background: #80ADBF;
    border-radius: 8px;

    & input{        
        border-radius: 4px;
        border: 1px solid black;
        background: #F5F5F5;
        color: black;
        height: 2.5em;
        margin: 8px;
        padding: 3px;
    }

    & ul{
        display: flex;
        flex-direction: column;
    }

    & li{
        display: flex;
        padding: 10px;
        align-items: center;
        justify-content: space-evenly;
        color: black;
        height: 2.5em;
    }
    & button{
        margin: 8px;
        color: black;
        background: #8988B3;
        border: 2px solid black;
    }
`;

