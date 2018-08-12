import * as React from "react";
import { EColor } from "dyna-ui-styles";
import { EMin, ESize } from "./interfaces";
import "./DynaInputDurationSlider.less";
export interface IDynaInputDurationSliderProps {
    className?: string;
    name?: string;
    color?: EColor;
    size?: ESize;
    suffix?: string;
    label?: JSX.Element;
    hours?: number[];
    minType: EMin;
    value: number;
    onChange: (name: string, value: number) => void;
}
export declare class DynaInputDurationSlider extends React.Component<IDynaInputDurationSliderProps> {
    static defaultProps: IDynaInputDurationSliderProps;
    constructor(props: IDynaInputDurationSliderProps);
    componentWillReceiveProps(nextProps: IDynaInputDurationSliderProps): void;
    private readonly className;
    private readonly statsHelper;
    private handleChange;
    private getStatTicks;
    private renderTopBackground;
    private renderBottomBackground;
    private renderLabel;
    render(): JSX.Element;
}
