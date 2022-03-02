import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';
import {FocusHistory} from './src/features/FocusHistory';
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';

export default function App() {
  const [focusSubject, setFocusSubject] = useState();
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {focusSubject ? (
       
        <Timer focusSubject={focusSubject} 
        onTimerEnd={(focusSubject)=> {
          setHistory([...history, focusSubject])
        }}
        clearSubject={()=> {setFocusSubject(null)}}
        />
        
      ) : (
        <>
        <Focus addSubject={setFocusSubject} />
        <FocusHistory history={history}/>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
  },
});
