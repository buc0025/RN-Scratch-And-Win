import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

var itemArray = new Array(25).fill("empty");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: ""
    };
  }

  //when app loads up
  componentDidMount() {
    //TODO: call generate random number method
    this.setState({ randomNumber: this.generateRandomNumber})
  }

  generateRandomNumber = () => {
    //Todo: generate random number
    let randomNumber = Math.floor(Math.random() * 25);
    this.setState({ randomNumber: randomNumber, isScratched: true });
    return randomNumber;
  };

  scratchItem = (itemNumber) => {
    //decide lucky or unlucky
    if (this.state.randomNumber === itemNumber) {
      itemArray[itemNumber] = "lucky";
    } else {
      itemArray[itemNumber] = "unlucky";
    }
    this.forceUpdate();
  };

  scratchItemIcon = (itemNumber) => {
    //todo: find right icon
    if (itemArray[itemNumber] === "lucky") {
      return "dollar";
    } else if (itemArray[itemNumber] === "unlucky") {
      return "frown-o";
    }
    return "circle";
  };

  scratchItemColor = (itemNumber) => {
    //todo: find right color
    if (itemArray[itemNumber] === "lucky") {
      return "green";
    } else if (itemArray[itemNumber] === "unlucky") {
      return "red";
    }
    return "blue";
  };

  showAllItem = () => {
    //todo: button reveal all icons
    itemArray.fill("unlucky");
    itemArray[this.state.randomNumber] = "lucky";

    this.forceUpdate();
  };

  resetGame = () => {
    this.setState({randomNumber: this.generateRandomNumber()},
    () => {
      itemArray.fill("empty");
      this.forceUpdate;
    });
  };


  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Scratch and win game</Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.itemRow}>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(0)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(0)}
              size={50}
              color={this.scratchItemColor(0)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(1)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(1)}
              size={50}
              color={this.scratchItemColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(2)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(2)}
              size={50}
              color={this.scratchItemColor(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(3)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(3)}
              size={50}
              color={this.scratchItemColor(3)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(4)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(4)}
              size={50}
              color={this.scratchItemColor(4)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(5)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(5)}
              size={50}
              color={this.scratchItemColor(5)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(6)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(6)}
              size={50}
              color={this.scratchItemColor(6)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(7)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(7)}
              size={50}
              color={this.scratchItemColor(7)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(8)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(8)}
              size={50}
              color={this.scratchItemColor(8)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(9)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(9)}
              size={50}
              color={this.scratchItemColor(9)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(10)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(10)}
              size={50}
              color={this.scratchItemColor(10)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(11)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(11)}
              size={50}
              color={this.scratchItemColor(11)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(12)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(12)}
              size={50}
              color={this.scratchItemColor(12)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(13)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(13)}
              size={50}
              color={this.scratchItemColor(13)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(14)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(14)}
              size={50}
              color={this.scratchItemColor(14)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(15)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(15)}
              size={50}
              color={this.scratchItemColor(15)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(16)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(16)}
              size={50}
              color={this.scratchItemColor(16)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(17)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(17)}
              size={50}
              color={this.scratchItemColor(17)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(18)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(18)}
              size={50}
              color={this.scratchItemColor(18)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(19)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(19)}
              size={50}
              color={this.scratchItemColor(19)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(20)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(20)}
              size={50}
              color={this.scratchItemColor(20)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(21)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(21)}
              size={50}
              color={this.scratchItemColor(21)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(22)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(22)}
              size={50}
              color={this.scratchItemColor(22)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(23)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(23)}
              size={50}
              color={this.scratchItemColor(23)}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(24)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(24)}
              size={50}
              color={this.scratchItemColor(24)}
              />
            </TouchableOpacity>
          </View>
          
        </View>
        <TouchableOpacity 
        onPress={() => {this.showAllItem()}}
        style={styles.button}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Show all coupons</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {

  },
  itemRow: {
    flexDirection: 'row'
  },
  item: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    minWidth: 70
  },
  button: {
    padding: 10,
    borderWidth: 2,
    borderColor: 'blue',
    marginTop: 20,
    backgroundColor: 'skyblue',
    
  }
});
