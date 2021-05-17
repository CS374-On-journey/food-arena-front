import * as React from 'react';
import styled from 'styled-components/macro';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css"
import './index.css';

import AiPickIndicator from 'app/components/Indicators/AiPickIndicator'
import StarsIndicator from 'app/components/Indicators/StarsIndicator'

interface PhotoProps {
    image: string;
}

const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: white;
    box-shadow: 0px 0px 40px 25px rgba(0, 0, 0, 0.16);
    border-radius: 20px;
    margin-bottom: 15px;
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

const Photo = styled.div<PhotoProps>`
    width: 145px;
    height: 90px;
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

export default function Card() {

    return (
        <>
            <Box>
                <Header>
                    <TagList>
                        <Tag>#steak</Tag>
                        <Tag>#luxury</Tag>
                    </TagList>
                    <div style={{display: 'flex', alignContent: 'center'}}>
                        <AiPickIndicator/>
                        <div style={{marginLeft:'5px'}}/>
                        <StarsIndicator rating={4.8} view_number/>
                    </div>
                </Header>
                <Title>Wolfgang's Steakhouse</Title>
                <SubTitle>4 Park Ave, New York /  09:00AM ~ 10:00PM</SubTitle>
                <Swiper
                  spaceBetween={15}
                  slidesPerView={2}
                  freeMode
                >
                  <SwiperSlide>
                      <Photo image='https://media.timeout.com/images/103504187/630/472/image.jpg'/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <Photo image='https://resizer.otstatic.com/v2/photos/wide-huge/1/30102456.jpg'/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <Photo image='https://mp-seoul-image-production-s3.mangoplate.com/192731/p1erzbe2v6e9ig.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80'/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <Photo image='https://qul.imgix.net/030160f4-7998-4d7f-88e3-ba0e92929220/558553_sld.jpg'/>
                  </SwiperSlide>
                </Swiper>
                <Bottom>
                    <BottomContent>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <g clipPath="url(#clip0)">
                            <path d="M9.84929 11.625C11.2448 11.625 12.4777 11.95 13.4794 12.375C14.4041 12.775 14.9863 13.675 14.9863 14.65V16H4.7123V14.6583C4.7123 13.675 5.2945 12.775 6.21915 12.3833C7.22086 11.95 8.45374 11.625 9.84929 11.625ZM2.99997 11.8333C3.94176 11.8333 4.7123 11.0833 4.7123 10.1667C4.7123 9.25 3.94176 8.5 2.99997 8.5C2.05819 8.5 1.28765 9.25 1.28765 10.1667C1.28765 11.0833 2.05819 11.8333 2.99997 11.8333ZM3.96744 12.75C3.65066 12.7 3.33388 12.6667 2.99997 12.6667C2.15237 12.6667 1.34758 12.8417 0.619838 13.15C-0.0137238 13.4167 -0.424683 14.0167 -0.424683 14.6917V16H3.42806V14.6583C3.42806 13.9667 3.62497 13.3167 3.96744 12.75ZM16.6986 11.8333C17.6404 11.8333 18.4109 11.0833 18.4109 10.1667C18.4109 9.25 17.6404 8.5 16.6986 8.5C15.7568 8.5 14.9863 9.25 14.9863 10.1667C14.9863 11.0833 15.7568 11.8333 16.6986 11.8333ZM20.1233 14.6917C20.1233 14.0167 19.7123 13.4167 19.0787 13.15C18.351 12.8417 17.5462 12.6667 16.6986 12.6667C16.3647 12.6667 16.0479 12.7 15.7311 12.75C16.0736 13.3167 16.2705 13.9667 16.2705 14.6583V16H20.1233V14.6917ZM9.84929 6C11.2705 6 12.4178 7.11667 12.4178 8.5C12.4178 9.88333 11.2705 11 9.84929 11C8.42806 11 7.2808 9.88333 7.2808 8.5C7.2808 7.11667 8.42806 6 9.84929 6Z" fill="#FF3061"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="20.5479" height="20" fill="#FF3061"/>
                            </clipPath>
                            </defs>
                        </svg>
                        2/4
                    </BottomContent>
                    <BottomContent>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M11.5 0.25H1.5C0.8125 0.25 0.25 0.8125 0.25 1.5V12.75L2.75 10.25H11.5C12.1875 10.25 12.75 9.6875 12.75 9V1.5C12.75 0.8125 12.1875 0.25 11.5 0.25ZM7.48125 6.23125L6.5 8.375L5.51875 6.23125L3.375 5.25L5.51875 4.26875L6.5 2.125L7.48125 4.26875L9.625 5.25L7.48125 6.23125Z" fill="#FF3061"/>
                        </svg>
                        32
                    </BottomContent>
                </Bottom>
            </Box>
        </>
    );
}   