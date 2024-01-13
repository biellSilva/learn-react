
import { NavLink, Outlet } from 'react-router-dom';
import { ColorsEnum } from '../../enums';
import { useAppContext } from '../../context/app.context';


export function BaseLayout() {
    const {lang, setLang} = useAppContext()
    return (
        <div className='w-screen h-screen overflow-auto font-sans text-[#bababa]' style={{ backgroundColor: ColorsEnum.BG }}>
            <select 
            name='langs' 
            defaultValue={lang}
            className='relative p-1 top-5 mr-5 float-right rounded-md uppercase font-semibold text-center ' 
            id='language-selector'  
            onChange={(value) => {setLang(value.target.value)}}
            style={{ backgroundColor: ColorsEnum.NavBar }}>
                <option className='font-semibold' value='de' >de</option>
                <option className='font-semibold' value='en'>en</option>
                <option className='font-semibold' value='es'>es</option>
                <option className='font-semibold' value='fr'>fr</option>
                <option className='font-semibold' value='id'>id</option>
                <option className='font-semibold' value='ja'>ja</option>
                <option className='font-semibold' value='pt'>pt</option>
                <option className='font-semibold' value='ru'>ru</option>
                <option className='font-semibold' value='th'>th</option>
                <option className='font-semibold' value='zh-cn'>zh-cn</option>
                <option className='font-semibold' value='zh-hans-sg'>zh-hans-sg</option>
            </select>
            
            <header className='relative text-center'>
                <h1 className='uppercase mt-12 text-6xl font-semibold'>Tower of Fantasy</h1>
                <nav className='mt-5 grid grid-flow-row grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-1 p-2 mx-auto w-[60%]  justify-evenly rounded-md capitalize font-medium' style={{ backgroundColor: ColorsEnum.NavBar }}>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'px-2 w-full rounded-sm bg-[#23285c] text-[#5dbeeb]' : 'px-2 w-full rounded-sm hover:bg-[#23285c] hover:text-[#5dbeeb] focus:bg-[#23285c] focus:text-[#5dbeeb]' }>all</NavLink>
                    <NavLink to='/simulacra' className={({ isActive }) => isActive ? 'px-2 w-full rounded-sm bg-[#23285c] text-[#5dbeeb]' : 'px-2 w-full rounded-sm hover:bg-[#23285c] hover:text-[#5dbeeb] focus:bg-[#23285c] focus:text-[#5dbeeb]' }>simulacra</NavLink>
                    <NavLink to='/weapons' className={({ isActive }) => isActive ? 'px-2 w-full rounded-sm bg-[#23285c] text-[#5dbeeb]' : 'px-2 w-full rounded-sm hover:bg-[#23285c] hover:text-[#5dbeeb] focus:bg-[#23285c] focus:text-[#5dbeeb]' }>weapons</NavLink>
                    <NavLink to='/matrices' className={({ isActive }) => isActive ? 'px-2 w-full rounded-sm bg-[#23285c] text-[#5dbeeb]' : 'px-2 w-full rounded-sm hover:bg-[#23285c] hover:text-[#5dbeeb] focus:bg-[#23285c] focus:text-[#5dbeeb]' }>matrices</NavLink>
                    <NavLink to='/relics' className={({ isActive }) => isActive ? 'px-2 w-full rounded-sm bg-[#23285c] text-[#5dbeeb]' : 'px-2 w-full rounded-sm hover:bg-[#23285c] hover:text-[#5dbeeb] focus:bg-[#23285c] focus:text-[#5dbeeb]' }>relics</NavLink>
                    <NavLink to='/food' className={({ isActive }) => isActive ? 'px-2 w-full rounded-sm bg-[#23285c] text-[#5dbeeb]' : 'px-2 w-full rounded-sm hover:bg-[#23285c] hover:text-[#5dbeeb] focus:bg-[#23285c] focus:text-[#5dbeeb]' }>food</NavLink>
                    <NavLink to='/mounts' className={({ isActive }) => isActive ? 'px-2 w-full rounded-sm bg-[#23285c] text-[#5dbeeb]' : 'px-2 w-full rounded-sm hover:bg-[#23285c] hover:text-[#5dbeeb] focus:bg-[#23285c] focus:text-[#5dbeeb]' }>mounts</NavLink>
                </nav>
            </header>
            
            <main className='relative w-60% h-fit mx-auto overflow-auto'>
                <Outlet />
            </main>

            <footer>
            </footer>
        </div>
    )
};
