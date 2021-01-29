import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import UserContext from './UserContext';
import ProductScreen from './screens/ProductScreen';

import leaf from './img/leaf.png';
import logo from './img/logo.png';

const Stack = createStackNavigator();

const Points = (ecoScore) => (
  <View style={styles.ecoScoreContainer} >
    <img src={logo} />
    <View style={styles.ecoScoreContainer} >
      <Text style={styles.ecoScore} >{`Eco Score: ${ecoScore} pts`}</Text>
      <img src={leaf} />
    </View>
  </View>
);

const App = () => {
  const [ecoScore, setEcoScore] = useState(520);

  const addScore = (pts) => {
    setEcoScore(ecoScore + pts);
  }

  return (
    <UserContext.Provider value={addScore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen"
            component={HomeScreen}
            options={({navigation}) => ({ 
              title: "Home",
              headerRight: () => (
                <Text style={styles.ecoScore} >{`Eco Score: ${ecoScore} pts`}</Text>
              ),
            })}
          />
          <Stack.Screen name="ProductScreen"
            component={ProductScreen}
            options={() => ({
              title: "Product",
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
  },
  ecoScoreContainer: {
    flexDirection: 'row'
  }
});

export default App;
