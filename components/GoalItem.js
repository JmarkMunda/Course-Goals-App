import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";

const GoalItem = ({ goal, id, handleDeleteGoal }) => {
  return (
    <View style={styles.textCard}>
      <Pressable
        onPress={() => handleDeleteGoal(id)}
        android_ripple={{ color: "blue" }}
        style={({ pressed }) => pressed && styles.iosFeedback}>
        <Text style={styles.goalText}>{goal}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  textCard: {
    elevation: 8,
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowOffset: { width: -2, height: 4 },
    shadowRadius: 3,
    backgroundColor: "#fff",
    borderRadius: 6,
    margin: 8,
  },
  goalText: {
    padding: 12,
  },
  iosFeedback: {
    opacity: 0.5,
  },
});
