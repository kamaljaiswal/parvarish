import * as React from "react";
import { Button } from "react-native-paper";

const Btn = ({ onClick, text, isLoading }) => (
  <Button
    style={{ width: '100%' }}
    mode="contained"
    onPress={onClick}
    loading={isLoading}
  >
    {text}
  </Button>
);

export default Btn;
