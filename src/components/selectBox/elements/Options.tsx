import React from "react";
import styled from "@emotion/styled";
import Text from "../../text/Text";
import { regularFont } from "../../../style/fonts/inedx";
import { gray } from "../../../style/palette/palette";
import { OptionsProps } from "../../../type/components/selectBoxTypes";

function Options({ view, options, mainColor }: OptionsProps) {
  const createOptionElements = () => {
    return options.map((option, i) => (
      <Text size={20} weight={regularFont} key={i}>
        {option}
      </Text>
    ));
  };

  return (
    <OptionsWrapper view={view} mainColor={mainColor}>
      {createOptionElements()}
    </OptionsWrapper>
  );
}

export default Options;

const OptionsWrapper = styled.div<{ view: boolean; mainColor: string }>`
  width: 90%;
  height: ${props => (props.view ? 180 : 0)}%;
  border-radius: 12px 0 12px 12px;
  background-color: ${props => props.mainColor};
  color: ${props => (props.view ? "white" : props.mainColor)};
  box-shadow: 0px 0px 4px 0px ${props => props.view && gray};
  transition-property: height, color;
  transition-duration: 0.5s, 0.3s;
  overflow: hidden;
  z-index: 2;
  cursor: pointer;
  p {
    width: 100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    height: ${props => (props.view ? 100 : 0)}%;
    border-radius: 0 0 0 12px;
  }
`;
