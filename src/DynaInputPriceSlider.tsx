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
  color?: EColor;
  size?: ESize;
  label?: JSX.Element;
  prices: number[];
  step?: number;    // integer, >= 1
  statTicksCount?: number;
  minType: EMin;
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
    const {minType, prices} = this.props;
    return Math.floor(this.statsHelper.getMinValue(minType))
  }

  private get maxPrice(): number {
    const {step, prices} = this.props;
    return Math.ceil(this.statsHelper.getMaxValue() + step);
  }

  private handleChange(name: string, value: number): void {
    const {onChange} = this.props;
    onChange(name, value)
  }

  private renderTopBackground(): JSX.Element {
    const {statTicksCount} = this.props;
    return <StatsBar ticks={this.statsHelper.getFloatGroupTicks(statTicksCount)}/>;
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
        <div className={this.className("__label__content")}>{label}</div>
        <div className={this.className("__label__value")}>{formatPrice(round(value, precision))}</div>
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

    const className: string = this.className(
      "",
      userClassName && "/" + userClassName,
      `--size-${size}`,
    );

    return (
      <div className={className}>
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
          value={round(value, -1)}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}
