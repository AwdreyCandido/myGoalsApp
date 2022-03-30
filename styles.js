import styled from 'styled-components/native'

// GoalInput Style

export const InputContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #311b6b;
`

export const GoalImage = styled.Image`
    width: 300px;
    height: 190px;
    margin: 30px;
`

export const Input = styled.TextInput`
    width: 100%;
    border-radius: 5px;
    color: #120438;
    background-color: #e4d0ff;
    padding: 10px;
    border: 1px solid #e4d0ff; 
`

export const ButtonContainer = styled.View`
    width: 70%;
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-evenly;
`
export const ButtonStyled = styled.View`
    width: 60px;
    background-color: #eee;
    flex-direction: row;
    justify-content: center;
    padding: 6px;
    border-radius: 10px;
    border: 1px solid #e4d0ff; 

`


// GoalItem Style

export const Goal = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 10px;
    margin: 8px;
    border-radius: 6px;
    background-color: #5e0ecc;
` 
export const GoalText = styled.Text`
    width: 80%;
    color: #fff;
    padding: 8px;
`