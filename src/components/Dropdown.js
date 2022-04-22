import { set } from 'harmony-reflect';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search } from '@material-ui/icons';

const Dropdown = () => {
    const [readyToSearch, setReadyToSearch] = useState(false);

    const readySearch = () => {
        setReadyToSearch(!readyToSearch);
        setSearchVal('');
    };

    const [searchVal, setSearchVal] = useState('');

    const search = (e) => {
        setSearchVal(e.target.value);
    };

    const [clickedMenu, setClickedMenu] = useState('오늘의 식사는?');

    const menus = [
        '김치찌개',
        '된장국',
        '된장찌개',
        '부추전',
        '된장국',
        '순두부찌개',
        '시래기국',
        '순대국',
        '감자전',
    ];

    const searchedMenu = menus.filter((menu) =>
        menu.toLowerCase().includes(searchVal)
    );

    return (
        <>
            <Header>Dropdown</Header>
            <Container>
                <Maindiv onClick={readySearch}>{clickedMenu}</Maindiv>

                <div></div>
                {readyToSearch && (
                    <Searchdiv>
                        <Searchinput
                            type="text"
                            onChange={search}
                            value={searchVal}
                            Search={Search}
                            placeholder="메뉴를 검색하세요!"
                        />
                        {searchedMenu.map((menu) => (
                            <Menubuttoncontainer>
                                <Menubutton
                                    onClick={() => {
                                        setClickedMenu(menu);
                                        setReadyToSearch(false);
                                    }}
                                >
                                    {menu}
                                </Menubutton>
                            </Menubuttoncontainer>
                        ))}
                    </Searchdiv>
                )}
            </Container>
        </>
    );
};

const Header = styled.h3``;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 0 auto;
    overflow-y: scroll;
    background-color: #f2f2f2;
`;

const Maindiv = styled.div`
    box-sizing: border-box;
    border: 1px solid grey;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    background-color: white;
    color: #3f3f3f;
    padding-top: 8px;
`;

const Searchdiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: scroll;
`;

const Searchinput = styled.input`
    box-sizing: content-box
    width: 100%;
    height: 30px;
    margin-top: 10px;
    border-radius:5px
    border: 1px solid grey;
`;

const Menubuttoncontainer = styled.div`
    box-sizing: content-box;
    width: 100%;
    height: auto;
    cursor: pointer;
    &:hover {
        background-color: #bebdb8;
        color: white;
    }
`;

const Menubutton = styled.button`
    box-sizing: content-box;
    margin-top: 2px;
    width: 100%;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    color: #3f3f3f;
    border-bottom: 1px solid white;
    &:hover {
        color: white;
    }
`;

export default Dropdown;
