import * as React from "react";
import {dynaClassName} from "dyna-class-name";
import {EColor} from "dyna-ui-styles";
import {round} from "dyna-loops";

import {EMin, ESize} from "./interfaces";

import {DynaInputSlider} from "./DynaInputSlider";
import {StatsBar} from "./components/StatsBar";

import {getMaxValue, getMinValue, getTicks} from "./utils";

import "./DynaInputPriceSlider.less";

export interface IDynaInputPriceSliderProps {
  className?: string
  name?: string;
  color?: EColor;
  size?: ESize;
  label?: JSX.Element;
  prices: number[];
  step?: number;
  statTicksCount?: number;
  min: EMin;
  value: number;
  formatPrice?: (value: number) => string;
  onChange: (name: string, value: number) => void;
}

export class DynaInputPriceSlider extends React.Component<IDynaInputPriceSliderProps> {
  static defaultProps: IDynaInputPriceSliderProps = {
    className: "",
    name: null,
    label: null,
    color: EColor.WHITE_BLACK,
    size: ESize.PX24,
    prices: [],
    step: 10,
    statTicksCount: 24,
    min: EMin.ZERO,
    value: 0,
    formatPrice: (value: number) => `$${value}`,
    onChange: (name: string, value: number) => undefined,
  };

  private readonly className = dynaClassName("dyna-input-price-slider");

  private handleChange(name: string, value: number): void {
    const {onChange} = this.props;
    onChange(name, value)
  }

  private renderTopBackground(): JSX.Element {
    const {prices, statTicksCount} = this.props;
    return <StatsBar ticks={getTicks(prices, statTicksCount)}/>;
  }

  private renderLabel(): JSX.Element {
    const {
      label,
      formatPrice,
      value,
    } = this.props;

    return (
      <div className={this.className("__label")}>
        <div className={this.className("__label__content")}>{label}</div>
        <div className={this.className("__label__value")}>{formatPrice(round(value, -1))}</div>
      </div>
    );
  }

  public render(): JSX.Element {
    const {
      className: userClassName,
      name, color, size,
      step,
      min, value, prices,
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
          step={step}
          min={Math.floor(getMinValue(min, prices))}
          max={Math.ceil(getMaxValue(prices) + step)}
          topBackground={this.renderTopBackground()}
          value={round(value, -1)}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}
