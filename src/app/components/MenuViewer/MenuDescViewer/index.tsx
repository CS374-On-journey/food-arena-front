import * as React from 'react';
import { IMenu } from 'store/place/types';
import styled from 'styled-components/macro';

import MenuDescContentView from './MenuDescContentView';

const Box = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
`

interface HeaderBoxPropsType {
    picture_url: string;
}

const HeaderBox = styled.div<HeaderBoxPropsType>`
    width:100%;
    height:170px;
    background-image: url(${p=>p.picture_url});
    background-size:cover;
    display:flex;
`

const HeaderTitleBox = styled.div`
    backdrop-filter: blur(5px) brightness(0.66);
    height: 65px;
    width: 100%;
    margin-top: 105px;
    display: flex;
    align-items: center;
`

const HeaderTitleText = styled.div`
    margin-left: 40px;
    font-size: 20px;
    font-weight: 600;
    color:white;
    text-shadow: 0 0 3px black;
`

const ContentBox = styled.div`
    width:100%;
    height: calc(100% - 170px);
`

const OopsBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #c4c4c4;
`

export default function MenuDescViewer(props) {
    const menu = props.menu as IMenu;
    if(menu){
        return (
            <Box>
                <HeaderBox picture_url={menu.picture_url}>
                    <HeaderTitleBox>
                        <HeaderTitleText>
                            {menu.title}
                        </HeaderTitleText>
                    </HeaderTitleBox>
                </HeaderBox>
                <ContentBox>
                    <MenuDescContentView menu={menu}/>
                </ContentBox>
            </Box>
        )
    }else{
        return (<OopsBox>Please select menu first.</OopsBox>)
    }
}