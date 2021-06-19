import { AxiosRequestConfig } from 'axios'
import api from '../services/api'

async function getConfectioners(opts: AxiosRequestConfig) {
    const { data } = await api('/best_confectioners', opts)
    const confectioners = data.BestConfectioners.map(({ confectioner }) => {
        return { ...confectioner }
    })
    return confectioners
}
export { getConfectioners }
