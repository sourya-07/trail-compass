import AsyncStorage from "@react-native-async-storage/async-storage";
const KEY = "TRAIL_COMPASS_PINS_V1";

// TODO: Load the saved pins
export async function loadPins() {
  try {
    const data = await AsyncStorage.getItem(KEY);
    if (data){
      return JSON.parse(data)
    }else{
      return [];
    }

  } catch {
    console.error("Error loading pins:", error)
    return [];
  }
}

// TODO: Save the pins locally
export async function savePins(pins) {
  try {
    const data = JSON.stringify(pins);
    await AsyncStorage.setItem(KEY, data);
  } catch {
    console.error("Error loading pins:", error)
  }
}