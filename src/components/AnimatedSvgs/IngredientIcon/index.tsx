import { motion } from 'framer-motion'
import React from 'react'

const IngredientIcon: React.FC = () => {
    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {
            x: [-50, 10, 0],
            opacity: 1,
            pathLength: 1,
            transition: { duration: 1 }
        }
    }
    return (
        <motion.svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0.5, y: 5 }}
            animate={{
                opacity: [null, 1],
                y: [null, 0],
                transition: {
                    repeat: Infinity,
                    duration: 2,
                    repeatType: 'mirror'
                }
            }}
            width="100%"
            height="100%"
            viewBox="0 0 949.984 949.984"
            xmlSpace="preserve"
        >
            <g>
                <motion.path
                    initial="hidden"
                    animate="visible"
                    variants={pathVariants}
                    d="M623.393,949.092c13.899,0,25.1-11.299,25.1-25.1v-49.799c-55,19.699-113.6,30.1-173.5,30.1s-118.6-10.301-173.5-30.1
			v49.799c0,13.9,11.3,25.1,25.1,25.1H623.393z"
                    fill="currentColor"
                />
                <motion.path
                    initial="hidden"
                    animate="visible"
                    variants={pathVariants}
                    d="M882.292,115.292c-40.6-30.2-98-21.8-128.3,18.8l-180.6,242.7h228.6l99.1-133.2
			C931.292,202.993,922.893,145.593,882.292,115.292z"
                    fill="currentColor"
                />
                <motion.path
                    initial="hidden"
                    animate="visible"
                    variants={pathVariants}
                    d="M310.292,849.492c51.3,18.5,106.8,28.5,164.7,28.5s113.4-10,164.7-28.5c168.899-60.699,292.899-212.699,310.1-398.599
			c2.4-25.7-18-47.9-43.8-47.9h-123.6h-228.5h-509.9c-25.8,0-46.2,22.2-43.8,47.9C17.392,636.793,141.392,788.793,310.292,849.492z"
                    fill="currentColor"
                />
                <motion.polygon
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                        opacity: [null, 1],
                        y: [null, 0],
                        transition: {
                            repeat: Infinity,
                            duration: 0.5,
                            repeatType: 'mirror'
                        }
                    }}
                    points="155.692,239.893 190.292,155.693 279.092,116.792 189.592,82.693 155.692,0.893 121.692,82.693 32.192,116.792
			120.992,155.693 		"
                    fill="currentColor"
                />
            </g>
        </motion.svg>
    )
}

export default IngredientIcon
