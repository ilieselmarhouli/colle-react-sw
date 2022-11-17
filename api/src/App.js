import{StyleSheet,View, Button, TextInput, FlatList} from 'react-native'
import React from "react";
import { loadPerso } from '../src/api.js'
import './App.css';
class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
		  isLoaded: false
		};
    this.searchedText=""
	}

  loadPersonnage()
{
  const { items } = this.state;
return (
    <div className='App'> 
       <ul>
          {items.map(items => (
              <li key = {items.id }>
                {items.name} 
                {items.username}
                     {items.email}
                     {items.street}
                     {items.city}
                     {items.zipcode}
             </li>
          ))}
       </ul>
    </div>
 );

}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json()) .then((json) => {
				this.setState({
					items: json,
					isLoaded: true
				});
			})
	}
	render() {
		const { isLoaded, items } = this.state;
		if(!isLoaded) {
      return <div> Loading....</div>
   }
   else {
      return (
         <div className='App'> 
            <ul>
               {items.map(items => (
                   <li key = {items.id }>
                     {items.name}
                      . <Button key={items.name} style={{height: 100}} title="more" onPress={()=>{this.loadPerso()}} ></Button>
                  </li>
               ))}
            </ul>
         </div>
      );
   }
}
}
export default App;

