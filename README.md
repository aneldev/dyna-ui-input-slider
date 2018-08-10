# About

This is a wrapper of the awesome `rc-slider` adding... `ESize`.

Well... it wasn't easy to do that really. Check out the less files to we how is done.

Apart from that, `EColor` is supported but you can apply `null` and override with your own. Again you can check the less files of this repo to see has been done and apply yours. 

Bottom line, you can use this repo not a dependency but as reference how to style the `rc-slider`.

# Demo

`npm start`

# DynaInputSlider

Select a value from - to range.

```
interface IDynaInputSliderProps {
  className?: string;
  name: string;
  disabled?: boolean;
  color?: EColor;
  size?: ESize;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (name: string, value: number) => void;
}
```

# DynaInputRangeSlider

Select multiple values from a from - to range.

```
IDynaInputRangeSliderProps {
  className?: string;
  name: string;
  disabled?: boolean;
  color?: EColor;
  size?: ESize;
  min: number;
  max: number;
  step?: number;
  pushable?: boolean;
  value: number[];
  onChange: (name: string, value: number[]) => void;
}
```

# DynaInput0024Slider

```
IDynaInput0024SliderProps {
  className?: string;
  name?: string;
  color?: EColor;
  size?: ESize;
  label?: JSX.Element;
  value: IHourRange;        // hour: 00-24
  statsHours?: number [];   // for stats, numbers 0-24
  onChange?: (name: string, value: IHourRange) => void;
}

interface IHourRange {
  from: number;
  to: number;
}
```

# DynaInputDurationSlider

```
IDynaInputDurationSliderProps {
  className?: string
  name?: string;
  color?: EColor;
  size?: ESize;
  suffix?: string;
  label?: JSX.Element;
  stats?: number[];
  min: number;
  max: number;
  value: number;
  onChange: (name: string, value: number) => void;
}
```

# DynaInputPriceSlider

```
IDynaInputPriceSliderProps {
  className?: string
  name?: string;
  color?: EColor;
  size?: ESize;
  label?: JSX.Element;
  prices: number[];
  step?: number;
  statTicksCount?: number;
  min: EMin;
  value: number;
  formatPrice?: (value: number) => string;
  onChange: (name: string, value: number) => void;
}

export enum EMin {
  MIN = "MIN",
  ZERO = "ZERO",
}
```

# Supported Sizes

```
enum ESize {
  PX12 = "PX12",
  PX24 = "PX24",
  PX32 = "PX32",
  PX48 = "PX48",
}
```

# Supported Colors

```
EColor {
  BLACK_WHITE = "BLACK_WHITE",
  BLACK_ORANGE = "BLACK_ORANGE",
  TRANSPARENT_ORANGE = "TRANSPARENT_ORANGE",
  TRANSPARENT_WHITE = "TRANSPARENT_WHITE",
  ORANGE_WHITE = "ORANGE_WHITE",
  RED_WHITE = "RED_WHITE",
  GREY_WHITE = "GREY_WHITE",
  WHITE_BLACK = "WHITE_BLACK",
  WHITE_RED = "WHITE_RED",
  WHITE_ORANGE = "WHITE_ORANGE",
}
```

