import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonComponent from "../components/ButtonComponent";
import contents from "./contents/questions";
import Parser from "html-react-parser";
import { Link, Route } from "react-router-dom";

const Wrapper = styled.div`
  display: ${(props) => (props.isShow === true ? "flex" : "none")};
  width: 100%;
  height: 100vh;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  align-items: center;
`;
const Title = styled.div`
  font-family: "Jalnan";
  font-size: 2.5rem;
  text-align: center;
  color: #00462a;
  margin-top: 1.9rem;
  margin-bottom: 8.4rem;
`;
const Footer = styled.div`
  font-family: "Spoqa-Han-Sans";
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  margin-top: 8.9rem;
  color: #a7a7a7;
`;
const Msg = styled.div`
  font-family: "Spoqa-Han-Sans";
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  color: #a7a7a7;
`;
const Text = styled.div`
  font-family: "Jalnan";
  font-size: 1.9rem;
  font-weight: light;
  margin: 0.5rem;
  text-align: center;
  color: black;
  margin-top: 3.9rem;
  margin-bottom: 8.4rem;
  line-height: 50px;
`;

let UserDataArr = [];
let oneTypeSum = 0;
let count = 0;
function QuizPage({ isShow }) {
  const [questionNum, setQuestionNum] = useState(0);
  const [isProcess, setIsProcess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [linkTo, setLinkTo] = useState("");
  const linkResult = "/result/";
  const [typeOne, setTypeOne] = useState(0);
  const [userdata, setUserdata] = useState([]);
  //const [oneTypeSum, setOneTypeSum] = useState(0);

  const [typeTwo, setTypeTwo] = useState(0);
  const [typeThree, setTypeThree] = useState(0);
  const [typeFour, setTypeFour] = useState(0);

  const [finalType, setFinalType] = useState(0);
  const [turn, setTurn] = useState(0);

  const onConditionChange = (key) => {
    let record = contents[questionNum].answers[key].type;
    // let record = contents[questionNum].weight * contents[questionNum].answers[key].score; //dhld

    if (questionNum === 0 || questionNum === 1 || questionNum === 2) {
      // if(record === "E") {
      //     UserDataArr.push("E")
      //     setUserdata(UserDataArr);
      //     console.log(userdata);
      // }else if(record === "I") {
      //     UserDataArr.push("I")
      //     setUserdata(UserDataArr);
      //     console.log(userdata);
      // }

      oneTypeSum = record === "E" ? ++count : --count;

      console.log(oneTypeSum);
    } else if (questionNum === 3 || questionNum === 4 || questionNum === 5) {
    } else if (questionNum === 6 || questionNum === 7 || questionNum === 8) {
    } else if (questionNum >= 10) {
      if (questionNum === 11) {
        var result = 0;

        if (typeOne >= 5) {
          result = result + 8;
        }
        if (typeTwo >= 5) {
          result = result + 4;
        }
        if (typeThree >= 5) {
          result = result + 2;
        }
        if (typeFour + record >= 5) {
          result = result + 1;
        } else {
          result = result + 0;
        }
        let num = result;
        setFinalType(num);
        setLinkTo(linkResult + num);

        setIsLoading(true);
        setTimeout(function () {
          setIsLoading(false);
          setIsProcess(true);
        }, 2000);
      }
    }
    setQuestionNum(questionNum + 1);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const shareToKatalk = () => {
    // kakao sdk script 부른 후 window.Kakao로 접근
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      // 카카오에서 제공하는 javascript key를 이용하여 initialize
      if (!kakao.isInitialized()) {
        kakao.init("9a5e0ed16471154f7c6c045a32d772ee");
      }

      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "나와 어울리는 개발자 유형 찾기",
          description: "내 안의 개발자 본능을 찾아서..",
          imageUrl:
            "이미지 주소",
          link: {
            mobileWebUrl:
              "https://developer-7.web.app/",
            webUrl:
              "https://developer-7.web.app/",
          },
        },
      });
    }
  };

  if (questionNum === 12) {
    return (
      <>
        <Wrapper isShow={isLoading}>
          <Title>find my Type</Title>
          <Msg>당신의 개발자 유형을 찾고 있어요 .. </Msg>
        </Wrapper>
        <Wrapper isShow={isProcess}>
          <Container>
            <Text>테스트 완료! </Text>
            <div className='SocialBtn'>
              <li className='KakaoBtn'>카카오톡</li>
              <li className='TweetBtn'>트위터</li>
              <li className='FacebookBtn'>페이스북</li>
              <li className='LinkBtn'>링크</li>
            </div>
          </Container>
        </Wrapper>
      </>
    );
  } else if (questionNum < 12) {
    return (
      <>
        <Wrapper isShow={isShow}>
          <Container>
            <Text>{Parser(contents[questionNum].question)} </Text>
            {contents[questionNum].answers.map((answer, i) => (
              <ButtonComponent
                key={"answer-" + i}
                idx={i}
                text={Parser(answer.text)}
                onclick={onConditionChange}
              />
            ))}
          </Container>
        </Wrapper>
      </>
    );
  }
}

export default QuizPage;
