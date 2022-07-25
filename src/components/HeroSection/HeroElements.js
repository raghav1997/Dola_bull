import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import svg from "../../images/4.gif";
import svg1 from "../../images/5.gif";

export const HeroContainter = styled.div`
  display: flexbox;
  justify-content: center;
  align-items: center;

  height: 1080px;
  background-position-x: center;

  background-position-y: 50px;
  z-index: 1;
  background-image: url(${svg});
  /* background-color: #242227; */

  padding-left: 20px;

  @media screen and (max-width: 740px) {
    background-image: url(${svg1});
    background-repeat: no-repeat;
    height: 600px;
    .view{
      width:400px;
    }
  }
  @media screen and (max-width: 540px) {
    background-image: url(${svg1});
    background-repeat: no-repeat;
    height: 200;
    .view{
      width:400px;
    }
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 100px;
  text-align: center;
  position: absolute;

  @media screen and (max-width: 786px) {
    font-size: 50px;
  }
  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`;

export const HeroP = styled.p`
  margin-top: 10px;
  color: #fff;
  font-size: 60px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 786px) {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 800px;
  display: relative;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 786px) {
    margin-top: 400px;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
