import React from 'react';
import { Text, View, Image, Alert, ScrollView } from 'react-native';
import CustomInpur from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';

// Autentication Functionality and Hooks

const onConfirmPress = () => {
  Alert.alert('Confirm Code Successfully!');
};

const onResendPress = () => {
  Alert.alert('Code Resend Successfully!');
};

const onSigninPress = () => {
  Alert.alert('Loged in sucessfully!')
}

const EmailConfirmScreen = () => {
  const { code, setCode } = React.useState('');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ alignItems: 'center', padding: 20, height:'100%' }}>
        <Text
          style={{
            color: '#051C60',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Confirm email code
        </Text>
        <CustomInpur
          value={code}
          setValue={setCode}
          placeholder="Enter your confirm code"
        />
        <CustomButton text="Confirm" onPress={onConfirmPress} type="PRIMERY" />
        <CustomButton
          text="Resend"
          onPress={onResendPress}
          type="SECONDERY"
        />
        <CustomButton
          text="Back to Sign In"
          onPress={onSigninPress}
          type="TERSERY"
        />
      </View>
    </ScrollView>
  );
};

export default EmailConfirmScreen;
