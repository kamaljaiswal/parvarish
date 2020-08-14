import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homeRoot: {
    width: "100%",
    height: "100%",
    padding: 20,
  },
  genderText: {
    fontSize: 15,
  },
  dateInput: {
    marginTop: 15,
    marginBottom: 15,
  },
  radioView: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
    justifyContent: "space-around",
  },
  heading: {
    marginBottom: 15,
    fontSize: 26,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  about: {
    width: 150,
    backgroundColor: "grey",
    padding: 15,
    color: "white",
    borderRadius: 50,
    textAlign: "center",
  },
});
export default styles;
