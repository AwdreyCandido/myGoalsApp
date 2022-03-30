import { useState } from 'react';
import { Pressable } from 'react-native'

import DeleteGoalButton from './DeleteGoal'
import { Goal, GoalText } from './../styles'

function GoalItem(props){


    const deleteGoal = function() {
        props.onDeleteItem(props.Key)
    }
    
    return(
        <Goal>
            <GoalText>{props.Text}</GoalText>
            <DeleteGoalButton onDeleteGoal={deleteGoal}/>
        </Goal>
    );
}

export default GoalItem;

