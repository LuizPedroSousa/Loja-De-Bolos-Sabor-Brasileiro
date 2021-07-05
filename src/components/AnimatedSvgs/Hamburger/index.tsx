import { motion } from 'framer-motion'
import React from 'react'

const Hamburger: React.FC = () => {
    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        firstLine: {
            x: [-40, 10, 0],
            opacity: 1,
            pathLength: 1,
            transition: { duration: 1 }
        },
        secondLine: {
            x: [30, 10, 0],

            opacity: 1,
            pathLength: 1,
            transition: { duration: 1, delay: 0.25 }
        },
        thirdLine: {
            x: [-50, 10, 0],
            opacity: 1,
            pathLength: 1,
            transition: { duration: 1, delay: 0.5 }
        }
    }

    return (
        <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 54 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                initial="hidden"
                animate="firstLine"
                variants={pathVariants}
                id="Vector"
                d="M52.312 45.2152H18.562C17.6304 45.2152 16.8745 46.6622 16.8745 48.4448C16.8745 50.2276 17.6306 51.6744 18.562 51.6744H52.312C53.2435 51.6744 53.9994 50.2274 53.9994 48.4448C53.9996 46.6619 53.2435 45.2152 52.312 45.2152Z"
                fill="currentColor"
            />
            <motion.path
                initial="hidden"
                animate="secondLine"
                variants={pathVariants}
                id="Vector_2"
                d="M52.3125 22.6075H1.68746C0.755921 22.6075 0 24.0546 0 25.8371C0 27.6197 0.756061 29.0667 1.68746 29.0667H52.3125C53.2441 29.0667 54 27.6197 54 25.8371C54 24.0546 53.2441 22.6075 52.3125 22.6075Z"
                fill="currentColor"
            />
            <motion.path
                initial="hidden"
                animate="thirdLine"
                variants={pathVariants}
                id="Vector_3"
                d="M1.68746 6.45918H52.3125C53.2441 6.45918 54 5.01218 54 3.22959C54 1.44674 53.2439 0 52.3125 0H1.68746C0.755921 0 0 1.44701 0 3.22959C0 5.01218 0.756061 6.45918 1.68746 6.45918Z"
                fill="currentColor"
            />
        </motion.svg>
    )
}

export default Hamburger
