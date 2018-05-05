import * as React from "react";
import { Range } from "rc-slider";
import {EColor} from "dyna-ui-styles";

// help: https://github.com/react-component/slider

export interface IDynaRangeSliderProps {
  className?: string;
  name: string;
  disabled?: boolean;
  color?: EColor;
  min: number;
  max: number;
  step?: number;
  pushable?: boolean;
  value: number[];

  onChange: (name: string, value: number[]) => void;
}

export class DynaRangeSlider extends React.Component<IDynaRangeSliderProps> {
  static defaultProps: IDynaRangeSliderProps = {
    className: '',
    name: null,
    disabled: false,
    color: EColor.WHITE_BLACK,
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
      className: cn,
      disabled,
      color,
      min,
      max,
      step,
      pushable,
      value,
    } = this.props;
    const className: string = [
      "dyna-slider",
      cn,
      `dyna-slider--color-${color}`,
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
