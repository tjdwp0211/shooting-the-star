import React from "react";
import styled from "@emotion/styled";
import Layout from "../../default/Layout";
import { black } from "../../../style/palette/palette";
import { Text } from "../../../components";
import { boldFont } from "../../../style/fonts/inedx";
import { AllTriesCharts, GridWrapper, Filter } from "./elements";
import { ChartDatas } from "../../../type/components/chartType";

interface PresenterProps {
  allTriesChartsProps: {
    playerNames: string[];
    dataForChart: ChartDatas[];
  };
}

function Presenter({ allTriesChartsProps }: PresenterProps) {
  return (
    <Layout indexPage={false}>
      <TitleWrapper>
        <Text size={36} weight={boldFont}>
          Dashboard
        </Text>
      </TitleWrapper>
      <GridWrapper>
        <Filter />
        <AllTriesCharts {...allTriesChartsProps} />
      </GridWrapper>
    </Layout>
  );
}

export default Presenter;

const TitleWrapper = styled.div`
  width: 100%;
  height: 76px;
  p {
    text-align: center;
    padding: 12px 0px;
    color: ${black};
  }
`;
