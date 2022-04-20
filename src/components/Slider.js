import React, { useState } from 'react';
import styled from 'styled-components';

const Slider = () => {
    const [volume, setVolume] = useState(0);

    const volumeRange = [0, 25, 50, 75, 100];

    const changeVolumeFromInput = (e) => {
        setVolume(e.target.value);
    };

    return (
        <>
            <Header>Slider</Header>
            <Container>
                <Volumediv>
                    <Percent value={volume} />
                    <Percentsymbol>%</Percentsymbol>
                </Volumediv>
                <Volumeinput
                    type="range"
                    defaultValue={0}
                    value={volume}
                    onChange={changeVolumeFromInput}
                />
                <Rangecontainer>
                    <Volumerangecontainer>
                        {volumeRange.map((range) => (
                            <Volumerange
                                onClick={() => {
                                    setVolume(range);
                                }}
                            >
                                {range}%
                            </Volumerange>
                        ))}
                    </Volumerangecontainer>
                </Rangecontainer>
            </Container>
        </>
    );
};

const Header = styled.h3``;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const Volumediv = styled.div`
    width: 40%;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin: auto;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: flex-end;
`;

const Percent = styled.input`
    border: none;
    pointer-events: none;
    display: flex;
    font-size: 1.2rem;
    width: 40px;
`;

const Percentsymbol = styled.h4`
    color: grey;
    margin-right: 10px;
`;

const Volumeinput = styled.input`
    width: 40%;
    margin: 15px auto;
    cursor: pointer;
`;

const Rangecontainer = styled.div`
    display: flex;
    width: 45%;
    justify-content: space-around;
    margin: auto;
`;

const Volumerangecontainer = styled.div`
    display: flex;
    flex-direction: space-between;
    width: 100%;
`;

const Volumerange = styled.button`
    width: 15%;
    height: auto;
    margin: 1px auto;
    font-size: 0.3rem;
    border-radius: 50px;
    border: none;
    color: #808080;
    cursor: pointer;
`;

export default Slider;
