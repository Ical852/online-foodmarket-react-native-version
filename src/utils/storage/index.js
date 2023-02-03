import AsyncStorage from '@react-native-async-storage/async-storage';
import { showError } from '../showMessage'

export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        showError('Failed Store Data to Local : ', e)
    }
}

export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        showError('Failed Get Data From Local : ', e)
    }
}