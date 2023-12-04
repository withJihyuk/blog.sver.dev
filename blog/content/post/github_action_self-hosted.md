+++
title = 'Github action self-hosted를 이용한 도커 빌드 및 배포'
date = 2023-11-27T12:23:53+09:00
categories=["homelab"]
draft = false
tags = ["github","docker","self-hosted", "홈랩", "서버"]
+++

# TL;DR

Github action self-hosted를 이용해 로컬 홈랩 서버에서 Docker 이미지를 빌드 하고, 이 이미지를 동작 시킵니다. 이를 통해 CI/CD 과정을 구축하는 경험을 가집니다.

# 깃헙 액션을 통하여 쉽고 빠르게 배포하기

안녕하세요. SVER-DEV 입니다. 이번 글에서는 기존에 SFTP를 이용하여 PM2를 이용해 무중단 배포를 진행하고 있던 서비스를, 간편한 배포와 CI/CD를 위해 Github action을 적용 해보았습니다. 이를 통해 서비스 개발 과정에서 자동 배포로 인한 개발자 피로도가 적어져서 글로 해당 과정을 남겨둡니다.

> 해당 과정을 진행하기 위해선, 자체적으로 사용하실 서버를 준비 하셔야 합니다. 전 Ubuntu 20.04 ARM64 서버로 진행 했습니다.

- 우선, 배포 하실 repositories의 Settings -> Actions -> Runners 에 들어가줍니다. 메뉴 순서는 아래 이미지에서 밑줄된 곳과 같습니다.

  ![Alt text](https://cdn.jsdelivr.net/gh/sverdev/blog.sver.dev@latest/blog/static/img/post/github_action_self-hosted/github_action_self-hosted-1.png)

- 다음으로, 위의 이미지상에서 'New self-hosted runner'를 클릭하여 아래와 같은 페이지에 진입 해줍니다.

  ![Alt text](https://cdn.jsdelivr.net/gh/sverdev/blog.sver.dev@latest/blog/static/img/post/github_action_self-hosted/github_action_self-hosted-2.png)

- 구동할 서버의 운영체제에 맞게 Runner Image를 고르고, Architecture 또한 골라줍니다. 그럼 아래 각각 과정에 맞는 Download, Configure 의 명령어가 뜰텐데요. 그대로 붙여넣기 해주시면 됩니다! 해당 과정은 별게 없어서 넘어가도록 하겠습니다.

> 다음으로, 실제 레포에서 dockerfile 작성 및 github-action.yml 파일을 작성 해보도록 하겠습니다.

```
FROM arm64v8/node:lts-alpine3.18

ARG TOKEN
ARG CLIENTID
ARG GUILDID
ARG DATABASE_URL
ARG NEISKEY
ARG GITHUBTOKEN

ENV TOKEN=$TOKEN
ENV CLIENTID=$CLIENTID
ENV GUILDID=$GUILDID
ENV DATABASE_URL=$DATABASE_URL
ENV NEISKEY=$NEISKEY
ENV GITHUBTOKEN=$GITHUBTOKEN

ENV TZ=Asia/Seoul

WORKDIR /usr/app
COPY ./ ./
RUN npm install

CMD ["node", "main.js"]
```

- 위 dockerfile은 저희 배포 환경 상 필요한 값들을 담았습니다.
  저희 같은 경우 ARG로 여러 환경 변수를 담고, 시간대 문제로 인하여 TZ 환경변수를 Asia/Seoul로 지정 해주었습니다.

  그 후, Github 레포 상의 action yml 파일을 작성 해보도록 하겠습니다.

```
  name: Build and Run Locally

  on: # release를 제외한 branches로 실행 조건을 지정합니다.
    push:
      branches-ignore:
        - "release"
    pull_request:
      branches-ignore:
        - "release"

  jobs:
    build-and-run-locally:
      runs-on: [self-hosted, Linux]

      env: # 환경변수
        TOKEN: ${{ secrets.TOKEN }}
        CLIENTID: ${{ secrets.CLIENTID }}
        GUILDID: ${{ secrets.GUILDID }}
        DATABASE_URL: ${{ secrets.DATABASE_URL }}
        NEISKEY: ${{ secrets.NEISKEY }}
        GITHUBTOKEN: ${{ secrets.GITHUBTOKEN }}

      steps:
        - name: Checkout Repository
          uses: actions/checkout@v2

        - name: Set up Node.js # 해당 부분은 불필요할 가능성이 높습니다. 추후 수정 예정
          uses: actions/setup-node@v3
          with:
            node-version: "20.9.0"

        - name: Remove existing container and image # 전 지속적 배포를 원했기에, 배포 빌드 전 기존에 존재하는 이미지와 컨테이너를 삭제 해보도록 해두었습니다. || true 를 작성하여 실패시에도 게속 다음 단계로 진행 됩니다.
          run: |
            docker stop corn-bot || true
            docker rm corn-bot || true
            docker image rm corn-bot:latest || true
            docker ps -a --filter ancestor=moby/buildkit:buildx-stable-1 -q | xargs -r docker rm -f || true

        - name: Build Docker Image
          run: |
            docker buildx create --use
            docker buildx inspect --bootstrap
            docker buildx build \
              --platform linux/arm64 \
              --build-arg TOKEN=$TOKEN \
              --build-arg CLIENTID=$CLIENTID \
              --build-arg GUILDID=$GUILDID \
              --build-arg DATABASE_URL=$DATABASE_URL \
              --build-arg NEISKEY=$NEISKEY \
              --build-arg GITHUBTOKEN=$GITHUBTOKEN \
              --build-arg NETWORK=my-bridge-network \
              --load \
              -t corn-bot:latest . # 태그

        - name: Run Locally # 지정해두었던 태그 이미지를 통해 로컬상에서 실행합니다.
          run: docker run -d --name corn-bot --network my-bridge-network corn-bot:latest

```

- 오류가 있을 수 있습니다. 조심 하여 사용 해주세요.

저와 같은 경우, 위에서 작성 하였던 도커 파일을 빌드 후 로컬상으로의 배포가 목적이였기 때문에 따로 도커 레지스트리로의 push 없이, 로컬에서 load 하여 사용 하는 방식을 사용 하려고 위와 같은 방식으로 제작 하였습니다. 본인의 제작 목표에 따라, 원하시는 action yml 파일을 작성 하시면 됩니다.

## 저는 이런 부분에서 막혔어요!

해당 action yml 파일을 작성할 때, 배포 후 컨테이너가 네트워크에 접속 하지 못하거나 빌드 중에도 이미지를 가져오지 못하는 경우가 발생 하였습니다. 해당 경우, 방화벽 룰 정리와 함께 네트워크 어답터 추가 생성 -> 어답터를 yml 파일에 지정 해주는 방식으로 해결 하였습니다.

## 다음 목표는?

추후 글로는 웹서버 또한 이런식으로 배포 해보는 글을 작성 해보도록 하겠습니다.
