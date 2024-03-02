import { FormEvent,  useState, SetStateAction, Dispatch, ChangeEvent, useEffect} from 'react';
import { 
  getWeatherApi, 
  getWeatherForecastApi,
  getWeatherGeolocation,
  getForecastGeolocation 
} from '../../services/api';
import { IWeataherDays, IWeataherDataObj } from '../../types/weather';
import { showAuthError } from '../../utils/error';
import styles from './style.module.scss';

interface FormWeatherProps {
  setWeatherData: Dispatch<SetStateAction<IWeataherDataObj | null>>;
  setCity: (city: string) => void
  setForecast: Dispatch<SetStateAction<IWeataherDays[]>>;
  city: string
}

export const Form = ({setWeatherData, setCity, city, setForecast}: FormWeatherProps) => {

  const [validInp, setValidInp] = useState(false);

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    setValidInp(false);
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
     if(city) {
      // Запрос на погоду
      const {data} = await getWeatherApi(city);
      const forecastResponse  = await getWeatherForecastApi(city);

      // Сохраняем в State
      setWeatherData(data)
      setForecast(forecastResponse.data.list);
     }

     if(!city) {
      setValidInp(true)
     }
    } catch (error) {
      showAuthError(error)
    }
  }

  // Получаем данные по геолокации
  const getWeatherGeolocationData = async (location: { lat: number; long: number } | null = null) => {
    const {data} = await getWeatherGeolocation(location);
    const forecastResponse = await getForecastGeolocation(location);

    // Сохраняем в State
    setWeatherData(data)
    setForecast(forecastResponse.data.list);
  }

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            getWeatherGeolocationData({
              lat: position.coords.latitude,
              long: position.coords.longitude,
            });
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
  
    }

    getLocation()
  }, []);
  
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          style={validInp ? {borderColor: 'red'}: {}}
          value={city}
          className={styles.form__input} 
          type="text"
          placeholder='Введите город'
          onChange={(e) => onChangeHandle(e)}
        />
        <button className={styles.form__button} type='submit'>Найти</button>
      </form>
    </div>
  )
}