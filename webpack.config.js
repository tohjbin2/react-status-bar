/* eslint-disable no-undef */

/* MEMO: 현재 세팅에는 styled-components가 사용되었다. styled-components 빌드에는 css-loader가 필요하지 않다.
css(혹은 scss)파일을 사용하는 프로젝트의 경우, css-loader 설치를 해야 한다. (css-loader + 혹은 css-loader 등의 조합으로) */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx', // entry: 진입점 (entry point)
  output: {
    // output: 출력(추출) 관련
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    /* MEMO: 'dist'는 './dist'와 같다.
    npm run build를 하면 루트 경로에 'dist'라는 이름의 빌드 파일을 만들어낸다.
    참고로 tsconfig.json에서도 컴파일 경로를 dist로 설정했다. */
    clean: true, // 이를 추가함으로써 빌드할 때, dist폴더에서 오래된 파일 없이 새로 생성된 파일만 볼 수 있다.
  },
  devtool: 'source-map', // devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true, // MEMO: 개발 서버 환경에서, 라우터 새로 고침시 일어나는 404에러 방지
    port: 9000, // MEMO: 포트 지정
    open: true, // MEMO: npm start를 하면 자동으로 새 창을 띄운다. package.json에 있는 scripts의 start 명령어 맨 끝에 --open을 붙인 것과 같은 효과를 가진다.
    hot: true, // MEMO: HRM(Hot Module Replacement의 약자, 새로 고침 안해도 변경된 모듈 자동으로 적용)
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    /* 아래 extensions:
    여기 extensions에 덕분에, import에 확장자로 tsx를 넣지 않아도(생략해도) 에러(빨간색 줄)가 나타나지 않는다. */
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
};
