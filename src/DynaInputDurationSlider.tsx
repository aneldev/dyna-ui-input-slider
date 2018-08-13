import * as React from "react";
import {DynaClassName, dynaClassName} from "dyna-class-name";

import {EColor} from "dyna-ui-styles";
import {EMin, ESize} from "./interfaces";

import {DynaInputSlider} from "./DynaInputSlider";
import {StatsBar} from "./components/StatsBar";
import {StatsHelper} from "./utils/StatsHelper";

import "./DynaInputDurationSlider.less";

export interface IDynaInputDurationSliderProps {
  className?: string
  name?: string;
  color?: EColor;
  size?: ESize;
  suffix?: string;
  label?: JSX.Element | string;
  hours?: number[];
  minType: EMin;
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
    value: 0,
    onChange: (name: string, value: number) => undefined,
  };

  constructor(props: IDynaInputDurationSliderProps) {
    super(props);
    this.statsHelper.setData(props.hours);
  }

  public componentWillReceiveProps(nextProps:IDynaInputDurationSliderProps):void{
    this.statsHelper.setData(nextProps.hours);
  }

  private readonly className = dynaClassName("dyna-input-duration-slider");
  private readonly statsHelper: StatsHelper = new StatsHelper();

  private handleChange(name: string, value: number): void {
    const {onChange} = this.props;
    onChange(name, value)
  }

  private getStatTicks(): number[] {
    const {minType} = this.props;
    return this.statsHelper.getIntegerTicks(minType);
  }

  private renderTopBackground(): JSX.Element {
    return <StatsBar ticks={this.getStatTicks()}/>;
  }

  private renderBottomBackground(): JSX.Element {
    const {minType, suffix, hours} = this.props;
    const csMinMax: DynaClassName = dynaClassName(this.className("__min-max-container"));
    return (
      <div className={csMinMax("")}>
        <div className={csMinMax("__min")}>{`${this.statsHelper.getMinValue(minType)}${suffix}`}</div>
        <div className={csMinMax("__max")}>{`${this.statsHelper.getMaxValue()}${suffix}`}</div>
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
      minType, value,
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
          min={this.statsHelper.getMinValue(minType)}
          max={this.statsHelper.getMaxValue()}
          topBackground={this.renderTopBackground()}
          bottomBackground={this.renderBottomBackground()}
          value={value}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}
