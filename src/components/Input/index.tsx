import React, { forwardRef, LegacyRef } from "react";

import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { style } from "./styles";
import {FontAwesome, MaterialIcons, Octicons} from '@expo/vector-icons';
import { themas } from "../../global/themes";

type IconComponent= React.ComponentType<React.ComponentProps<typeof MaterialIcons>> | //ou
                    React.ComponentType<React.ComponentProps<typeof FontAwesome>> | //ou
                    React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void
}

export const Input = forwardRef((Props:Props, ref: LegacyRef<TextInput> | null)=>{
    
    const {IconLeft, IconRight, IconLeftName, IconRightName, title, onIconLeftPress, onIconRightPress,...rest} = Props

    const calculateSizeWeight = () =>{
        if(IconLeft && IconRight){
            return '80%'
        }else if(IconLeft || IconRight){
            return '90%'
        }else{
            return '100%'
        }
    }

    const calculateSizePaddingLeft = () =>{
        if(IconLeft && IconRight){
            return 0;
        }else if(IconLeft || IconRight){
            return 10;
        }else{
            return 20;
        }
    };

    
    return (
        <>
        {title && <Text style={style.titleInput}>{title}</Text>}
        <View style={[style.boxInput,{paddingLeft:calculateSizePaddingLeft()}]}>
            {IconLeft && IconLeftName &&(
            <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
                <IconLeft name={IconLeftName as any} size={20} color={themas.colors.gray} style={style.Icon}/>
            </TouchableOpacity>
            )}
            <TextInput 
               style={[
                style.input, {width:calculateSizeWeight()}
            ]}
               {...rest}
            />
            {IconRight && IconRightName &&(
            <TouchableOpacity onPress={onIconRightPress} style={style.Button}>
                <IconRight name={IconRightName as any} size={20} color={themas.colors.gray} style={style.Icon}/>
            </TouchableOpacity>
            )}
        </View>
        </>    
    )
})