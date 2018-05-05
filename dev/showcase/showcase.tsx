import * as React from 'react';
import {DynaSlider, DynaRangeSlider} from "../../src";

import {IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

import "./showcase.less";
import {EColor} from "dyna-ui-styles";

export default {
  logo: <Logo/>,
  views: [
    {
      slug: 'basic',
      title: 'Slider interaction',
      center: true,
      component: (() => {
        interface IMyAppProps{
          color?: EColor;
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
              color
            } = this.props;
            return (
              <DynaSlider
                name="temperature"
                color={color}
                min={0}
                step={10}
                max={200}
                value={this.state.value}
                onChange={(name: string, value: number) => {
                  console.debug('onChange value', name, value);
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
      props: Object.keys(EColor).map((color: EColor) => ({
        slug: `color-${color}`,
        title: `Color ${color.toLowerCase()}`,
        props: {color},
      })),

    },
    {
      slug: 'range',
      title: 'Slider Range interaction',
      center: true,
      component: (() => {
        interface IMyAppProps{
          color?: EColor;
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
              color
            } = this.props;
            return (
              <DynaRangeSlider
                name="multiTemerature"
                color={color}
                min={0}
                step={1}
                max={200}
                pushable
                value={this.state.value}
                onChange={(name: string, value: number[]) => {
                  console.debug('onChange value', name, value);
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
      props: Object.keys(EColor).map((color: EColor) => ({
        slug: `color-${color}`,
        title: `Color ${color.toLowerCase()}`,
        props: {color},
      })),
    },
  ]
}as IShowcase;
