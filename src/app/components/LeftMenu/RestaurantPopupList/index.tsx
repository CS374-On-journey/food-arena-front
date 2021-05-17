import * as React from 'react';
import styled from 'styled-components/macro';

import RestaurantPopup from './RestaurantPopup'

const Box = styled.div`
    width: 100%;
    height: 100%;
`

export default function RestaurantPopupList(props) {
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
            'attatchment_urls':[string,],
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
    //props
    const opened_restaurants = [{},{},{},{}]

    //states
    const [selected_idx, setSelectedIdx] = React.useState(1);

    return (
        <Box>
            {
                opened_restaurants.map((item, idx)=>
                {
                    return (
                        <RestaurantPopup 
                            key={idx}
                            restaurant={item} 
                            selected={idx===selected_idx} 
                            bottom_header={idx > selected_idx}
                            z_index={-Math.abs(idx-selected_idx)}
                            onSelect={()=>{
                                setSelectedIdx(idx)
                            }}
                            onClose = {
                              () => {
                                console.log('close requested', idx)
                              }
                            }
                        />
                    )
                })
            }
        </Box>
    );
}