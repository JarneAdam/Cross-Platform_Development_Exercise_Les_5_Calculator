import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Display from './src/components/Display';
import theme from './src/styles/theme.styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Display />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.BACKGROUNDCOLOR,
  },
});
