import AsyncStorage from "@react-native-async-storage/async-storage"

const UseStorage = () => {
    //Buscar os itens salvos
    const getItem = async (key) => {
        try {

            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
            
        } catch (error) {
            console.log("erro ao buscar", error)
            return [];
        }
    }

    //salvar um item no storage
    const saveItem = async (key, value) => {
        try {

            let passwords = await getItem(key);//buscando
            
            passwords.push(value)//salvando

            await AsyncStorage.setItem(key, JSON.stringify(passwords))
            
        } catch (error) {
            console.log("erro ao salvar", error)
            
        }
    }

    //remover algo do storage
    const removeItem = async (key, item) => {
        try {

            let passwords = await getItem(key);//buscando
            
            let myPassword = passwords.filter((password) => {
                return (password !== item)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPassword))
            return myPassword;
            
        } catch (error) {
            console.log("erro ao deletar", error)
            
        }
    }

    return{
        getItem,
        saveItem,
        removeItem
    }
}

export default UseStorage;