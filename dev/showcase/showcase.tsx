import * as React from 'react';
import {IShowcase, IShowcaseViewProps} from "dyna-showcase";

import {Logo} from "../logo";

import {demoHours, demoPrices} from "./data";

// Components
import {
  EColor, ESize, EMin,
  IHourRange,
  DynaInputSlider,
  DynaInputRangeSlider, IDynaInputRangeSliderProps,
  DynaInput0024Slider,
  DynaInputDurationSlider,
  DynaInputPriceSlider,
} from "../../src";

// Internal Helper Components
import {StatsBar} from "../../src/components/StatsBar";

import "./showcase.less";

export default {
  logo: <Logo/>,
  views: [
    {
      slug: 'slider',
      title: 'Slider interaction',
      center: true,
      component: (() => {
        interface IMyAppProps {
        }

        interface IMyAppState {
          value: number;
        }

        class MyApp extends React.Component<IMyAppProps, IMyAppState> {
          constructor(props: IMyAppProps) {
            super(props);
            this.state = {
              value: 50,
            }
          }

          public render(): JSX.Element {
            return (
              <DynaInputSlider
                name="temperature"
                color={EColor.WHITE_RED}
                size={ESize.PX32}
                min={0}
                step={10}
                max={200}
                value={this.state.value}
                onChange={(name: string, value: number) => {
                  console.log('onChange value', name, value);
                  this.setState({value});
                }}
                {...this.props}
              />
            );
          }
        }

        return <MyApp/>;
      })(),
      wrapperStyle: {
        width: "50%",
      },
      props: [
        {
          slug:"with no background",
          title:"with no background",
          props: {},
        },
        {
          slug:"with background",
          title:"with top/bottom background",
          props: {
            topBackground: <div style={{height:"100%", boxShadow: "inset 0 0 4px 4px green"}}/>,
            bottomBackground: <div style={{height:"100%", boxShadow: "inset 0 0 4px 4px blue"}}/>,
          } as IDynaInputRangeSliderProps,
        },
      ],
    },
    {
      slug: 'range',
      title: 'Slider Range interaction',
      center: true,
      component: (() => {
        interface IMyAppProps {
        }

        interface IMyAppState {
          value: number[];
        }

        class MyApp extends React.Component<IMyAppProps, IMyAppState> {
          constructor(props: IMyAppProps) {
            super(props);
            this.state = {
              value: [50, 100, 150],
            }
          }

          public render(): JSX.Element {
            return (
              <DynaInputRangeSlider
                name="multiTemperature"
                color={EColor.WHITE_RED}
                size={ESize.PX32}
                min={0}
                step={1}
                max={200}
                pushable
                value={this.state.value}
                onChange={(name: string, value: number[]) => {
                  console.log('onChange value', name, value);
                  this.setState({value});
                }}
                {...this.props}
              />
            );
          }
        }

        return <MyApp/>;
      })(),
      wrapperStyle: {
        width: "50%",
      },
      props: [
        {
          slug: "with no background",
          title: "with no background",
          props: {},
        },
        {
          slug: "with background",
          title: "with top/bottom background",
          props: {
            topBackground: <div style={{height: "100%", boxShadow: "inset 0 0 4px 4px green"}}/>,
            bottomBackground: <div style={{height: "100%", boxShadow: "inset 0 0 4px 4px blue"}}/>,
          } as IDynaInputRangeSliderProps,
        },
      ],
    },
    {
      slug: 'stats-bar',
      title: 'Stats bar',
      center: true,
      wrapperStyle: {
        width: "50%",
        height: "32px",
      },
      component: (
        <StatsBar
          ticks={[100, 2000, 800, 1300, 1000, 400, 100]}
        />
      ),
    },
    {
      slug: 'DynaInput0024Slider',
      title: 'Dyna input 00-24 slider',
      center: true,
      component: (() => {
        interface IMyAppProps {
        }

        interface IMyAppState {
          value: IHourRange;
        }

        const myDemoHours = demoHours.concat(demoHours, demoHours, demoHours, demoHours, demoHours);

        class MyApp extends React.Component<IMyAppProps, IMyAppState> {
          constructor(props: IMyAppProps) {
            super(props);

            this.state = {
              value: {from: 6, to: 24},
            }
          }

          public render(): JSX.Element {
            return (
              <DynaInput0024Slider
                color={EColor.WHITE_ORANGE}
                size={ESize.PX32}
                value={this.state.value}
                hours={myDemoHours}
                onChange={(name: string, value: IHourRange) => {
                  console.log('onChange value', name, value);
                  this.setState({value});
                }}
                {...this.props}
              />
            );
          }
        }

        return <MyApp/>;
      })(),
      wrapperStyle: {
        width: "50%",
      },
      props: (() => {
        const props: IShowcaseViewProps[] = [];
        Object.keys(ESize).forEach((size: ESize) => {
          props.push({
            slug: `size-${size}`,
            title: `${size.toLowerCase()}`,
            props: {size},
          });
        });
        return props;
      })(),
    },
    {
      slug: 'DynaInputDurationSlider',
      title: 'Dyna input duration slider',
      center: true,
      component: (() => {
        interface IMyAppProps {
        }

        interface IMyAppState {
          value: number;
        }

        const myDemoHours = demoHours.concat(demoHours, demoHours, demoHours, demoHours, demoHours);

        class MyApp extends React.Component<IMyAppProps, IMyAppState> {
          constructor(props: IMyAppProps) {
            super(props);

            this.state = {
              value: 7,
            }
          }

          public render(): JSX.Element {
            return (
              <DynaInputDurationSlider
                color={EColor.WHITE_ORANGE}
                size={ESize.PX32}
                value={this.state.value}
                values={myDemoHours}
                minType={EMin.MIN}
                onChange={(name: string, value: number) => {
                  console.log('onChange value', name, value);
                  this.setState({value});
                }}
                {...this.props}
              />
            );
          }
        }

        return <MyApp/>;
      })(),
      wrapperStyle: {
        width: "50%",
      },
      props: (() => {
        const props: IShowcaseViewProps[] = [];
        Object.keys(ESize).forEach((size: ESize) => {
          props.push({
            slug: `size-${size}`,
            title: `${size.toLowerCase()}`,
            props: {size},
          });
        });
        return props;
      })(),
    },
    {
      slug: 'DynaInputPriceSlider',
      title: 'Dyna input Price slider',
      center: true,
      component: (() => {
        interface IMyAppProps {
        }

        interface IMyAppState {
          value: number;
        }

        const myDemoHours = demoHours.concat(demoHours, demoHours, demoHours, demoHours, demoHours);

        class MyApp extends React.Component<IMyAppProps, IMyAppState> {
          constructor(props: IMyAppProps) {
            super(props);

            this.state = {
              value: 234.11,
            }
          }

          public render(): JSX.Element {
            return (
              <DynaInputPriceSlider
                color={EColor.WHITE_ORANGE}
                size={ESize.PX32}
                value={this.state.value}
                prices={demoPrices}
                minType={EMin.MIN}
                onChange={(name: string, value: number) => {
                  console.log('onChange value', name, value);
                  this.setState({value});
                }}
                {...this.props}
              />
            );
          }
        }

        return <MyApp/>;
      })(),
      wrapperStyle: {
        width: "50%",
      },
      props: (() => {
        const props: IShowcaseViewProps[] = [];
        Object.keys(ESize).forEach((size: ESize) => {
            props.push({
              slug: `size-${size}`,
              title: `${size.toLowerCase()}`,
              props: {size},
          });
        });
        return props;
      })(),
    },
    {
      slug: 'slider-color-size',
      title: 'Slider Color Sizes',
      center: true,
      component: (() => {
        interface IMyAppProps {
          color?: EColor;
          size?: ESize;
        }

        interface IMyAppState {
          value: number;
        }

        class MyApp extends React.Component<IMyAppProps, IMyAppState> {
          constructor(props: IMyAppProps) {
            super(props);
            this.state = {
              value: 50,
            }
          }

          public render(): JSX.Element {
            const {
              color,
              size,
            } = this.props;
            return (
              <DynaInputSlider
                name="temperature"
                color={color}
                size={size}
                min={0}
                step={10}
                max={200}
                value={this.state.value}
                onChange={(name: string, value: number) => {
                  console.log('onChange value', name, value);
                  this.setState({value});
                }}
              />
            );
          }
        }

        return <MyApp/>;
      })(),
      wrapperStyle: {
        width: "50%",
      },
      props: (() => {
        const props: IShowcaseViewProps[] = [];
        Object.keys(ESize).forEach((size: ESize) => {
          Object.keys(EColor).concat(null).forEach((color: EColor) => {
            props.push({
              slug: `color-${color}-size-${size}`,
              title: `${(color || 'NONE').toLowerCase()} ${size.toLowerCase()}`,
              props: {size, color},
            })
          });
        });
        return props;
      })(),
    },
    {
      slug: 'range-color-size',
      title: 'Slider Range Color Size',
      center: true,
      component: (() => {
        interface IMyAppProps {
          color?: EColor;
          size?: ESize;
        }

        interface IMyAppState {
          value: number[];
        }

        class MyApp extends React.Component<IMyAppProps, IMyAppState> {
          constructor(props: IMyAppProps) {
            super(props);
            this.state = {
              value: [50, 100, 150],
            }
          }

          public render(): JSX.Element {
            const {
              color,
              size,
            } = this.props;
            return (
              <DynaInputRangeSlider
                name="multiTemperature"
                color={color}
                size={size}
                min={0}
                step={1}
                max={200}
                pushable
                value={this.state.value}
                onChange={(name: string, value: number[]) => {
                  console.log('onChange value', name, value);
                  this.setState({value});
                }}
              />
            );
          }
        }

        return <MyApp/>;
      })(),
      wrapperStyle: {
        width: "50%",
      },
      props: (() => {
        const props: IShowcaseViewProps[] = [];
        Object.keys(ESize).forEach((size: ESize) => {
          Object.keys(EColor).concat(null).forEach((color: EColor) => {
            props.push({
              slug: `color-${color}-size-${size}`,
              title: `${(color || 'NONE').toLowerCase()} ${size.toLowerCase()}`,
              props: {size, color},
            })
          });
        });
        return props;
      })(),
    },
  ]
}as IShowcase;
