import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TeacherPortalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Portal do Professor</Text>
      <Text>Tela inicial (placeholder).</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
});


