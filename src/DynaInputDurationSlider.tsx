import * as React from "react";
import {dynaClassName} from "dyna-class-name";

import {EColor} from "dyna-ui-styles";
import {EMin, ESize} from "./interfaces";

import {DynaInputSlider} from "./DynaInputSlider";
import {StatsBar} from "./components/StatsBar";
import {getMinValue} from "./utils";

import "./DynaInputDurationSlider.less";

export interface IDynaInputDurationSliderProps {
  className?: string
  name?: string;
  color?: EColor;
  size?: ESize;
  suffix?: string;
  label?: JSX.Element;
  hours?: number[];
  min: EMin;
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
    hours: [],
    min: EMin.ZERO,
    max: 32,
    value: 0,
    onChange: (name: string, value: number) => undefined,
  };

  private readonly className = dynaClassName("dyna-input-duration-slider");

  private handleChange(name: string, value: number): void {
    const {onChange} = this.props;
    onChange(name, value)
  }

  private getStatTicks():number[]{
    const {hours, min, max} = this.props;
    const minValue: number = getMinValue(min, hours);
    const ticks: number[] =
      hours
        .filter((hour: number) => hour >= minValue && hour <= max)
        .reduce((acc: number[], hour: number) => {
          if (!acc[hour]) acc[hour] = 0;
          acc[hour]++;
          return acc;
        }, [])
    ;
    for (let i: number = minValue; i <= max; i++) {
      if (!ticks[i]) ticks[i] = 0;
    }
    return ticks;
  }

  private renderTopBackground(): JSX.Element {
    return <StatsBar ticks={this.getStatTicks()}/>;
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
      min, max, hours, value,
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
          min={getMinValue(min, hours)}
          max={max}
          topBackground={this.renderTopBackground()}
          value={value}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}
