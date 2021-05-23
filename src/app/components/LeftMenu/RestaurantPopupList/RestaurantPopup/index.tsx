import * as React from 'react';
import styled from 'styled-components/macro';

import { useSelector, useDispatch } from 'react-redux';

import { usePlaceSlice } from 'store/place';
import { selectedPlaceSelector, menuViewerOpenedSelector } from 'store/place/selectors';
import { IPlace } from 'store/place/types';
import { usePartySlice } from 'store/party/index';
import { partySelector } from 'store/party/selectors';

import RestaurantPartyList from './RestaurantPartyList';
import RestaurantReviewList from './RestaurantReviewList';
import AiPickIndicator from 'app/components/Indicators/AiPickIndicator';
import StarsIndicator from 'app/components/Indicators/StarsIndicator';
import PartyIndicator from 'app/components/Indicators/PartyIndicator';
import CloseButton from 'app/components/CloseButton';
import { IParty } from 'store/party/types';

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
    box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.33);
    border-radius: 20px;
`;

type HeaderPicturePropType = {
    selected: boolean;
    background_url: string;
    bottom_header: boolean;
}

const Picture = styled.div<HeaderPicturePropType>`
    &::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(${props => props.selected ? '0px' : '3px'});
        pointer-events: none; /* make the pseudo class click-through */
        border-radius: ${props=> props.bottom_header ? '0 0 15px 15px' : '15px 15px 0 0'};
        transition: backdrop-filter 0.05s ease-out;
    }

    width: 100%;
    height: 100%;
    background-image: url(${props => props.background_url});
    background-size: cover;
    background-position: center;
    border-radius: ${props=> props.bottom_header ? '0 0 15px 15px' : '15px 15px 0 0'};
`

type HeaderBoxPropType = {
    selected: boolean;
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
    width: calc(100% - 72px);
    margin-left: 36px;
    margin-right: 36px;
    text-shadow: 0 0 2px black;
    transition: top 0.3s cubic-bezier(1.0, 0.0, 0.0, 1.0);
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
    color: white;
    transition: background-color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    background: #FF3061;
    &:hover{
        background-color: #ff164c;
    }
    &:active{
        background-color: #ff517a;
    }
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
    display: flex;
    justify-content: center;
    align-items: center;
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

const PartyListBox = styled.div`
    position: fixed;
    left: 710px;
    top: 500px;
`

export default function RestaurantPopup(props) {
    const {
        selected, bottom_header, onSelect, restaurant, z_index, onClose
    } = props
    const {
        name, picture_urls, travel_time, waiting_time, distance, reviews, open_time, close_time, local_time, ai_pick, rating, submenu_selected
    } = restaurant;
    
    const isOpened = open_time <= local_time && local_time <= close_time;
    let openMessage:string, openHint:string;
    if(isOpened){
        openMessage = "OPEN";
        openHint = `~ ${close_time}`
    }else{
        openMessage = "CLOSED";
        openHint = `~ ${open_time}`
    }

    const dispatch = useDispatch();
    const { actions } = usePlaceSlice();
    const menu_opened = useSelector(menuViewerOpenedSelector);

    const [isPartyListOpened, setIsPartyListOpened] = React.useState(false);

    return (
        <Container selected={selected} z_index={z_index}>
            <Box >
                {
                    bottom_header ? (
                        <BottomHeaderBox selected={submenu_selected} background_url={''} onClick={onSelect ? onSelect : null}> 
                            <Picture bottom_header={true} selected={submenu_selected} background_url={picture_urls[0]}/>
                            <BottomHeaderTitle>{name}</BottomHeaderTitle>
                            <BottomHeaderCloseButtonBox>
                                <CloseButton onMouseDown={onClose ? onClose : null}/>
                            </BottomHeaderCloseButtonBox>
                        </BottomHeaderBox>
                    ) : (
                        <>
                            <TopHeaderBox selected={submenu_selected} background_url={''} onClick={onSelect ? onSelect : null}>
                                <Picture bottom_header={false} selected={submenu_selected} background_url={picture_urls[0]}/>
                                <TopHeaderTitle is_selected={submenu_selected}>{name}</TopHeaderTitle>
                                <TopHeaderCloseButtonBox>
                                    <CloseButton onClick={onClose ? onClose : null}/>
                                </TopHeaderCloseButtonBox>
                            </TopHeaderBox>

                            <InfoBox>
                                <MenuButton onClick={()=>{dispatch(actions.toggleMenu())}}>{menu_opened?'Close Menu':'Menu'}</MenuButton>
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
                                <ActionButtonsPartiesButton onClick={
                                    ()=>{
                                        setIsPartyListOpened(!isPartyListOpened);
                                    }
                                }>
                                    <div style={{position:'relative', left:'-5px'}}>
                                        <PartyIndicator restaurant_id={restaurant.id} fill='#FFF'/>
                                    </div>
                                </ActionButtonsPartiesButton>
                            </ActionButtonsBox>

                            { isPartyListOpened && selected ?
                                <PartyListBox>
                                    <RestaurantPartyList restaurant={restaurant} onClose={()=>{setIsPartyListOpened(false)}}/>
                                </PartyListBox>
                            : null}
                        </>
                    )
                }
            </Box>
        </Container>
    );
}