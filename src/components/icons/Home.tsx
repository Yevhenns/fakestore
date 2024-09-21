import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const Home = (props: SvgProps) => {
  return (
    <View style={styles.container}>
      <Svg viewBox="0 0 32 32" width={32} height={32}>
        <Path
          d="M16 2.594l-.72.687-13 13 1.44 1.44L5 16.437V28h9V18h4v10h9V16.437l1.28 1.282 1.44-1.44-13-13-.72-.686zm0 2.844l9 9V26h-5V16h-8v10H7V14.437l9-9z"
          fill={props.color}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
