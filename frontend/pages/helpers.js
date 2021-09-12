export const convertToHumanForm = (value) => {
  switch (value) {
    case "titleBar":
      return "Title Bar";
    case "activityBar":
      return "Activity Bar";
    case "sideBar":
      return "Side Bar";
    case "statusBar":
      return "Status Bar";
    case "terminal":
      return "Terminal";
    case "editor":
      return "Editor";
  }
};

export const formatStylings = (stylesObj) => {
  let formattedData = {};

  for (let i = 0; i < stylesObj.length; i++) {
    const item = stylesObj[i].data;
    for (let j = 0; j < item.length; j++) {
      if (item[j].value.length) {
        formattedData[item[j].styleProp] = item[j].value;
      }
    }
  }

  return formattedData;
};
