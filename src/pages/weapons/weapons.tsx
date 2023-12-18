import { useEffect, useState } from 'react';
import axios from 'axios';

import { Colors } from '../../enums';
import { IWeaponSimple } from '../../interfaces/weapon';
import { WeaponCard } from '../../components/cards/weapons';


export function WeaponsCards() {
    const [response, setResponse] = useState <IWeaponSimple[]> ([]);

    const [inputValue, setInputValue] = useState <string> ('');

    const filteredData = response.filter((obj) => obj.name.toLowerCase().includes(inputValue.toLowerCase()))

    useEffect(() => {
        axios.get<IWeaponSimple[]>('https://api.toweroffantasy.info/weapons')
            .then(response => {
                setResponse(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
  return (
      <div className='relative w-[60%] mx-auto'>
        <input placeholder='Search' onChange={(event) => setInputValue(event.target.value)} type="text" className='rounded-lg h-7 w-[15%] mx-auto mt-2 mb-3 p-3' style={{backgroundColor:Colors['NavBar']}}/>
        <div className='mx-auto w-full rounded-lg overflow-hidden' style={{ backgroundColor: Colors['NavBar'] }}>
            <div className='p-4 grid grid-cols-1 gap-2 justify-evenly justify-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 ease-in-out duration-200 delay-0'
            >{filteredData.map((data) => {
                return (
                    <WeaponCard data={data} key={data.id} />
                )
            })}
            </div>
        </div>
      </div>
    )
}