import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import StudentPortalScreen from '../screens/StudentPortalScreen';
import TeacherPortalScreen from '../screens/TeacherPortalScreen';
import { useAuth } from '../context/AuthContext';

const RootStack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

function AuthTabs() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, textTransform: 'none' },
        tabBarIndicatorStyle: { backgroundColor: '#2e7d32' },
      }}
    >
      <TopTab.Screen name="Login" component={LoginScreen} />
      <TopTab.Screen name="Cadastrar" component={RegisterScreen} />
      <TopTab.Screen name="Recuperar" component={ForgotPasswordScreen} />
    </TopTab.Navigator>
  );
}

export default function RootNavigator() {
  const { userRole } = useAuth();

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {userRole === 'ALUNO' && (
        <RootStack.Screen name="PortalEstudante" component={StudentPortalScreen} />
      )}
      {userRole === 'PROFESSOR' && (
        <RootStack.Screen name="PortalProfessor" component={TeacherPortalScreen} />
      )}
      {!userRole && <RootStack.Screen name="Auth" component={AuthTabs} />}
    </RootStack.Navigator>
  );
}


