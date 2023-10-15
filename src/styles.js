import styled from "styled-components";


export const Title = styled.h1`
    color: #aeecef;
`;

export const Container = styled.div`
    border: 3px solid #119da4;
    padding: 1em;
    background: #6a4c93;
    border-radius: 8px;

    & input{        
        border-radius: 4px;
        border: 1px solid black;
        background: #3066be;
        color: #aeecef;
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
        color: #aeecef;
        height: 2.5em;
    }
    & button{
        margin: 8px;
        color: #2ec4b6;
        background: #002e2c;
        border: 2px solid black;
    }
`;

