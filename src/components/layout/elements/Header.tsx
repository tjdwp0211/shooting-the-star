import React from "react";
import styled from "@emotion/styled";
import { boldFont } from "../../../style/fonts/inedx";
import { black, white, gray } from "../../../style/palette/palette";
import Link from "next/link";
import Text from "../../text/Text";

function Header() {
  return (
    <HeaderContainer>
      <Link href={"/"}>
        <TextButton className="text-button">
          <Text size={20} weight={boldFont}>
            What About Your Click
          </Text>
        </TextButton>
      </Link>
      <Link href={"/board"}>
        <TextButton className="text-button">
          <Text size={20} weight={boldFont}>
            DASHBOARD
          </Text>
        </TextButton>
      </Link>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  width: 100vw;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5vw;
  color: ${black};
  box-shadow: 0px 0px 12px 0px ${gray};
  &,
  * {
    background-color: ${white};
  }
`;

const TextButton = styled.button`
  padding: 4px 6px;
`;
