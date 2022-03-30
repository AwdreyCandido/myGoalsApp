import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { 
  StyleSheet, 
  View, 
  FlatList,
  Button,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

// COURSE GOALS APP
export default function App() {
  
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setcourseGoals] = useState([])
  
  const startAddGoalHandler = function(){
    setModalIsVisible(true)
  }

  const endAddGoalHandler = function(){
    setModalIsVisible(false)
  }

  const addGoalHandler = function(enteredGoalText){
    setcourseGoals((currentCourseGoals) => [
    ...currentCourseGoals, 
    { text: enteredGoalText, key: Math.random().toString() }
    ])
    endAddGoalHandler();
  };

  const deleteGoalsHandler = function(key){
    setcourseGoals((currentCourseGoals=> {
      return currentCourseGoals.filter((goal)=> goal.key !== key)
    }))
  }


  return (

  <>
    <StatusBar style='light'/>
    <View style={styles.screen}>

      <Button 
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
        />

      <GoalInput 
        Visible={modalIsVisible} 
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      
      <View style={styles.goalsContainer}> 
        <FlatList data={courseGoals} renderItem={(itemData) =>{
          return <GoalItem Text={itemData.item.text} Key={itemData.item.key} onDeleteItem={deleteGoalsHandler} />;
        }}/>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  goalsContainer: {
    flex: 5,
    backgroundColor: "#dedadc",
    padding: 16,
    borderRadius: 5,
  },
});
