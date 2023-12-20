import {StyleSheet} from 'react-native';

import {Colors} from './../../configs';

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: Colors.gray,
    marginBottom: 16,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    rowGap: 13,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.gray2,
  },
  btnSelected: {
    borderColor: Colors.primary,
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: Colors.gray,
  },
  labelSelected: {
    color: Colors.primary,
  },
});

export default styles;
