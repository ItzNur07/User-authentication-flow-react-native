import React, { useMemo } from 'react';
import { Text, View, TextInput, Alert } from 'react-native';
import CustomButton from './CustomButton';

const SocialSigninButton = () => {
  const onFacebookPress = () => {
    Alert.alert('Sing in on Facebook Successfully!');
  };
  const onGooglePress = () => {
    Alert.alert('Sing in on Google Successfully!');
  };
  const onApplePress = () => {
    Alert.alert('Sing in on Apple Successfully!');
  };

  return (
    <>
      <CustomButton
        text="Sign In on Facebook"
        onPress={onFacebookPress}
        type="PRIMERY"
        bgColor="#e7eaf4"
        fgColor="#4765a9"
      />
      <CustomButton
        text="Sign In On Google"
        onPress={onGooglePress}
        type="PRIMERY"
        bgColor="#fae9ea"
        fgColor="#dd4d44"
      />
      <CustomButton
        text="Sign In on Apple"
        onPress={onApplePress}
        type="PRIMERY"
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSigninButton;
