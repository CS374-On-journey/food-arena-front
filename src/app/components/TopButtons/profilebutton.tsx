import * as React from 'react';
import styled from 'styled-components/macro';


const Button = styled.button`
    cursor: pointer;
    position: fixed;
    right: 0;
    top: 0;
    margin: 25px;
    width: 54px;
    height: 54px;
    background: #F4F4F4;
    display: flex;
    border: none;
    border-radius: 18px;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 0px 0px rgb(0 0 0 / 33%);

    & > svg {
        fill:white;
    }
    
`

export default function ProfileButton(props) {
    const { onClick, onMouseDown } = props
    return (
        <Button onClick={onClick} onMouseDown={onMouseDown}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#A2A2A2"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" fill="#A2A2A2"/></svg>
        </Button>
    )
}