# 概要・目的
- 出来上がったデザインをどのように実装に落とし込むかを体系的に学ぶ演習
- 実際にReact + StoryBookを実装する



## 目標
- 最新のボタンデザインを実装し、Storybookで反映されていることが確認できる状態
    - 背景色には決定したプライマリカラーを使用する
- 全サイズのボタンをStorybookで確認できる状態

## 実装関連

### ディレクトリ構成

対象のファイルは以下です

```
.
└── src
    └── stories
        └── button.css
        ├── Button.jsx
        └── Button.stories.js
```

### Storybook

- [特定の状態(story)のコンポーネントを描画する方法](https://qiita.com/masakinihirota/items/ac552b8b492d2b962818#storybook%E3%81%A7%E6%9C%80%E5%B0%8F%E9%99%90%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%92%E4%BD%9C%E3%82%8B)

### CSS

- [角を丸める方法](https://developer.mozilla.org/ja/docs/Web/CSS/border-radius)
- [文字を太くする方法](https://developer.mozilla.org/ja/docs/Web/CSS/@font-face/font-weight)
- [背景色を変更する方法](https://developer.mozilla.org/ja/docs/Web/CSS/background-color)

## ローカルで作業する手順

- 前提
  - node,npmがinstall済み

1. 任意の作業フォルダに移動
2. 以下のコマンドで、リポジトリを取得
`git clone https://github.com/otsukatatsuya/storybook-example-public.git`
3. 任意のIDEを用いて、そちらを開く
4. ルートで、以下のコマンドを実行
`npm i`
`npm run storybook`
5. webサーバーが立ち上がり、正常に閲覧できることを確認する
