import React, { useEffect } from "react";
import styled from "styled-components";
import kakao from "../assets/btn/btn_kakao.svg";
import { useScript } from "./hook";

const ShareBtn = styled.button`
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
  margin-right: 1.6rem;
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
`;

const Img = styled.img``;

function KaKao() {
  // kakao SDK import하기
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
  const currentUrl = window.location.href;
  // kakao sdk 초기화하기
  // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init("bd37f4aef7dcf2e91786d6b4f2e120b7");
      }
    }
  }, [status]);

  const onHandleShareKaKao = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentUrl,
    });
  };

  return (
    <ShareBtn value="KaKao" onClick={onHandleShareKaKao} text={currentUrl}>
      <Img src={kakao} />
    </ShareBtn>
  );
}

export default KaKao;
