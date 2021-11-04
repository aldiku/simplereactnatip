import React, {Component} from 'react';
import { Text, View, FlatList, Image, TouchableOpacity} from 'react-native';


export default class News extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[]
     };
   }
 
  componentDidMount(){
    fetch("https://api.dtpeduli.org/blog/news")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSource: responseJson.rows
      })
    })
    .catch(error=>console.log(error)) 
    }
 
    render(){
     return(
      <View style={{padding:10}}>
      <FlatList
      padding ={30}
         data={this.state.dataSource}
         renderItem={({item}) => 
         <TouchableOpacity onPress={() => { alert('id :'+item.id+' judul : '+ item.title) } }>
         <View style={{flexDirection: 'row', alignItems: 'center', flex: 1, height: 50, padding: 10}}>
             <Image
            source={item.filename}
            style={{height: 50, width: 50, borderRadius: 10}}
        />
         <Text style={{height: 50, marginLeft: 10}}>{item.title}</Text>
         </View>
         </TouchableOpacity>
        }
       />
      
     </View>
     
     )}
     
}

