import React, {Component} from 'react'
import {View, Text, Alert} from 'react-native'

class HttpExample extends Component {
  state = {
    air_humidity: 0,
    light: 0,
    soil_humidity: 0,
    temperature: 0
  };

  componentDidMount = () => {
    fetch('https://greenbox-server.herokuapp.com/get_state')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        else
          Alert.alert("error", "Something went wrong");
      })
      .then((responseJson) => {
        this.setState({
          air_humidity: responseJson.air_humidity,
          light: responseJson.light,
          soil_humidity: responseJson.soil_humidity,
          temperature: responseJson.temperature
        })
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <View>
        <Text>
          {this.state.air_humidity.toString()}
        </Text>
        <Text>
          {this.state.light.toString()}
        </Text>
        <Text>
          {this.state.soil_humidity.toString()}
        </Text>
        <Text>
          {this.state.temperature.toString()}
        </Text>
      </View>
    )
  }
}

export default HttpExample;