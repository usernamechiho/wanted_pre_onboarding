import React, { useState } from 'react';
import styled from 'styled-components';

const Tab = () => {
    const menus = ['상세', '배송안내', '후기'];

    const [clickedMenuIndex, setClickedMenuIndex] = useState(undefined);

    return (
        <>
            <Header>Tab</Header>
            <Container>
                {menus.map((menu, index) => (
                    <Menus
                        isClicked={index === clickedMenuIndex}
                        onClick={() => {
                            setClickedMenuIndex(index);
                        }}
                    >
                        {menu}
                    </Menus>
                ))}
                <Colorbar
                    clickedMenu={clickedMenuIndex}
                    itemLength={menus.length}
                />
            </Container>
        </>
    );
};

const Header = styled.h3``;

const Container = styled.div`
    position: relative;
    width: 60%;
    height: 60px;
    display: flex;
    border-bottom: 3px solid #ccc;
    margin: auto;
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
`;

const Menus = styled.button`
    background-color: transparent;
    border: none;
    color: ${({ isClicked }) => (isClicked ? 'black' : 'ccc')};
    font-weight: ${({ isClicked }) => isClicked && 'bold'};
    cursor: pointer;
`;

const Colorbar = styled.div`
    position: absolute;
    width: calc(100% / ${({ itemLength }) => itemLength});
    height: 3px;
    background-color: green;
    margin-top: 60px;
    transform: translateX(calc(100% * ${({ clickedMenu }) => clickedMenu}));
    transition: 0.4s;
    left: 0px;
`;

export default Tab;
