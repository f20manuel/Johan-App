import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'galio-framework';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Input style={styles.input} placeholder="Correo Electrónico" rounded />
        <Input
          style={styles.input}
          placeholder="Contraseña"
          password
          viewPass
          rounded
        />
        <Button
          style={styles.button}
          round
          onPress={() => navigate('Dashboard')}>
          Acceder
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
  },
  button: {
    marginTop: 7,
  },
});
