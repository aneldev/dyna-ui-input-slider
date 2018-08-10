import * as React from "react";
import { EColor } from "dyna-ui-styles";
import { ESize, IHourRange } from "./interfaces";
import "./DynaInput0024Slider.less";
export interface IDynaInput0024SliderProps {
    className?: string;
    name?: string;
    color?: EColor;
    size?: ESize;
    label?: JSX.Element;
    value: IHourRange;
    statsHours?: number[];
    onChange?: (name: string, value: IHourRange) => void;
}
export declare class DynaInput0024Slider extends React.Component<IDynaInput0024SliderProps> {
    static defaultProps: IDynaInput0024SliderProps;
    private readonly className;
    private handleChange;
    private renderLabel;
    private renderTopBackground;
    private renderBottomBackground;
    render(): JSX.Element;
}
