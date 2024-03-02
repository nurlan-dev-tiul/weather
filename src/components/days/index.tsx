import { IWeataherDays} from '../../types/weather';
import { convertToCelsius } from '../../utils/converter';
import { getDayOfWeek } from '../../utils/date';
import { getWeatherIcon } from '../../utils/images';
import styles from './style.module.scss';

interface IWeatherProps {
  forecasts: IWeataherDays[],
}

export const DaysList = ({forecasts}: IWeatherProps) => {

  const renderWeatherForecast = () => {
    const today = new Date();

    const nextThreeDays = new Array(3).fill(0).map((_, index) => {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + index + 1);
      return nextDay;
    });

    return nextThreeDays.map((date) => {
      const filteredData = forecasts.filter((data) => data.dt_txt.includes(date.toISOString().split('T')[0]));
      if (filteredData.length > 0) {
        const dayOfWeek = getDayOfWeek(date);
        const temperature = filteredData[0].main.temp.toFixed(1);
        const weatherIcon = filteredData[0].weather[0].icon;
        const dt = filteredData[0].dt;

        return (
          <li className={styles.days__list} key={dt}>
            <div className={styles.days__img_box}>
              {weatherIcon === '01n' ? (
                <img src='./weather/sun.png' alt="" />
              ): (
                <img src={getWeatherIcon(weatherIcon)} alt="" />
              )}
            </div>
            <h5>{convertToCelsius(temperature)}°C</h5>
            <span>{dayOfWeek}</span>
          </li>
        );
      }
      return null;
    });
  };

  return (
    <>
      <ul className={styles.days}>
        {renderWeatherForecast()}
      </ul>
    </>

  )
}

