import React, { useMemo } from 'react';
import { Text, View, TextInput } from 'react-native';

const CustomInput = ({ value, setValue, placeholder, skey }) => {
  
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
      }}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={skey}
      />
    </View>
  );
};

export default CustomInput;
