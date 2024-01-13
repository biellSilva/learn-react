

import { ColorsEnum } from '../../enums'
import { IWeaponSimple } from '../../interfaces/weapon'


interface ICard {
    data: IWeaponSimple
}


export const WeaponCard = ({data}: ICard) => {
  return (
    <a className='relative group w-36 h-48 bg-cente overflow-clip rounded-lg ease-in-out duration-[250ms] delay-0'
    href={`/weapons/${data.id}`} style={{backgroundColor: ColorsEnum.WeaponCard}}>
      <div className='absolute top-0 left-7 bg-no-repeat rounded-lg w-full h-full scale-125 bg-cover bg-center ease-in-out duration-[250ms] delay-0 group-hover:scale-150' style={{backgroundImage: `url(${data.assets.icon})`}}/>

      <div className='bg-no-repeat rounded-lg w-full h-full bg-cover bg-center -z-10' style={{backgroundImage: `url(https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/Activity/JDWC/AD/jingdwc_huodong_zhuangshizuo.png)`}}/>

      <div className='absolute ease-in-out duration-[250ms] delay-0 h-full w-full top-0 z-10 bg-gradient-to-t from-[#171e36] from-[0%] via-[70%] via-transparent hover:via-[100%]'/>
      <span className='absolute z-20 w-20 text-left left-3 bottom-8 text-white font-semibold'>{data.name}</span>
      <div className='' style={{backgroundImage: ``}}/>
    </a>
  )
}