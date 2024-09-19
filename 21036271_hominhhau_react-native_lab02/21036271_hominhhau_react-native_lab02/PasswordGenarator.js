import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let charPool = '';
    if (includeLowercase) charPool += lowercase;
    if (includeUppercase) charPool += uppercase;
    if (includeNumbers) charPool += numbers;
    if (includeSymbols) charPool += symbols;

    if (charPool.length === 0) {
      charPool = lowercase + uppercase + numbers + symbols;
    }

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      password += charPool[randomIndex];
    }

    setGeneratedPassword(password);

    // Update switch states based on the generated password content
    setIncludeLowercase(/[a-z]/.test(password));
    setIncludeUppercase(/[A-Z]/.test(password));
    setIncludeNumbers(/[0-9]/.test(password));
    setIncludeSymbols(/[!@#$%^&*()_+\[\]{}|;:,.<>?]/.test(password));
  };

  useEffect(() => {
    generatePassword(); // Generate password whenever options change
  }, [includeLowercase, includeUppercase, includeNumbers, includeSymbols]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>PASSWORD</Text>
          <Text style={styles.title}>GENERATOR</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            value={generatedPassword}
            editable={false}
          />
        </View>
        <View style={styles.containerOption}>
          <View style={styles.rowOption}>
            <Text style={styles.textOption}>Password length</Text>
            <TextInput
              style={styles.inputOption}
              value={passwordLength.toString()}
              onChangeText={(text) => {
                const length = parseInt(text, 10);
                if (!isNaN(length) && length > 0) {
                  setPasswordLength(length);
                  generatePassword();
                } else {
                  setPasswordLength(12);
                  generatePassword();
                }
              }}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.rowOption}>
            <Text style={styles.textOption}>Include lower case letters</Text>
            <Switch
              value={includeLowercase}
              onValueChange={(value) => setIncludeLowercase(value)}
            />
          </View>
          <View style={styles.rowOption}>
            <Text style={styles.textOption}>Include upper case letters</Text>
            <Switch
              value={includeUppercase}
              onValueChange={(value) => setIncludeUppercase(value)}
            />
          </View>
          <View style={styles.rowOption}>
            <Text style={styles.textOption}>Include numbers</Text>
            <Switch
              value={includeNumbers}
              onValueChange={(value) => setIncludeNumbers(value)}
            />
          </View>
          <View style={styles.rowOption}>
            <Text style={styles.textOption}>Include special symbols</Text>
            <Switch
              value={includeSymbols}
              onValueChange={(value) => setIncludeSymbols(value)}
            />
          </View>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.btnGPass} onPress={generatePassword}>
            <Text style={styles.textBtn}>GENERATE PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B3B98',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  wrapper: {
    backgroundColor: '#23235B',
    width: '100%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 20,
  },
  containerTitle: {
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    backgroundColor: '#151537',
    marginVertical: 15,
    padding: 10,
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  containerOption: {
    marginBottom: 20,
  },
  rowOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  textOption: {
    fontSize: 16,
    color: 'white',
  },
  inputOption: {
    backgroundColor: '#ffffff',
    color: 'black',
    width: 60,
    textAlign: 'center',
  },
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btnGPass: {
    backgroundColor: '#3B3B98',
    padding: 15,
    borderRadius: 5,
  },
  textBtn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default PasswordGenerator;
