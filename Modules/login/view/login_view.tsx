import React from 'react';
import styles from '../style/login_style';
import heights from '../../Constants/height_width';
import Images from '../../Constants/images';
import Strings from '../../Constants/strings';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Image,
  SafeAreaView,
  Text,
  View,
  TextInput,
  useColorScheme,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

function LoginView(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [textEmail, onChangeEmail] = React.useState('');
  const [textPassword, onChangePassword] = React.useState('');
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
        <Image style={{ resizeMode: 'contain', height: 80, width: 200 }}
          source={isDarkMode ? Images.icons.instaLightLogo : Images.icons.instaDarkLogo} />
        <View style={heights.height50}></View>
        <View style={heights.height50}>
          <TextInput
            style={styles.textField}
            onChangeText={(value) => onChangeEmail(value)}
            value={textEmail}
            placeholder="User name, email or mobile no"
            keyboardType="email-address"
            inputMode='text'
          />
        </View>

        <View style={heights.height20}></View>

        <View style={heights.height50}>
          <TextInput
            style={styles.textField}
            onChangeText={(value) => onChangePassword(value)}
            value={textPassword}
            placeholder="Password"
            keyboardType="visible-password"
          />
        </View>
        <View style={heights.height20}></View>

        <TouchableOpacity onPress={() => console.log('Heyy Jaimin')}>
          <View style={styles.forgetPass}>
            <Text style={isDarkMode ? styles.forgetPassText : styles.darkText}>
              {Strings.login.forgetPass}
            </Text>
          </View>
        </TouchableOpacity>








      </View>
    </ScrollView>
  );
}

export default LoginView;