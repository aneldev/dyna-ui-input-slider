import * as React from "react";
import {DynaClassName, dynaClassName} from "dyna-class-name";

import {EColor} from "dyna-ui-styles";
import {EMin, ESize} from "./interfaces";

import {DynaInputSlider} from "./DynaInputSlider";
import {StatsBar} from "./components/StatsBar";
import {getMinValue, getHourTicks} from "./utils";

import "./DynaInputDurationSlider.less";

export interface IDynaInputDurationSliderProps {
  className?: string
  name?: string;
  color?: EColor;
  size?: ESize;
  suffix?: string;
  label?: JSX.Element;
  hours?: number[];
  minType: EMin;
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
    minType: EMin.ZERO,
    max: 32,
    value: 0,
    onChange: (name: string, value: number) => undefined,
  };

  private readonly className = dynaClassName("dyna-input-duration-slider");

  private handleChange(name: string, value: number): void {
    const {onChange} = this.props;
    onChange(name, value)
  }

  private getStatTicks(): number[] {
    const {hours, minType, max} = this.props;
    return getHourTicks(hours, minType, max);
  }

  private renderTopBackground(): JSX.Element {
    return <StatsBar ticks={this.getStatTicks()}/>;
  }

  private renderBottomBackground(): JSX.Element {
    const {minType, max, suffix, hours} = this.props;
    const csMinMax: DynaClassName = dynaClassName(this.className("__min-max-container"));
    return (
      <div className={csMinMax("")}>
        <div className={csMinMax("__min")}>{`${getMinValue(minType, hours)}${suffix}`}</div>
        <div className={csMinMax("__max")}>{`${max}${suffix}`}</div>
      </div>
    );
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
      minType, max, hours, value,
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
          min={getMinValue(minType, hours)}
          max={max}
          topBackground={this.renderTopBackground()}
          bottomBackground={this.renderBottomBackground()}
          value={value}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}
