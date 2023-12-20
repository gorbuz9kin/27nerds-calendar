import Colors from './colors';

const Constants = {
  defaultLocale: 'ua',
  monthNames: {
    ua: [
      'Січень',
      'Лютий',
      'Март',
      'Квітень',
      'Травень',
      'Червень',
      'Липень',
      'Серпень',
      'Вересень',
      'Жовтень',
      'Листопад',
      'Грудень',
    ],
  },
  monthNamesShort: {
    ua: [
      'Janv.',
      'Févr.',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juil.',
      'Août',
      'Sept.',
      'Oct.',
      'Nov.',
      'Déc.',
    ],
  },
  dayNames: {
    ua: [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
    ],
  },
  dayNamesShort: {
    ua: ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
  },
  today: {
    ua: 'Сьогодні',
  },
  calendarSelectedDayConfig: {
    selected: true,
    disableTouchEvent: false,
    selectedColor: Colors.primary,
    selectedTextColor: Colors.black,
  },
};

export default Constants;
