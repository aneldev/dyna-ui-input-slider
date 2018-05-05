import * as React from "react";
import { EColor } from "dyna-ui-styles";
export interface IDynaSliderProps {
    className?: string;
    name: string;
    disabled?: boolean;
    color?: EColor;
    min: number;
    max: number;
    step?: number;
    value: number;
    onChange: (name: string, value: number) => void;
}
export declare class DynaSlider extends React.Component<IDynaSliderProps> {
    static defaultProps: IDynaSliderProps;
    private handleChange(value);
    render(): JSX.Element;
}
