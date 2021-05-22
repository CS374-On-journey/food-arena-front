import * as React from 'react';
import styled from 'styled-components/macro';
import {TreeView, toggleIsExpanded, TreeNode} from "baseui/tree-view";
import { useSelector, useDispatch } from 'react-redux';

import { usePlaceSlice } from 'store/place';
import { selectedPlaceSelector } from 'store/place/selectors';

import {IMenu, IPlace} from 'store/place/types';

const Box = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`

const TreeItemLabel = styled.div`
    font-size: 14px;
    font-weight: 400;
`

const OopsBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #c4c4c4;
`

const customLabel = (node: TreeNode) => {
    const menu = node as IMenu;
    return (
        <TreeItemLabel>
            {menu.title}
        </TreeItemLabel>
    );
};

function _makeCustomLabel(menu: IMenu)
{
    let newMenu = {
        ...menu,
        children: new Array<IMenu>(),
        label: customLabel,
    }

    for(let i=0; i<menu.children.length; i++)
    {
        newMenu.children.push(_makeCustomLabel(menu.children[i]));
    }

    return newMenu;
}

function makeCustomLabel(menus: IMenu[])
{
    let ret = new Array<IMenu>();

    for(let i=0; i<menus.length; i++)
    {
        ret.push(_makeCustomLabel(menus[i]));
    }

    return ret;
}

export default function MenuTree(props) {
    const dispatch = useDispatch();
    const { actions } = usePlaceSlice();
    
    let [rid, setRid] = React.useState(-1);

    const restaurant = props.restaurant as IPlace;

    if(restaurant)
    {
        let menus = restaurant.menus;
        if(rid != restaurant.id){
            setRid(restaurant.id);
            menus = makeCustomLabel(menus);
            dispatch(actions.updateMenu({id:restaurant.id, data:menus}))
        }

        return (
            <Box>
                <TreeView 
                    data={menus}
                    onToggle={(node:TreeNode)=>{
                        const menu = node as IMenu;
                        if(menu.children.length > 0)
                        {
                            const newMenus = toggleIsExpanded(menus, node) as IMenu[];
                            dispatch(actions.updateMenu({id:restaurant.id, data:newMenus}))
                        }
                        else
                        {
                            props.onSelected ? props.onSelected(menu) : null;
                        }
                    }}
                />
            </Box>
        )
    }
    else
    {
        return (
            <OopsBox>
                Please select restaurant first.
            </OopsBox>
        )
    }
}