import { IWeataherDataObj } from '../../types/weather';
import { convertToCelsius } from '../../utils/converter';
import { daysOfWeek, getMonthAndDay } from '../../utils/date';
import { getWeatherIcon } from '../../utils/images';
import styles from './style.module.scss';

interface IWeatherProps {
  weatherData: IWeataherDataObj | null,
}

export const Weather = ({weatherData}: IWeatherProps) => {
  const today = new Date();
  const currentDay = today.getDay();

  const day = daysOfWeek[currentDay];
  const monthAndDay = getMonthAndDay()

  return (
    <>
      <div className={styles.container}>
        <div className={styles.weather_info}>
          <h4>{weatherData?.name || 'Город'}</h4>
          <p>{day}, {monthAndDay}</p>
          <span>{convertToCelsius(weatherData?.main.temp) || '0'}°C</span>
          <div className={styles.weather_info__img_box}>
            <img src={getWeatherIcon(weatherData?.weather[0].icon as string)} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
