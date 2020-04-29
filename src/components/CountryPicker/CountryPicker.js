import React, { useState, useEffect } from 'react';
import { fetchCoutries } from './../../API/index';
import {FormControl, NativeSelect} from '@material-ui/core';
import styles from './index.module.css'

const CountryPicker = ({onHandelCountry}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountriesName = async () => {
            setCountries(await fetchCoutries());
        };
        getCountriesName();
    },[setCountries]);

    const showCountries = () => 
        countries.map((element, index) => 
            <option key={index} value={element.name}>{element.name}</option>
        
        );
    
    
    
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect  onChange={(e) => onHandelCountry(e.target.value)}>
                <option value="">Global</option>
                {showCountries()}
            </NativeSelect>
         </FormControl>
    )
}
export default CountryPicker;