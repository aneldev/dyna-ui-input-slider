import * as React from "react";
import "./StatsBar.less";
export interface IStatsBarProps {
    className?: string;
    ticks: number[];
}
export declare class StatsBar extends React.Component<IStatsBarProps> {
    static defaultProps: IStatsBarProps;
    shouldComponentUpdate(newProps: IStatsBarProps): boolean;
    private readonly className;
    private readonly percentageTicks;
    render(): JSX.Element;
}
