export const getInitials = (name: string): string => {
  const nameArr = name.split(" ");

  switch (nameArr.length) {
    case 0: {
      return "A";
    }
    case 1: {
      return nameArr[0].charAt(0);
    }
    default: {
      return nameArr[0].charAt(0) + nameArr[nameArr.length - 1].charAt(0);
    }
  }
};
