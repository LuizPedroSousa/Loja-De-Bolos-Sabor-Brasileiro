
const path = require('path')

const withImages = require('next-images')

module.exports = {
    images: {
      domains: ['storage.googleapis.com']
    },
    withImage: withImages({
      esModule: true
    })
}