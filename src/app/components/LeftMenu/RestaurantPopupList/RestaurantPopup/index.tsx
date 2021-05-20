import * as React from 'react';
import styled from 'styled-components/macro';

import RestaurantReviewList from './RestaurantReviewList';
import AiPickIndicator from 'app/components/Indicators/AiPickIndicator';
import StarsIndicator from 'app/components/Indicators/StarsIndicator';
import CloseButton from 'app/components/CloseButton';

type ContainerPropType = {
    selected: boolean;
    z_index: number;
}

const Container = styled.div<ContainerPropType>`
    height: 50px;
    position: relative;
    z-index: ${props => props.z_index+1000};
`

const Box = styled.div`
    width: 300px;
    height: 550px;
    display: flex;
    flex-direction: column;
    background: white;
    box-shadow: 0px 0px 40px 25px rgba(0, 0, 0, 0.16);
    border-radius: 20px;
`;

type HeaderBoxPropType = {
    background_url: string;
}

const TopHeaderBox = styled.div<HeaderBoxPropType>`
    background-image: url(${props => props.background_url});
    background-size: cover;
    background-position: center;
    width:100%;
    height:120px;
    border-radius: 15px 15px 0 0;
    top:0;
`

interface TopHeaderTitlePropsType {
    is_selected: boolean,
}
const TopHeaderTitle = styled.div<TopHeaderTitlePropsType>`
    color: #F4F4F4;
    font-size: 18px;
    position: absolute;
    top: ${props=> props.is_selected ? '70px' : '12px'};
    width: 100%;
    margin-left: 36px;
    margin-right: 36px;
    text-shadow: 0 0 3px black;
`

const CloseButtonBox = styled.div`
    border: none;
    background-color: none;
    width: 42px;
    height: 42px;
    border-radius: 20px;
`

const TopHeaderCloseButtonBox = styled(CloseButtonBox)`
    position:absolute;
    top: 0;
    right: 0;
    margin: 4px;
`

const InfoBox = styled.div`
    height:93px;
    width:100%;
    border-bottom: 3px solid #f4f4f4;
`

const InfoDescBox = styled.div`
    position: relative;
    top: -90px;
    left:0;
    width: calc(300px - 55px);
    height: 90px;
    display: flex;
    align-items: center;
`

const InfoDescContentsBox = styled.div`
    font-size:12px;
    font-weight:500;
    width:100%;
    margin: 0 24px 0 24px;
`

const InfoDescContentsHeaderBox = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
`

const InfoDescContentsHeaderTitle = styled.div`
    color:black;
    font-weight: 600;
`

const InfoDescContentsHeaderIndicatorsBox = styled.div`
    display:flex;
`

const InfoDescContentsHeaderIndicatorsPadding = styled.div`
    margin-left:5px;
`

const InfoDescContentsTravelInfoText = styled.div`
    width: 100%;
    color:#CF00F1;
`

const InfoDescContentsOpenInfoBox = styled.div`
    width: 100%;
    display: flex;
`

type InfoDescContentsOpenInfoTextPropType = {
    isOpened: boolean;
}

const InfoDescContentsOpenInfoText = styled.div<InfoDescContentsOpenInfoTextPropType>`
    color:${props => props.isOpened? '#CF00F1': '#FF3061'};
    margin-right: 5px;
`

const InfoDescContentsOpenInfoHintText = styled.div`
    color:#343434;
`

const MenuButton = styled.button`
    width: 55px;
    height: 90px;
    position: relative;
    top: 0;
    left: calc(300px - 55px);
    border: 0;
    border-radius: 0;
    background: #FF3061;
    color: white;
`

const RestaurantReviewBox = styled.div`
    //background: pink;
    width: 100%;
    height: calc(100% - 213px - 45px);
`

const ActionButtonsBox = styled.div`
    display:flex;
    width:100%;
    height:45px;
`

const ActionButtonsRouteButton = styled.button`
    width:50%;
    height:100%;
    background:#FF3061;
    border:none;
    border-radius: 0;
    border-bottom-left-radius:20px;
`

const ActionButtonsPartiesButton = styled.button`
    width:50%;
    height:100%;
    background:#C4C4C4;
    border:none;
    border-radius: 0;
    border-bottom-right-radius:20px;
`

const BottomHeaderBox = styled.div<HeaderBoxPropType>`
    background-image: url(${props => props.background_url});
    background-size: cover;
    background-position: center;
    width:100%;
    height:120px;
    border-radius: 0 0 15px 15px;
    position: absolute;
    top:calc(550px - 120px);
