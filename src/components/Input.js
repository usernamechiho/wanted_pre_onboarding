import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Visibility, VisibilityOff, Check } from '@material-ui/icons';

const Input = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const { email, password } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const [emailValid, setEmailValid] = useState(false);

    useEffect(() => {
        const emailRegex =
            /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

        if (!emailRegex.test(email)) {
            setEmailValid(false);
        } else {
            setEmailValid(true);
        }
    }, [email]);

    const [type, setType] = useState('password');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const changeType = () => {
        if (type === 'password') {
            setPasswordVisible(true);
            setType('text');
        } else {
            setType('password');
            setPasswordVisible(false);
        }
    };

    return (
        <>
            <Header>Input</Header>
            <Container>
                <Emailcontainer>
                    <Emaillabel>Email</Emaillabel>
                    <Emailinput
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder="Email"
                    />
                    <CheckIcon isValid={emailValid} />
                </Emailcontainer>

                <Passwordcontainer>
                    <Passwordlabel>Password</Passwordlabel>
                    <Passwordinput
                        type={type}
                        name="password"
                        value={password}
                        onChange={onChange}
                        placeholder="Password"
                    />
                    {passwordVisible ? (
                        <VisibleOffIcon changeType={changeType} />
                    ) : (
                        <VisibleOnIcon changeType={changeType} />
                    )}
                </Passwordcontainer>
            </Container>
        </>
    );
};

const Header = styled.h3``;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 200px;
    margin: 0 auto;
`;

const Emailcontainer = styled.div`
    display: flex;
    margin-top: 20px;
    position: relative;
`;

const Emaillabel = styled.label`
    position: absolute;
    bottom: 45px;
    margin-left: 5px;
    color: #3a3b3c;
    font-size: 13px;
`;

const Emailinput = styled.input`
    width: 70%;
    height: 40px;
    border: none;
    border-top: 1px solid grey;
    border-left: 1px solid grey;
    border-bottom: 1px solid grey;
    border-radius: 5px 0px 0px 5px;
    &:focus {
        outline: none;
    }
`;

const Passwordcontainer = styled.div`
    display: flex;
    margin-top: 40px;
    position: relative;
`;

const Passwordlabel = styled.label`
    position: absolute;
    bottom: 45px;
    margin-left: 5px;
    color: #3a3b3c;
    font-size: 13px;
`;

const Passwordinput = styled.input`
    width: 70%;
    height: 40px;
    border: none;
    border-top: 1px solid grey;
    border-left: 1px solid grey;
    border-bottom: 1px solid grey;
    border-radius: 5px 0px 0px 5px;
    &:focus {
        outline: none;
    }
`;

const CheckIcon = ({ isValid }) => {
    return (
        <div
            style={{
                width: 40,
                height: 42,
                backgroundColor: 'white',
                borderTop: '1px solid grey',
                borderRight: '1px solid grey',
                borderBottom: '1px solid grey',
                borderRadius: '0px 5px 5px 0px',
            }}
        >
            <Check
                style={{ color: isValid ? 'skyblue' : 'tomato', marginTop: 8 }}
            />
        </div>
    );
};

const VisibleOnIcon = ({ changeType }) => {
    return (
        <div
            onClick={changeType}
            style={{
                cursor: 'pointer',
                width: 40,
                height: 42,
                color: '#43BFC7',
                backgroundColor: 'white',
                borderTop: '1px solid grey',
                borderRight: '1px solid grey',
                borderBottom: '1px solid grey',
                borderRadius: '0px 5px 5px 0px',
            }}
        >
            <Visibility style={{ marginTop: 8 }} />
        </div>
    );
};

const VisibleOffIcon = ({ changeType }) => {
    return (
        <div
            onClick={changeType}
            style={{
                cursor: 'pointer',
                width: 40,
                height: 42,
                color: 'black',
                borderTop: '1px solid grey',
                borderRight: '1px solid grey',
                borderBottom: '1px solid grey',
                borderRadius: '0px 5px 5px 0px',
            }}
        >
            <VisibilityOff style={{ marginTop: 8 }} />
        </div>
    );
};

export default Input;
