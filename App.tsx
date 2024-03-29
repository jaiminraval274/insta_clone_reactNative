import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginView from './Modules/login/view/login_view';
import DashoboardView from './Modules/Dashboard/view/dashboard_view';


// function App(): JSX.Element {
//   return (
//     <SafeAreaView>
//       <View>
//         <Text>Heyy Jaimin</Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// export default App;
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    //     <NavigationContainer>
    //       <Stack.Navigator>
    //         <Stack.Screen name="login" component={LoginView} />
    //         <Stack.Screen name="dashboard" component={DashoboardView} />
    //         <Stack.Screen name="dashboard">
    //   {(props) => <DashoboardView {...props} />}
    // </Stack.Screen>
    //       </Stack.Navigator>
    //     </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={LoginView}

        />
        <Stack.Screen name="dashboard" component={DashoboardView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;