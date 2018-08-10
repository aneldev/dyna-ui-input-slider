import * as React from "react";
import {DynaClassName, dynaClassName} from "dyna-class-name";
import {round} from "dyna-loops";

import "./StatsBar.less";

export interface IStatsBarProps {
  className?: string;
  stats: number[];
}

export class StatsBar extends React.Component<IStatsBarProps> {
  static defaultProps: IStatsBarProps = {
    className: "",
    stats: [],
  };

  private readonly className: DynaClassName = dynaClassName('dyna-slider-stats-bar');

  private get stats(): number[] {
    const {stats} = this.props;
    let max: number = 0;
    let output: number[] = stats
      .reduce((acc: number[], value: number) => {
        if (acc[value] === undefined) acc[value] = 0;
        acc[value]++;
        if (max < acc[value]) max = acc[value];
        return acc;
      }, []);
    for (let i = 0; i < output.length; i++) if (!output[i]) output[i] = 0;
    output = output.map((v:number)=>{
      return 100 * v / max ;
    });
    return output;
  }

  public render(): JSX.Element {
    const {
      className: userClassName,
    } = this.props;

    const className: string = this.className("", userClassName && "/" + userClassName);
    console.debug('render stats', this.stats);

    return (
      <div className={className}>
        {this.stats.map((value: number, index: number) => (
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
