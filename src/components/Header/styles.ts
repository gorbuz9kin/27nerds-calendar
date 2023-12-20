import {StyleSheet} from 'react-native';

import {Colors} from './../../configs';

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    position: 'absolute',
    top: 12,
    left: 0,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default styles;
