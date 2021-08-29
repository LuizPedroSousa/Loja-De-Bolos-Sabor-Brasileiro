import Cookies from 'js-cookie'
import {
    GetServerSideProps,
    GetServerSidePropsContext,
    GetServerSidePropsResult
} from 'next'

function withAuth<P>(fn: GetServerSideProps<P>) {
    return async (
        ctx: GetServerSidePropsContext
    ): Promise<GetServerSidePropsResult<P>> => {
        const cookies = ctx.req.cookies
        if (!cookies['access-token'] && !cookies['refresh-token']) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false
                }
            }
        }

        try {
            return await fn(ctx)
        } catch (err) {
            if (err) {
                Cookies.remove('refresh-token')
                Cookies.remove('access-token')
                return {
                    redirect: {
                        destination: '/',
                        permanent: false
                    }
                }
            }
        }
    }
}

export { withAuth }
