import React, { useEffect } from "react";
import styled from "styled-components";
import kakao from "../assets/btn/btn_kakao.svg";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

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

function KaKao({ _title, _sub, _imageUrl, _finalType }) {
  const currentUrl = window.location.href;

  const onHandleShareKaKao = () => {};

  return (
    <ShareBtn value="KaKao" onClick={onHandleShareKaKao}>
      <Img src={kakao} />
    </ShareBtn>
  );
}

export default KaKao;
