import * as React from 'react';
import { IParty } from 'store/party/types';
import styled from 'styled-components/macro';

interface PropsType {
    fill: boolean
}

export default function PeopleIcon(props : PropsType) {
    const { fill } = props;
    let color = fill ? "#fe3061" : "#c4c4c4"
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:'5px'}}>
            <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill={color}/>
        </svg>
    )
}