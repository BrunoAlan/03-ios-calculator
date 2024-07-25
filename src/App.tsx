import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';
import { styles } from './config/theme/app-theme';
import { registerRootComponent } from 'expo';

function App() {
  return (
    <View style={styles.background}>
      <StatusBar style='light' />
      <CalculatorScreen />
    </View>
  );
}

registerRootComponent(App);
