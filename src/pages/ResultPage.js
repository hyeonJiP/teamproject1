import React from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Parser from "html-react-parser";

import results from "./contents/results";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.backgroundColor};

  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 8.6rem;
  margin-bottom: 3rem;
`;

const ResultSub = styled.div`
  font-family: "Spoqa-Han-Sans";
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  //color: white;
`;

const ResultTitle = styled.div`
  font-family: "Jalnan";
  font-size: 4.5rem;
  text-align: center;
  //color: white;
  margin-top: 1.9rem;
  margin-bottom: 15.4rem;
`;

const ResultImg = styled.img`
  display: flex;
  width: 15rem;
`;

const Content = styled.div`
  display: flex;
  font-family: "Spoqa-Han-Sans";
  font-size: 1.2rem;
  color: black;
`;

const ResultSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 33.1rem;
  height: ${(props) => (props.isNormal < 16 ? "50rem" : "22.9rem")};
  background-color: white;
  border-radius: 0.5rem;

  ${ResultImg} {
    justify-content: center;
    border: 1px solid black;
    bottom: ${(props) => (props.isNormal < 16 ? "32rem" : "14rem")};
  }

  ${Content} {
    width: 85%;
    left: 50%;
    word-break: keep-all;

    ${(props) =>
      props.isNormal < 16
        ? `transform: translateX(-50%);
        bottom : 2rem;`
        : `top: 50%;
        transform: translate(-50%, -50%);`};
  }
`;

function ResultPage() {
  const { finalType } = useParams();
  console.log(finalType);

  return (
    <Wrapper backgroundColor={results[finalType].color}>
      <Container>
        <ResultSub>{Parser(results[finalType].title)}</ResultSub>
        <ResultTitle>{results[finalType].name}</ResultTitle>
        <ResultSquare isNormal={finalType}>
          <ResultImg isNormal={finalType} src={results[finalType].img} />
          <Content>{Parser(results[finalType].description)}</Content>
        </ResultSquare>
      </Container>
    </Wrapper>
  );
}

export default ResultPage;
