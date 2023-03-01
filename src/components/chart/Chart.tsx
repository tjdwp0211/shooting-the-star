import React from "react";
import styled from "@emotion/styled";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { lightBlack } from "../../style/palette/palette";
import { ChartProps } from "../../type/components/chartType";
import { useSelector } from "react-redux";
import { Store } from "../../redux/root";

function Chart(props: ChartProps) {
  const { size, labelsForLineX, chartDatas } = props;
  const { deviceWidth } = useSelector((state: Store) => state.deviceSize);
  const fontSize = () => {
    if (deviceWidth < 768) return 8;
    if (deviceWidth < 1024) return 10;
    else return 12;
  };

  const chartOptionsProps = {
    responsive: true,
    color: lightBlack,
    borderWidth: 4,
    plugins: {
      legend: {
        position: "top" as "top",
        usePointStyle: true,
        labels: { font: { size: fontSize() } },
      },
    },
    scales: {
      x: { ticks: { font: { size: fontSize() } } },
      y: { ticks: { font: { size: fontSize() } } },
    },
    interaction: { mode: "index" as "index", intersect: false },
    y: {
      type: "linear",
      afterDataLimits(scale: LinearScale) {
        scale.max = scale.max * 1.1;
      },
    },
  };

  const chartDataProps: ChartData<"bar", number[], string> = {
    labels: labelsForLineX,
    datasets: chartDatas,
  };

  return (
    <Wrapper>
      <Bar
        options={chartOptionsProps}
        data={chartDataProps}
        width={size[0]}
        height={size[1]}
      />
    </Wrapper>
  );
}

export default Chart;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
