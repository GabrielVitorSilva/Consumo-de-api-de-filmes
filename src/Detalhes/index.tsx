import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Detalhes = ({ filme, voltar }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
          <Text style={{ color: '#fff', fontSize: 16 }}>Voltar</Text>
        </TouchableOpacity>

        <ScrollView style={{ marginBottom: 15 }}>
          <Text style={styles.titulo}>{filme.nome}</Text>
          <Text style={styles.sinopse}>Sinopse:</Text>
          <Text style={styles.descricao}>{filme.sinopse}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Detalhes;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  modalContainer: {
    height: '60%',
    minWidth: '100%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnVoltar: {
    backgroundColor: '#e52246',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,

  },
  titulo: {
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    fontSize: 28,
    fontWeight: '900'
  },
  sinopse: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10
  },
  descricao: {
    color: '#fff',
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'justify'
  }
});
