import * as React from "react";
import {Range} from "rc-slider";
import {EColor} from "dyna-ui-styles";
import {dynaClassName} from "dyna-class-name";
import {ESize} from "./interfaces";

// help: https://github.com/react-component/slider

export interface IDynaInputRangeSliderProps {
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
  pushable?: boolean;
  value: number[];
  onChange: (name: string, value: number[]) => void;
}

export class DynaInputRangeSlider extends React.Component<IDynaInputRangeSliderProps> {
  static defaultProps: IDynaInputRangeSliderProps = {
    className: '',
    name: null,
    topBackground: null,
    bottomBackground: null,
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

  private readonly className = dynaClassName("dyna-slider");

  private handleChange(value: number[]): void {
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
      pushable,
      value,
    } = this.props;

    const classNames: string[] = [
      color ? `--color-${color}` : '',
      `--size-${size}`,
    ];

    return (
      <div className={this.className.root(this.props, classNames)}>
        <div className="dyna-slider__top-background">{topBackground}</div>
        <div className="dyna-slider__bottom-background">{bottomBackground}</div>
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
