import React, { useRef } from 'react'
import { useCakeCategories } from '../../hooks/useCake'
import useCustomRipple from '../../hooks/useCustomRipple'
import CategoryList from './CategoryList'
import { Category } from './CategoryList/styles'
import { Categories } from './styles'

const MobalCategories: React.FC = () => {
    const categoryTodosRef = useRef<HTMLButtonElement>(null)
    useCustomRipple([{ ref: categoryTodosRef }])
    const { categories } = useCakeCategories()
    return (
        <Categories>
            <ul>
                <Category>
                    <button ref={categoryTodosRef} type="button" name="Todos">
                        Todos
                    </button>
                </Category>
                {categories?.map(category => (
                    <CategoryList key={category.id} category={category} />
                ))}
            </ul>
        </Categories>
    )
}

export default MobalCategories
