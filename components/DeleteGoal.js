import { Pressable, Text } from 'react-native'
import { ButtonStyled } from '../styles';

const DeleteGoalButton = function(props){

    return(
        <Pressable android_ripple={{color: '#210644'}} onPress={props.onDeleteGoal}>
            <ButtonStyled>
                <Text>Done</Text>
            </ButtonStyled>
        </Pressable>
    )
}

export default DeleteGoalButton;