import { Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import Inicio from './inicio'
import Texto from './texto'
import Imagem from './imagem'
import Rolagem from './rolagem'
import Botao from './botao'
import Pressionavel from './pressionavel'
import Entrada from './entrada'
import Pilha from '../stack'
import Abas from '../tabs'

export default function App() {
  const Drawer = createDrawerNavigator()

  function tela(props: { nome: string; icone: string; titulo: string; componente: any }) {
    return (
      <Drawer.Screen
        name={props.nome}
        component={props.componente}
        options={{
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTitleAlign: 'center',
          drawerIcon: ({ focused }: any) => (
            <Ionicons
            name={props.icone as any}
            size={24}
            color={focused ? '#FFFFFF' : '#665441'}
            />
          ),
          drawerLabel: props.titulo,
          title: props.titulo,

          drawerActiveTintColor: '#FFFFFF',
          drawerInactiveTintColor: '#665441',
          drawerActiveBackgroundColor: '#665441',
          drawerStyle: styles.drawer,
          drawerItemStyle: styles.drawerItem,
          headerTintColor: '#FFFFFF'
        }}
        />
      )
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {tela({
          nome: 'Inicio',
          icone: 'home-outline',
          titulo: 'Início',
          componente: Inicio,
        })}

        {tela({
          nome: 'Texto',
          icone: 'text-outline',
          titulo: 'Texto',
          componente: Texto,
        })}

        {tela({
          nome: 'Imagem',
          icone: 'image-outline',
          titulo: 'Imagem',
          componente: Imagem,
        })}

        {tela({
          nome: 'Rolagem',
          icone: 'list-outline',
          titulo: 'Rolagem',
          componente: Rolagem,
        })}

        {tela({
          nome: 'Botao',
          icone: 'ellipse-outline',
          titulo: 'Botão',
          componente: Botao,
        })}

        {tela({
          nome: 'Pressionavel',
          icone: 'finger-print',
          titulo: 'Pressionável',
          componente: Pressionavel,
        })}

        {tela({
          nome: 'Entrada',
          icone: 'key-outline',
          titulo: 'Entrada',
          componente: Entrada,
        })}

        {tela({
          nome: 'Stack',
          icone: 'layers-outline',
          titulo: 'Stack',
          componente: Pilha,
        })}

        {tela({
          nome: 'Tabs',
          icone: 'albums-outline',
          titulo: 'Tabs',
          componente: Abas,
        })}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'rgba(166, 137, 107, 0.83)',
  },
  headerTitle: {
    color: '#ffff',
  },
  drawer: {
    backgroundColor: 'rgba(166, 137, 107, 0.83)',
  },
  drawerItem: {
    borderRadius: 30,
  },
  texto: {
    fontSize: 20,
    color: 'red',
  },
})