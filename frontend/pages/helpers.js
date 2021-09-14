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

export const formatSavedStylesForList = (savedStyles) => {
  let listItems = [];
  for (let key in savedStyles) {
    listItems.push({ title: key });
  }

  return listItems;
};

export const assignSelectThemeValues = (
  defaultThemeSettings,
  selectedThemeSettings
) => {
  for (let key in defaultThemeSettings) {
    const currentSetting = defaultThemeSettings[key].data;
    for (let i = 0; i < currentSetting.length; i++) {
      if (
        Object.keys(selectedThemeSettings).includes(currentSetting[i].styleProp)
      ) {
        currentSetting[i].value =
          selectedThemeSettings[currentSetting[i].styleProp];
      }
    }
  }

  return defaultThemeSettings;
};

export const resetToDefaultSettings = (defaultThemeSettings) => {
  for (let key in defaultThemeSettings) {
    const currentSetting = defaultThemeSettings[key].data;
    for (let i = 0; i < currentSetting.length; i++) {
      currentSetting[i].value = "";
    }
  }

  return defaultThemeSettings;
};

export const getSelectedColor = (data, parentIndex, childIndex, isBorder) => {
  return isBorder && data[parentIndex].data[childIndex].value
    ? `1px solid ${data[parentIndex].data[childIndex].value}`
    : data[parentIndex].data[childIndex].value;
};
