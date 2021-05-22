import * as React from 'react';
import styled from 'styled-components/macro';

import RestaurantReviewItem from './RestaurantReviewItem';

const ListViewBox = styled.div`
    width:100%;
    height:100%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    overflow-y:auto;
`

const NothingTextBox = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`

const NothingText = styled.div`
    font-size:12px;
    font-weight:100;
    color:#c4c4c4;
`

const ItemSpliter = styled.div`
    width: calc(100% - 0px);
    height: 1px;
    background:#c4c4c4;
    margin-top: 10px;
    margin-bottom: 10px;
`

const ItemBox = styled.div`

`

type RestaurantReviewListType = {
    reviews: Array<object> | null | undefined;
}

export default function RestaurantReviewList(props:RestaurantReviewListType) {
    const { reviews } = props;
    return (
        <ListViewBox>
            {
                (!reviews) || reviews.length <= 0 ? 
                (<NothingTextBox>
                    <NothingText>There is no reviews.</NothingText>
                </NothingTextBox>)
                :
                props.reviews?.map((item, idx, arr)=>{
                    return (
                        <div key={idx}>
                            {idx != 0 ? <ItemSpliter/> : null}
                            <ItemBox>
                                <RestaurantReviewItem item={item}/>
                            </ItemBox>
                        </div>
                    )
                })
            }
        </ListViewBox>
    )
}