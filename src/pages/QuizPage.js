import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonComponent from "../components/ButtonComponent";
import ProgressBar from "../components/ProgressBar";
import contents from "./contents/questions";
import Parser from "html-react-parser";
import { Link } from "react-router-dom";

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

let UserDataArr_A = [];

let UserDataArr_B = [];

let UserDataArr_C = [];

let UserDataArr_D = [];

function QuizPage({ isShow }) {
  const [questionNum, setQuestionNum] = useState(0);
  const [isProcess, setIsProcess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [linkTo, setLinkTo] = useState("");
  const linkResult = "/result/";

  const [list, setList] = useState([]);

  const [finalType, setFinalType] = useState(0);
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    console.log("list", list);
    if (list.length == 4) {
      let num = "";
      for (let i = 0; i < list.length; i++) {
        num += list[i];
      }
      console.log(num);

      var result = 0;
      if (num === "ENFJ") {
        result += 0;
      } else if (num === "ENFP") {
        result += 1;
      } else if (num === "ENTJ") {
        result += 2;
      } else if (num === "ENTP") {
        result += 3;
      } else if (num === "ESFJ") {
        result += 4;
      } else if (num === "ESFP") {
        result += 5;
      } else if (num === "ESTJ") {
        result += 6;
      } else if (num === "ESTP") {
        result += 7;
      } else if (num === "INFJ") {
        result += 8;
      } else if (num === "INFP") {
        result += 9;
      } else if (num === "INTJ") {
        result += 10;
      } else if (num === "INTP") {
        result += 11;
      } else if (num === "ISFJ") {
        result += 12;
      } else if (num === "ISFP") {
        result += 13;
      } else if (num === "ISTJ") {
        result += 14;
      } else if (num === "ISTP") {
        result += 15;
      }
      setLinkTo(linkResult + result);

      setIsLoading(true);
      setTimeout(function () {
        setIsLoading(false);
        setIsProcess(true);
      }, 2000);
    }
  }, [list]);

  const onConditionChange = async (key) => {
    let record = contents[questionNum].answers[key].type;

    if (questionNum === 0 || questionNum === 1 || questionNum === 2) {
      UserDataArr_A.push(record);
      if (questionNum === 2) {
        let obj = {};
        for (let i = 0; i < UserDataArr_A.length; i++) {
          UserDataArr_A[i] in obj
            ? (obj[UserDataArr_A[i]] += 1)
            : (obj[UserDataArr_A[i]] = 1);
        }
        //console.log(obj_A);

        let typeA = Object.keys(obj).reduce(function (a, b) {
          return obj[a] > obj[b] ? a : b;
        });

        setList([...list, typeA]);
        // setList((a) => {
        //   console.log(a);
        //   a.push(typeA);
        // });
        //console.log(typeA);
        //console.log(obj_A[typeA]);
      }
    } else if (questionNum === 3 || questionNum === 4 || questionNum === 5) {
      UserDataArr_B.push(record);
      if (questionNum === 5) {
        let obj = {};
        for (let i = 0; i < UserDataArr_B.length; i++) {
          UserDataArr_B[i] in obj
            ? (obj[UserDataArr_B[i]] += 1)
            : (obj[UserDataArr_B[i]] = 1);
        }

        let typeB = Object.keys(obj).reduce(function (a, b) {
          return obj[a] > obj[b] ? a : b;
        });

        setList([...list, typeB]);
      }
    } else if (questionNum === 6 || questionNum === 7 || questionNum === 8) {
      UserDataArr_C.push(record);
      if (questionNum === 8) {
        let obj = {};
        for (let i = 0; i < UserDataArr_C.length; i++) {
          UserDataArr_C[i] in obj
            ? (obj[UserDataArr_C[i]] += 1)
            : (obj[UserDataArr_C[i]] = 1);
        }
        console.log(obj);

        let typeC = Object.keys(obj).reduce(function (a, b) {
          return obj[a] > obj[b] ? a : b;
        });

        setList([...list, typeC]);
      }
    } else if (questionNum === 9 || questionNum === 10 || questionNum === 11) {
      UserDataArr_D.push(record);
      if (questionNum === 11) {
        let obj = {};
        for (let i = 0; i < UserDataArr_D.length; i++) {
          UserDataArr_D[i] in obj
            ? (obj[UserDataArr_D[i]] += 1)
            : (obj[UserDataArr_D[i]] = 1);
        }
        console.log(obj);

        let typeD = Object.keys(obj).reduce(function (a, b) {
          return obj[a] > obj[b] ? a : b;
        });

        setList([...list, typeD]);
      }
    }
    setQuestionNum(questionNum + 1);
  };

  const onClickResultBtn = () => {
    setIsProcess(false);
    setFinalType(16);
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
            <Text>테스트 완료!</Text>
            <Link to={linkTo} style={{ textDecoration: "none" }}>
              <ButtonComponent
                type={"result"}
                text="결과 확인하기"
                onclick={onClickResultBtn}
              ></ButtonComponent>
            </Link>
          </Container>
        </Wrapper>
      </>
    );
  } else if (finalType === 16) {
    return (
      <div>
        <Link to={linkTo}></Link>
      </div>
    );
  } else if (questionNum < 12) {
    return (
      <>
        <Wrapper isShow={isShow}>
          <ProgressBar completed={questionNum * 9} rotation={turn} />
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
