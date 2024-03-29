# README

以下のURLを参考にサンプルアプリケーションでReactとTypeScriptの練習
[ReactとTypescriptでページネーションを実装してみよう【react-paginateを利用】 - YouTube](https://www.youtube.com/watch?v=BBpW5MLw29U&t=1s&ab_channel=%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB)

- viteを使用
- jsonplaceholder を使用
  - [JSONPlaceholder - Free Fake REST API](https://jsonplaceholder.typicode.com/)
    - FakeAPIといわれる種類のサービス
- ページネーション
  - ページネーションの仕組みもわかる
- TypeScript少々
<!-- 実行コマンド履歴

```bash
# Dockerfile、docker-compose.ymlを用意しておく
docker compose build
# viteを使用したReact x TypeScript環境の構築
# 実行するとDockerfile、docker-compose.ymlは削除されるので戻せるように別で保存しておくのがおすすめかも
docker compose run --rm front yarn create vite .
#=> ✔ Current directory is not empty. Remove existing files and continue? … yes
#=> ✔ Select a framework: › React
#=> ✔ Select a variant: › TypeScript
``` -->

## 環境構築、サーバー起動

環境構築

```bash
make setup
```

サーバー構築

```bash
sc up
```

## 備考

- React.js18だとローカル開発環境ではuseEffectは2回呼ばれる（本番環境は1回だけ呼ばれる）。
- Genericsは変数のように型を指定することができる

- 05-pagination
<!-- https://youtu.be/BBpW5MLw29U?t=1187 -->

## 参考

[React + Vite + TypeScript + Docker + docker-compose セットアップ方法 | おすろぐ](https://osu-log.com/archives/379)
[Docker + Vite を使用してReact(TypeScript)の開発環境を構築する | しーしゃーぱー日記](https://koya-tech.com/docker-vite-dev-env/)
[Vite + React環境をDockerで構築する](https://zenn.dev/sg4k0/articles/1da799501d2018)
[Vite + React環境をDockerで構築する](https://zenn.dev/sg4k0/articles/1da799501d2018)
[爆速React+TypeScript+Viteの環境構築 - Qiita](https://qiita.com/mitsu_kuma/items/c2decbf1dafa35f0c144)
[Docker + Vite + React 環境構築](https://zenn.dev/kyosuke_14/scraps/0aa3dfaef5458d)
[yarn cache clean を活用して Docker イメージサイズを削減](https://zenn.dev/elm200/articles/7cfa842a113fb6)
[Docker のキャッシュを全力で使いこなそう](https://zenn.dev/kou64yama/articles/powerful-docker-build-cache)
[Docker内でnode-modules消してしまって環境が壊れた時の対処法 - Qiita](https://qiita.com/kaino5454/items/16658449683d4c33df0e)

[react-paginate - npm](https://www.npmjs.com/package/react-paginate)
[サイトの表示高速化につながる18のこと | knowledge / baigie](https://baigie.me/officialblog/2019/11/26/high-speed-frontend/)
