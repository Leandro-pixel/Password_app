import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";//para o texto não ficar além do tamanho da tela do celular
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import UseStorage from "../../hooks/useStorage";

import {PasswordItem} from './components/passwordItem'

export function Passwords() {

const [listPasswords, setListPasswords] = useState([])
const focused = useIsFocused();//aqui quando sai ou entra na tela ela fica true ou false
const {getItem, removeItem} = UseStorage();

useEffect(() => {
    async function loadPasswoard() {
        const passwords = await getItem("@pass")
        setListPasswords(passwords)
    }

    loadPasswoard();
}, [focused]) //toda vez que entrar na tela chama useeffect

    async function handleDeletePassword(item) {
        const passwords = await removeItem("@pass", item)
        setListPasswords(passwords)
    }

    return(
        <SafeAreaView style={{flex:1,}}>
        <View style={styles.header}>
            <Text style={styles.title}>Minhas senhas</Text>
        </View>
        <View style={styles.content}>
            <FlatList //para exibir listas
            data={listPasswords}
            keyExtractor={(item) => String(item)} //extrair cada key em string
            renderItem={({item}) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item)}/>}//exibir em string
            style={{flex:1, paddingTop:14}}
            />
        </View>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    content: {
        flex:1,
        paddingLeft: 14,
        paddingRight: 14,
    }
})