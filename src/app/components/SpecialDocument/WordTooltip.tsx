import * as React from 'react';
import styled from 'styled-components/macro';

import CloseButton from 'app/components/CloseButton';

interface BoxPropsType {
    top:number;
    left:number;
}

const Box = styled.div<BoxPropsType>`
    background: white;
    width: 300px;
    height: 200px;
    box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.33);
    position:fixed;
    border-radius: 20px;
    border: 1px solid #00000055;
`

const HeaderBox = styled.div`
    width:100%;
    height: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`

const HeaderText = styled.div`
    font-size: 16px;
    font-weight: 600;
`

const HeaderSeperator = styled.div`
    width: calc(100% - 40px);
    margin-left: 20px;
    background:#c4c4c4;
    height:1px;
`

const ContentBox = styled.div`
    overflow-y: auto;
    width: calc(100% - 40px);
    height: calc(100% - 50px - 15px - 15px);
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
    line-height: 175%;
`

let mouseX=0;
let mouseY=0;
let mousePressed=false;
document.addEventListener('mousemove', function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
})
document.addEventListener('mouseup', ()=>{mousePressed=false})
document.addEventListener('mousedown', ()=>{mousePressed=true})

interface PropsType{
    isOpen:boolean,
    setIsOpen:any,
    content:string,
    text:string,
}

export default function SpecialDocument(props:PropsType) 
{
    const {text, content, isOpen, setIsOpen} = props;
    if(!isOpen) return (<></>);

    return (
        <Box left={mouseX} top={mouseY}>
            <HeaderBox>
                <HeaderText>{text}</HeaderText>
                <CloseButton onClick={()=>setIsOpen(false)}/>
            </HeaderBox>
            <HeaderSeperator/>
            <ContentBox>
                {content}
            </ContentBox>
        </Box>
    )
}