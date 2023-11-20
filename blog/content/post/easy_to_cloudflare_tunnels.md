+++
title = '쉽고 빠르게 CloudFlare Tunnel 설정하기'
date = 2023-11-20T16:46:34+09:00
draft = false
+++

# TL;DR

클라우드 플레어를 통해 쉽게 터널링을 하여 운영하는 웹사이트를 디도스 및 기타 공격 완화, WAF 등의 효과를 지니게 합니다. 또한 당사 ICN 국내 리전을 사용 할 수 있다고 합니다.

# 쉽고 빠르게 클플 터널링 해보기

안녕하세요. 첫 글로써 여러분들을 마주하게 되어서 매우 기쁩니다.
오늘은 클라우드 플레어의 터널링을 보다 쉽게, 여러 도메인을 이용할 수 있게 하는 방법을 알려 드리겠습니다.

우선, [CloudFlare One](https://one.dash.cloudflare.com/)에 들어가서 사용하실 계정으로 로그인 해주세요.

그럼 아래와 같은 화면이 나오실텐데, 왼쪽 사이드 바에서 **Access -> Tunnels**를 눌러주시면 됩니다.

![Alt text](https://cdn.jsdelivr.net/gh/sverdev/blog.sver.dev@latest/blog/static/img/post/easy_to_cloudflare_tunnels/easy_to_cloudflare_tunnels-image-1.png)

누르셨다면 다음과 같은 화면이 출력 될텐데, 전 기존에 만들었던 터널이 있어서 이런식으로 리스트가 뜨지만, 신규 생성의 경우 다르게 뜨거나 연속되는 이미지와 같이 터널을 생성하는 창이 바로 뜰 수 있습니다. 기억상 생성 화면이 먼저 떴던걸로 기억이 나서, 연속되게 이미지를 첨부 했습니다.

![Alt text](https://cdn.jsdelivr.net/gh/sverdev/blog.sver.dev@latest/blog/static/img/post/easy_to_cloudflare_tunnels/easy_to_cloudflare_tunnels-image-2.png)
![Alt text](https://cdn.jsdelivr.net/gh/sverdev/blog.sver.dev@latest/blog/static/img/post/easy_to_cloudflare_tunnels/easy_to_cloudflare_tunnels-image-3.png)
위와 같이 터널 이름을 입력 해주시면 됩니다. 저는 'TEST'로 진행 해보도록 하겠습니다.

![Alt text](https://cdn.jsdelivr.net/gh/sverdev/blog.sver.dev@latest/blog/static/img/post/easy_to_cloudflare_tunnels/easy_to_cloudflare_tunnels-image-4.png)
이름을 정하고 Save Tunnel 버튼을 누르면, 위와 같이 기기와 연동 하는 페이지가 먼저 뜨게 되는데요, **자신의 시스템에 맞게** 선택 하시면 됩니다. 전 Debian-x64 를 연동 할 예정이기 때문에 선택 하였습니다.

그 후, 아래 **'If you don’t have cloudflared installed on your machine:'** 라고 되어 있는 박스 안의 코드를 터미널에 붙여 넣으면, 자동으로 설치가 이루어 집니다.

- 만약 이미 Cloudflared 가 설치 되어 있다면, **'If you already have cloudflared installed on your machine:'** 의 명령어만 붙여 넣으셔도 됩니다.

설치가 되셨다면, Next 버튼을 통해 'Route tunnel'로 가셔서 아래와 같이 사용 하실 **서브도메인, 도메인, Path(필요시), Type, URL**을 설정 해주시면 완료됩니다. 전 예시로 HTTP 프로토콜의 localhost:3000을 라우팅 해보았습니다. 필요하시다면 아래 **'Additional application settings'** 를 통하여 세부 설정을 해줄 수 있습니다.

![Alt text](https://cdn.jsdelivr.net/gh/sverdev/blog.sver.dev@latest/blog/static/img/post/easy_to_cloudflare_tunnels/easy_to_cloudflare_tunnels-image-5.png)

이제 터널링이 완료 되었습니다.
