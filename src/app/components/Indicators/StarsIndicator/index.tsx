import * as React from 'react';
import styled from 'styled-components/macro';

const Box = styled.div`
    display:flex;
    color:#FFB800;
    font-size: 12px;
    font-weight: 600;
    align-items: center;
`

const Blank = styled.div`
    margin-right: 5px;
`;

type StarsIndicatorPropsType = {
    rating:number;
    view_number:boolean|undefined;
    view_stars:boolean|undefined;
}

export default function StarsIndicator(props) {
    const {
        rating, view_number, view_stars
    } = props;
    const show_number = view_number === undefined ? false : view_number;
    const show_stars = view_stars === undefined ? false : view_stars;

    return (
        <>
        <Box>
            {
                show_stars ?
                [0,1,2,3,4].map((item, idx, arr) => {
                    return (
                        <svg key={idx} xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                            <path   d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" 
                                    fill={idx <= rating-0.5? '#FFB800':'#c4c4c4'}/>
                        </svg>
                    )
                }) :
                (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                        <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="#FFB800"/>
                    </svg>
                )
            }
            <Blank/>
            { show_number ? rating : null }
        </Box>
        </>
    )
}