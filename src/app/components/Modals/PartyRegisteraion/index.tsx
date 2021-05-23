import * as React from "react";
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    SIZE,
    ROLE
} from "baseui/modal";

import {
    Checkbox,
    LABEL_PLACEMENT
} from "baseui/checkbox";

import {
    ThemeProvider,
    createTheme,
    lightThemePrimitives
} from "baseui";
import {Block} from 'baseui/block';
import {Button, KIND} from 'baseui/button';
import { useSelector } from 'react-redux';
import { partySelector } from 'store/party/selectors';
import { selectRestaurantById } from 'store/place/selectors';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css"
import { IPlace } from "store/place/types";

interface PhotoProps {
    image: string;
}

const SwiperBox = styled.div`
    width: calc(100%);
    height: 160px;
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

const Title = styled.h3`
    color: black;
    font-size: 1.2rem;
    font-weight: 400;
    margin: 15px 0 0 0 ;
`;

const NoticeTitle = styled.h3`
    display: flex;
    color: black;
    font-size: 1.0rem;
    font-weight: 700;
    margin: 15px 0 0 0 ;
    color: #A8A8A8;
    & > svg {
        margin-right: 5px;
    }
`;

const BottomContent = styled.div`
    color: black;
    font-size: 18px;
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-bottom: 10px;
    & > svg {
        margin-right: 10px;
    }
`;

export default function PartyRegisteraion({
    selectedId,
    isPartyRegisteraionOn,
    setIsPartyRegisteraionOn,
}) {
    const parties = useSelector(partySelector);
    const selectedParty = parties?.find(party => party.id === selectedId);
    const [checked, setChecked] = React.useState(false);
    const selectedRestaurant = useSelector(selectRestaurantById(selectedParty?.restaurant_id));
    
    React.useEffect(() => {
        setChecked(false);
    }, [isPartyRegisteraionOn])
    
    return (
        <Modal
            onClose={() => setIsPartyRegisteraionOn(false)}
            closeable
            isOpen={isPartyRegisteraionOn}
            animate
            autoFocus
            size={SIZE.default}
            role={ROLE.dialog}
            overrides={{
                Root: {
                    style: ({ $theme }) => ({
                        zIndex: 9999999999,
                    })
                },
                Dialog: {
                    style: ({ $theme }) => ({
                        width: '60vw',
                        maxWidth: '850px',
                        borderRadius: '20px'
                    })
                }
            }}
        >
            <ModalHeader className='fadeInUp'>[Party Registeraion] <b>{selectedParty?.title}</b></ModalHeader>
            <ModalBody className='fadeInUp'>
                {
                    selectedRestaurant?.picture_urls && selectedRestaurant?.picture_urls.length > 0 ? 
                    <SwiperBox>
                    <Swiper
                    spaceBetween={5}
                    slidesPerView={2.5}
                    freeMode
                    >
                    {
                        selectedRestaurant?.picture_urls.map((item, idx, arr)=>{
                            return (
                                <SwiperSlide key={idx}>
                                <Photo image={item}/>
                                </SwiperSlide>
                                );
                            }
                        )
                    }
                    </Swiper>
                    </SwiperBox> : null 
                }
                <Title>Name: <b>{selectedRestaurant?.name}</b></Title>
                <Title>Location: <b>{selectedRestaurant?.address.readable} </b></Title>
                <Title>Meet Date: <b>{selectedParty?.meeting_date} </b></Title>
                <Title>What we eat: <b>{selectedParty?.menu_text} </b></Title>
                <Title>Short explanation: <b>{selectedParty?.description} </b></Title>
                <NoticeTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="#A8A8A8"/>
                    </svg>
                    <div>IMPORTANT NOTICES<br/>
                    { selectedParty?.ban_rules.map(rule => {
                        return (
                            <>
                            <span style={{lineHeight: '24px'}}>- {rule}</span><br/>
                            </>
                        )
                    })}
                    </div>
                </NoticeTitle>
            </ModalBody>
            <ModalFooter className='fadeInUp' style={{display: 'flex', justifyContent:'space-between', marginTop: '0px', paddingTop: '5px'}}>
                <div>
                    <BottomContent>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path d="M17.3335 11.9167C19.1318 11.9167 20.5727 10.4651 20.5727 8.66675C20.5727 6.86841 19.1318 5.41675 17.3335 5.41675C15.5352 5.41675 14.0835 6.86841 14.0835 8.66675C14.0835 10.4651 15.5352 11.9167 17.3335 11.9167ZM8.66683 11.9167C10.4652 11.9167 11.906 10.4651 11.906 8.66675C11.906 6.86841 10.4652 5.41675 8.66683 5.41675C6.86849 5.41675 5.41683 6.86841 5.41683 8.66675C5.41683 10.4651 6.86849 11.9167 8.66683 11.9167ZM8.66683 14.0834C6.14266 14.0834 1.0835 15.3509 1.0835 17.8751V20.5834H16.2502V17.8751C16.2502 15.3509 11.191 14.0834 8.66683 14.0834ZM17.3335 14.0834C17.0193 14.0834 16.6618 14.1051 16.2827 14.1376C17.5393 15.0476 18.4168 16.2717 18.4168 17.8751V20.5834H24.9168V17.8751C24.9168 15.3509 19.8577 14.0834 17.3335 14.0834Z" fill="black"/>
                        </svg>
                        3 / 4 Peoples (1 people left)
                    </BottomContent>
                    <BottomContent>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M13.9885 2.3335C7.5485 2.3335 2.3335 7.56016 2.3335 14.0002C2.3335 20.4402 7.5485 25.6668 13.9885 25.6668C20.4402 25.6668 25.6668 20.4402 25.6668 14.0002C25.6668 7.56016 20.4402 2.3335 13.9885 2.3335ZM14.0002 23.3335C8.8435 23.3335 4.66683 19.1568 4.66683 14.0002C4.66683 8.8435 8.8435 4.66683 14.0002 4.66683C19.1568 4.66683 23.3335 8.8435 23.3335 14.0002C23.3335 19.1568 19.1568 23.3335 14.0002 23.3335Z" fill="black"/>
                            <path d="M14.5835 8.1665H12.8335V15.1665L18.9585 18.8415L19.8335 17.4065L14.5835 14.2915V8.1665Z" fill="black"/>
                        </svg>
                        Deadline after 4 Days
                    </BottomContent>
                </div>
                <div>
                    <Checkbox
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        labelPlacement={LABEL_PLACEMENT.right}
                    >
                        I agree all of the Important notices
                    </Checkbox>
                    <Block marginBottom="scale300" />
                    <Button
                        kind={KIND.secondary}
                        onClick={() => setIsPartyRegisteraionOn(false)}
                    >
                        Back
                    </Button>
                    <span style={{marginLeft: '10px'}}/>
                    <ThemeProvider
                        theme={createTheme(lightThemePrimitives, {
                            colors: {
                                buttonPrimaryFill: "#FF3061",
                                buttonPrimaryHover: "#cc1132"
                            }
                        })}
                    >
                        <Button 
                            kind={KIND.primary}
                            disabled={!checked}
                            onClick={() => setIsPartyRegisteraionOn(false)}
                            overrides={{
                                BaseButton: {
                                    style: ({ $theme }) => ({
                                        backgroundColor: '#FF3061'
                                    })
                                }
                            }}
                        >JOIN NOW</Button>
                    </ThemeProvider>
                    <Block marginBottom="scale600" />
                </div>
            </ModalFooter>
        </Modal>
    );
}