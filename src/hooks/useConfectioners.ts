import { AxiosRequestConfig } from 'axios'
import { useQuery } from 'react-query'
import api from '../services/api'

type BestConfectioner = {
    id: string
    name: string
    avatar: {
        url: string
    }
}

async function getConfectioners(opts: AxiosRequestConfig) {
    const { data } = await api('/users/best_confectioners', opts)
    return data.confectioners as BestConfectioner[]
}

function useConfectioners() {
    const { data: bestConfectioners } = useQuery(
        ['bestConfectioners', 4],
        async () =>
            await getConfectioners({
                params: {
                    _limit: 4
                }
            })
    )

    return { bestConfectioners }
}

export { getConfectioners, useConfectioners }
