import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    View,
} from "react-native";
import CustomText from "src/components/customText";
import CustomButton from "src/components/customButton";
import tw from "twrnc";
import { Fonts } from "@utils/constants";
import CustomInput from "src/components/customInput";

const EnterOtp = () => {
    const [otp, setOtp] = useState("");

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={tw`flex-1 bg-white`}
        >
            <View style={tw`flex-row justify-end items-center p-4`}>
                <CustomText
                    fontFamily={Fonts.PoppinsSemiBold}
                >
                    Need Help?
                </CustomText>
            </View>

            <View style={tw`flex-1 m-8`}>
                <CustomText fontFamily={Fonts.PoppinsBold} style={tw`text-2xl  mb-4`}>
                    Enter the OTP sent to 6003155342
                </CustomText>

                <View>
                    <CustomInput
                        fontFamily={Fonts.PoppinsMedium}
                        style={tw`border border-gray-300 rounded-md p-2`}
                        placeholder="otp"
                        keyboardType="numeric"
                        maxLength={4}
                        value={otp}
                        onChangeText={(text) => {
                            const formattedText = text.replace(/[^0-9]/g, '').slice(0, 4);
                            setOtp(formattedText);
                        }} />
                </View>

                <View>
                    <CustomText style={tw`text-center text-[#0A0A0A] mt-4`}>
                        Didn't get OTP? Resend OTP in 00:30
                    </CustomText>
                </View>
                <View style={tw`flex-1 justify-end`}>
                    <CustomButton
                        style={tw`${otp.length === 4 ? 'text-white bg-[#EC9226]' : 'text-[#636366] bg-[#DFDFE5]'} rounded-xl mx-auto text-center justify-center p-3 font-extrabold`}
                    >
                        <CustomText fontFamily={Fonts.PoppinsSemiBold} style={tw`text-center ${otp.length === 4 ? 'text-white' : 'text-[#636366]'}`}>
                            Continue
                        </CustomText>
                    </CustomButton>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default EnterOtp;
