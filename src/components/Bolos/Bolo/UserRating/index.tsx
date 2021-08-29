import Image from 'next/image'
import React from 'react'
import Rating from '@material-ui/lab/Rating'
import * as S from './styles'

type Photo = {
    id: string
    url: string
}

type Avatar = Photo & {}

type User = {
    id: string
    name: string
    surname: string
    avatar: Avatar
}

type CakeRating = {
    id: string
    title: string
    description: string
    user: User
    stars: number
    insertedAt: string
}

interface UseRatingProps {
    rating: CakeRating
}

const UserRating: React.FC<UseRatingProps> = ({ rating }) => {
    return (
        <S.Container>
            <header>
                <S.UserInfo>
                    <S.UserAvatar>
                        <Image
                            src={rating.user.avatar.url}
                            alt={rating.user.name}
                            width={400}
                            height={500}
                            objectFit="cover"
                        />
                    </S.UserAvatar>
                    <S.UserName>
                        <strong>{rating.user.name}</strong>
                        <S.RatingStars>
                            <Rating readOnly value={rating.stars} />
                            <strong>{rating.stars}</strong>
                        </S.RatingStars>
                    </S.UserName>
                    <S.InsertedAt>{rating.insertedAt} atras.</S.InsertedAt>
                </S.UserInfo>
            </header>
            <div>
                <strong>{rating.title}</strong>
            </div>
            <footer>
                <p>{rating.description}</p>
            </footer>
        </S.Container>
    )
}

export default UserRating
