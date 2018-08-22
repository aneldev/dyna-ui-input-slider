import * as React from "react";
import { EColor } from "dyna-ui-styles";
import { EMin, ESize } from "./interfaces";
import "./DynaInputDurationSlider.less";
export interface IDynaInputDurationSliderProps {
    className?: string;
    name?: string;
    label?: JSX.Element | string;
    color?: EColor;
    size?: ESize;
    ticksCount?: number;
    values: number[];
    formatValue?: (value: number) => string;
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
