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

- Google OAuthの設定をした
    - things-inc.com内にPrismAdminプロジェクトを作成
        - プロジェクトを管理する必要がある場合は @泉 綿引 or @Yuki Shimizu に追加してもらう
    - 「APIとサービス」→「OAuth同意画面」
        - 「内部」を選択（things-incのアドレスを持つ人のみ）
        - アプリ名：Prism管理画面
        - サポートメール：[izumi.watahiki@things-inc.com](mailto:izumi.watahiki@things-inc.com)
    - 「認証情報」で「認証情報を作成
        - PrismAdminClientを作成し、GOOGLE_CLIENT_IDを発行
        - ↑ログイン時に使用しています
- Viteで `@prism/client` を呼び出せるようにする
    - Viteはesmを前提としているが、prism/clientはcjsでエクスポートされている。このため、configでオプションをつける必要があった 
    [https://ja.vitejs.dev/guide/dep-pre-bundling.html#モノレポとリンクされた依存関係](https://ja.vitejs.dev/guide/dep-pre-bundling.html#%E3%83%A2%E3%83%8E%E3%83%AC%E3%83%9B%E3%82%9A%E3%81%A8%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%95%E3%82%8C%E3%81%9F%E4%BE%9D%E5%AD%98%E9%96%A2%E4%BF%82)
    https://github.com/vitejs/vite/issues/5668#issuecomment-968125763
- サーバーサイドでaccess_tokenの認証
    - authorizationヘッダーにつける
        - login時に以下の処理
        
        ```jsx
        OpenAPI.TOKEN = credential
        ```
        
    
    サーバーサイドは以下を参照
    
    - https://developers.google.com/identity/gsi/web/guides/verify-google-id-token?hl=ja
