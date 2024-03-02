interface IWeatherObjIcon {
  [key: string]: string
}

export const getWeatherIcon = (iconCode: string) => {
  // Пример простого маппинга на иконки, замените его на ваш
  const iconMapping: IWeatherObjIcon = {
    '01d': 'sun.png',
    '01n': 'moon.png',
    '02d': 'partly-cloudy-day.png',
    '02n': 'partly-cloudy-night.png',
    '03d': 'cloudy.png',
    '03n': 'cloudy.png',
    '04d': 'cloudy.png',
    '04n': 'cloudy.png',
    '09d': 'rain.png',
    '09n': 'rain.png',
    '10d': 'rain.png',
    '10n': 'rain.png',
    '11d': 'groza.png',
    '11n': 'groza.png',
    '13d': 'snow.png',
    '13n': 'snow.png',
    '50d': 'tuman.png',
    '50n': 'tuman.png',
  } 

  const iconFilename = iconMapping[iconCode] || 'default.png';
  return `./weather/${iconFilename}`;
};