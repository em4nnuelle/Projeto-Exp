import Reac, { useState } from "react";

import {
    Text, 
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png';
import {MaterialIcons, Octicons} from '@expo/vector-icons';
import { themas } from "../../global/themes";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button"
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function Login(){

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail]=useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false)

    async function getLogin(){
        setLoading(true);
        try {
            if(!email || !password){
                setLoading(false);
                return Alert.alert('Atenção','Informe os campos obrigatórios.');
            }

            navigation.reset({routes:[{name:"BottomRoutes"}]})

            setTimeout(()=>{
                Alert.alert('Logado com sucesso!')
                setLoading(false)
            },2000) 

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>
                    Bem-vindo ao MeuRemedio!
                </Text>
            </View>
            <View style={style.boxMid}>
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="ENDEREÇO DE E-MAIL"
                    IconRight={MaterialIcons}
                    IconRightName="email"
                />
                <Input
                    onChangeText={setPassword}
                    value={password}
                    title="SENHA"
                    IconRight={Octicons}
                    IconRightName={showPassword?"eye-closed":"eye"}
                    secureTextEntry={showPassword}
                    onIconRightPress={()=>setShowPassword(!showPassword)}
                />
            </View>
            <View style={style.boxBotton}>
                <Button text="ENTRAR" loading={loading} onPress={()=>getLogin()}/>
            </View>
            <Text style={style.textBottom}>Não possui conta?</Text>
            <Text style={style.textBottomCreate}> Clique aqui.</Text>
        </View>
    )
}