import React, {useState} from 'react'
import {Text, View, TextInput, Button } from 'react-native';

export default function Formulario () {
    const [cep, onChangeCep] = useState('')
    const [cidade, onChangeCep] = useState('')

    const handleConsultar = () => {
        onChangCidade(cep)
    }
    
    return(
        <View>
            <Text>Digite um CEP (somente numeros):</Text>
            <TextInput value={cep} onChangeText={onChangeCep} />
            <Button title="consultar" onPress={handleConsultar} />
            <text></text>
           
        </View>

    )
}