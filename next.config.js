const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const imagePlugin = withImages({
    esModule: true,
})

const nextConfig = {
    images: {
        domains: ['storage.googleapis.com','scontent.fcgh37-1.fna.fbcdn.net', 'static-images.ifood.com.br']
    },

    env: {
        MAP_BOX_TOKEN: process.env.MAP_BOX_TOKEN,
    }
}

module.exports = withPlugins([imagePlugin, nextConfig])