import React, { useEffect, useState } from 'react'

import { Checkbox } from './styles'

interface CheckboxDotProps {
    isChecked: boolean
    onChange: () => void
    onCheckedChange: () => void
}
const CheckboxDot: React.FC<CheckboxDotProps> = ({
    isChecked,
    onChange,
    onCheckedChange
}) => {
    const [checked, setChecked] = useState<boolean>(false)

    useEffect(() => {
        setChecked(isChecked)
        onCheckedChange()
    }, [isChecked])
    return (
        <Checkbox onClick={onChange} isChecked={checked} type="button">
            <span />
        </Checkbox>
    )
}

export default CheckboxDot
