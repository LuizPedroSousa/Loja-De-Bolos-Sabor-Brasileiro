import { AxiosRequestConfig } from 'axios'
import api from '../services/api'

type Article = {
    id: string
    title: string
    slug: string
    category: string
    description: string
}

type Category = {
    id: string
    name: string
    slug: string
    articles: Article[]
}

type Solicitation = {
    name: string
    surname: string
    email: string
    reason: string
    subject: string
    description: string
}

async function getArticleCategories(opts?: AxiosRequestConfig) {
    const { data } = await api('/faq/articles/categories', opts)
    return data.categories as Category[]
}

async function getArticleCategory({ slug }: { slug: string }) {
    const { data } = await api('/faq/articles/categories/show/' + slug)
    return data.category as Category
}

async function createSolicitation({
    solicitation
}: {
    solicitation: Solicitation
}) {
    return await api.post(
        '/faq/solicitations/create',
        { ...solicitation },
        {
            method: 'POST'
        }
    )
}

async function getArticles(opts?: AxiosRequestConfig) {
    const { data } = await api('/faq/articles', opts)
    return data.articles as Article[]
}
async function getArticle({ slug }: { slug: string }) {
    const { data } = await api('/faq/articles/show/' + slug)
    return data.article as Article
}

export {
    createSolicitation,
    getArticleCategories,
    getArticleCategory,
    getArticle,
    getArticles
}
