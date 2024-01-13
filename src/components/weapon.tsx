
import { IWeapon } from '../interfaces/weapon'


interface ICard {
    data: IWeapon
}


export const WeaponComp = ({data}: ICard) => {
  return (
    <div className='WEAPON flex flex-col border border-red-600'>
        <h2 className='h-fit w-fit text-3xl font-bold uppercase'>{ data.name }</h2>
        <h3 className='h-fit w-fit font-semibold'>{ data.rarity } Weapon</h3>
        
        <div className='w-32 h-32 bg-contain bg-no-repeat' style={{backgroundImage: `url(${data.assets.icon})` }} />
        <div className='w-8 h-8 bg-contain bg-no-repeat' style={{backgroundImage: `url(https://api.toweroffantasy.info/extras/assets/${data.element})` }} />
        <div className='w-8 h-8 bg-contain bg-no-repeat' style={{backgroundImage: `url(https://api.toweroffantasy.info/extras/assets/${data.category})` }} />
        
    </div>
  )
}