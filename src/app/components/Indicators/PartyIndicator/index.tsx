import * as React from 'react';
import styled from 'styled-components/macro';

import { useSelector } from 'react-redux';
import { selectPartyByRestaurantId } from 'store/party/selectors';
import { IParty } from 'store/party/types';
import { usePartySlice } from 'store/party/index'

const Box = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
`

interface PartyIndicatorPropsType {
    current?: number;
    maximum?: number;
    restaurant_id?: number;
    fill?: string;
}

const isNull = x => x===null || x===undefined;

export default function PartyIndicator(props:PartyIndicatorPropsType) {
    const {actions} = usePartySlice();

    let message = ""
    if(!isNull(props.restaurant_id)){
        const selectedParty = useSelector(selectPartyByRestaurantId(props.restaurant_id as number)) as IParty;
        if(isNull(selectedParty)){
            message = "Create"
        }else{
            message = `${selectedParty.registered_people}/${selectedParty.max_people}`;
        }
    }else if(!isNull(props.maximum) && !isNull(props.current)){
        message = `${props.current}/${props.maximum}`
    }
    
    return (
        <Box style={{color:props.fill??"#FF3061"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" style={{marginRight:'5px'}}>
                <g clipPath="url(#clip0)">
                    <path d="M9.84929 11.625C11.2448 11.625 12.4777 11.95 13.4794 12.375C14.4041 12.775 14.9863 13.675 14.9863 14.65V16H4.7123V14.6583C4.7123 13.675 5.2945 12.775 6.21915 12.3833C7.22086 11.95 8.45374 11.625 9.84929 11.625ZM2.99997 11.8333C3.94176 11.8333 4.7123 11.0833 4.7123 10.1667C4.7123 9.25 3.94176 8.5 2.99997 8.5C2.05819 8.5 1.28765 9.25 1.28765 10.1667C1.28765 11.0833 2.05819 11.8333 2.99997 11.8333ZM3.96744 12.75C3.65066 12.7 3.33388 12.6667 2.99997 12.6667C2.15237 12.6667 1.34758 12.8417 0.619838 13.15C-0.0137238 13.4167 -0.424683 14.0167 -0.424683 14.6917V16H3.42806V14.6583C3.42806 13.9667 3.62497 13.3167 3.96744 12.75ZM16.6986 11.8333C17.6404 11.8333 18.4109 11.0833 18.4109 10.1667C18.4109 9.25 17.6404 8.5 16.6986 8.5C15.7568 8.5 14.9863 9.25 14.9863 10.1667C14.9863 11.0833 15.7568 11.8333 16.6986 11.8333ZM20.1233 14.6917C20.1233 14.0167 19.7123 13.4167 19.0787 13.15C18.351 12.8417 17.5462 12.6667 16.6986 12.6667C16.3647 12.6667 16.0479 12.7 15.7311 12.75C16.0736 13.3167 16.2705 13.9667 16.2705 14.6583V16H20.1233V14.6917ZM9.84929 6C11.2705 6 12.4178 7.11667 12.4178 8.5C12.4178 9.88333 11.2705 11 9.84929 11C8.42806 11 7.2808 9.88333 7.2808 8.5C7.2808 7.11667 8.42806 6 9.84929 6Z" fill={props.fill ?? "#FF3061"}/>
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="20.5479" height="20" fill={props.fill ?? "#FF3061"}/>
                    </clipPath>
                </defs>
            </svg>
            {message}
        </Box>
    )
}