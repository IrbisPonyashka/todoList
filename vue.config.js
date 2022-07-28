const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/todoList/'
  : '/'
})

// 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