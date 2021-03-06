import * as React from "react";
import {DynaClassName, dynaClassName} from "dyna-class-name";
import {EColor} from "dyna-ui-styles";
import {round} from "dyna-loops";

import {EMin, ESize} from "./interfaces";

import {DynaInputSlider} from "./DynaInputSlider";
import {StatsBar} from "./components/StatsBar";
import {StatsHelper} from "./utils/StatsHelper";

import "./DynaInputPriceSlider.less";

export interface IDynaInputPriceSliderProps {
  className?: string
  name?: string;
  label?: JSX.Element | string;
  color?: EColor;
  size?: ESize;
  step?: number;      // integer, >= 1
  statTicksCount?: number;
  minType: EMin;
  prices: number[];   // for stats and to get the min/max
  value: number;
  formatPrice?: (value: number) => string;
  onChange: (name: string, value: number) => void;
}

export class DynaInputPriceSlider extends React.Component<IDynaInputPriceSliderProps> {
  static defaultProps: IDynaInputPriceSliderProps = {
    className: undefined,
    name: null,
    label: null,
    color: EColor.WHITE_BLACK,
    size: ESize.PX24,
    prices: [0, 2000],
    step: 1,
    statTicksCount: 24,
    minType: EMin.ZERO,
    value: 0,
    formatPrice: (value: number) => `$${value}`,
    onChange: (name: string, value: number) => undefined,
  };

  constructor(props: IDynaInputPriceSliderProps) {
    super(props);
    this.statsHelper.setData(props.prices);
  }

  private readonly className = dynaClassName("dyna-input-price-slider");
  private readonly statsHelper: StatsHelper = new StatsHelper();

  public componentWillReceiveProps(nextProps:IDynaInputPriceSliderProps):void{
    this.statsHelper.setData(nextProps.prices);
  }

  private get minPrice(): number {
    const {minType} = this.props;
    return Math.round(this.statsHelper.getMinValue(minType))
  }

  private get maxPrice(): number {
    return Math.ceil(this.statsHelper.getMaxValue());
  }

  private handleChange(name: string, value: number): void {
    const {onChange} = this.props;
    onChange(name, value)
  }

  private renderTopBackground(): JSX.Element {
    const {prices, statTicksCount} = this.props;
    if (prices.length < 3) return null;
    return <StatsBar ticks={this.statsHelper.getFloatGroupTicks(EMin.ZERO, statTicksCount)}/>;
  }

  private renderBottomBackground(): JSX.Element {
    const {formatPrice} = this.props;
    const csMinMax: DynaClassName = dynaClassName(this.className("__min-max-container"));
    return (
      <div className={csMinMax("")}>
        <div className={csMinMax("__min")}>{formatPrice(this.minPrice)}</div>
        <div className={csMinMax("__max")}>{formatPrice(this.maxPrice)}</div>
      </div>
    );
  }

  private renderLabel(): JSX.Element {
    const {
      label,
      formatPrice,
      step,
      value,
    } = this.props;
    const precision: number = -(step.toString().length - 1) || 0;

    return (
      <div className={this.className("__label")}>
        <div className={this.className("__label__content /dyna-slider-label")}>{label}</div>
        <div className={this.className("__label__value /dyna-slider-value")}>{formatPrice(round(value, precision))}</div>
      </div>
    );
  }

  public render(): JSX.Element {
    const {
      className: userClassName,
      name,
      color, size,
      step,
      value,
    } = this.props;

    const className: string = `--size-${size}`;

    return (
      <div className={this.className.root(this.props, className)}>
        {this.renderLabel()}
        <DynaInputSlider
          name={name}
          color={color}
          size={size}
          step={step}
          min={this.minPrice}
          max={this.maxPrice}
          topBackground={this.renderTopBackground()}
          bottomBackground={this.renderBottomBackground()}
          value={round(value, 0)}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}
