import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'galio-framework';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper'

export default class DashboardScreen extends React.Component {
  static navigationOptions = {
    title: 'Escritorio',
  };
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title title="Título 1" subtitle="Subtitulo 1" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
          <Card.Content>
            <Title>Título 2</Title>
            <Paragraph>Subtitulo 2</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://via.placeholder.com/700' }} />
          <Card.Actions>
            <Button>Cancelar</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
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
  card: {
    width: '90%',
  },
  button: {
    marginTop: 7,
  },
});
