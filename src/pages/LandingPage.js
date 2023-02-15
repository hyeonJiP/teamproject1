import React, { useState } from 'react';
import styled from 'styled-components';
import StartButtonComponent from '../components/StartButtonComponent';
import QuizPage from './QuizPage'
import UserNum from './UserNum';

const Wrapper = styled.div`
    display: ${props => props.isShow === true ? 'flex' : 'none'};
    background-color: pink;
    width:100%;
    height: 2000px;
    background-color:white;
    flex-direction:column;
    align-items:center;

`
const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    border: 1px solid black;
    width: 100%;
    height: 1000px;
`
const Data = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    width: 100%;
    height: 500px;
    border: 1px solid black;
`

const DataTitle = styled.div`
  justify-content: center;
  display: flex;
  line-height: 1.44;
  font-size: 18px;
`;

const DataNumber = styled.div`
  margin-top: 14px;
  justify-content: center;
  display: flex;
  line-height: 1.08;
  font-size: 24px;
  letter-spacing: normal;
`;

const Intro = styled.div`
    font-size:1.4rem;
    font-weight:400;
    text-align:center;
    color:#A7A7A7;
    margin-bottom:4rem;
`
const Title = styled.div`
    font-family:'Jalnan';
    font-size:4rem;
    text-align:center;
    color:#00462A;
    margin-top:1.9rem;
    margin-bottom:2rem;
    font-family: 'Jua', sans-serif;

`
const Footer = styled.div`
    font-family:'Spoqa-Han-Sans';
    font-size:1.4rem;
    font-weight:400;
    text-align:center;
    margin-top:8.9rem;
    color:#A7A7A7;
`
const Button = styled.div`
    width: 29.2rem;
    height: 7rem;
    border-radius: 1.5rem;
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #00462A;
    cursor:pointer;
    margin : 1.5rem;
    display: inline-flex;
    font-family:'Jalnan';
    color:white;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    font-weight: 400;
    font-size:2.0rem;
    text-align:center;
    border:none;
`


function LandingPage() {

    const [isShow, setIsShow] = useState(true);
    const [isQuizShow, setIsQuizShow] = useState(false);

    const onClickStartBtn = () => {
        setIsShow(false);
        setIsQuizShow(true);
    }

    return (
        <>
            <Wrapper isShow={isShow}>
                <Container>
                    <Title>나와 어울리는 개발자 유형 찾기</Title>
                    <Intro> 내안의 개발자 본능을 찾아서...</Intro>
                    <StartButtonComponent type={true} text={"시작하기"} onclick={onClickStartBtn}/>
                </Container>
                <Data>
                    <Button>
                        <DataTitle>참여자 수</DataTitle>
                        <DataNumber>{UserNum()}</DataNumber>
                    </Button>  
                </Data>
            </Wrapper>
            <QuizPage isShow={isQuizShow} />
        </>
    );
}

export default LandingPage;