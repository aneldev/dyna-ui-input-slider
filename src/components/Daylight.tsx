import * as React from "react";
import "./Daylight.less";

export const Daylight: React.SFC<{}> = (props) => (
  <div className="dyna-slider-daylight">
    <div  className="dyna-slider-daylight__min">00:00</div>
    <div  className="dyna-slider-daylight__max">24:00</div>
  </div>
);
