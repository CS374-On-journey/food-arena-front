import * as React from 'react';
import styled from 'styled-components/macro';
import WordTooltip from './WordTooltip';

const Span = styled.span`
    transition: color 0.3s, background 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    color:#FA0CAc;
    &:hover{
        color:white;
        background:#FA0CAc;
    }
    &:active{
        color:white;
        background:#ff6ecf;
    }
`

interface PropsType{
    text:string,
    content:string,
}

export default function SpecialDocument(props:PropsType) 
{
    const [isOpened, setIsOpened] = React.useState(false)
    const {text, content} = props;

    return (
        <>
            <Span onClick={()=>setIsOpened(!isOpened)}> {text} </Span>
            <WordTooltip text={text} content={content} isOpen={isOpened} setIsOpen={setIsOpened}/>
        </>
    )
}