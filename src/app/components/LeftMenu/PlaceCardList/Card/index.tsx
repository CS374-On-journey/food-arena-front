import * as React from 'react';
import styled from 'styled-components/macro';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useDispatch, useSelector } from 'react-redux';

import { usePlaceSlice } from 'store/place';
import { placeSelector, selectedPlaceSelector } from 'store/place/selectors';

import { useMapSlice } from 'store/map/index';

import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css"
import './index.css';

import {IPlace} from 'store/place/types';
import AiPickIndicator from 'app/components/Indicators/AiPickIndicator'
import StarsIndicator from 'app/components/Indicators/StarsIndicator'
import PartyIndicator from 'app/components/Indicators/PartyIndicator'

interface PhotoProps {
    image: string;
}

interface BoxPropsType {
    is_focused: boolean | undefined;
    is_opened: boolean | undefined;
}

const Box = styled.div<BoxPropsType>`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: white;
    //box-shadow: 0px 0px 40px 25px rgba(0, 0, 0, 0.16);
    box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.33);
    border-radius: 20px;
    border: ${props=> (props.is_focused && props.is_opened) ? 
        '3px solid #ff3060fa' : (props.is_opened ? '3px solid #CF00F1be': '0px solid white'
        )};
    margin-bottom: 15px;
    transition: border 0.1s cubic-bezier(0.5, 0.0, 0.0, 0.5);
`;

const Header = styled.div`
    width: 100%;
    padding: 15px 25px 5px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TagList = styled.div`
    display: flex;
`;

const Tag = styled.div`
    color: #FF3061;
    margin-right: 15px;
    font-size: 9pt;
`;

const Title = styled.h3`
    margin: 0 25px 0 25px;
`;

const SubTitle = styled.h4`
    font-weight: 400;
    margin: 0 25px 0 25px;
    font-size: 10pt;
`;

const SwiperBox = styled.div`
    width: calc(100%);
    height: 90px;
    margin: 10px 0 0 0 ;
`

const Photo = styled.div<PhotoProps>`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
`;

const Bottom = styled.div`
    width: 100%;
    padding: 10px 25px 15px 0;
    display: flex;
    justify-content: flex-end;
`;

const BottomContent = styled.div`
    color: #FF3061;
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-left: 15px;
    & > svg {
        fill: #FF3061;
        margin-right: 5px;
    }
`;

export default function Card(props) {
    const restaurant:IPlace = props.restaurant
    const {
        name, 
        address, 
        ai_pick,
        rating,
        tags,
        open_time,
        close_time,
        picture_urls,
        reviews,
        id,
        submenu_opened,
        submenu_selected,
    } = restaurant;

    const dispatch = useDispatch()

    const { actions:placeActions } = usePlaceSlice();
    const { closeRestaurant, openRestaurant, focusRestaurant } = placeActions;

    const { actions:mapActions } = useMapSlice();
    
    return (
        <Box onClick={()=>{
            if(submenu_opened && submenu_selected){
                dispatch(closeRestaurant(id))
            }else if(submenu_opened){
                dispatch(focusRestaurant(id))
            }else{
                dispatch(openRestaurant(id))
                dispatch(focusRestaurant(id))
            }
        }} is_focused={submenu_selected} is_opened={submenu_opened}>
            <Header>
                <TagList>
                    {
                        tags?.map((item, idx, arr)=>{
                            return (<Tag key={idx}>#{item}</Tag>)
                        })
                    }
                </TagList>
                <div style={{display: 'flex', alignContent: 'center'}}>
                    {ai_pick ? <AiPickIndicator/> : null}
                    <div style={{marginLeft:'5px'}}/>
                    <StarsIndicator rating={rating} view_number/>
                </div>
            </Header>
            <Title>{name}</Title>
            <SubTitle>{address.readable} /  {open_time} ~ {close_time}</SubTitle>
            {
            picture_urls && picture_urls.length > 0 ? 
                <SwiperBox>
                    <Swiper
                        spaceBetween={5}
                        slidesPerView={2.5}
                        freeMode
                    >
                        {
                            picture_urls.map((item, idx, arr)=>{
                                return (
                                    <SwiperSlide key={idx}>
                                        <Photo image={item}/>
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                </SwiperBox> : null 
            }
            <Bottom>
                <BottomContent>
                    <PartyIndicator restaurant_id={restaurant.id} />
                </BottomContent>
                <BottomContent>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M11.5 0.25H1.5C0.8125 0.25 0.25 0.8125 0.25 1.5V12.75L2.75 10.25H11.5C12.1875 10.25 12.75 9.6875 12.75 9V1.5C12.75 0.8125 12.1875 0.25 11.5 0.25ZM7.48125 6.23125L6.5 8.375L5.51875 6.23125L3.375 5.25L5.51875 4.26875L6.5 2.125L7.48125 4.26875L9.625 5.25L7.48125 6.23125Z" fill="#FF3061"/>
                    </svg>
                    {reviews ? reviews.length: 0}
                </BottomContent>
            </Bottom>
        </Box>
    );
}   