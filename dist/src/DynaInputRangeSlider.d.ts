import * as React from "react";
import { EColor } from "dyna-ui-styles";
import { ESize } from "./interfaces";
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
export declare class DynaInputRangeSlider extends React.Component<IDynaInputRangeSliderProps> {
    static defaultProps: IDynaInputRangeSliderProps;
    private readonly className;
    private handleChange;
    render(): JSX.Element;
}
