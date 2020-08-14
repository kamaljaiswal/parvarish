import * as React from "react";
import { Button } from "react-native-paper";

const AboutBtn = ({ onClick, text, isLoading }) => (
  <Button
    style={{ width: "43%", color: "red" }}
    mode="contained"
    onPress={onClick}
    loading={isLoading}
  >
    {text}
  </Button>
);

export default AboutBtn;
