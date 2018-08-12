import * as React from "react";
import { EColor } from "dyna-ui-styles";
import { EMin, ESize } from "./interfaces";
import "./DynaInputPriceSlider.less";
export interface IDynaInputPriceSliderProps {
    className?: string;
    name?: string;
    color?: EColor;
    size?: ESize;
    label?: JSX.Element;
    prices: number[];
    step?: number;
    statTicksCount?: number;
    minType: EMin;
    value: number;
    formatPrice?: (value: number) => string;
    onChange: (name: string, value: number) => void;
}
export declare class DynaInputPriceSlider extends React.Component<IDynaInputPriceSliderProps> {
    static defaultProps: IDynaInputPriceSliderProps;
    constructor(props: IDynaInputPriceSliderProps);
    private readonly className;
    private readonly statsHelper;
    componentWillReceiveProps(nextProps: IDynaInputPriceSliderProps): void;
    private readonly minPrice;
    private readonly maxPrice;
    private handleChange;
    private renderTopBackground;
    private renderBottomBackground;
    private renderLabel;
    render(): JSX.Element;
}
