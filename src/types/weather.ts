export interface IWeataherDataObj {
  name: string
  main: {
    temp: number
  },
  weather: Array<{
    icon: string
  }>
}

export interface IWeataherDays {
  dt: number,
  dt_txt: string
  main: {
    temp: number
  },
  weather: Array<{
    icon: string
  }>
}

