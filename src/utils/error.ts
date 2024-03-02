import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

enum HTTPStatus {
  NOT_FOUND = 404,
}

// В компоненте когда отправляем запрос в catch контейнере вызываем эту функцию и передаем оттуда error
export const showAuthError = (error: unknown) => {
  const axiosError = error as AxiosError


  if (axiosError.response) {
    if (axiosError.response.status === HTTPStatus.NOT_FOUND) {
      toast.error('Такого города нет!')
      return
    }
  }
}

