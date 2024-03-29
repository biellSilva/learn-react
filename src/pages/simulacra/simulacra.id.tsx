
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { ISimulacraV2 } from '../../interfaces/simulacraV2'
import { useAppContext } from '../../context/app.context'
import { SimulacraComp } from '../../components/simulacra'


export function SimulacraPage() {
    const {id} = useParams()
    const {lang} = useAppContext()
    const [response, setResponse] = useState <ISimulacraV2> (null!);
    const navigation = useNavigate()

    const [loaded, setLoading] = useState(false)

    useEffect(() => {
        axios.get<ISimulacraV2>(`https://api.toweroffantasy.info/simulacra-v2/${id}?include=true&lang=${lang}`)
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
            {loaded && <SimulacraComp data={response}/>}
        </>
    );
};
