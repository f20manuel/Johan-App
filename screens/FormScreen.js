import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Input, Button } from 'galio-framework';

export default class FormScreen extends React.Component {
  static navigationOptions = {
    title: 'Formulario',
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Input style={styles.input} placeholder="Input 1" rounded />
          <Input style={styles.input} placeholder="Input 2" rounded />
          <Input style={styles.input} placeholder="Input 3" rounded />
          <Input style={styles.input} placeholder="Input 4" rounded />
          <Input style={styles.input} placeholder="Input 5" rounded />
          <Input style={styles.input} placeholder="Input 6" rounded />
          <Input style={styles.input} placeholder="Input 7" rounded />
          <Input style={styles.input} placeholder="Input 8" rounded />
          <Input style={styles.input} placeholder="Input 9" rounded />
          <Input style={styles.input} placeholder="Input 10" rounded />
          <Button
            style={{width:'100%'}}
            round>
            Submit
          </Button>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 10,
    marginVertical: 20,
  }
});
