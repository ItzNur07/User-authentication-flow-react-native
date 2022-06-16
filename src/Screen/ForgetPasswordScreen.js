import React from 'react';
import { Text, View, Image, Alert, ScrollView } from 'react-native';
import CustomInpur from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgetPasswordScreen = () => {
  const { username, setUsername } = React.useState('');

  const navigation = useNavigation();

  // Autentication Functionality and Hooks

  const onForgetPress = () => {
    navigation.navigate('NewPassword')
  };

  const onSigninPress = () => {
    navigation.navigate('Signin')
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ alignItems: 'center', padding: 20, height: '100%' }}>
        <Text
          style={{
            color: '#051C60',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Reset Password
        </Text>
        <CustomInpur
          value={username}
          setValue={setUsername}
          placeholder="Username"
        />
        <CustomButton text="Send" onPress={onForgetPress} type="PRIMERY" />
        <CustomButton
          text="Back to Sign In"
          onPress={onSigninPress}
          type="TERSERY"
        />
      </View>
    </ScrollView>
  );
};

export default ForgetPasswordScreen;
