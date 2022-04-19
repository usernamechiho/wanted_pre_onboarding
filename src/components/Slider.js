import React, { useState } from 'react';
import styled from 'styled-components';

const Slider = () => {
    const [volume, setVolume] = useState(0);

    const volumeRange = [0, 25, 50, 75, 100];

    const changeVolumeFromInput = (e) => {
        setVolume(e.target.value);
    };

    const onMute = () => {
        setVolume(0);
    };

    return (
        <>
            <Header>Slider</Header>
            <Container>
                <Volumediv>
                    <Percent value={volume} />
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

                    <Circlecontainer>
                        {volumeRange.map((range) => (
                            <Circle key={range} />
                        ))}
                    </Circlecontainer>
                </Rangecontainer>
            </Container>
        </>
    );
};

const Header = styled.h3``;

const Container = styled.div`
    display: flex;
    flex-direction: column;
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
`;

const Percent = styled.input`
    border: none;
    pointer-events: none;
    display: flex;
    font-size: 1.3rem;
`;

const Volumeinput = styled.input`
    z-index: 1;
    width: 40%;
    margin: 15px auto;
    cursor: pointer;
    position: relative;

    -webkit-appearance: none;

    ::-webkit-slider-runnable-track {
        width: 100%;
        height: 7px;
        background-color: green;
        border-radius: 20px;
    }

    ::-webkit-slider-thumb {
        border: 5px solid gold;
        height: 25px;
        width: 25px;
        border-radius: 20px;
        background: white;
        -webkit-appearance: none;
        margin-top: -9px;
    }
`;

const Circlecontainer = styled.div`
    position: absolute;
    display: flex;
    width: 40%;
    justify-content: space-between;
    margin: -29px;
    z-index: 0;
`;

const Circle = styled.div`
    width: 20px;
    height: 20px;
    background-color: green;
    border-radius: 30px;
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
