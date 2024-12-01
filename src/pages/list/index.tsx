import React from 'react';

import {FlatList, Text, TouchableOpacity, View} from 'react-native'
import { style } from "./styles";
import { Input } from "../../components/Input"
import { MaterialIcons } from '@expo/vector-icons';
import { Ball } from '../../components/Ball';
import { Flag } from '../../components/Flag';
import { themas } from '../../global/themes';

type PropCard = {
    item: number,
    title: string,
    description: string,
    flag: 'importante'|'agendar'
}

const data:Array<PropCard>=
[
    {
        item:0,
        title:'Consulta',
        description: 'Dia 12/12/24',
        flag:'importante'
    },
    {
        item:1,
        title:'Receita medicamento',
        description: 'Dia 19/12/24',
        flag:'agendar'
    },
]

export default function List (){

    const _renderCard = (item:PropCard)=>{
        return(
            <TouchableOpacity style={style.card}>
                <View style={style.rowCard}>
                    <View style={style.rowCardLeft}>
                        <Ball color="red"/>
                        <View>
                            <Text style={style.titleCard}>{item.title}</Text>
                            <Text style={style.descriptionCard}>{item.description}</Text>
                        </View>
                    </View>
                    <Flag caption="Importante" color={themas.Colors.red}/>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>Bom dia, <Text style={{fontWeight:'bold'}}>Usuário!</Text></Text>
                <View style={style.boxInput}>
                    <Input 
                        IconLeft={MaterialIcons}
                        IconLeftName="search"
                    />
                </View>
            </View>
            <View style={style.boxList}>
                <FlatList
                    data={data}
                    style={{marginTop:40, paddingHorizontal:30}}
                    keyExtractor={(item, index)=>item.item.toString()}
                    renderItem={({item, index})=>{return (_renderCard(item))}}
                />
            </View>
        </View>
    )
}