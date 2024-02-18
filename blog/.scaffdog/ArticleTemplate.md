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

## 自分のストーリー

## 根拠

## 展開
```
