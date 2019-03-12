import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Picker,
  Keyboard
} from 'react-native';
import { RadioButton } from 'react-native-paper';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeSerie: '',
      categoriaMoto: 'Moto',

      listaItens: [
        { nome: 'CRF 230', categoria: 'OffRoad' },
        { nome: 'NINJA ZX-10R SE', categoria: 'OnRoad' },
        { nome: 'CRF 250', categoria: 'OffRoad' },
        { nome: 'Suzuki GSX-S1000A', categoria: 'OnRoad' },
        { nome: 'CRF 450', categoria: 'OffRoad' },
        { nome: 'V-STROM650XT nova', categoria: 'OnRoad' },
        { nome: 'GSX-R1000A/R', categoria: 'OnRoad' },
        { nome: 'Iron 883', categoria: 'OnRoad' },
        { nome: 'NINJA 1000', categoria: 'OnRoad' }
      ]
    }
    // Amarando a função com o construtor da classe
    //this.renderItemData = this.renderItemData.bind(this);
    this.alterouTexto = this.alterouTexto.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
  }

  renderItemData(item) {
    return (
      <View style={styles.listaViewTotal}>
        <View style={styles.listaView}>
          <Text style={styles.itemListaCategoriaTexto}>{item.categoria}</Text>
          <Text style={styles.itemListaNomeTexto}>{item.nome}</Text>
        </View>
      </View>

    );
  }

  alterouTexto(texto) {
    let state = this.state;
    state.nomeMoto = texto;

    this.setState(state);
  }

  cadastrar() {
    let state = this.state;

    if (state.nomeSenomeMotorie != '') {
      state.listaItens.push({ nome: state.nomeMoto, categoria: this.state.categoriaMoto });
      state.nomeMoto = '';
      this.setState(state)
      Keyboard.dismiss(); //Fechar teclado depois de salvar
      alert('Cadastrado com sucesso');

    } else {
      alert('Informe um nome');
    }
  }
  render() {
    return (
      <View style={styles.principalView}>
        <View style={styles.cabecalhoView}>
          <Text style={styles.cabecalhoTexto}>Motos</Text>
        </View>

        <View style={styles.cadastrarView}>
          <View style={styles.itemRadioButton}>
            <View style={styles.itemRadioButton}>
              <RadioButton value={this.state.categoriaMoto}
                color="green"
                status={this.state.categoriaMoto === 'OffRoad' ? 'checked' : 'unchecked'}
                onPress={(categoriaMoto) => { this.setState({ categoriaMoto: 'OffRoad' }); }}></RadioButton>
              <Text>OffRoad</Text>
            </View>
            <View style={styles.itemRadioButton}>
              <RadioButton value={this.state.categoriaMoto}
                color="white"
                status={this.state.categoriaMoto === 'OnRoad' ? 'checked' : 'unchecked'}
                onPress={(categoriaMoto) => { this.setState({ categoriaMoto: 'OnRoad' }); }}>
              </RadioButton>
              <Text>OnRoad</Text>
            </View>
          </View>
          <TextInput
            style={styles.textoInput}
            keyboardType='default'
            placeholder='Digite o nome da Moto!'
            onChangeText={(texto) => this.alterouTexto(texto)}
            value={this.state.nomeMoto}>
          </TextInput>

          <TouchableOpacity style={styles.botaoCadastrar} onPress={this.cadastrar}                  >
            <Text>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.corpoView}>
          <FlatList data={this.state.listaItens} renderItem={({ item }) => this.renderItemData(item)} />
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  principalView: {
    flex: 1,
    backgroundColor: 'lightgray'
  },

  cabecalhoView: {
    backgroundColor: 'gray',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  corpoView: {
    flex: 1,
    backgroundColor: 'lightgray'
  },

  rodapeView: {
    height: 40,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  cabecalhoTexto: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold'
  },

  rodapeTexto: {
    fontSize: 15,
    color: 'black'
  },

  listaViewTotal: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  listaView: {
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
    flexGrow: 1,
    margin: 2,
    width: 280,
    height: 55,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'lightgray'
  },

  itemListaCategoriaTexto: {
    fontSize: 15,
    fontStyle: 'italic'
  },

  itemListaNomeTexto: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  cadastrarView: {
    backgroundColor: 'lightgray',
    margin: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  textoInput: {
    borderWidth: 2,
    borderColor: 'black',
    height: 40,
    width: 300,
    marginBottom: 5
  },

  categoriaCombo: {
    height: 50,
    width: 120,
    borderWidth: 2,
    borderColor: 'black'
  },

  botaoCadastrar: {
    width: 150,
    alignItems: 'center',
    backgroundColor: 'darkgrey',
    padding: 10,
    borderRadius: 15
  },

  itemRadioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
