import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import UserContext from './UserContext';

const Stack = createStackNavigator();

const App = () => {
  const [ecoScore, setEcoScore] = useState(0);

  return (
    <UserContext.Provider value={ecoScore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen"
            component={HomeScreen}
            options={() => ({ 
              title: "Home",
              headerRight: () => (
                <Text style={styles.ecoScore} >{`Eco Score: ${ecoScore} pts`}</Text>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ecoScore: {
    marginRight: 20,
    fontSize: 20,
  }
});

export default App;
