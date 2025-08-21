import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function ForgotPasswordScreen() {
  const [identifier, setIdentifier] = useState('');

  function onSendCode() {
    if (!identifier.trim()) {
      Alert.alert('Recuperar Senha', 'Informe seu email ou matrícula');
      return;
    }
    Alert.alert('Recuperar Senha', 'Código enviado (mock). Procure o admin para recuperar.');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      <Text style={styles.subtitle}>Informe seu email institucional ou sua matrícula</Text>
      <TextInput
        style={styles.input}
        placeholder="Email ou Matrícula"
        value={identifier}
        onChangeText={setIdentifier}
        autoCapitalize="none"
        keyboardType="default"
      />
      <TouchableOpacity style={styles.button} onPress={onSendCode}>
        <Text style={styles.buttonText}>Enviar código (mock)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  subtitle: { fontSize: 12, color: '#555' },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 8,
  },
  button: {
    marginTop: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#1565c0',
  },
  buttonText: { color: '#fff', fontWeight: '600' },
});


