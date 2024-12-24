import * as Font from "expo-font";

export const fonts = {
  PoppinsBlack: require("assets/fonts/Poppins-Black.ttf"),
  PoppinsBold: require("assets/fonts/Poppins-Bold.ttf"),
  PoppinsExtraBold: require("assets/fonts/Poppins-ExtraBold.ttf"),
  PoppinsExtraLight: require("assets/fonts/Poppins-ExtraLight.ttf"),
  PoppinsItalic: require("assets/fonts/Poppins-Italic.ttf"),
  PoppinsLight: require("assets/fonts/Poppins-Light.ttf"),
  PoppinsMedium: require("assets/fonts/Poppins-Medium.ttf"),
  PoppinsRegular: require("assets/fonts/Poppins-Regular.ttf"),
  PoppinsSemiBold: require("assets/fonts/Poppins-SemiBold.ttf"),
  PoppinsThin: require("assets/fonts/Poppins-Thin.ttf"),
};

export const loadFonts = async () => {
  return Font.loadAsync({
    "Poppins-Black": fonts.PoppinsBlack,
    "Poppins-Bold": fonts.PoppinsBold,
    "Poppins-Italic": fonts.PoppinsItalic,
    "Poppins-Regular": fonts.PoppinsRegular,
    "Poppins-ExtraBold": fonts.PoppinsExtraBold,
    "Poppins-ExtraLight": fonts.PoppinsExtraLight,
    "Poppins-Light": fonts.PoppinsLight,
    "Poppins-Medium": fonts.PoppinsMedium,
    "Poppins-SemiBold": fonts.PoppinsSemiBold,
    "Poppins-Thin": fonts.PoppinsThin
  });
};
