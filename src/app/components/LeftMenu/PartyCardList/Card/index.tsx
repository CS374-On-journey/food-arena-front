import * as React from 'react';
import styled from 'styled-components/macro';

import { useDispatch } from 'react-redux';

import { usePlaceSlice } from 'store/place';

import './index.css';

import {IParty} from 'store/party/types';


const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: white;
    //box-shadow: 0px 0px 40px 25px rgba(0, 0, 0, 0.16);
    box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.33);
    border-radius: 20px;
    margin-bottom: 15px;
    transition: border 0.1s cubic-bezier(0.5, 0.0, 0.0, 0.5);
`;

const LeftWrapper = styled.div`
    padding-bottom: 15px;
`;

const RightWrapper = styled.div`
    width: 70px;
    background-color: #FF3061;
    border-radius: 0 20px 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
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

const LeftTime = styled.h4`
    font-weight: 400;
    font-size: 10pt;
    text-align: center;
    color: white;
    margin: 0;
    margin-top: 10px;
`;

const BottomContent = styled.div`
    font-size: 12px;
    display: flex;
    align-items: center;
    margin: 5px 25px 0 25px;
    & > svg {
        margin-right: 5px;
        color: #000;
    }
`;

export default function Card(props) {
    const party:IParty = props.party
    const {
        id,
        title,
        restaurant, 
        address, 
        meeting_date,
        due_date,
        tags,
        description,
        registered_people,
        max_people,
        ban_rules,
    } = party;

    const dispatch = useDispatch()
    const { actions } = usePlaceSlice();
    const { closeRestaurant, openRestaurant, focusRestaurant } = actions;
    
    return (
        <Box>
            <LeftWrapper>
            <Header>
                <TagList>
                    {
                        tags?.map((item, idx, arr)=>{
                            return (<Tag key={idx}>#{item}</Tag>)
                        })
                    }
                </TagList>
            </Header>
            <Title>{title}</Title>
            <SubTitle>{restaurant}</SubTitle>
            <BottomContent>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.99325 1.3335C4.31325 1.3335 1.33325 4.32016 1.33325 8.00016C1.33325 11.6802 4.31325 14.6668 7.99325 14.6668C11.6799 14.6668 14.6666 11.6802 14.6666 8.00016C14.6666 4.32016 11.6799 1.3335 7.99325 1.3335ZM7.99992 13.3335C5.05325 13.3335 2.66659 10.9468 2.66659 8.00016C2.66659 5.0535 5.05325 2.66683 7.99992 2.66683C10.9466 2.66683 13.3333 5.0535 13.3333 8.00016C13.3333 10.9468 10.9466 13.3335 7.99992 13.3335Z" fill="black"/>
                <path d="M8.33325 4.6665H7.33325V8.6665L10.8333 10.7665L11.3333 9.9465L8.33325 8.1665V4.6665Z" fill="black"/>
            </svg>
                    {meeting_date}
                </BottomContent>
                <BottomContent>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <g clipPath="url(#clip0)">
                        <path d="M9.84929 11.625C11.2448 11.625 12.4777 11.95 13.4794 12.375C14.4041 12.775 14.9863 13.675 14.9863 14.65V16H4.7123V14.6583C4.7123 13.675 5.2945 12.775 6.21915 12.3833C7.22086 11.95 8.45374 11.625 9.84929 11.625ZM2.99997 11.8333C3.94176 11.8333 4.7123 11.0833 4.7123 10.1667C4.7123 9.25 3.94176 8.5 2.99997 8.5C2.05819 8.5 1.28765 9.25 1.28765 10.1667C1.28765 11.0833 2.05819 11.8333 2.99997 11.8333ZM3.96744 12.75C3.65066 12.7 3.33388 12.6667 2.99997 12.6667C2.15237 12.6667 1.34758 12.8417 0.619838 13.15C-0.0137238 13.4167 -0.424683 14.0167 -0.424683 14.6917V16H3.42806V14.6583C3.42806 13.9667 3.62497 13.3167 3.96744 12.75ZM16.6986 11.8333C17.6404 11.8333 18.4109 11.0833 18.4109 10.1667C18.4109 9.25 17.6404 8.5 16.6986 8.5C15.7568 8.5 14.9863 9.25 14.9863 10.1667C14.9863 11.0833 15.7568 11.8333 16.6986 11.8333ZM20.1233 14.6917C20.1233 14.0167 19.7123 13.4167 19.0787 13.15C18.351 12.8417 17.5462 12.6667 16.6986 12.6667C16.3647 12.6667 16.0479 12.7 15.7311 12.75C16.0736 13.3167 16.2705 13.9667 16.2705 14.6583V16H20.1233V14.6917ZM9.84929 6C11.2705 6 12.4178 7.11667 12.4178 8.5C12.4178 9.88333 11.2705 11 9.84929 11C8.42806 11 7.2808 9.88333 7.2808 8.5C7.2808 7.11667 8.42806 6 9.84929 6Z" fill="#000"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="20.5479" height="20" fill="#000000"/>
                        </clipPath>
                        </defs>
                    </svg>
                    {registered_people} / {max_people}
                </BottomContent>
                </LeftWrapper>
                <RightWrapper>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="26" viewBox="0 0 24 20" fill="none">
                        <path d="M9 4L7.6 5.4L10.2 8H0V10H10.2L7.6 12.6L9 14L14 9L9 4ZM18 16H10V18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H10V2H18V16Z" fill="white"/>
                    </svg>
                    <LeftTime>
                    13:59<br/>left
                    </LeftTime>
                </RightWrapper>
        </Box>
    );
}   