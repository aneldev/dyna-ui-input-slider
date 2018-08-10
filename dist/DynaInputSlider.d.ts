import * as React from "react";
import { EColor } from "dyna-ui-styles";
import { ESize } from "./interfaces";
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
export declare class DynaInputSlider extends React.Component<IDynaInputSliderProps> {
    static defaultProps: IDynaInputSliderProps;
    private handleChange;
    render(): JSX.Element;
}
