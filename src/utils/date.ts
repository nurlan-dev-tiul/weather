const today = new Date();

export const daysOfWeek = [
    'Воскресенье', 
    'Понедельник', 
    'Вторник', 
    'Среда', 
    'Четверг', 
    'Пятница', 
    'Суббота'
];

export const getDayName = (dateString: string): string => {
    const date = new Date(dateString);
    return daysOfWeek[date.getDay()];
  };

export const getDayOfWeek = (date: Date): string => {
    return daysOfWeek[date.getDay()];
  };

// Получаем чсило и месяц
export const getMonthAndDay = () => {
    // Текущий день месяца
    const day = today.getDate();
    // Текущий месяц
    const month = today.getMonth();
    const monthString = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    
    const weatherDate = day + ' ' + monthString[month]
    return weatherDate
}