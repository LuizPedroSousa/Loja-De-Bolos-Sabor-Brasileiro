import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef, useState, useEffect } from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import useCustomRipple from '../../../hooks/useCustomRipple'

import { InputGroup } from './styles'

const InputSearchArticles: React.FC = () => {
    const [query, setQuery] = useState('')
    const linkRef = useRef<HTMLAnchorElement>(null)
    useCustomRipple([{ ref: linkRef }])

    const router = useRouter()

    useEffect(() => {
        if (router.query.query) {
            setQuery(router.query.query as string)
        }
    }, [])
    return (
        <InputGroup>
            <input
                type="text"
                value={query}
                name="o que você procura?"
                placeholder="O que você procura?"
                onChange={({ target: { value } }) => setQuery(value)}
            />
            <Link href={'/faq/search?query=' + query}>
                <a ref={linkRef}>
                    <AiOutlineSearch />
                </a>
            </Link>
        </InputGroup>
    )
}

export default InputSearchArticles
