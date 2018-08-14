import * as React from "react";
import Slider from "rc-slider";
import {EColor} from "dyna-ui-styles";
import {dynaClassName} from "dyna-class-name";
import {ESize} from "./interfaces";

// help: https://github.com/react-component/slider

export interface IDynaInputSliderProps {
  className?: string;
  name: string;
  topBackground?: JSX.Element;
  bottomBackground?: JSX.Element;
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
    topBackground: null,
    bottomBackground: null,
    color: EColor.WHITE_BLACK,
    size: ESize.PX24,
    disabled: false,
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    onChange: () => undefined,
  };

  private readonly className = dynaClassName("dyna-slider");

  private handleChange(value: number): void {
    const {name, onChange} = this.props;
    onChange(name, value);
  }

  public render(): JSX.Element {
    const {
      disabled,
      topBackground,
      bottomBackground,
      color,
      size,
      min,
      max,
      step,
      value,
    } = this.props;

    const classNames: string[] = [
      "--single-value-mode",
      color ? `--color-${color}` : '',
      `--size-${size}`,
    ];

    return (
      <div className={this.className.root(this.props, classNames)}>
        <div className="dyna-slider__top-background">{topBackground}</div>
        <div className="dyna-slider__bottom-background">{bottomBackground}</div>
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
