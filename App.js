import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Display from './src/components/Display';
import Button from './src/components/Button';
import theme from './src/styles/theme.styles';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Display />
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <Button />
          <Button />
          <Button />
          <Button />
        </View>
        <View style={styles.row}>
          <Button />
          <Button />
          <Button />
          <Button />
        </View>
        <View style={styles.row}>
          <Button />
          <Button />
          <Button />
          <Button />
        </View>
        <View style={styles.row}>
          <Button />
          <Button />
          <Button />
          <Button />
        </View>
        <View style={styles.row}>
          <Button />
          <Button />
          <Button />
          <Button />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.BACKGROUNDCOLOR,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
