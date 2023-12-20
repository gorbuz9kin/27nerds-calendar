import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {Images} from 'src/configs';

import styles from './styles';

type Props = {
  title: string;
  onBackPress: () => void;
};

const Header: React.FC<Props> = ({title, onBackPress}) => (
  <View style={styles.wrapper}>
    <TouchableOpacity style={styles.btn} onPress={onBackPress}>
      <Image source={Images.chevron} />
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default Header;
