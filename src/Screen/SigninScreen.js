import React from 'react';
import { Text, View, Image, Alert, ScrollView } from 'react-native';
import CustomInpur from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import SocialSigninButton from '../Components/SocialSigninButton';
import { useNavigation } from '@react-navigation/native';

const logo = {
  uri: 'https://o.remove.bg/downloads/2192f5ef-07e7-4bc3-aa25-ed47f4e45c50/png-clipart-bracom-sport-shop-sarajevo-logo-product-design-brand-speedo-swimming-logo-text-eps-removebg-preview.png',
};

const SigninScreen = () => {
  const { username, setUsername } = React.useState('');
  const { password, setPassword } = React.useState('');

  const navigation = useNavigation();

  // Autentication Functionality and Hooks

  const onSigninPress = () => {
    Alert.alert('Sign In Successfully!');
    navigation.navigate('Home')
  };

  const onForgetPress = () => {
    navigation.navigate('ForgetPassword')
  };

  const onSignupPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Image source={logo} style={{ width: 150, height: 150 }} />
        <CustomInpur
          value={username}
          setValue={setUsername}
          placeholder="Username"
          skey={false}
        />
        <CustomInpur
          value={password}
          setValue={setPassword}
          placeholder="Password"
          skey={true}
        />
        <CustomButton text="Sing In" onPress={onSigninPress} type="PRIMERY" />
        <CustomButton
          text="Forget Password?"
          onPress={onForgetPress}
          type="TERSERY"
        />
        <SocialSigninButton />
        <CustomButton
          text="Don't have an account? Create one?"
          onPress={onSignupPress}
          type="TERSERY"
        />
      </View>
    </ScrollView>
  );
};

export default SigninScreen;
