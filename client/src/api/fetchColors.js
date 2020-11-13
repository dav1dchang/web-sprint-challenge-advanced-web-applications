import { axiosWithAuth } from '../utils/axiosWithAuth';

export const fetchColors = () => {
    axiosWithAuth()
      .get('/colors')
      .then(res => {
        return res
      })
      .catch(err => {
        console.log(err)
      })
}