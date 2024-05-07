# 概要・目的
出来上がったデザインをどのように実装に落とし込むかを体系的に学ぶ演習

## 状況
- スマート・レシピのデザイン作業が進み、実装側に渡されている(React + Storybook)
- ボタンの実装を進めているが、デザイン通りに実装されていない
    - todo linkはる   
- また、全サイズのボタンがStorybookで確認できない

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


