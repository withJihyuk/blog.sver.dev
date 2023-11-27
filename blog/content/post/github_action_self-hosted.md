+++
title = 'Github_action_self Hosted'
date = 2023-11-27T12:23:53+09:00
categories=["homelab"]
draft = true
tags = ["github","docker","self-hosted", "홈랩", "서버"]
+++

# TL;DR

Github action self-hosted를 이용해 로컬 홈랩 서버에서 Docker 이미지를 빌드 하고, 이 이미지를 동작 시킵니다. 이를 통해 CI/CD의 일련의 과정을 구축하는 경험을 가집니다.

# 깃헙 액션을 통하여 쉽고 빠르게 배포하기

안녕하세요. SVER-DEV 입니다. 이번 글에서는 기존에 SFTP를 이용하여 PM2를 이용해 무중단 배포를 진행하고 있던 서비스를, 간편한 배포와 CI/CD를 위해 Github action을 적용 해보았습니다. 이를 통해 서비스 개발 과정에서 자동 배포로 인한 개발자 피로도가 적어져서 글로 그 과정을 남겨둡니다.

>
