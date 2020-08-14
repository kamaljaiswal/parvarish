import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';

const Snack = ({ open, message }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(open)
  }, [open]);
  const onDismissSnackBar = () => {
    setVisible(false);
  }
  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}>
        {message}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default Snack;