import React, { useState, useCallback } from 'react'
import { useSpring, animated, config } from '@react-spring/web'

const Form = ({
    initialSize = '60px',
    expandedSize = '300px',
    initialColor = 'rgb(30 64 175)',
    expandedColor = 'white',
    buttonText = 'Open',
    children,
    className = '',
    style = {}
}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = useCallback(() => {
        if (!isOpen) {
            setIsOpen(true)
            onOpen?.()
        }
    }, [isOpen])

    const { size, background, borderRadius } = useSpring({
        size: isOpen ? expandedSize : initialSize,
        background: isOpen ? expandedColor : initialColor,
        borderRadius: isOpen ? '15px' : '30px',
        config: config.stiff
    })

    return (
        <animated.div
            className={`shadow-lg flex items-center justify-center overflow-hidden ${className}`}
            style={{
                width: size,
                height: size,
                background,
                borderRadius,
                cursor: isOpen ? 'default' : 'pointer',
                ...style
            }}
            onClick={handleOpen}
        >
            {!isOpen && <span className="text-white z-10">{buttonText}</span>}
            {isOpen && children}
        </animated.div>
    )
}

export default Form

    // <div className='bg-Teal text-white mx-5 h-[70vh] rounded-md'></div>
