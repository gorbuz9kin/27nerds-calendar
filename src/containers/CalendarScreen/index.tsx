import React, {useState, useCallback, useMemo} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

import {Calendar, LocaleConfig} from 'react-native-calendars';

import {Header, OptionsList, Button} from 'src/components';
import {Constants} from 'src/configs';
import DummyData from 'src/dummyData';
import {getCurrentDate} from 'src/utils';
import {CalendarOptionType} from 'src/types';

import styles from './styles';

type DateType = {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
};

LocaleConfig.locales[Constants.defaultLocale] = {
  monthNames: Constants.monthNames.ua,
  monthNamesShort: Constants.monthNamesShort.ua,
  dayNames: Constants.dayNames.ua,
  dayNamesShort: Constants.dayNamesShort.ua,
  today: Constants.today.ua,
};
LocaleConfig.defaultLocale = Constants.defaultLocale;

const CalendarScreen: React.FC = () => {
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState(
    DummyData.calendarOptions[0],
  );
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const onDayPress = useCallback(
    (day: DateType) => {
      const newDay = day.dateString;
      const selected = [...selectedDates];
      const isExist = selected.includes(newDay);
      const res = isExist
        ? selected.filter(date => date !== newDay)
        : [...selected, newDay];
      setSelectedDates(res);
    },
    [selectedDates],
  );

  const onMonthChange = useCallback((day: DateType) => {
    setMonth(day.month - 1);
  }, []);

  const markedDates = useMemo(() => {
    if (selectedDates.length < 1) {
      return {};
    }
    const res = {};
    selectedDates.forEach(day => {
      res[day] = Constants.calendarSelectedDayConfig;
    });
    return res;
  }, [selectedDates]);

  const onSelectOption = useCallback((option: CalendarOptionType) => {
    setSelectedOption(option);
  }, []);

  const onBackPress = useCallback(() => {
    // TODO: onPressCallBack action
  }, []);

  const onConfirmSettings = useCallback(() => {
    // TODO: onConfirmSettings action
  }, []);

  const monthLabel = Constants.monthNames.ua[month] || '';

  return (
    <SafeAreaView style={[styles.screenContainer]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header title="Налаштування" onBackPress={onBackPress} />
      <OptionsList
        title="Обрати частоту"
        options={DummyData.calendarOptions}
        onSelect={onSelectOption}
        selectedOption={selectedOption}
      />
      <View style={styles.pageContainer}>
        <Calendar
          firstDay={1}
          style={styles.calendar}
          current={getCurrentDate()}
          onDayPress={onDayPress}
          onMonthChange={onMonthChange}
          markedDates={markedDates}
        />
      </View>
      {monthLabel ? (
        <Text style={styles.month}>{`Обраний місяць: ${monthLabel}`}</Text>
      ) : null}
      <Button
        label="Застосувати"
        onPress={onConfirmSettings}
        customStyles={styles.btn}
      />
    </SafeAreaView>
  );
};

export default CalendarScreen;
