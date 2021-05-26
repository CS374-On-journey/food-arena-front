import * as React from 'react';
import styled from 'styled-components/macro';

import './icon-close.svg'

const Icon = styled.div`
    width: 24px;
    height: 24px;
    background: white;
    mask-image: url('./icon-close.svg');
    & > svg {
        fill:white;
    }
`

const Button = styled.button`
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: rgba(0,0,0,0.33);
    display: flex;
    border: none;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    transition: background 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
        background: #ff1f3dab;
    }
    &:active {
        background: #ff1f3d;
    }
`

export default function CloseButton(props) {
    const { onClick, onMouseDown } = props
    return (
        <Button onClick={onClick} onMouseDown={onMouseDown}>
            <Icon/>
        </Button>
    )
}