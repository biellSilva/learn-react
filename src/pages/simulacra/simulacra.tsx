import { useEffect, useState } from 'react';
import axios from 'axios';

import { ISimulacraSimple } from '../../interfaces/simulacra'
import { SimulacraCard } from '../../components/cards/simulacra';
import { ColorsEnum } from '../../enums';
import { useAppContext } from '../../context/app.context';


export function SimulacraCards() {
    const {lang} = useAppContext()
    const [response, setResponse] = useState <ISimulacraSimple[]> ([]);

    const [inputValue, setInputValue] = useState <string> ('');

    const filteredData = response.filter((obj) => obj.name.toLowerCase().includes(inputValue.toLowerCase()))

    useEffect(() => {
        axios.get<ISimulacraSimple[]>(`https://api.toweroffantasy.info/simulacra?include=true&lang=${lang}`)
            .then(response => {
                setResponse(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [lang]);
    
  return (
      <div className='relative w-[60%] mx-auto'>
        <input placeholder='Search' onChange={(event) => setInputValue(event.target.value)} type="text" className='rounded-lg h-7 w-[15%] mx-auto mt-2 mb-3 p-3 min-w-[15%]' 
            style={{ backgroundColor: ColorsEnum.NavBar }} />
        <div className='mx-auto w-full rounded-lg overflow-hidden' style={{ backgroundColor: ColorsEnum.NavBar }} >
            <div className='p-4 grid grid-cols-1 gap-2 justify-evenly justify-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 ease-in-out duration-200 delay-0' > 
                {filteredData.map((data) => { return ( < SimulacraCard data = { data } key = { data.id } /> ) })}
            </div>
        </div>
      </div>
    )
}