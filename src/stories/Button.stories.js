// コンポーネントファイルを読み込む
import { Button } from "./Button";

/* Storyとして確認する対象のComponentを定義*/
export default {
  //titleは階層構造を表現できる
  title: "Example/Button",
  component: Button,
};

/* Story単位で定義する  */
// PrimaryのStory
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

// SecondaryのStory
export const Secondary = {
  args: {
    label: "Button",
  },
};
