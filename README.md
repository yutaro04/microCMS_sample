# microCMSのサンプルコード

### 参考にした記事
https://blog.microcms.io/microcms-next-jamstack-blog/
※ここから結構アレンジを加えています

## 動作環境
- node: v18.0.0
- microcms-js-sdk: 2.0.0
- next: 12.1.5
- react-dom: 18.1.0
- react: 18.1.0

## 事前準備
- [microCMS](https://microcms.io/)のアカウント作成
- [microCMS](https://microcms.io/)でコンテンツの作成
- package.jsonがある階層に``` .env.development.local ```の作成
  - その内部に``` API_KEY=xxxxxxxxxxx ``` と記述(API_KEYはmicroCMSの「設定」->「APIキー」から確認可能)

## 補足
- index.htmlにて``` getStaticProps ```を使ってmicroCMSのデータを取得しているため、このサンプルアプリはSSG。
