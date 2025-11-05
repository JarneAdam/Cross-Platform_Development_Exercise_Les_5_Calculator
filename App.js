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
          <Button value="C" />
          <Button value="+/-" />
          <Button value="%" />
          <Button value="÷" />
        </View>
        <View style={styles.row}>
          <Button value="7" />
          <Button value="8" />
          <Button value="9" />
          <Button value="×" />
        </View>
        <View style={styles.row}>
          <Button value="4" />
          <Button value="5" />
          <Button value="6" />
          <Button value="-" />
        </View>
        <View style={styles.row}>
          <Button value="1" />
          <Button value="2" />
          <Button value="3" />
          <Button value="+" />
        </View>
        <View style={styles.row}>
          <Button value="π" />
          <Button value="0" />
          <Button value="." />
          <Button value="=" />
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
