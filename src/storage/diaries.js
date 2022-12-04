import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (diaries) => {

    try {
      const jsonDiaries = JSON.stringify(diaries)
      await AsyncStorage.setItem('@diaries_key', jsonDiaries)
    } catch (e) {
      console.log("ERROOOOOOOOOOOR:::!!!!", e)
    }
  }


const getData = async () => {
    
    try {
      const jsonDiaries = await AsyncStorage.getItem('@diaries_key')
      return jsonDiaries != null ? JSON.parse(jsonDiaries) : null;
    } catch(e) {
      console.log("ERROOOOOOOOOOOR:::!!!!", e)
    }
}
  


export default diaryStorage