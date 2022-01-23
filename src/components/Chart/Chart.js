import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const Chart = (props) => {
  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={20} >
      <VictoryAxis
        fixLabelOverlap
        style={{ tickLabels: { padding: 16, fontSize: 8 } }}
      />
      <VictoryAxis dependentAxis />
      <VictoryBar data={props.data} x="name" y="rating" />
    </VictoryChart>
  );
};

export default Chart;