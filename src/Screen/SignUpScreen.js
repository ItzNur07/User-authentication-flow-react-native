import React from 'react';
import { Text, View, Image, Alert, ScrollView } from 'react-native';
import CustomInpur from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import SocialSigninButton from '../Components/SocialSigninButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const { username, setUsername } = React.useState('');
  const { email, setEmail } = React.useState('');
  const { password, setPassword } = React.useState('');
  const { confirmPassword, setConfirmPassword } = React.useState('');

  const navigation = useNavigation();

  // Autentication Functionality and Hooks

  const onSignupPress = () => {
    Alert.alert('Registation Successfully!');
    navigation.navigate('Home')
  };

  const onForgetPress = () => {
     navigation.navigate('ForgetPassword')
  };

  const onTramsPress = () => {
    Alert.alert('Trams press come!');
  };

  const onPrivecyPress = () => {
    Alert.alert('Privecy Policy accept here!');
  };

  const onSigninPress = () => {
     navigation.navigate('Signin')
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Text
          style={{
            color: '#051C60',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create an account
        </Text>
        <CustomInpur
          value={username}
          setValue={setUsername}
          placeholder="Username"
          skey={false}
        />
        <CustomInpur
          value={email}
          setValue={setEmail}
          placeholder="Email"
          skey={false}
        />
        <CustomInpur
          value={password}
          setValue={setPassword}
          placeholder="Password"
          skey={true}
        />
        <CustomInpur
          value={confirmPassword}
          setValue={setConfirmPassword}
          placeholder="Confirm Password"
          skey={true}
        />
        <CustomButton text="Register" onPress={onSignupPress} type="PRIMERY" />
        <Text style={{ color: 'gray', fontSize: 16, marginVertical: 10 }}>
          By registering, your confirm that your accect our{' '}
          <Text
            onPress={onTramsPress}
            style={{
              textDecorationLine: 'underline',
              fontWeight: '500',
              color: '#fdb075',
            }}>
            Trams of Use
          </Text>{' '}
          and{' '}
          <Text
            onPress={onPrivecyPress}
            style={{
              textDecorationLine: 'underline',
              fontWeight: '500',
              color: '#fdb075',
            }}>
            Privecy Policy
          </Text>
        </Text>
        <SocialSigninButton />
        <CustomButton
          text="already have an account? Log In"
          onPress={onSigninPress}
          type="TERSERY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
