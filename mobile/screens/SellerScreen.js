import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Item, Input, Container, Content, Button, Form, Toast, Label } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class Seller extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: ' ',
            description: '',
            category: '',
            local: '',
            quantity: '',
            price: ''
        }
        
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleFocus = (i) => this.setState({ isFocused: i })

    handleBlur = () => this.setState({ isFocused: 0 })

    render() {
        return (
            <Container style={styles.container}>
                <KeyboardAwareScrollView
                    style={{ flex: 1 }}
                >

                    <Content style={styles.contentContainer}>
                        <View style={{ alignItems: 'center', marginBottom: '10%' }}>
                            <Text style={styles.titleStyle}>Falta pouco para você vender!</Text>
                        </View>

                        <View style={{ flex: 1 }}>

                            <View style={{ flex: 1 }, { marginHorizontal: '10%' }}>
                                <Form>
                                    <View style={{ marginVertical: '1%' }}>

                                        <Item
                                            rounded
                                            style={[styles.formstyle, {
                                                borderColor: this.state.isFocused == 1
                                                    ? '#FF8945'
                                                    : '#fff',
                                                borderBottomWidth: 1,
                                            }]}

                                        >
                                            <Label style={styles.labelStyle}>Título</Label>
                                            <Input
                                                onFocus={() => this.handleFocus(1)}
                                                onBlur={() => this.handleBlur()}
                                                style={styles.inputStyle}
                                                placeholder='Produto'
                                                placeholderTextColor='#C0C0C0'
                                                value={this.state.title}
                                                onChangeText={val => this.setState({ title: val })}
                                                autoCapitalize='none'
                                            />
                                        </Item>
                                    </View>

                                    <View style={{ marginVertical: '1%' }}>
                                        <Item
                                            rounded
                                            style={[styles.formstyle, {
                                                borderColor: this.state.isFocused == 6
                                                    ? '#FF8945'
                                                    : '#fff',
                                                borderBottomWidth: 1,
                                            }]}
                                        >
                                            <Label style={styles.labelStyle}>Descrição</Label>
                                            <Input
                                                onFocus={() => this.handleFocus(6)}
                                                onBlur={() => this.handleBlur()}
                                                style={styles.inputStyle}
                                                placeholder='Marca do produto'
                                                placeholderTextColor='#C0C0C0'
                                                value={this.state.description}
                                                onChangeText={val => this.setState({ description: val })}
                                                autoCapitalize='none' />
                                        </Item>
                                    </View>
                                    <View style={{ marginVertical: '1%' }}>

                                        <Item
                                            rounded
                                            style={[styles.formstyle, {
                                                borderColor: this.state.isFocused == 2
                                                    ? '#FF8945'
                                                    : '#fff',
                                                borderBottomWidth: 1,
                                            }]}
                                            // stackedLabel

                                        >
                                            <Label style={styles.labelStyle}>Categoria</Label>
                                            <Input
                                                onFocus={() => this.handleFocus(2)}
                                                onBlur={() => this.handleBlur()}
                                                style={styles.inputStyle}
                                                placeholder='Ração, brinquedo'
                                                placeholderTextColor='#C0C0C0'
                                                value={this.state.category}
                                                onChangeText={val => this.setState({ category: val })}
                                                autoCapitalize='none' />
                                        </Item>
                                    </View>
                                    <View style={{ marginVertical: '1%' }}>

                                        <Item
                                            rounded
                                            style={[styles.formstyle, {
                                                borderColor: this.state.isFocused == 3
                                                    ? '#FF8945'
                                                    : '#fff',
                                                borderBottomWidth: 1,
                                            }]}>

                                            <Label style={styles.labelStyle}>Locais de entrega</Label>
                                            <Input
                                                onFocus={() => this.handleFocus(3)}
                                                onBlur={() => this.handleBlur()}
                                                style={styles.inputStyle}
                                                placeholder='Bairro1;Bairro2'
                                                placeholderTextColor='#C0C0C0'
                                                value={this.state.local}
                                                onChangeText={val => this.setState({ local: val })}
                                                autoCapitalize='none' />
                                        </Item>

                                    </View>
                                    <View style={{ marginVertical: '1%' }}>

                                        <Item
                                            rounded
                                            style={[styles.formstyle, {
                                                borderColor: this.state.isFocused == 4
                                                    ? '#FF8945'
                                                    : '#fff',
                                                borderBottomWidth: 1,
                                            }]}>

                                            <Label style={styles.labelStyle}>Quantidade</Label>
                                            <Input
                                                onFocus={() => this.handleFocus(4)}
                                                onBlur={() => this.handleBlur()}
                                                style={styles.inputStyle}
                                                placeholder='5'
                                                placeholderTextColor='#C0C0C0'
                                                value={this.state.quantity}
                                                onChangeText={val => this.setState({ quantity: val })} 
                                                autoCapitalize='none'/>
                                        </Item>

                                    </View>
                                    <View style={{ marginVertical: '1%' }}>

                                        <Item
                                            rounded
                                            style={[styles.formstyle, {
                                                borderColor: this.state.isFocused == 5
                                                    ? '#FF8945'
                                                    : '#fff',
                                                borderBottomWidth: 1,
                                            }]}>

                                            <Label style={styles.labelStyle}>Valor</Label>
                                            <Input
                                                onFocus={() => this.handleFocus(5)}
                                                onBlur={() => this.handleBlur()}
                                                style={styles.inputStyle}
                                                placeholder='R$50,05'
                                                placeholderTextColor='#C0C0C0'
                                                value={this.state.price}
                                                onChangeText={val => this.setState({ price: val })} 
                                                autoCapitalize='none'/>
                                        </Item>
                                    </View>
                                </Form>
                            </View>

                            <View style={{ flex: 0, marginBottom: '5%' }}>
                                <View style={{ paddingHorizontal: '5%', marginVertical: '3%', alignItems: 'center', justifyContent: 'center' }}>
                                    <Button style={styles.buttonCreate} onPress={() => this.props.navigation.navigate("Home")} >
                                        <Text style={styles.textButton}>Adicionar Produto</Text>
                                    </Button>
                                </View>
                            </View>

                        </View>

                    </Content>
                </KeyboardAwareScrollView>

            </Container >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF4D0',
    },
    contentContainer: {
        flex: 1,
        paddingTop: '2%'
    },
    buttonCreate: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        borderRadius: 44,
        height: 55,
        backgroundColor: '#E64E10'
    },
    button: {
        justifyContent: 'center',
        width: '80%',
        borderRadius: 44,
        height: 55,
        backgroundColor: '#CDC2B0'
    },
    textButton: {
        fontFamily: 'Asap_bold',
        fontSize: 18,
        marginHorizontal: '20%',
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formstyle: {
        backgroundColor: '#FFF',
        fontFamily: 'Asap_bold',
        flex: 1,
        justifyContent: "flex-end",
        borderColor: '#fff'
    },
    labelStyle: {
        color: '#E64E10',
        fontWeight: 'bold',
        fontSize: 12,
        paddingLeft: '10%',
        // marginTop: '-2%'
    },
    inputStyle: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: '#000',
        paddingLeft: '5%',
        // marginTop: '-5%',
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#E44C0B',
        alignContent: 'center',
        padding: '20%',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '-15%',
        marginBottom: '-25%'
    }
});

export default Seller;