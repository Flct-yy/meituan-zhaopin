const path = require('path');
module.exports = {
  // 在这里添加你的配置
  webpack:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  }
};
