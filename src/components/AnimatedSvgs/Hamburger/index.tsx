import React from 'react'

export type ActiveHrefType = '/' | '/bolos' | '/contato' | '/encomendar'

interface HamburgerProps {
    activePage: ActiveHrefType
}
const Hamburger: React.FC<HamburgerProps> = ({ activePage }) => {
    if (activePage !== '/') {
        return (
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 54 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="Hamburguer">
                    <g id="first_line">
                        <path
                            id="Vector"
                            d="M52.312 45.2152H18.562C17.6304 45.2152 16.8745 46.6622 16.8745 48.4448C16.8745 50.2276 17.6306 51.6744 18.562 51.6744H52.312C53.2435 51.6744 53.9994 50.2274 53.9994 48.4448C53.9996 46.6619 53.2435 45.2152 52.312 45.2152Z"
                            fill="#707070"
                        />
                    </g>
                    <g id="second_line">
                        <path
                            id="Vector_2"
                            d="M52.3125 22.6075H1.68746C0.755921 22.6075 0 24.0546 0 25.8371C0 27.6197 0.756061 29.0667 1.68746 29.0667H52.3125C53.2441 29.0667 54 27.6197 54 25.8371C54 24.0546 53.2441 22.6075 52.3125 22.6075Z"
                            fill="#707070"
                        />
                    </g>
                    <g id="third_line">
                        <path
                            id="Vector_3"
                            d="M1.68746 6.45918H52.3125C53.2441 6.45918 54 5.01218 54 3.22959C54 1.44674 53.2439 0 52.3125 0H1.68746C0.755921 0 0 1.44701 0 3.22959C0 5.01218 0.756061 6.45918 1.68746 6.45918Z"
                            fill="#707070"
                        />
                    </g>
                </g>
            </svg>
        )
    }
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 23 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="Hamburger">
                <g id="first_line">
                    <path
                        id="Vector"
                        d="M21.8322 22.2473H7.74673C7.35796 22.2473 7.04248 22.9474 7.04248 23.8098C7.04248 24.6723 7.35802 25.3722 7.74673 25.3722H21.8322C22.2209 25.3722 22.5364 24.6722 22.5364 23.8098C22.5365 22.9472 22.2209 22.2473 21.8322 22.2473Z"
                        fill="white"
                    />
                </g>
                <g id="second_line">
                    <path
                        id="Vector_2"
                        d="M21.8324 11.3098H0.704254C0.31548 11.3098 0 12.0099 0 12.8723C0 13.7347 0.315539 14.4347 0.704254 14.4347H21.8324C22.2212 14.4347 22.5367 13.7347 22.5367 12.8723C22.5367 12.0099 22.2212 11.3098 21.8324 11.3098Z"
                        fill="white"
                    />
                </g>
                <g id="third_line">
                    <path
                        id="Vector_3"
                        d="M0.704254 3.49725H21.8324C22.2212 3.49725 22.5367 2.79719 22.5367 1.93478C22.5367 1.07224 22.2211 0.372314 21.8324 0.372314H0.704254C0.31548 0.372314 0 1.07237 0 1.93478C0 2.79719 0.315539 3.49725 0.704254 3.49725Z"
                        fill="white"
                    />
                </g>
            </g>
        </svg>
    )
}

export default Hamburger
