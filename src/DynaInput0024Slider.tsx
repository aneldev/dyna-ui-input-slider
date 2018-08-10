import * as React from "react";
import {dynaClassName, DynaClassName} from "dyna-class-name"
import {EColor} from "dyna-ui-styles";

import {DynaInputRangeSlider} from "./DynaInputRangeSlider";
import {ESize, IHourRange} from "./interfaces";

import {StatsBar} from "./components/StatsBar";
import {Daylight} from "./components/Daylight";

import "./DynaInput0024Slider.less";

export interface IDynaInput0024SliderProps {
  className?: string;
  name?: string;
  color?: EColor;
  size?: ESize;
  label?: JSX.Element;
  value: IHourRange;        // hour: 00-24
  statsHours?: number [];   // for stats, numbers 0-24
  onChange?: (name: string, value: IHourRange) => void;
}

export class DynaInput0024Slider extends React.Component<IDynaInput0024SliderProps> {
  static defaultProps: IDynaInput0024SliderProps = {
    className: "",
    name: null,
    label: null,
    color: EColor.WHITE_BLACK,
    size: ESize.PX24,
    value: {from: 0, to: 24},
    onChange: (name: String, value: IHourRange) => undefined,
  };

  private readonly className: DynaClassName = dynaClassName("dyna-input-0024-slider");

  private handleChange(name: string, values: number[]): void {
    const {onChange} = this.props;
    onChange(name, {from: values[0], to: values[1]})
  }

  private renderLabel(): JSX.Element {
    const {
      label,
      value: {
        from, to,
      },
    } = this.props;

    return (
      <div className={this.className("__label")}>
        <div className={this.className("__label__content")}>{label}</div>
        <div className={this.className("__label__value")}>{`${from}:00 - ${to}:00`}</div>
      </div>
    );
  }

  private renderTopBackground(): JSX.Element {
    const {statsHours} = this.props;
    return (
      <StatsBar
        stats={statsHours}
      />
    );
  }

  private renderBottomBackground(): JSX.Element{
    return (
      <Daylight />
    );
  }

  public render(): JSX.Element {
    const {
      className: userClassName,
      name,
      color,
      size,
      value: {
        from, to,
      },
    } = this.props;

    const className: string = this.className("", userClassName && '/' + userClassName || "")

    return (
      <div className={className}>
        {this.renderLabel()}
        <DynaInputRangeSlider
          name={name}
          color={color}
          size={size}
          topBackground={this.renderTopBackground()}
          bottomBackground={this.renderBottomBackground()}
          min={0}
          max={24}
          pushable
          value={[from, to]}
          onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