`

const BottomHeaderTitle = styled.div`
    color: #F4F4F4;
    font-size: 18px;
    position: absolute;
    text-shadow: 0 0 3px black;
    left: 0;
    bottom: 0;
    width: 100%;
    margin-left: 36px;
    margin-right: 36px;
    margin-bottom: 13px;
`

const BottomHeaderCloseButtonBox = styled(CloseButtonBox)`
    position:absolute;
    bottom: 0;
    right: 0;
    margin: 4px;
`

/*
SearchedRestaurant := {
    'id': string || int,
    'name':string,
    'address':{ 'longitude':double, 'latitude':double, 'human_readable':string},
    'picture_urls':[string,],
    'distance':double,
    'travel_time':timespan,
    'wait_time':timespan,
    'open_time':datetime,
    'close_time':datetime,
    'local_time':datetime,
    'tags':[string,],
    'ai_pick':boolean,
    'ai_score':double,
    'rating':double,
    'reviews':[
        {
        'author':string,
        'content':string,
        'rating':double,
        'attachment_urls':[string,],
        }
    ],
    'menus':[
        Menu := {
        'id':string,
        'title':string,
        'picture_url':string,
        'description':string,
        'type':string,
        'local_title':string,
        'local_price':string,
        'local_quantity':string,
        'children': [Menu,],
        }
    ]
    } 
*/

export default function RestaurantPopup(props) {
    const {
        selected, bottom_header, onSelect, restaurant, z_index, onClose
    } = props
    const {
        name, picture_urls, travel_time, waiting_time, distance, reviews, open_time, close_time, local_time, ai_pick, rating, submenu_selected
    } = restaurant;

    //TODO: (HJ) calculate proper time.
    const isOpened = open_time <= local_time && local_time <= close_time;
    let openMessage:string, openHint:string;
    if(isOpened){
        openMessage = "OPEN";
        openHint = `~ ${close_time}`
    }else{
        openMessage = "CLOSED";
        openHint = `~ ${open_time}`
    }
    

    return (
        <Container selected={selected} z_index={z_index}>
            <Box >
                {
                    bottom_header ? (
                        <BottomHeaderBox background_url={picture_urls[0]} onClick={onSelect ? onSelect : null}> 
                            <BottomHeaderTitle>{name}</BottomHeaderTitle>
                            <BottomHeaderCloseButtonBox>
                                <CloseButton onMouseDown={onClose ? onClose : null}/>
                            </BottomHeaderCloseButtonBox>
                        </BottomHeaderBox>
                    ) : (
                        <>
                            <TopHeaderBox background_url={picture_urls[0]} onClick={onSelect ? onSelect : null}>
                                <TopHeaderTitle is_selected={submenu_selected}>{name}</TopHeaderTitle>
                                <TopHeaderCloseButtonBox>
                                    <CloseButton onClick={onClose ? onClose : null}/>
                                </TopHeaderCloseButtonBox>
                            </TopHeaderBox>

                            <InfoBox>
                                <MenuButton>Menu</MenuButton>
                                <InfoDescBox>
                                    <InfoDescContentsBox>
                                        <InfoDescContentsHeaderBox>
                                            <InfoDescContentsHeaderTitle>Description</InfoDescContentsHeaderTitle>
                                            <InfoDescContentsHeaderIndicatorsBox>
                                                {ai_pick ? <AiPickIndicator/>: null}
                                                <InfoDescContentsHeaderIndicatorsPadding/>
                                                <StarsIndicator rating={rating} view_number/>
                                            </InfoDescContentsHeaderIndicatorsBox>
                                        </InfoDescContentsHeaderBox>
                                        <InfoDescContentsTravelInfoText>
                                            {distance} m | {travel_time} min walk | {waiting_time} min wait
                                        </InfoDescContentsTravelInfoText>
                                        <InfoDescContentsOpenInfoBox>
                                            <InfoDescContentsOpenInfoText isOpened={isOpened}>{openMessage}</InfoDescContentsOpenInfoText>
                                            <InfoDescContentsOpenInfoHintText>{openHint}</InfoDescContentsOpenInfoHintText>
                                        </InfoDescContentsOpenInfoBox>
                                    </InfoDescContentsBox>
                                </InfoDescBox>
                            </InfoBox>

                            <RestaurantReviewBox>
                                <RestaurantReviewList reviews={reviews}/>
                            </RestaurantReviewBox>

                            <ActionButtonsBox>
                                <ActionButtonsRouteButton>

                                </ActionButtonsRouteButton>
                                <ActionButtonsPartiesButton>

                                </ActionButtonsPartiesButton>
                            </ActionButtonsBox>
                        </>
                    )
                }
            </Box>
        </Container>
    );
}