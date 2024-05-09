import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * ボタンコンポーネント
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  //Primaryかどうかに応じて、modeを変更する
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      //ベースのclassNameとpropsを適用する
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " ",
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};