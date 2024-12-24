import { Link } from "expo-router";
import { View, Text } from "react-native";
import tailwind from "twrnc";
import React, { useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { loadFonts } from "../src/config/font";
import { Fonts } from "@utils/constants";
import CustomText from "../src/components/customText";
import tw from 'twrnc'
SplashScreen.preventAutoHideAsync();

function RootLoading() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  React.useEffect(() => {
    const prepare = async () => {
      await loadFonts();
      setFontsLoaded(true);
      SplashScreen.hideAsync();
    };

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <CustomText
        fontFamily={Fonts.PoppinsItalic}
      >
        Main page
      </CustomText>

      <Link href='/(auth)/register'>Register here</Link>
      <Link href='/(auth)/enterOtp'>Enter otp</Link>
      <Link href='/(auth)/createProfile'>Create Profile</Link>
    </View>
  );
}

export default RootLoading;



