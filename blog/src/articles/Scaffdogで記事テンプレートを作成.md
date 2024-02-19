---
title: Scaffdogで記事テンプレートを作成
date: 2024-02-19T01:57:06.526Z
description: ""
thumbnail: "https://picsum.photos/id/219/1200"
---

## 目的

書くことを習慣化させるために、ハードルをいかに下げるかが重要。
そこで、テンプレートファイル作成ツールの[Scaffdog](https://scaff.dog/)を使って、CLI で簡単に記事のテンプレートを作成できるようにしました。

## やったこと

[scaffdog でテンプレファイルを自動生成する](https://qiita.com/y-natani/items/b8034b2d7c7fbafe63bf)に沿って scaffdog を install

## テンプレートファイル

````markdown
---
name: "ArticleTemplate"
root: "src/articles"
output: "."
questions:
  isNippo:
    confirm: "日報です？"
  title:
    if: inputs.isNippo == false
    message: "タイトルをどうぞ"
---

# `{{ inputs.isNippo ? date("YYYY-MM-DD") : inputs.title }}.md`

```markdown
---

title: {{ inputs.isNippo ? date("YYYY-MM-DD") : inputs.title }}
date: {{date()}}
description: ""
thumbnail: "https://picsum.photos/id/{{date("MDD")}}/1200"

---

## コンテンツ

## 気づき

## 行動
```

```

```
````

日報とそれ以外で分けています。（日報の場合は、日付がタイトルになる）
サムネイルは picsum の適当な ID を拝借。（一年たつと被るのでいい感じの仕組みにしたい。生成 AI を使うなど。）

## P.S.

今書いてて気づいたが、日報とそれ以外とでテンプレートごと分ければよかった...
