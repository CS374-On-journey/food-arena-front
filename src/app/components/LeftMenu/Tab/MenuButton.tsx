import styled from 'styled-components/macro';

interface MenuButtonProps {
  selected: boolean;
}

const MenuButton = styled.div<MenuButtonProps>`
    width: 50%;
    padding: 12.5px;
    border-radius: 20px 0 0 0;
    background-color: ${props => props.selected ? '#FF3061' : '#A3A3A3'};
    text-align: center;
    color: white;
    & > svg {
        margin-right: 5px;
        fill: white;
    }
`;

export const PlaceButton = styled(MenuButton)`
    border-radius: 20px 0 0 0;
`;

export const PartyButton = styled(MenuButton)`
    border-radius: 0 20px 0 0;
`;
