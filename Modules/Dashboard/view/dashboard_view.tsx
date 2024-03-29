import React from 'react';
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
import styles from '../../login/style/login_style';



function DashoboardView(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const [textEmail, onChangeEmail] = React.useState('');
    const [textPassword, onChangePassword] = React.useState('');
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
                <Image style={{ resizeMode: 'contain', height: 80, width: 200 }}
                    source={isDarkMode ? Images.icons.instaLightLogo : Images.icons.instaDarkLogo} />



            </View>
        </ScrollView>
    );
}

export default DashoboardView;