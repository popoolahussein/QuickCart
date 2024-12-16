import { SafeAreaView } from 'react-native';
import OnboardingScreen from './src/Screens/OnboardingScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <OnboardingScreen />
    </SafeAreaView>
  );
}
