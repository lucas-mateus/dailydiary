import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData = async (objectDiary) => {

  try {
    const jsonValue = JSON.stringify(objectDiary)
    await AsyncStorage.setItem('@diary_Key', jsonValue)
  } catch (e) {
      console.log('ERROR FROM STORAGE FUNCTION ====> ', e)
  }

}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@diary_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log('ERROR FROM GET DATA FUNCTION ====> ', e)
  }

}

const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }

  console.log('Done.')
}
  


export {storeData, getData, clearAll};