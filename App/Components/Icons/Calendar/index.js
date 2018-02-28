//@flow
import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import type { TProps } from '../types';

export default function Calendar(props: TProps) {
  return (
    <Svg height={props.heigth} width={props.width}>
      <Path
        d={
          'M260.26087,20 L243.73913,20 C242.778696,20 242,19.1045 242,18 L242,3 C242,1.8955 242.778696,1 243.73913,1 L260.26087,1 C261.221304,1 262,1.8955 262,3 L262,18 C262,19.1045 261.221304,20 260.26087,20 Z M261.043478,3 C261.043478,2.448 260.659478,2 260.186335,2 L243.900621,2 C243.427478,2 243.043478,2.448 243.043478,3 L243.043478,6 L261.043478,6 L261.043478,3 Z M261.043478,7 L243.043478,7 L243.043478,17.9517544 C243.043478,18.5013333 243.427478,18.9473684 243.900621,18.9473684 L260.186335,18.9473684 C260.659478,18.9473684 261.043478,18.5013333 261.043478,17.9517544 L261.043478,7 Z M248.717391,14 L246.23913,14 C245.782304,14 245.369261,14 245,14 L245,9 L246.23913,9 C247.891304,9 248.717391,9 248.717391,9 C248.717391,9 249.130435,9 249.956522,9 L249.956522,14 L248.717391,14 Z'
        }
        transform={'translate(-242 -1)'}
        fill={props.color}
        opacity={props.opacity}
      />
    </Svg>
  );
}

Calendar.defaultProps = {
  width: 20,
  heigth: 20,
  color: '#000000',
  opacity: 1,
};