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
                    value={volume}
                    onChange={changeVolumeFromInput}
                />
                <Fakerangeinput></Fakerangeinput>
                <Fakerangemovinginput volume={volume}></Fakerangemovinginput>
                <Ballcontainer>
                    {volumeRange.map((ball) => (
                        <Rangeball
                            key={ball}
                            volume={volume}
                            ball={ball}
                        ></Rangeball>
                    ))}
                </Ballcontainer>
                <Rangecontainer>
                    <Volumerangecontainer>
                        {volumeRange.map((range) => (
                            <Volumerange
                                style={{
                                    backgroundColor: range === 0 && '#ccc',
                                }}
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
    -webkit-appearance: none;
    width: 40%;
    margin: 15px auto;
    cursor: pointer;
    position: relative;
    background-color: transparent;
    z-index: 3;

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        background: white;
        cursor: pointer;
        border-radius: 30px;
        border: 3px solid black;
    }
`;

const Fakerangemovinginput = styled.div`
    width: ${({ volume }) => volume / 2.5}%;
    height: 15px;
    margin: 15px auto;
    background: #808080;
    border-radius: 20px;
    position: absolute;
    left: 30vw;
    margin-top: 70px;
    z-index: 2;
`;

const Fakerangeinput = styled.div`
    width: 40%;
    height: 15px;
    margin: 15px auto;
    border-radius: 20px;
    background-color: #d3d3d3;
    position: absolute;
    left: 30vw;
    margin-top: 70px;
    z-index: 1;
`;

const Rangecontainer = styled.div`
    display: flex;
    width: 45%;
    justify-content: space-around;
    margin: auto;
`;

const Ballcontainer = styled.div`
    display: flex;
    width: 42%;
    justify-content: space-between;
    margin: auto;
    margin-top: -41px;
    z-index: 0;
`;

const Rangeball = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin: 2px;
    background-color: ${({ volume, ball }) =>
        volume >= ball ? '#808080' : '#ccc'};
    position: relative;
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
