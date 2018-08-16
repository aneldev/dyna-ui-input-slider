import {EMin} from "../interfaces";

export class StatsHelper {
  private inputData: number[] = null;
  private outputMin: number = null;
  private outputMax: number = null;
  private outputIntegerTicks: number[] = null;
  private outputFloatGroupTicks: number[][] = []; // per ticksCount

  public setData(data: number[]): void {
    if (!this.isInputSame(data)) {
      this.inputData = data;
      this.outputMin = null;
      this.outputMax = null;
      this.outputIntegerTicks = null;
      this.outputFloatGroupTicks = [];
    }
  }

  private isInputSame(inputData: number[]): boolean {
    // not the best comparison to find this, lodash is a nice solution, but this is fast
    if (!inputData || !this.inputData) return inputData === this.inputData;
    return (
      inputData.length === this.inputData.length
    );
  }

  public get hasValues(): boolean {
    return this.inputData && this.inputData.length > 2;
  }

  public getMinValue = (minType: EMin) => {
    if (minType === EMin.ZERO) return 0;
    if (this.outputMin !== null) return this.outputMin;

    this.outputMin = this.inputData.reduce((acc: number, value: number) => {
      if (acc === null || value < acc) acc = value;
      return acc;
    }, null);

    return this.outputMin;
  };

  public getMaxValue(): number {
    if (this.outputMax !== null) return this.outputMax;

    this.outputMax = this.inputData.reduce((acc: number, value: number) => {
      if (acc === null || value > acc) acc = value;
      return acc;
    }, null);

    return this.outputMax;
  }

  public getIntegerTicks = (minType: EMin): number[] => {
    if (this.outputIntegerTicks !== null) return this.outputIntegerTicks;

    this.outputIntegerTicks =
      this.inputData
        .filter((hour: number) => hour >= this.getMinValue(minType))
        .reduce((acc: number[], hour: number) => {
          if (!acc[hour]) acc[hour] = 0;
          acc[hour]++;
          return acc;
        }, [])
    ;
    for (let i: number = this.getMinValue(minType); i <= this.getMaxValue(); i++) {
      if (!this.outputIntegerTicks[i]) this.outputIntegerTicks[i] = 0;
    }

    return this.outputIntegerTicks;
  };

  public getFloatGroupTicks(minType: EMin, ticksCount: number): number[] {
    if (this.outputFloatGroupTicks[ticksCount]) return this.outputFloatGroupTicks[ticksCount];

    let min: number = null;
    let max: number = null;
    this.inputData
      .filter((hour: number) => hour >= this.getMinValue(minType))
      .forEach((value: number) => {
        if (min === null || min > value) min = value;
        if (max === null || max < value) max = value;
      });

    const step = (max - min) / ticksCount;
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
          return this.inputData.filter((value) => value > from && value < to + 1).length;
        });

    this.outputFloatGroupTicks[ticksCount] = output;

    return this.outputFloatGroupTicks[ticksCount];
  }

}
