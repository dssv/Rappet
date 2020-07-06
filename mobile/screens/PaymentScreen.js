import React from 'react';
import {
    Image,
    StyleSheet,
    Dimensions,
    View,
    Text
} from 'react-native';
import { Item, Container, Content, Button } from 'native-base';
import { TextInputMask } from 'react-native-masked-text'

import { NavigationEvents } from 'react-navigation';


//Usuario comprador teste ML 
const userML = {
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_123456@testuser.com",
}

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            idLoading: true,
            index: 1,
            isBlocked: false,
            user: null,
            description: 'Confirme o valor de sua compra.'
        }

    }

    render() {
        
        dinheiro = this.props.navigation.state.params.price * 1
        return (
            <Container style={styles.container}>
                <NavigationEvents onDidFocus={async () => {
                    //Usuario da api do MercadoLivre
                    
                    let user = userML
                
                    this.setState({ user });
                   
                    this.setState({ value: dinheiro });
                    this.setState({ idLoading: true })
                }} />
                {
                    
                    <Content style={styles.contentContainer}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                            <View style={{ width: '100%', padding: '5%', marginBottom: '-5%', marginTop:'-5%' }}>
                                <View>
                                    <Text style={styles.mainTitle}>Pagamento do produto escolhido na loja {this.props.navigation.state.params.store}</Text>
                                </View>
                                <View>
                                    <Text style={styles.subTitle}>Carrinho</Text>
                                </View>
                                <View>
                                    <Text style={styles.product}>{this.props.navigation.state.params.product}</Text>
                                </View>
                            </View>
                            <Image
                                style={styles.imagePet}
                                source={require('../assets/images/mercadopago.png')}
                            />
                        </View>

                        <View style={{ padding: '2%', }}>

                            <View style={{ marginHorizontal: '10%', marginBottom: '5%' }}>
                                <Text style={styles.description}>{this.state.description}</Text>
                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: '5%' }}>
                                <Item rounded style={styles.itemInput} disabled={this.state.isBlocked}>
                                    <TextInputMask
                                        type={'money'}
                                        editable={false}
                                        style={{ width: '100%', height: 60, paddingLeft: 20, fontSize: 20, fontFamily: 'Asap' }}
                                        options={{
                                            precision: 2,
                                            separator: ',',
                                            delimiter: '.',
                                            unit: 'R$ ',
                                            suffixUnit: ''
                                        }}

                                        value={(this.state.value)}
                                    >
                                    </TextInputMask>
                                </Item>
                            </View>

                        </View>

                        <View style={{ width: '100%' }}>

                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Button
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '80%',
                                        borderRadius: 44,
                                        height: 55,
                                        backgroundColor: '#E64E10'
                                    }}
                                    onPress={() => this.props.navigation.navigate("Home")}
                                >
                                    <Text
                                        style={{
                                            color: '#fff',
                                            fontFamily: 'Asap_bold',
                                            fontSize: 16,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Confirmar Compra
                            </Text>
                                </Button>
                            </View>
                        </View>
                    </Content>
                        
                }
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF9E6',
    },
    contentContainer: {
        flex: 1,
        paddingTop: '6%'
    },
    searchBar: {
        paddingHorizontal: '5%',
        marginBottom: '5%'
    },
    itemSearchBar: {
        borderRadius: 10
    },
    imagePet: {
        width: (Dimensions.get("screen").width / 1.1),
        height: (Dimensions.get("screen").width / 2.5),
    },
    mainTitle: {
        color: '#E64E10',
        fontFamily: 'Asap_bold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop:'2%',
        marginBottom: '7%'
    },
    product: {
        color: 'black',
        fontFamily: 'Asap',
        fontStyle: 'normal',
        fontSize: 15,
        marginTop:'5%',
        marginBottom: '5%'
    },
    subTitle: {
        color: '#FF8945',
        fontFamily: 'Asap_bold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 28,
        lineHeight: 28,
    },
    description: {
        color: '#B73508',
        fontFamily: 'Asap',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 18
    },
    itemInput: {
        backgroundColor: '#fff',
        width: '80%'
    }
});

export default Payment;