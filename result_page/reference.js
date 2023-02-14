// import { darkModeVar } from "apollo";
// import styled from "styled-components";
// import {
//   faFacebookSquare,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  boder: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
`;

const TopBox = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 40px 25px 40px;
  margin-bottom: 10px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 35px;
    width: 100%;
    justify-items: center;
    align-items: center;
  }
`;

const BottomBox = styled(WhiteBox)`
  padding: 20px 0px;
  text-align: center;

  a {
    font-weight: 600;
    margin-left: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid rgb(219, 219, 219);
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
`;

const Button = styled.div`
  width: 100%;
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  background-color: #0095f6;
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
`;

const Separator = styled.div`
  width: 100%;
  margin: 20px 0px 30px 0px;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }

  span {
    margin: 0px 10px;
    font-weight: 600;
    font-size: 12px;
    color: #8e8e8e;
  }
`;

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

// function Login() {
//   return (
//     <Container>
//       <Wrapper>
//         <TopBox>
//           <div>
//             <FontAwesomeIcon icon={faInstagram} size="3x" />
//           </div>

//           <form>
//             <Input type="email" placeholder="이메일" />
//             <Input type="password " placeholder="비밀번호" />
//             <Button type="submit" value="Log In">
//               로그인
//             </Button>
//           </form>

//           <Separator>
//             <div></div>
//             <span>OR</span>
//             <div></div>
//           </Separator>

//           <FacebookLogin>
//             <FontAwesomeIcon icon={faFacebookSquare} />
//             <span>Facebook으로 로그인</span>
//           </FacebookLogin>
//         </TopBox>

//         <BottomBox>
//           <span>계정이 없으신가요?</span>
//           <Link to="/signup">가입하기</Link>
//         </BottomBox>
//       </Wrapper>
//     </Container>
//   );
// }

// export default Login;
