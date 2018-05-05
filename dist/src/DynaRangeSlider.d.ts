import * as React from "react";
import { EColor } from "dyna-ui-styles";
export interface IDynaRangeSliderProps {
    className?: string;
    name: string;
    disabled?: boolean;
    color?: EColor;
    min: number;
    max: number;
    step?: number;
    pushable?: boolean;
    value: number[];
    onChange: (name: string, value: number[]) => void;
}
export declare class DynaRangeSlider extends React.Component<IDynaRangeSliderProps> {
    static defaultProps: IDynaRangeSliderProps;
    private handleChange(value);
    render(): JSX.Element;
}
