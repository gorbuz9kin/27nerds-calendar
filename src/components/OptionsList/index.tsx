import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {CalendarOptionType} from 'src/types';

import styles from './styles';

type Props = {
  title: string;
  options: CalendarOptionType[];
  selectedOption: CalendarOptionType;
  onSelect: (value: CalendarOptionType) => void;
};

const OptionsList: React.FC<Props> = ({
  title,
  options,
  onSelect,
  selectedOption,
}) => (
  <View style={styles.wrapper}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.list}>
      {options?.map(option => {
        const isSelected = selectedOption.id === option.id;
        return (
          <TouchableOpacity
            style={isSelected ? [styles.btn, styles.btnSelected] : styles.btn}
            key={option.id}
            onPress={() => onSelect(option)}>
            <Text
              style={
                isSelected ? [styles.label, styles.labelSelected] : styles.label
              }>
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  </View>
);

export default OptionsList;
