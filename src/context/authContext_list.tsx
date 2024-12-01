import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Alert, Dimensions, StyleSheet, TouchableOpacity, View, Text, KeyboardAvoidingView, Platform } from "react-native";
import { Modalize } from "react-native-modalize";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Input } from "../components/Input";
import { themas } from "../global/themes";
import { Flag } from "../components/Flag";
import CustomDateTimePicker from "../components/CustomDateTimePicker";

export const AuthContextList:any = createContext({});

const flags = [
    { caption: 'Importante', color:themas.Colors.red},
    { caption: 'Agendar', color:themas.Colors.blueLigth},
];

export const AuthProviderList = (props:any):any =>{
    const modalizeRef = useRef<Modalize>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedFlag, setSelectedFlag] = useState('importante');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const onClose = () => {
        modalizeRef.current?.close();
    };


    useEffect(()=>{
        onOpen()
    },[])

    const _renderFlags = ()=>{
        return (
            flags.map((item,index)=>(
                <TouchableOpacity key={index}>
                    <Flag
                        caption={item.caption}
                        color={item.color}
                        //selected
                    />
                </TouchableOpacity>
            )))
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleTimeChange = (date) => {
        setSelectedTime(date);
    };


    const _container = () =>{
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios'?'padding':'height'} //Ajuste IOS
            >
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=>onClose()}>
                            <MaterialIcons 
                                name="close"
                                size={30}
                            />
                        </TouchableOpacity>
                        <Text style={styles.title}>Novo lembrete</Text>
                        <TouchableOpacity>
                            <AntDesign
                                name="check"
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        <Input
                            title="Título:"
                            labelStyle={styles.label}
                            value={title}
                            onChangeText={setTitle}
                        />
                        <Input 
                            title="Descrição:"
                            labelStyle={styles.label}
                            height={100}
                            multiline
                            numberOfLines={5}
                            value={description}
                            onChangeText={setDescription}
                            textAlignVertical="top"
                        />
                        <View style={{width:'40%'}}>
                            <View style={{flexDirection:'row', gap:10, width:'100%'}}>
                                <TouchableOpacity onPress={()=>setShowDatePicker(true)} style={{width:200}}>
                                <Input 
                                    title="Data limite"
                                    labelStyle={styles.label}
                                    editable={false}
                                    value={selectedDate.toLocaleDateString()}
                                    onPress={()=>setShowDatePicker(true)}
                                />
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:120}} onPress={()=>setShowTimePicker(true)}>
                                <Input 
                                    title="Hora limite"
                                    labelStyle={styles.label}
                                    editable={false}
                                    value={selectedTime.toLocaleTimeString()}
                                    onPress={()=>setShowTimePicker(true)}
                                />
                                </TouchableOpacity>
                            </View>
                            <CustomDateTimePicker 
                                onDateChange={handleDateChange}
                                setShow={setShowDatePicker}
                                show={showDatePicker}//Data
                                type={'date'}
                            />
                            <CustomDateTimePicker 
                                onDateChange={handleTimeChange}
                                setShow={setShowTimePicker}
                                show={showTimePicker}//Hora
                                type={'time'}
                            />
                        </View>
                        <View style={styles.containerFlag}>
                            <Text style={styles.label}>Flags:</Text>
                            <View style={styles.Rowflags}>
                                {_renderFlags()}
                            </View>
                        </View>
                    </View>
            </KeyboardAvoidingView>
        )
    }



    return (
        <AuthContextList.Provider value={{onOpen}}>
            {props.children}
            <Modalize
                ref={modalizeRef}
                childrenStyle={{height: 650 }}
                adjustToContentHeight={true}
            >
                {_container()}
            </Modalize>
        </AuthContextList.Provider>
    )

}

export const useAuth = ()=> useContext(AuthContextList);

export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    header: {
        width: '100%',
        height: 40,
        paddingHorizontal: 40,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    content: {
        width: '100%',
        paddingHorizontal: 20
    },
    label: {
        fontWeight: 'bold',
        color: '#000'
    },
    containerFlag: {
        width: '100%',
        padding: 10
    },
    Rowflags: {
        flexDirection:'row',
        gap:10,
        marginTop:10
    }
});