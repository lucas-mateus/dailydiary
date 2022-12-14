import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (newObjectDiaries) => {
  try {
    const oldDiaries = await getData();
    const jsonValue = JSON.stringify([newObjectDiaries, ...oldDiaries]);
    await AsyncStorage.setItem("@diary", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@diary");
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log(e);
  }
};

const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }
};

export { storeData, getData, clearAll };
