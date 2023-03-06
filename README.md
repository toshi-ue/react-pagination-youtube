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
