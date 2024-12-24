import React from "react";
import {
  View,
  TextInput,
  Text,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import clsx from "clsx";
import Checkbox from "expo-checkbox";
import { Fonts } from "@utils/constants";
import { TextStyle } from "react-native";
import tw from "twrnc"

type CustomInputProps = {
  fontFamily?: Fonts;
  label?: string;
  value: string;
  compulsory?: boolean;
  onChangeText: (text: string) => void;
  placeholder?: string;
  inputProps?: TextInputProps;
  disabled?: boolean;
  errorMessage?: string;
  onfocus?: () => void;
  onBlur?: () => void;
  style?: TextStyle[];
  labelStyle?: TextStyle[];
  onChangeAction?: () => void;
  checkboxLabel?: string;
  checkboxChecked?: boolean;
  onCheckboxChange?: (value: boolean) => void;
  keyboardType?: TextInputProps["keyboardType"];
  autoCapitalize?: TextInputProps["autoCapitalize"];
};

const CustomInput: React.FC<CustomInputProps> = ({
  fontFamily = Fonts.PoppinsRegular,
  style,
  labelStyle,
  label,
  compulsory = false,
  value,
  onfocus,
  onBlur,
  onChangeText,
  placeholder,
  inputProps,
  disabled = false,
  errorMessage,
  onChangeAction,
  checkboxLabel,
  checkboxChecked = false,
  onCheckboxChange,
  keyboardType = 'default',
  autoCapitalize = "sentences",
}) => {
  return (
    <View className="mb-6">
      {/* Label */}
      {label && (
        <Text style={[tw`mb-2`, labelStyle]}>{label}</Text>
      )}

      {/* Input Field */}
      <TextInput
        style={[{ fontFamily }, style]}
        value={value}
        onFocus={onfocus}
        onBlur={onBlur}
        editable={!disabled}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        className={clsx(
          "border border-gray-400 rounded-lg px-4 py-4 text-xl text-black bg-white",
          disabled && "bg-gray-200"
        )}
        placeholderTextColor={"gray"}
        autoCapitalize={autoCapitalize}
        {...inputProps}
      />

      {/* Error Message or Change Action */}
      {errorMessage && (
        <View className="flex-row mt-1">
          <Text className="text-xs text-red-500 mr-1">{errorMessage}</Text>
          {onChangeAction && (
            <TouchableOpacity onPress={onChangeAction}>
              <Text className="text-xs text-orange-500 font-semibold">
                Change
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      {/* Checkbox */}
      {checkboxLabel && onCheckboxChange && (
        <View className="flex-row items-center mt-2">
          <Checkbox
            value={checkboxChecked}
            onValueChange={onCheckboxChange}
            color={checkboxChecked ? "#f59e0b" : undefined} // Orange when checked
          />
          <Text className="ml-2 text-black">{checkboxLabel}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomInput;
