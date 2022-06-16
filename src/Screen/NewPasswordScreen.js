import React from 'react';
import { Text, View, Image, Alert, ScrollView } from 'react-native';
import CustomInpur from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import {useNavigation} from '@react-navigation/native'

const NewPasswordScreen = () => {
  const { code, setCode } = React.useState('');
  const { newPassword, setNewPassword } = React.useState('');

  const navigation = useNavigation();

// Autentication Functionality and Hooks


const onSubmitPress = () => {
  Alert.alert('Password Reset Successfully!');
  navigation.navigate('Home')
};

const onSigninPress = () => {
  navigation.navigate('Signin')
}

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
          Reset your password
        </Text>
        <CustomInpur
          value={code}
          setValue={setCode}
          placeholder="Code"
        />
        <CustomInpur
          value={newPassword}
          setValue={setNewPassword}
          placeholder="Enter Your New Password"
        />
        <CustomButton text="Submit" onPress={onSubmitPress} type="PRIMERY" />
        <CustomButton
          text="Back to Sign In"
          onPress={onSigninPress}
          type="TERSERY"
        />
      </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;
