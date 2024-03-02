import axios from "axios";

const API_KEY = '8d2a110b6ad468ae1a0e459757cf659d';

  // Получаем текущую погоду
export const getWeatherApi = async (city: string) => {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );

}

// Дни 
export const getWeatherForecastApi = async (city: string) => {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
  );
}

export const getWeatherGeolocation = async (location: { lat: number; long: number } | null = null) => {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location?.lat}&lon=${location?.long}&appid=${API_KEY}`
  );
}

export const getForecastGeolocation = async (location: { lat: number; long: number } | null = null) => {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${location?.lat}&lon=${location?.long}&appid=${API_KEY}`
  );
}


