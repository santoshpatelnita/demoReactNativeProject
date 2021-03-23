import { Dimensions, Platform } from "react-native";

//Screen Constatnts
const SCREEN_HEIGHT = Platform.OS === 'ios' ? Dimensions.get('window').height : Dimensions.get('window').height <= 550 ? 667 : Dimensions.get('window').height;
const SCREEN_WIDTH = 375;

const { height, width } = Dimensions.get("window");

/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */
export default function(units = 1) {
  return (width / SCREEN_WIDTH) * units;
}

const verticalScale = (size: number) => (height / SCREEN_HEIGHT) * size;

export { verticalScale };
