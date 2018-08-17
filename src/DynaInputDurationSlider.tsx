import * as React from "react";
import {DynaClassName, dynaClassName} from "dyna-class-name";

import {EColor} from "dyna-ui-styles";
import {EMin, ESize} from "./interfaces";

import {DynaInputSlider} from "./DynaInputSlider";
import {StatsBar} from "./components/StatsBar";
import {StatsHelper} from "./utils/StatsHelper";

import "./DynaInputDurationSlider.less";

export interface IDynaInputDurationSliderProps {
  className?: string;
  name?: string;
  label?: JSX.Element | string;
  color?: EColor;
  size?: ESize;
  ticksCount?: number;
  values: number[];       // for stats and to get the min/max
  unitSuffix?: string;          // unit suffix, used for ui only
  minType: EMin;
  value: number;
  onChange: (name: string, value: number) => void;
}

export class DynaInputDurationSlider extends React.Component<IDynaInputDurationSliderProps> {
  static defaultProps: IDynaInputDurationSliderProps = {
    className: undefined,
    name: null,
    unitSuffix: 'h',
    label: null,
    color: EColor.WHITE_BLACK,
    size: ESize.PX24,
    ticksCount: 24,
    values: [0, 200],
    minType: EMin.ZERO,
    value: 0,
    onChange: (name: string, value: number) => undefined,
  };

  constructor(props: IDynaInputDurationSliderProps) {
    super(props);
    this.statsHelper.setData(props.values);
  }

  public componentWillReceiveProps(nextProps:IDynaInputDurationSliderProps):void{
    this.statsHelper.setData(nextProps.values);
  }

  private readonly className = dynaClassName("dyna-input-duration-slider");
  private readonly statsHelper: StatsHelper = new StatsHelper();

  private handleChange(name: string, value: number): void {
    const {onChange} = this.props;
    onChange(name, value)
  }

  private getStatTicks(): number[] {
    const {minType, ticksCount} = this.props;
    return this.statsHelper.getFloatGroupTicks(minType, ticksCount);
  }

  private renderTopBackground(): JSX.Element {
    if (!this.statsHelper.hasValues) return null;
    return <StatsBar ticks={this.getStatTicks()}/>;
  }

  private renderBottomBackground(): JSX.Element {
    const {minType, unitSuffix} = this.props;
    const csMinMax: DynaClassName = dynaClassName(this.className("__min-max-container"));
    return (
      <div className={csMinMax("")}>
        <div className={csMinMax("__min")}>{`${this.statsHelper.getMinValue(minType)}${unitSuffix}`}</div>
        <div className={csMinMax("__max")}>{`${this.statsHelper.getMaxValue()}${unitSuffix}`}</div>
      </div>
    );
  }

  private renderLabel(): JSX.Element {
    const {
      label,
      unitSuffix,
      value,
    } = this.props;

    return (
      <div className={this.className("__label")}>
        <div className={this.className("__label__content  /dyna-slider-label")}>{label}</div>
        <div className={this.className("__label__value /dyna-slider-value")}>{`${value}${unitSuffix}`}</div>
      </div>
    );
  }

  public render(): JSX.Element {
    const {
      className: userClassName,
      name, color, size,
      minType, value,
    } = this.props;

    const className: string = `--size-${size}`;

    return (
      <div className={this.className.root(this.props, className)}>
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
