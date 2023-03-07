# README

実行コマンド

```bash
# Dockerfile、docker-compose.ymlを用意しておく
docker compose build
# viteを使用したReact x TypeScript環境の構築
# 実行するとDockerfile、docker-compose.ymlは削除されるので戻せるように別で保存しておくのがおすすめかも
docker compose run --rm front yarn create vite .
#=> ✔ Current directory is not empty. Remove existing files and continue? … yes
#=> ✔ Select a framework: › React
#=> ✔ Select a variant: › TypeScript
```

## 参考

[React + Vite + TypeScript + Docker + docker-compose セットアップ方法 | おすろぐ](https://osu-log.com/archives/379)
[Docker + Vite を使用してReact(TypeScript)の開発環境を構築する | しーしゃーぱー日記](https://koya-tech.com/docker-vite-dev-env/)
[Vite + React環境をDockerで構築する](https://zenn.dev/sg4k0/articles/1da799501d2018)
[Vite + React環境をDockerで構築する](https://zenn.dev/sg4k0/articles/1da799501d2018)
