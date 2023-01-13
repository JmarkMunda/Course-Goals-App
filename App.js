import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function handleAddGoal(text) {
    if (text) {
      setGoals((prevGoals) => [
        ...prevGoals,
        { goal: text, id: Math.random().toString() },
      ]);
    }
    handleModalClose();
  }

  function handleDeleteGoal(id) {
    const newGoals = goals.filter((goal) => goal.id !== id);
    setGoals(newGoals);
  }

  function handleModalOpen() {
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button title="Add Goal" onPress={handleModalOpen} />
        <GoalInput
          handleAddGoal={handleAddGoal}
          showModal={showModal}
          handleModalClose={handleModalClose}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  goal={itemData.item.goal}
                  id={itemData.item.id}
                  handleDeleteGoal={handleDeleteGoal}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
