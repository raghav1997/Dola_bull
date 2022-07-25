import React, { useState } from "react";

import { Button } from "../ButtonElements";

import {
  HeroContainter,
  HeroContent,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainter id="home">
      <HeroContent></HeroContent>
      <HeroBtnWrapper>
        <Button
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          activeClass="active"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://www.inverse.finance/swap/USDC/DOLA";
          }}
        >
          Buy Now{hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroBtnWrapper>
    </HeroContainter>
  );
};

export default HeroSection;
