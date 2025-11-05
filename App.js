import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Display from './src/components/Display';
import theme from './src/styles/theme.styles';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Display />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.BACKGROUNDCOLOR,
  },
});
