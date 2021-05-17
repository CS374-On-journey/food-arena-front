import * as React from 'react';
import styled from 'styled-components/macro';

import './icon-close.svg'

const Icon = styled.div`
    width: 100%;
    height: 100%;
    background: url('icon-close.svg');
`

const Button = styled.button`
    width: 100%;
    height: 100%;
    background: none;
`

export default function CloseButton(props) {
    const { onClick, onMouseDown } = props
    return (
        <Button onClick={onClick} onMouseDown={onMouseDown}>
            <Icon/>
        </Button>
    )
}