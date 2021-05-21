
const path = require('path')

const withImages = require('next-images')

module.exports = {
    images: {
      domains: ['storage.googleapis.com','scontent.fcgh37-1.fna.fbcdn.net']
    },
    withImage: withImages({
      esModule: true
    })
}