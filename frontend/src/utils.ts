import React from "react";

export const getInitials = (name: string): string => {
  if (name.length === 0) return "-";

  const nameArr = name.split(" ");
  if (nameArr.length === 1) {
    return nameArr[0].charAt(0);
  } else {
    return nameArr[0].charAt(0) + nameArr[nameArr.length - 1].charAt(0);
  }
};

export const handleInputChange =
  (setState: React.Dispatch<React.SetStateAction<any>>) =>
  (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };
