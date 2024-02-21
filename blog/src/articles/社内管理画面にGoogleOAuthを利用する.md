---
title: 社内管理画面にGoogleOAuthを利用する
date: 2024-02-19T08:54:04.415Z
description: ""
thumbnail: "https://picsum.photos/id/2/1200"
---

## 背景

社内用の管理画面を作ってくれといわれた。
現状はアプリケーション内に管理画面が存在するが、ユーザーは１人しか設定できておらず、パスワードが使い回しになっている。
ログが追えなかったりとセキュリティリスクも高いため、社内のメンバー１人ずつ管理画面用のアカウントを用意したい。
会社は全員 Google アカウントがあるので、Google AOuth での認証が良さそうとなった。

## やったこと　

クライアント側は Refine を使っていて、[初期化時に GoogleOAuth を入れた](https://refine.dev/docs/examples/auth-provider/google-auth/)。

GCP 側の設定は[この動画](https://www.youtube.com/watch?v=HtJKUQXmtok&ab_channel=CooperCodes)が簡潔でわかりやすかった。

動画と変えたところとしては以下の 2 点

- 社内向けなので`Internal`を選択
- localhost で認証完了後にエラーがでてしまったので調べたところ、「認証済みオリジン」に 2 つ指定しないといけないらしい
  > localhost を使用する場合は、`http://localhost:5173` と `http://localhost` の 2 つの URI を追加する必要があります。

(Refine のデフォルトポート番号は 5173 だった)
