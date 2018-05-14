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

# Supported Sizes

```
export enum ESize {
  PX12 = "PX12",
  PX24 = "PX24",
  PX32 = "PX32",
  PX48 = "PX48",
}
```

