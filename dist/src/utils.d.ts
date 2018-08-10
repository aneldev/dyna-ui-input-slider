import { EMin } from "./interfaces";
export declare const getMinValue: (minType: EMin, values: number[]) => number;
export declare const getMaxValue: (values: number[]) => number;
export declare const getStepValue: (min: number, max: number, steps: number) => number;
export declare const getTicks: (values: number[], ticksCount: number) => number[];
