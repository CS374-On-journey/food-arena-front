import * as React from 'react';
import styled from 'styled-components/macro';

import { useSelector, useDispatch } from 'react-redux';

import { usePlaceSlice } from 'store/place';
import { selectedPlaceSelector } from 'store/place/selectors';
import { IPlace } from 'store/place/types';

import MenuTree from './MenuTree';
import MenuDescViewer from './MenuDescViewer';

const Box = styled.div`
    position: absolute;
    left:720px;
    top:280px;
    width:600px;
    height:420px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.33);
`

const TitleBox = styled.div`
    width:100%;
    height:65px;
    display: flex;
    align-items: center;
`

const TitleContentBox = styled.div`
    display:flex;
    align-items: center;
    margin-left: 20px;
`

const TitleBackButton = styled.button`
    width: 36px;
    height: 36px;
    background:transparent;
`

const TitleText = styled.div`
    margin-left: 20px;
    font-size:16px;
    font-weight:500;
`

const TitleSpliter = styled.div`
    position: absolute;
    top:64px;
    left:20px;
    width:calc(100% - 40px);
    height:1px;
    background: #c4c4c4;
`

const ContentBox = styled.div`
    width:100%;
    height:calc(100% - 65px);
    display: flex;
`

const ContentTreeBox = styled.div`
    width: 230px;
    margin-left: 20px;
    height: 100%;
    //background: pink;
`

const ContentSpliter = styled.div`
    width: 1px;
    height: calc(100% - 40px);
    margin-top: 20px;
    background: #c4c4c4;
`

const ContentDescBox = styled.div`
    width: calc(100% - 250px);
    height: calc(100% - 20px);
    margin-bottom: 20px;
    //background: black;
`

export default function MenuViewer(props) {
    const {actions} = usePlaceSlice();
    const place = useSelector(selectedPlaceSelector) as IPlace;

    const restuarant = place;

    return (
        <Box>
            <TitleBox>
                <TitleContentBox>
                    <TitleBackButton/>
                    <TitleText>{restuarant ? restuarant.name : 'Select Restaurant'}</TitleText>
                </TitleContentBox>
                <TitleSpliter/>
            </TitleBox>

            <ContentBox>
                <ContentTreeBox>
                    <MenuTree restaurant={restuarant}/>
                </ContentTreeBox>
                <ContentSpliter/>
                <ContentDescBox>
                    <MenuDescViewer menu={1}/>
                </ContentDescBox>
            </ContentBox>
        </Box>
    )
}
