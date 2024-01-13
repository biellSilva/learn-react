
import { ISimulacraSimple } from '../../interfaces/simulacra'


interface ICardSimulacraSimple {
    data: ISimulacraSimple
}


export const SimulacraCard = ({data}: ICardSimulacraSimple) => {
  return (
    <a className='relative group w-36 h-48 overflow-clip rounded-lg ease-in-out duration-[250ms] delay-0'
    href={`/simulacra/${data.id}`}>
      <div className='bg-no-repeat rounded-lg w-full h-full bg-cover bg-center ease-in-out duration-[250ms] delay-0  group-hover:scale-110' style={{backgroundImage: `url(${data.assetsA0.painting})`}}/>
      <div className='absolute ease-in-out duration-[250ms] delay-0 h-full w-full top-0 z-10 bg-gradient-to-t from-[#171e36] from-[0%] via-[70%] via-transparent hover:via-[100%]'/>
      <div className='absolute h-7 w-10 bg-no-repeat bg-cover bg-center z-20 right-3 bottom-1' style={{backgroundImage: `url(${data.assetsA0.rarityIcon})`}} />
      <span className='relative z-20 text-center left-3 bottom-8 text-white font-semibold'>{data.name}</span>
    </a>
  )
}