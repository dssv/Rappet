import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';
import { Content } from 'native-base';



const vetArray = [
    {
        "idStore": 1,
        "image": "https://caramelo-images-store.s3.amazonaws.com/heitor_racao.jpg",
        "name": "Heitor Rações",
    },
    {
        "idStore": 2,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQABMci2SuQRu1JCURuYQGtlmtF2CMfsI5ygw&usqp=CAU",
        "name": "Clinica PlusPet",
    },
    {
        "idStore": 3,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUIe9UAOnnqcjOSHDyWpS_UD1OCwpnYdBNYA&usqp=CAU",
        "name": "Clinica PetVet",
    }

] 
class LoginScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            dataSource: vetArray,
            loading: true
        }
    }

    renderItem = ({ item}) => {
        return (
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', backgroundColor: '#FFF9E6',marginHorizontal:'5%', borderRadius: 40, }}
                onPress={() => this.props.navigation.navigate("Home")}>
                <Image style={{ width: 70, height: 80, resizeMode: 'stretch', marginLeft: '8%', borderRadius: 40, marginVertical: '3%' }} source={{ uri: item.image }} />
                <View style={{ flex: 1, alignContent: 'center', width: '100%', }}>
                    <Text style={styles.textListType}> {item.name} </Text>
                </View>
            </TouchableOpacity>
        )
    }

    renderSeparator = () => {
        return (
            <View style={{ height: 7, width: '100%', backgroundColor: '#FF8945' }}>

            </View>
        )
    }

    render() {

        return (
            <Content style={styles.contentContainer}>
            
                <View style={{ width: '100%', padding: '5%' }}>
                    <View style={{}}>
                        <Text style={styles.mainTitle}>Estas são as clínicas mais próximas de você!</Text>
                    </View>
                </View>
                
                <View style={styles.container}>
                    
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
            </Content>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF8945'//'#FFF9E6'
    },
    contentContainer: {
        flex: 1,
        paddingTop: '5%',
        backgroundColor: `#FF8945`//'#FFF9E6'
    },
    textListType: {
        fontSize: 18,
        marginLeft: '5%',
        marginBottom: '3%',
        marginTop: '5%',
        color: 'black'
    },
    mainTitle: {
        color: '#E64E10',
        fontFamily: 'Asap_bold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
});

export default LoginScreen;