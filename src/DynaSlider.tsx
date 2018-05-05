import * as React from "react";
import Slider from "rc-slider";

import {EColor} from "dyna-ui-styles";

// help: https://github.com/react-component/slider

export interface IDynaSliderProps {
  className?: string;
  name: string;
  disabled?: boolean;
  color?: EColor;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (name: string, value: number) => void;
}

export class DynaSlider extends React.Component<IDynaSliderProps> {
  static defaultProps: IDynaSliderProps = {
    className: '',
    name: null,
    color: EColor.WHITE_BLACK,
    disabled: false,
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    onChange: () => undefined,
  };

  private handleChange(value: number): void {
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
      value,
    } = this.props;
    const className: string = [
      "dyna-slider",
      cn,
      `dyna-slider--color-${color}`,
    ].join(' ').trim();

    return (
      <div className={className}>
        <Slider
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }

}
