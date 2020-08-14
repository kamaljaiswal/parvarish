import React from "react";
import { View } from "react-native";
import styles from "./style";

const Footer = ({ children }) => {
  return <View style={styles.footer}>{children}</View>;
};

export default Footer;
