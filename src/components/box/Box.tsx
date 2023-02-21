import React from "react";
import styled from "@emotion/styled";
import { black } from "../../style/palette/palette";

interface BoxProps {
  children: React.ReactNode;
  bgColor: string;
}

function Box({ children, bgColor }: BoxProps) {
  return <BoxContainer bgColor={bgColor}>{children}</BoxContainer>;
}

export default Box;

const BoxContainer = styled.div<{ bgColor: string }>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.bgColor};
  color: ${black};
  display: flex;
  @media (width < 642px) {
    flex-direction: column;
  }
`;
