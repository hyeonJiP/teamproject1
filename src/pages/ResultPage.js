import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Parser from "html-react-parser";
import CopyToClipboard from "react-copy-to-clipboard";

import results from "./contents/results";
import KakaoShareBtn from "../components/Kakao";
import LinkCopyBtn from "../assets/btn/btn_link.svg";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 7rem;
  margin-bottom: 3rem;
`;

const ResultSub = styled.div`
  font-family: "Spoqa-Han-Sans";
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  color: white;
`;

const ResultTitle = styled.div`
  font-family: "Jalnan";
  font-size: 4rem;
  text-align: center;
  color: white;
  margin-top: 1.9rem;
  margin-bottom: 15.4rem;
`;

const ResultImg = styled.img`
  position: absolute;
  width: 12rem;
`;

const Content = styled.div`
  position: absolute;
  font-family: "Spoqa-Han-Sans";
  font-size: 1.4rem;
  line-height: 2.3rem;
  color: black;
  margin-bottom: 0.5rem;
`;

const TopContent = styled.div`
  font-family: "Spoqa-Han-Sans";
  font-size: 2rem;
  text-align: center;
  color: black;
  padding-top: 50%;
`;

const ResultSquare = styled.div`
  position: relative;
  display: flex;
  margin: 2.2rem;
  justify-content: center;
  width: 40rem;
  height: ${(props) => (props.isNormal < 16 ? "50rem" : "22.9rem")};
  background-color: white;
  border-radius: 0.5rem;

  ${ResultImg} {
    justify-content: center;
    bottom: ${(props) => (props.isNormal < 16 ? "32rem" : "14rem")};
  }
  ${TopContent} {
    line-height: 20px;
    span {
      font-size: 0.6em;
    }
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

const Title = styled.div`
  font-family: "Jalnan";
  font-size: 1.6rem;
  text-align: center;
  color: white;
  margin-top: 4.1rem;
`;

const FlexLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 2.2rem;
  margin-right: 2.2rem;
`;

const MatchElement = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const EmptyPlace = styled.div`
  width: 2rem;
`;

const SubTitle = styled.div`
  font-family: "Jalnan";
  font-size: 1.4rem;
  text-align: center;
  color: white;
  margin-top: 3.4rem;
  margin-bottom: 1.3rem;
`;

const SmallSub = styled.div`
  text-align: center;
  font-family: "Spoqa-Han-Sans";
  font-weight: 400;
  font-size: 1.1rem;
  color: black;
`;

const SmallTitle = styled.div`
  text-align: center;
  font-family: "Jalnan";
  font-weight: 400;
  font-size: 1.8rem;
  color: black;
`;

const MatchImg = styled.img`
  width: 15.8rem;
`;

const MatchSqaure = styled.div`
  position: relative;
  width: 100%;
  height: 22.9rem;
  background-color: white;
  border-radius: 0.5rem;
  text-align: center;

  ${SmallSub} {
    margin-top: 1.4rem;
  }

  ${SmallTitle} {
    margin-top: 1.3rem;
  }

  ${MatchImg} {
    margin-top: 0.6rem;
  }
`;

const ShareSquare = styled.div`
  width: 100%;
  height: 10rem;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 0.5rem;
  margin-top: 1.7rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: white;
  cursor: pointer;
`;

const DeveloperPageLink = styled.div`
  color: "#1F1F1F";
  text-align: center;
  font-family: "Spoqa-Han-Sans";
  font-weight: 400;
  font-size: 1.2rem;
  margin-top: 6.3rem;
`;

const BtnToPage = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.dark};
`;

const Img = styled.img``;

function ResultPage() {
  const { finalType } = useParams();
  console.log(finalType);

  window.scrollTo(0, 0);

  const link = window.location.href;
  const alertMessage = () => {
    alert("내 테스트 결과가 복사되었어요!");
  };

  return (
    <Wrapper backgroundColor={results[finalType].color}>
      <Container>
        <ResultSub>{results[finalType].topTitle}</ResultSub>
        <ResultTitle>{Parser(results[finalType].title)}</ResultTitle>
        <ResultSquare isNormal={finalType}>
          <ResultImg isNormal={finalType} src={results[finalType].img} />
          <TopContent>{Parser(results[finalType].bottomTitle)}</TopContent>
          <Content>{Parser(results[finalType].description)}</Content>
        </ResultSquare>

        <Title>👍 친구에게 결과 공유하기</Title>
        <FlexLayout>
          <ShareSquare>
            <FlexLayout>
              <KakaoShareBtn
                _sub={results[finalType].title}
                _title={results[finalType].name}
                _imageUrl={results[finalType].img}
                _finalType={finalType}
              />
              <CopyToClipboard text={link}>
                <Button onClick={alertMessage}>
                  <Img src={LinkCopyBtn} />
                </Button>
              </CopyToClipboard>
            </FlexLayout>
          </ShareSquare>
        </FlexLayout>
      </Container>
    </Wrapper>
  );
}

export default ResultPage;
