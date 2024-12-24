import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native';
import CustomText from "src/components/customText";
import CustomButton from "src/components/customButton";
import tw from "twrnc";
import { Fonts } from "@utils/constants";
import CustomInput from "src/components/customInput";
import Checkbox from "expo-checkbox";
import { ChevronDown, ChevronUp } from "lucide-react-native";

const CITIES = [
    "Delhi",
    "Mumbai",
    "Bangalore"
];

const CreateProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [activeInput, setActiveInput] = useState(null);
    const [gender, setGender] = useState('');
    const [showCityDropdown, setShowCityDropdown] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');

    const allFieldsFilled = firstName !== '' && lastName !== '' && gender !== '' && selectedCity !== '';

    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender === gender ? '' : selectedGender);
    };

    const handleCitySelect = (city) => {
        setSelectedCity(city);
        setShowCityDropdown(false);
        setActiveInput(null);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={tw`flex-1 bg-white`}
        >
            <View style={tw`flex-row justify-end items-center p-4`}>
                <CustomText fontFamily={Fonts.PoppinsSemiBold}>
                    Need Help?
                </CustomText>
            </View>

            <ScrollView style={tw`flex-1`} contentContainerStyle={tw`pb-10`}>
                <View style={tw`m-10`}>
                    <CustomText fontFamily={Fonts.PoppinsBold} style={tw`text-2xl mb-4`}>
                        Create your profile
                    </CustomText>

                    <View style={tw`mb-6`}>
                        <CustomInput
                            label="First Name"
                            value={firstName}
                            onFocus={() => setActiveInput('firstName')}
                            onBlur={() => setActiveInput(null)}
                            onChangeText={(text) => setFirstName(text)}
                            style={tw`${activeInput === 'firstName' ? 'border-orange-500' : 'border-gray-300'} border-2 rounded-xl`}
                            labelStyle={tw`${activeInput === 'firstName' ? 'text-orange-500' : 'text-black'}`}
                        />
                    </View>

                    <View style={tw`mb-6`}>
                        <CustomInput
                            label="Last Name"
                            value={lastName}
                            onFocus={() => setActiveInput('lastName')}
                            onBlur={() => setActiveInput(null)}
                            onChangeText={(text) => setLastName(text)}
                            style={tw`${activeInput === 'lastName' ? 'border-orange-500' : 'border-gray-300'} border-2 rounded-xl`}
                            labelStyle={tw`${activeInput === 'lastName' ? 'text-orange-500' : 'text-black'}`}
                        />
                    </View>

                    <View style={tw`mb-6`}>
                        <CustomText fontFamily={Fonts.PoppinsSemiBold} style={tw`mb-2`}>
                            Select your gender
                        </CustomText>

                        <View style={tw`flex-row gap-6`}>
                            <TouchableOpacity
                                style={tw`flex-row items-center`}
                                onPress={() => handleGenderSelect('male')}
                            >
                                <Checkbox
                                    value={gender === 'male'}
                                    onValueChange={() => handleGenderSelect('male')}
                                    style={tw`mr-2 h-5 w-5`}
                                    color={gender === 'male' ? "#EC9226" : undefined}
                                    borderRadius={12}
                                />
                                <CustomText fontFamily={Fonts.PoppinsRegular}>
                                    Male
                                </CustomText>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={tw`flex-row items-center`}
                                onPress={() => handleGenderSelect('female')}
                            >
                                <Checkbox
                                    value={gender === 'female'}
                                    onValueChange={() => handleGenderSelect('female')}
                                    style={tw`mr-2 h-5 w-5`}
                                    color={gender === 'female' ? "#EC9226" : undefined}
                                    borderRadius={12}
                                />
                                <CustomText fontFamily={Fonts.PoppinsRegular}>
                                    Female
                                </CustomText>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={tw`mb-6 relative z-50`}>
                        <CustomText fontFamily={Fonts.PoppinsSemiBold} style={tw`mb-2`}>
                            Select your city
                        </CustomText>
                        <TouchableOpacity
                            onPress={() => {
                                setShowCityDropdown(!showCityDropdown);
                                setActiveInput('city');
                            }}
                            style={tw`border-2 p-3 rounded-xl ${activeInput === 'city' ? 'border-orange-500' : 'border-gray-300'} flex-row justify-between items-center`}
                        >
                            <CustomText>
                                {selectedCity || 'Choose a city'}
                            </CustomText>
                            {showCityDropdown ? (
                                <ChevronUp size={20} color="#666" />
                            ) : (
                                <ChevronDown size={20} color="#666" />
                            )}
                        </TouchableOpacity>

                        {showCityDropdown && (
                            <View style={tw`absolute top-[100%] left-0 right-0 border border-gray-300 mt-1 rounded-xl bg-white overflow-hidden`}>
                                <ScrollView
                                    style={tw`max-h-40`}
                                    showsVerticalScrollIndicator={true}
                                >
                                    {CITIES.map((city, index) => (
                                        <TouchableOpacity
                                            key={city}
                                            onPress={() => handleCitySelect(city)}
                                            style={tw`p-4 ${index !== CITIES.length - 1 ? 'border-b border-gray-200' : ''}`}
                                        >
                                            <CustomText>
                                                {city}
                                            </CustomText>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>
                        )}
                    </View>

                    <View style={tw`mt-10`}>
                        <CustomButton
                            disabled={!allFieldsFilled}
                            style={tw`${allFieldsFilled ? 'bg-[#EC9226]' : 'bg-[#DFDFE5]'} rounded-xl mx-auto text-center justify-center p-3`}
                        >
                            <CustomText
                                fontFamily={Fonts.PoppinsSemiBold}
                                style={tw`text-center ${allFieldsFilled ? 'text-white' : 'text-[#636366]'}`}
                            >
                                Continue
                            </CustomText>
                        </CustomButton>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default CreateProfile;