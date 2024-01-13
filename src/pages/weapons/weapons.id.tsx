
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppContext } from '../../context/app.context'
import { IWeapon } from '../../interfaces/weapon'
import { WeaponComp } from '../../components/weapon'


export function WeaponsPage() {
    const {id} = useParams()
    const {lang} = useAppContext()
    const [response, setResponse] = useState <IWeapon> (null!);
    const navigation = useNavigate()

    const [loaded, setLoading] = useState(false)

    useEffect(() => {
        axios.get<IWeapon>(`https://api.toweroffantasy.info/weapons/${id}?include=true&lang=${lang}`)
            .then(response => {
                setResponse(() => {
                    setLoading(true)
                    return response.data
                })

            })
            .catch(error => {
                console.error(error)
                return navigation('/404')
            })
    }, [lang])
    
    return (
        <>
            {loaded && <WeaponComp data={response}/>}
        </>
    );
};
