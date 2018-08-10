import * as React from "react";
import {dynaClassName} from "dyna-class-name";

import {EColor} from "dyna-ui-styles";
import {ESize} from "./interfaces";

import {DynaInputSlider} from "./DynaInputSlider";
import {StatsBar} from "./components/StatsBar";

import "./DynaInputDurationSlider.less";

export interface IDynaInputDurationSliderProps {
  className?: string
  name?: string;
  color?: EColor;
  size?: ESize;
  suffix?: string;
  label?: JSX.Element;
  stats?: number[];
  min: number;
  max: number;
  value: number;
  onChange: (name: string, value: number) => void;
}

export class DynaInputDurationSlider extends React.Component<IDynaInputDurationSliderProps> {
  static defaultProps: IDynaInputDurationSliderProps = {
    className: "",
    name: null,
    suffix: 'h',
    label: null,
    color: EColor.WHITE_BLACK,
    size: ESize.PX24,
    stats: [],
    min: 0,
    max: 32,
    value: 0,
    onChange: (name: string, value: number) => undefined,
  };

  private readonly className = dynaClassName("dyna-input-duration-slider");

  private handleChange(name: string, value: number): void {
    const {onChange} = this.props;
    onChange(name, value)
  }

  private renderTopBackground(): JSX.Element {
    const {stats, min, max} = this.props;
    const statsData: number[] = stats.filter((hour: number) => hour >= min && hour <= max);
    return <StatsBar stats={statsData}/>;
  }

  private renderLabel(): JSX.Element {
    const {
      label,
      suffix,
      value,
    } = this.props;

    return (
      <div className={this.className("__label")}>
        <div className={this.className("__label__content")}>{label}</div>
        <div className={this.className("__label__value")}>{`${value}${suffix}`}</div>
      </div>
    );
  }

  public render(): JSX.Element {
    const {
      className: userClassName,
      name, color, size,
      min, max, value,
    } = this.props;

    const className: string = this.className(
      "",
      userClassName && "/" + userClassName,
    );

    return (
      <div className={className}>
        {this.renderLabel()}
        <DynaInputSlider
          name={name}
          color={color}
          size={size}
          min={min}
          max={max}
          topBackground={this.renderTopBackground()}
          value={value}
          onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
