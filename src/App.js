import React from 'react';
import { Cards, CountryPicker, Chart } from './components';
import styles from './App.module.css'
import { fetchData } from './API/index';
import corona from './images/image.png'

class App extends React.Component {
   state = {
      data: {},
      country: ''
   };

   async componentDidMount() {
      const fetchedData = await fetchData();
      this.setState({ data: fetchedData })
   };

   onHandelCountry = async (country) => {
      const fetchDataAPI = await fetchData(country);
      this.setState({ 
         data: fetchDataAPI,
         country: country
       })

   };

   render() {
      const { data, country } = this.state;
      return (
         <div className={styles.container}>
            <img className={styles.image} src={corona} alt="COVID-19" />
            <Cards data={data} />
            <CountryPicker onHandelCountry={this.onHandelCountry} />
            <Chart data={data} country={country}/>
         </div>
      )
   };
}

export default App;
