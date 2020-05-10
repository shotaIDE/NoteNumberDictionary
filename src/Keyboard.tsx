import React from "react";
import classes from "./Keyboard.module.css";
import { KeyType, keyboards } from "./Definitions";

const getKeyboardRow = (
  previous: KeyType,
  current: KeyType,
  next: KeyType,
  labels: string[]
): any => {
  const displayKey = labels[0];
  const displayLabels = (rowSpan: number) =>
    labels.map((label, index) => {
      return (
        <td key={`label_${index}`} rowSpan={rowSpan}>
          {label}
        </td>
      );
    });

  if (current === "black") {
    return [
      <tr key={`${displayKey}_highPart`}>
        <td className={classes.blackHighPart}></td>
        <td className={classes.whiteFrontLowPart}></td>
        {displayLabels(2)}
      </tr>,
      <tr key={`${displayKey}_lowPart`}>
        <td className={classes.blackLowPart}></td>
        <td className={classes.whiteFrontHighPart}></td>
      </tr>,
    ];
  }
  if (previous === "black" && next === "white") {
    return [
      <tr key={displayKey}>
        <td className={classes.whiteBackHighPartOfTwoThirdsHeight}></td>
        <td className={classes.whiteFrontLowPartOfOneThirdsHeight}></td>
        {displayLabels(1)}
      </tr>,
    ];
  }
  if (previous === "white" && next === "black") {
    return [
      <tr key={displayKey}>
        <td className={classes.whiteBackLowPartOfTwoThirdsHeight}></td>
        <td className={classes.whiteFrontHighPartOfOneThirdsHeight}></td>
        {displayLabels(1)}
      </tr>,
    ];
  }
  return [
    <tr key={displayKey}>
      <td className={classes.whiteBackMiddlePart}></td>
      <td className={classes.whiteFrontMiddlePart}></td>
      {displayLabels(1)}
    </tr>,
  ];
};

export const Keyboard = () => {
  const contents = keyboards.flatMap((keyboard, index, allKeyboard) => {
    const previousKeyType: KeyType =
      index >= 1 ? allKeyboard[index - 1].keyType : "white";
    const currentKeyType: KeyType = keyboard.keyType;
    const nextKeyType: KeyType =
      index < allKeyboard.length - 1 ? allKeyboard[index + 1].keyType : "white";

    return getKeyboardRow(
      previousKeyType,
      currentKeyType,
      nextKeyType,
      keyboard.labels
    );
  });

  return (
    <table className={classes.base}>
      <thead>
        <tr>
          <td colSpan={2}>擬似鍵盤</td>
          <td>MIDIノート番号</td>
          <td>国際式</td>
          <td>Yamaha式</td>
          <td>日本ローカル式</td>
        </tr>
      </thead>
      <tbody>{contents}</tbody>
    </table>
  );
};
