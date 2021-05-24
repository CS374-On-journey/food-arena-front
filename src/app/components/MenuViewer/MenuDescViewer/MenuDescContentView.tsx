import * as React from 'react';
import { IMenu } from 'store/place/types';
import styled from 'styled-components/macro';
import numeral from 'numeral';

import SpecialDocument from 'app/components/SpecialDocument';

const Box = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
`

const ContentBox = styled.div`
    width: calc(100% - 60px);
    height: 100%;
    display:flex;
    flex-direction: column;
`

const ContentSpliter = styled.div`
    height:1px;
    width:100%;
    background: #c4c4c4;
`

const HeaderBox = styled.div`
    height: 80px;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const HeaderTitleBox = styled.div`
    font-size: 14px;
    font-weight: 300;
`

const HeaderQuantityBox = styled.div`
    display:flex;
    justify-content: space-between;
`

const HeaderQuantityText = styled.div`
    font-weight: 600;
    font-size: 16px;
`

const DetailBox = styled.div`
    width: 100%;
    height: calc(100% - 80px);
    overflow-y: auto;
`

const DetailedText = styled.div`
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.3px;
    text-align: justify;
    line-height: 200%;
    margin: 10px 0 10px 0;
`

export default function MenuDescContentView(props) {
    const menu = props.menu as IMenu;
    return (
    <Box>
        <ContentBox>
            <HeaderBox>
                <HeaderTitleBox>
                    ( {menu.local_title} )
                </HeaderTitleBox>
                <HeaderQuantityBox>
                    <HeaderQuantityText>{numeral(menu.local_quantity).format(menu.local_format_quantity)}{menu.local_quantity_unit}</HeaderQuantityText>
                    <HeaderQuantityText>{numeral(menu.local_price).format(menu.local_format_price)}{menu.local_currency} ({numeral(menu.local_price/menu.local_quantity).format(menu.local_format_price_per_unit)}{menu.local_currency}/{menu.local_quantity_unit})</HeaderQuantityText>
                </HeaderQuantityBox>
            </HeaderBox>
            <ContentSpliter/>
            <DetailBox>
                <DetailedText>
                    <SpecialDocument text={menu.description}/>
                </DetailedText>
            </DetailBox>
        </ContentBox>
    </Box>
    );
}