import {StyleSheet} from 'react-native';

import {Colors} from './../../configs';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  pageContainer: {
    paddingHorizontal: 16,
  },
  calendar: {
    borderWidth: 1,
    borderColor: '#F0F1F5',
    borderRadius: 10,
  },
  btn: {
    marginTop: 'auto',
  },
  month: {
    fontSize: 16,
    color: Colors.gray,
    padding: 16,
  },
});

export default styles;
