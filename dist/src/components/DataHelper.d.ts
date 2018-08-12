import { EMin } from "../interfaces";
export declare class DataHelper {
    private inputData;
    private outputMin;
    private outputMax;
    private outputIntegerTicks;
    private outputFloatGroupTicks;
    setData(data: number[]): void;
    private isInputSame;
    getMinValue: (minType: EMin) => number;
    getMaxValue(): number;
    getIntegerTicks: (minType: EMin) => number[];
    getFloatGroupTicks(ticksCount: number): number[];
}
