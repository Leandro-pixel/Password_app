import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Home } from './pages/home'
import {Passwords} from './pages/passwords'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
//criando as rotas do app
export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name='home'
            component={Home}
            options={{ //aqui você usa opções para tirar estilos nativos como o header
                headerShown: false,
                tabBarShowLabel:false,
                tabBarIcon: ({focused, size, color}) => { //mexendo no ícone da página da navegação
                    if(focused){
                        return <Ionicons size={size} color={color} name='home'/> //icone de casa
                    }

                    return <Ionicons size={size} color={color} name='home-outline'/> //icone só com o contorno da casa
                }
            }}
            />

            <Tab.Screen
            name='passwords'
            component={Passwords}
            options={{
                headerShown: false,
                tabBarShowLabel:false, //tirar a label
                tabBarIcon: ({focused, size, color}) => {
                    if(focused){
                        return <Ionicons size={size} color={color} name='lock-closed'/>
                    }

                    return <Ionicons size={size} color={color} name='lock-closed-outline'/>
                }
            }}
            />
        </Tab.Navigator>
    )
}