import DefaultLayout from 'components/Layout/DefaultLayout'
import Seo from 'components/Seo'
import UserHeader from 'components/User/UserHeader'
import React from 'react'

import * as S from 'styles/pages/dashboard'
function Dashboard() {
    return (
        <DefaultLayout>
            <Seo title="" description="" thumb="" />
            <main>
                <UserHeader />
                <S.Container>
                    <S.WelcomeCards></S.WelcomeCards>
                </S.Container>
            </main>
        </DefaultLayout>
    )
}

export default Dashboard
