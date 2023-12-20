import {StyleSheet} from 'react-native';

import {Colors} from './../../configs';

const styles = StyleSheet.create({
  btn: {
    margin: 16,
    alignSelf: 'stretch',
    height: 48,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: Colors.white,
    fontSize: 14,
    lineHeight: 20,
  },
});

export default styles;
