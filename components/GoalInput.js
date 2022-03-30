import { useState } from 'react';
import { 
    TextInput, 
    Button, 
    View, 
    StyleSheet, 
    Modal,
    Image,
    } from 'react-native'

import { InputContainer, GoalImage ,Input, ButtonContainer, } from './../styles'

function GoalInput(props){

    const [enteredGoalText, setEnteredGoalText] = useState('')

    const goalInputHandler = function(enteredText){
        setEnteredGoalText(enteredText)
    };

    const addGoalHandler = function(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    }

    return(
    <Modal visible={props.Visible} animationType="slide">
        <InputContainer>
            <GoalImage source={require('./../assets/images/goal.png')}/>
            <Input 
                placeholder="Course Goal" 
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <ButtonContainer style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Cancel" onPress={props.onCancel} color='#f31282'/>
                </View>
                <View style={styles.button}>
                    <Button title="Add Goal" onPress={addGoalHandler} color='#5e0acc'/>
                </View>
            </ButtonContainer>

        </InputContainer>
    </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    button: {
        width: 100,
    },
});