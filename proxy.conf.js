const proxyConfig = [
  {
    '/dm': {
      target: 'https://192.168.52.167:8443', // * 测试
      // target: 'https://192.168.52.210:8443', // 开发
      // target: 'https://192.168.97.194:8443', // lzg
      // target: 'https://192.168.60.49:8443', // xjl
      // target: 'https://192.168.98.101:8443', // zc
      changeOrigin: true,
      secure: false,
    },
  }
]

module.exports = proxyConfig
