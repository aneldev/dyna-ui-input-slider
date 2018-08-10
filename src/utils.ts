import {round} from "dyna-loops";

import {EMin} from "./interfaces";

export const getMinValue = (minType: EMin, values: number[]) => {
  if (minType === EMin.ZERO) return 0;

  return values.reduce((acc: number, value: number) => {
    if (acc === null || value < acc) acc = value;
    return acc;
  }, null);
};

export const getMaxValue = (values: number[]) => {
  return values.reduce((acc: number, value: number) => {
    if (acc === null || value > acc) acc = value;
    return acc;
  }, null);
};

export const getStepValue = (min: number, max: number, steps: number): number => {
  return (max - min) / steps;
};

export const getTicks = (values:number[], ticksCount:number): number[] =>{
  let min: number = null;
  let max: number = null;
  values.forEach((value) => {
    if (min === null || min > value) min = value;
    if (max === null || max < value) max = value;
  });

  const step = getStepValue(min, max, ticksCount);
  const tickLimits =
    Array(ticksCount - 1)
      .fill(null)
      .map((v, index) => min + (step * index));
  tickLimits.push(max);

  const output: number[] =
    tickLimits
      .map((tickLimit: number, index: number, array: number[]) => {
        let from = index === 0 ? 0 : array[index - 1];
        let to = tickLimit;
        return values.filter((value) => value > from && value < to + 1).length;
      });

  return output;
};

