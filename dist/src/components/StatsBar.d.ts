import * as React from "react";
import "./StatsBar.less";
export interface IStatsBarProps {
    className?: string;
    stats: number[];
}
export declare class StatsBar extends React.Component<IStatsBarProps> {
    static defaultProps: IStatsBarProps;
    private readonly className;
    private readonly stats;
    render(): JSX.Element;
}
