import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

type Props = {label: string; onPress: () => void; customStyles?: Object};

const Button: React.FC<Props> = ({label, onPress, customStyles}) => (
  <TouchableOpacity style={[styles.btn, customStyles]} onPress={onPress}>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

export default Button;
