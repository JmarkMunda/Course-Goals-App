import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = ({ handleAddGoal, showModal, handleModalClose }) => {
  const [text, setText] = useState("");

  function handleInput(inputText) {
    setText(inputText);
  }

  function handleOnPress() {
    handleAddGoal(text);
    setText("");
  }

  function handleCancelPress() {
    handleModalClose();
    setText("");
  }

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goals.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal"
          onChangeText={handleInput}
          value={text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handleOnPress} color="#7ee23b" />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={handleCancelPress}
              color="#f87a58"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
    borderRadius: 6,
    width: "80%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
