import * as React from "react";
import Slider from "rc-slider";
import {EColor} from "dyna-ui-styles";
import {ESize} from "./interfaces";

// help: https://github.com/react-component/slider

export interface IDynaInputSliderProps {
  className?: string;
  name: string;
  disabled?: boolean;
  color?: EColor;
  size?: ESize;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (name: string, value: number) => void;
}

export class DynaInputSlider extends React.Component<IDynaInputSliderProps> {
  static defaultProps: IDynaInputSliderProps = {
    className: '',
    name: null,
    color: EColor.WHITE_BLACK,
    size: ESize.PX24,
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
      className: userClassName,
      disabled,
      color,
      size,
      min,
      max,
      step,
      value,
    } = this.props;

    const className: string = [
      "dyna-slider",
      userClassName,
      "dyna-slider--single-value-mode",
      color ? `dyna-slider--color-${color}` : '',
      `dyna-slider--size-${size}`,
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
