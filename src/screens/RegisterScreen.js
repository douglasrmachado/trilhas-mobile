import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function RegisterScreen() {
  const { signInAsStudent } = useAuth();

  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');

  function validar() {
    if (!nome.trim()) return 'Informe o nome completo';
    if (!matricula.trim()) return 'Informe a matrícula';
    if (senha.length < 6) return 'Senha deve ter ao menos 6 caracteres';
    if (senha !== confirmar) return 'As senhas não conferem';
    return null;
  }

  function onCriarConta() {
    const erro = validar();
    if (erro) {
      Alert.alert('Cadastro', erro);
      return;
    }
    // Mock: sucesso e login automático como aluno
    Alert.alert('Cadastro', 'Conta criada (mock). Entrando como aluno...', [
      { text: 'OK', onPress: () => signInAsStudent() },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar aluno</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        value={matricula}
        onChangeText={setMatricula}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Email (opcional)"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        value={confirmar}
        onChangeText={setConfirmar}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={onCriarConta}>
        <Text style={styles.buttonText}>Criar conta (mock)</Text>
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
    backgroundColor: '#2e7d32',
  },
  buttonText: { color: '#fff', fontWeight: '600' },
});


