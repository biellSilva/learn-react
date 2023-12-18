import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ISimulacraV2 } from '../../interfaces/simulacraV2';


export const Simulacra: React.FC = () => {
    const {id} = useParams()
    const [response, setResponse] = useState <ISimulacraV2> ();

    useEffect(() => {
        axios.get<ISimulacraV2>(`https://api.toweroffantasy.info/simulacra-v2/${id}`)
            .then(response => {
                setResponse(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [])
    
    return (
        <> 
            <div className='fixed top-0 bg-[#121212] -z-50 w-screen min-h-screen'/>

            <div className='fixed top-0 bg-transparent bg-no-repeat bg-center bg-contain brightness-50 -z-[39] w-screen min-h-screen scale-150 left-0 xl:left-[250px] xl:scale-100 xl:bg-right ease-in-out duration-[300ms]'
                style={{backgroundImage: `url(https://api.toweroffantasy.info${response ? response.assetsA0.titlePicture : '/assets'}?format=webp)`}}>
            </div>

            <div className='fixed top-0 bg-transparent bg-no-repeat bg-left bg-contain brightness-50 -z-40 w-screen min-h-screen -left-full invisible xl:visible xl:-left-[250px] ease-in-out duration-[500ms]' 
                style={{backgroundImage: `url(https://api.toweroffantasy.info${response && response.assetsA3 ? response.assetsA3.titlePicture : '/assets'}?format=webp)`}}>
            </div>

            <div className='relative m-auto bg-center bg-[#1f1f1f50] w-[80%] h-screen backdrop-blur-lg -z-10 lg:w-[60%] '>
                <span className='relative top-20 -z-[39]'>
                    <span className='relative text-left left-[20%] text-[100%] sm:text-[25%] text-slate-100 antialiased -z-[39]'>
                        <p className='z-1 font-bold text-5xl decoration-solid decoration-white hover:no-underline'>{response?.name}</p>
                        <p className='relative font-thin text-base italic'>{response?.rarity} Simulacrum</p>
                    </span>
                </span>
            </div>
        </>
    );
};
