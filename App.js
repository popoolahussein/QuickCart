import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './AppNavigation';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}
