import styled from "@emotion/styled";
import React from "react";
import { CircleProps } from "../../../type/targetBoardType";

function Circle({ radius }: CircleProps) {
  return <CircleElement size={radius} />;
}

export default Circle;

const CircleElement = styled.div<{ size: number }>`
  width: ${(props) => props.size}%;
  height: ${(props) => props.size}%;
  position: absolute;
  border-radius: 50%;
  border: 3px solid white;
  background-color: rgba(168, 222, 255, 0.4);
  @media (prefers-color-scheme: dark) {
    background-color: rgba(217, 205, 184, 0.4);
  }
`;
