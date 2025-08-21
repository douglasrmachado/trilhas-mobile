import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen() {
  const { signInAsStudent, signInAsTeacher } = useAuth();
  const [matricula, setMatricula] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Aluno: matrícula + senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Matrícula (aluno)"
        value={matricula}
        onChangeText={setMatricula}
        autoCapitalize="none"
      />
      <Text style={styles.subtitle}>Professor: email institucional + senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Email institucional (professor)"
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

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.student, { marginRight: 12 }]} onPress={signInAsStudent}>
          <Text style={styles.buttonText}>Entrar como aluno</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.teacher]} onPress={signInAsTeacher}>
          <Text style={styles.buttonText}>Entrar como professor</Text>
        </TouchableOpacity>
      </View>
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
  subtitle: { fontSize: 12, color: '#555', marginTop: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 8,
  },
  row: { flexDirection: 'row', marginTop: 16 },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  student: { backgroundColor: '#2e7d32' },
  teacher: { backgroundColor: '#1565c0' },
  buttonText: { color: '#fff', fontWeight: '600' },
});


