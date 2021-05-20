import * as React from 'react';
import styled from 'styled-components/macro';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css"
//import './index.css';

import StarsIndicator from 'app/components/Indicators/StarsIndicator'

interface PhotoProps {
    image: string;
}

const Photo = styled.div<PhotoProps>`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
`;

const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
`

const HeaderAuthor = styled.div`
    font-size:12px;
    font-weight:500;
`

const ContentBox = styled.div`
    margin-top: 5px;
`

const ContentText = styled.div`
    font-size:12px;
    font-weight:400;
    text-align:justify;
`

const ContentAttatchmentsBox = styled.div`
    height: 87px;
    margin: 10px -20px 0 -20px;
`

export default function RestaurantReviewItem(props) {
    const { item } = props;
    const { author, rating, content, attachment_urls} = item;
    
    return (
        <>
            <HeaderBox>
                <HeaderAuthor>{author}</HeaderAuthor>
                <StarsIndicator rating={rating} view_number view_stars/>
            </HeaderBox>
            <ContentBox>
                <ContentText>{content}</ContentText>
                {
                    attachment_urls && attachment_urls.length > 0 ? 
                    <ContentAttatchmentsBox>
                        <Swiper
                            spaceBetween={3}
                            slidesPerView={3}
                            freeMode
                        >
                            {
                                attachment_urls.map((item, idx, arr)=>{
                                    return (
                                        <SwiperSlide key={idx}>
                                            <Photo image={item}/>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </ContentAttatchmentsBox>
                    : null
                }
            </ContentBox>
        </>
    )
}