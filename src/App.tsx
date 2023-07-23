import React, { CSSProperties, Ref, ReactNode, useMemo } from "react";
import "./styles.css";
import LineUpLite, {
  asTextColumn,
  asCategoricalColumn,
  asNumberBoxPlotColumn,
  asCategoricalSetColumn,
  LineUpLiteColumn,
  featureDefault,
  featureResizeColumns,
  actionIconsRemixicon,
  featureFlexLayout,
  LineUpLiteStateContextProvider,
  LineUpLitePanel,
  LineUpLiteComponentLike,
  asNumberColumn
} from "@lineup-lite/table";
/* import {
  defaultDarkColorScale,
  defaultColorScale
} from "@lineup-lite/components"; */
import "@lineup-lite/table/dist/table.css";
import FlipMove from "react-flip-move";
import { data, Row } from "./data";

const BodyWrapper: LineUpLiteComponentLike = ({
  children,
  style,
  ref,
  ...rest
}: {
  children?: ReactNode;
  style?: CSSProperties;
  ref?: string | Ref<HTMLElement>;
}) => {
  return (
    <FlipMove
      enterAnimation="fade"
      leaveAnimation="fade"
      {...rest}
      ref={ref as any}
      style={style as any}
    >
      {children}
    </FlipMove>
  );
};

function Table({ isDarkTheme }: { isDarkTheme: boolean }) {
  const columns: LineUpLiteColumn<Row>[] = useMemo(() => [
    asTextColumn<Row>("packageName"),
    asCategoricalSetColumn<Row>("dependentModels", {
      categories: ["wm", "medics", "selimsef", "eighteen", "boken", "ntech"]
    }),
    asNumberBoxPlotColumn<Row>("snykHealthScore", {}),
    asCategoricalColumn<Row>("packageMaintenance", {
      categories: ["Unfunded", "Funded"]
    }),
    asNumberColumn<Row>("totalContributors", {}),
    asCategoricalColumn<Row>("Reliability", {
      categories: ["High", "Medium", "Low"]
    }),
    asNumberColumn<Row>("correlationStrength", {}),
    asNumberColumn<Row>("totalGithubForks", {})
  ], []);


  const features = useMemo(
    () => [featureResizeColumns, featureDefault<Row>(), featureFlexLayout],
    []
  );
  const icons = useMemo(() => actionIconsRemixicon(), []);

  const components = useMemo(
    () => ({
      tbody: BodyWrapper
    }),
    []
  );

  const state = useMemo(
    () =>
      ({
        sortBy: [
          {
            id: "dependentModels",
            desc: true
          }
        ]
      } as any),
    []
  );

  return (
    <LineUpLiteStateContextProvider>
      <div className="root">
        <div className="lineup">
          <LineUpLite<Row>
            data={data}
            columns={columns}
            features={features}
            icons={icons}
            components={components}
            initialState={state}
          />
        </div>
        <LineUpLitePanel className="side-panel" icons={icons} />
      </div>
    </LineUpLiteStateContextProvider>
  );
}

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Table isDarkTheme={true} />
    </div>
  );
}