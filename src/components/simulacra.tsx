
import { ColorsEnum } from '../enums'
import { ISimulacraV2 } from '../interfaces/simulacraV2'
import { WeaponComp } from './weapon'


interface ICard {
    data: ISimulacraV2
}


export const SimulacraComp = ({data}: ICard) => {
  return (
    <div className='relative w-[60%] mx-auto my-5 rounded-md' style={{ backgroundColor: ColorsEnum.NavBar }}>
        <div className='mx-5'>
            <div className='SIMULACRUM'>
                <h2 className='text-5xl font-bold uppercase'>{ data.name }</h2>
                <h3 className='font-semibold'>{ data.rarity } Simulacrum</h3>
                <div className='w-full h-32 bg-contain bg-no-repeat' style={{backgroundImage: `url(${data.assetsA0.avatar})` }} />
            </div>
            <div>
                {data.weapon && <WeaponComp data={data.weapon}/>}
            </div>
        </div>
    </div>
  )
}