import * as React from 'react';
import styled from 'styled-components/macro';

import { useSelector, useDispatch } from 'react-redux';

import { usePlaceSlice } from 'store/place';
import { selectedPlaceSelector, menuViewerOpenedSelector } from 'store/place/selectors';
import { IPlace } from 'store/place/types';

import MenuTree from './MenuTree';
import MenuDescViewer from './MenuDescViewer';

const Box = styled.div`
    position: fixed;
    width:770px;
    height:510px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.33);
    z-index: 99999999;
`

const TitleBox = styled.div`
    width:100%;
    height:65px;
    display: flex;
    align-items: center;
`

const TitleContentBox = styled.div`
    display:flex;
    align-items: center;
    margin-left: 20px;
`

const TitleBackButton = styled.button`
    width: 36px;
    height: 36px;
    background: url('./icon-expand.svg');
    background-size: 24px 24px;
    background-position: center;
    border: none;
    border-radius: 1000px;
    transition: background 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
        background-color: #00000014;
    }
    &:active {
        background-color: #0000003b;
    }
`

const TitleText = styled.div`
    margin-left: 20px;
    font-size:16px;
    font-weight:500;
    pointer-events: none;
`

const TitleDragBox = styled.div`
    position: absolute;
    width: calc(100% - 75px);
    height: 65px;
    left:75px;
    border-radius: 0 20px 0 0;
`

const TitleSpliter = styled.div`
    position: absolute;
    top:64px;
    left:20px;
    width:calc(100% - 40px);
    height:1px;
    background: #c4c4c4;
`

const ContentBox = styled.div`
    width:100%;
    height:calc(100% - 65px);
    display: flex;
`

const ContentTreeBox = styled.div`
    width: 230px;
    margin-left: 20px;
    height: 100%;
    //background: pink;
`

const ContentSpliter = styled.div`
    width: 1px;
    height: calc(100% - 40px);
    margin-top: 20px;
    background: #c4c4c4;
`

const ContentDescBox = styled.div`
    width: calc(100% - 250px);
    height: calc(100% - 20px);
    margin-bottom: 20px;
    //background: black;
`

let mouseX=0;
let mouseY=0;
let mousePressed=false;
document.addEventListener('mousemove', function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
})
document.addEventListener('mouseup', ()=>{mousePressed=false})
document.addEventListener('mousedown', ()=>{mousePressed=true})

export default function MenuViewer(props) {
    const [menu, setMenu] = React.useState<any>(undefined);
    const [rid, setRid] = React.useState(-1);
    const [timer, setTimer] = React.useState(0);
    const [cursorPos, setCursorPos] = React.useState([0,0]);
    const [winPos, setWinPos] = React.useState([720,155]);

    const {actions} = usePlaceSlice();
    const dispatch = useDispatch();
    const place = useSelector(selectedPlaceSelector) as IPlace;
    const opened = useSelector(menuViewerOpenedSelector) as boolean;
    
    const restuarant = place;
    if(restuarant){
        if(restuarant.id != rid)
        {
            setRid(restuarant.id);
            setMenu(undefined);
        }
    }else{
        if(-1 != rid)
        {
            setRid(-1);
            setMenu(undefined);
        }
    }

    if(!opened) return (<></>)

    return (
        <Box style={{top:winPos[1], left:winPos[0]}}>
            <TitleBox>
                <TitleContentBox>
                    <TitleBackButton onClick={()=>{dispatch(actions.closeMenu())}}/>
                    <TitleText>{restuarant ? restuarant.name : 'Please Select Restaurant'}</TitleText>
                </TitleContentBox>
                <TitleDragBox onMouseDown={
                    ()=>{
                        const [wx, wy, mx, my] = [winPos[0], winPos[1], mouseX, mouseY]
                        document.body.style.userSelect='none';
                        document.body.style.pointerEvents='none';
                        const interval = setInterval(()=>{
                            if(!mousePressed){
                                clearInterval(interval)
                                document.body.style.userSelect='';
                                document.body.style.pointerEvents='';
                            }
                            setWinPos([
                                Math.max(0, Math.min(wx+mouseX-mx, window.innerWidth-770)), 
                                Math.max(0, Math.min(wy+mouseY-my, window.innerHeight-510))
                            ])
                        }, 10)
                        setTimer(interval)
                    }
                }/>
                <TitleSpliter/>
            </TitleBox>

            <ContentBox>
                <ContentTreeBox>
                    <MenuTree restaurant={restuarant} onSelected={(menu)=>{
                        setMenu(menu)
                    }}/>
                </ContentTreeBox>
                <ContentSpliter/>
                <ContentDescBox>
                    <MenuDescViewer menu={menu}/>
                </ContentDescBox>
            </ContentBox>
        </Box>
    )
}
