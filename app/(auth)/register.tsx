import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  View
} from "react-native";
import CustomText from "src/components/customText";
import CustomButton from "src/components/customButton";
import tw from "twrnc";
import { Fonts } from "@utils/constants";
import CustomInput from "src/components/customInput";

const Register = () => {
  const [mobileNo, setMobileNo] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={tw`flex-1 bg-gray-200`}
    >
      <View style={tw`flex-row justify-end items-center p-4`}>
        <CustomText
          fontFamily={Fonts.PoppinsSemiBold}
        >
          Need Help?
        </CustomText>
      </View>

      <View style={tw`flex-1 justify-end items-center`}>

        <View style={tw`w-full px-8 py-4 bg-white rounded-t-3xl shadow-lg`}>
          <CustomText fontFamily={Fonts.PoppinsBold} style={tw`text-2xl text-center mb-4`}>
            Sign-up to deliver orders with Mazinda
          </CustomText>

          <View style={tw`flex border-2 border-[#DFDFE5] rounded-2xl mb-5 flex-row items-center`}>
            <CustomText fontFamily={Fonts.PoppinsSemiBold} style={tw`mr-2 ml-2`}>+91</CustomText>
            <CustomInput
              fontFamily={Fonts.PoppinsMedium}
              placeholder="Enter mobile number"
              keyboardType="numeric"
              maxLength={10}
              value={mobileNo}
              onChangeText={(text) => {
                const formattedText = text.replace(/[^0-9]/g, '').slice(0, 10);
                setMobileNo(formattedText);
              }}
            />
          </View>

          <CustomButton
            style={tw`${mobileNo.length === 10 ? 'text-white bg-[#EC9226]' : 'text-[#636366] bg-[#DFDFE5]'} rounded-xl mx-auto text-center justify-center p-3 font-extrabold`}
          >
            <CustomText fontFamily={Fonts.PoppinsSemiBold} style={tw`text-center ${mobileNo.length === 10 ? 'text-white' : 'text-[#636366]'}`}>
              Continue
            </CustomText>
          </CustomButton>

        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
