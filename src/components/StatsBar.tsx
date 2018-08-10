import * as React from "react";
import {DynaClassName, dynaClassName} from "dyna-class-name";
import {round} from "dyna-loops";

import "./StatsBar.less";

export interface IStatsBarProps {
  className?: string;
  ticks: number[];
}

export class StatsBar extends React.Component<IStatsBarProps> {
  static defaultProps: IStatsBarProps = {
    className: "",
    ticks: [],
  };

  private readonly className: DynaClassName = dynaClassName('dyna-slider-stats-bar');

  private get percentageTicks(): number[] {
    const {ticks} = this.props;
    let output: number [] = ticks.concat();
    let max: number = output.reduce((acc: number, value: number) => {
      if (acc === null || acc < value) acc = value;
      return acc;
    }, null);

    for (let i = 0; i < output.length; i++) if (!output[i]) output[i] = 0;
    output = output.map((v: number) => 100 * v / max);

    return output;
  }

  public render(): JSX.Element {
    const {
      className: userClassName,
    } = this.props;

    const className: string = this.className("", userClassName && "/" + userClassName);

    return (
      <div className={className}>
        {this.percentageTicks.map((value: number, index: number) => (
          <div
            key={index}
            className={this.className("__item")}
            style={{minHeight: round(value, 1).toString() + "%"}}
          />
        ))}
      </div>
    );
  }
}
