import * as React from "react";
import {Range} from "rc-slider";
import {EColor} from "dyna-ui-styles";
import {ESize} from "./interfaces";

// help: https://github.com/react-component/slider

export interface IDynaInputRangeSliderProps {
  className?: string;
  name: string;
  disabled?: boolean;
  color?: EColor;
  size?: ESize;
  min: number;
  max: number;
  step?: number;
  pushable?: boolean;
  value: number[];
  onChange: (name: string, value: number[]) => void;
}

export class DynaInputRangeSlider extends React.Component<IDynaInputRangeSliderProps> {
  static defaultProps: IDynaInputRangeSliderProps = {
    className: '',
    name: null,
    disabled: false,
    color: EColor.WHITE_BLACK,
    size: ESize.PX24,
    min: 0,
    max: 100,
    step: 1,
    pushable: false,
    value: [],
    onChange: () => undefined,
  };

  private handleChange(value: number[]): void {
    const {name, onChange} = this.props;
    onChange(name, value);
  }

  public render(): JSX.Element {
    const {
      className: userClassName,
      disabled,
      color,
      size,
      min,
      max,
      step,
      pushable,
      value,
    } = this.props;

    const className: string = [
      "dyna-slider",
      userClassName,
      color ? `dyna-slider--color-${color}` : '',
      `dyna-slider--size-${size}`,
    ].join(' ').trim();

    return (
      <div className={className}>
        <Range
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          pushable={pushable}
          value={value}
          count={value.length}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }

}
