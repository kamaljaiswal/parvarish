import * as React from 'react';
import { Surface, Text } from 'react-native-paper';
import styles from "./style";

const Paper = ({ children }) => (
  children && children.length ? (<Surface style={styles.surfaceRoot}>
    {children}
  </Surface>) : null
);

export default Paper;