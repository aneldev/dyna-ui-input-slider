import * as React from "react";
import { EColor } from "dyna-ui-styles";
import { ESize } from "./interfaces";
import "./DynaInputDurationSlider.less";
export interface IDynaInputDurationSliderProps {
    className?: string;
    name?: string;
    color?: EColor;
    size?: ESize;
    suffix?: string;
    label?: JSX.Element;
    stats?: number[];
    min: number;
    max: number;
    value: number;
    onChange: (name: string, value: number) => void;
}
export declare class DynaInputDurationSlider extends React.Component<IDynaInputDurationSliderProps> {
    static defaultProps: IDynaInputDurationSliderProps;
    private readonly className;
    private handleChange;
    private renderTopBackground;
    private renderLabel;
    render(): JSX.Element;
}
