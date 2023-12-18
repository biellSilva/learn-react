
import { NavLink, Outlet } from 'react-router-dom';
import { Colors } from '../../enums';


export function BaseLayout() {
    return (
        <div className='w-screen h-screen overflow-auto font-sans text-[#bababa]' style={{backgroundColor: Colors['BG']}}>
            <div className='absolute mt-5 p-2 w-fit rounded-md font-medium' style={{backgroundColor: Colors['NavBar']}}>
                    <select name="langs" id="language-selector">
                        <option value="de">de</option>
                        <option value="en">en</option>
                        <option value="es">es</option>
                        <option value="fr">fr</option>
                        <option value="id">id</option>
                        <option value="ja">ja</option>
                        <option value="pt">pt</option>
                        <option value="ru">ru</option>
                        <option value="th">th</option>
                        <option value="zh-cn">zh-cn</option>
                        <option value="zh-hans-sg">zh-hans-sg</option>
                    </select>
                </div>
            <header className='relative text-center'>
                <h1 className='uppercase mt-16 text-6xl font-semibold'>Tower of Fantasy Index</h1>
                <nav className='mt-5 grid grid-flow-row grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-1 p-2 mx-auto w-[60%]  justify-evenly rounded-md capitalize font-medium' style={{backgroundColor: Colors['NavBar']}}>
                    <NavLink to="/" className={({ isActive }) => isActive ? "px-2 w-full rounded-sm bg-[#23285c] text-[#5dbeeb]" : "px-2 w-full rounded-sm hover:bg-[#23285c] hover:text-[#5dbeeb] focus:bg-[#23285c] focus:text-[#5dbeeb]" }>all</NavLink>
                    <NavLink to="/simulacra" className={({ isActive }) => isActive ? "px-2 w-full rounded-sm bg-[#23285c] text-[#5dbeeb]" : "px-2 w-full rounded-sm hover:bg-[#23285c] hover:text-[#5dbeeb] focus:bg-[#23285c] focus:text-[#5dbeeb]" }>simulacra</NavLink>
                    <NavLink to="/weapons" className={({ isActive }) => isActive ? "px-2 w-full rounded-sm bg-[#23285c] text-[#5dbeeb]" : "px-2 w-full rounded-sm hover:bg-[#23285c] hover:text-[#5dbeeb] focus:bg-[#23285c] focus:text-[#5dbeeb]" }>weapons</NavLink>
                    <NavLink to="/matrices" className={({ isActive }) => isActive ? "px-2 w-full rounded-sm bg-[#23285c] text-[#5dbeeb]" : "px-2 w-full rounded-sm hover:bg-[#23285c] hover:text-[#5dbeeb] focus:bg-[#23285c] focus:text-[#5dbeeb]" }>matrices</NavLink>
                    <NavLink to="/relics" className={({ isActive }) => isActive ? "px-2 w-full rounded-sm bg-[#23285c] text-[#5dbeeb]" : "px-2 w-full rounded-sm hover:bg-[#23285c] hover:text-[#5dbeeb] focus:bg-[#23285c] focus:text-[#5dbeeb]" }>relics</NavLink>
                    <NavLink to="/food" className={({ isActive }) => isActive ? "px-2 w-full rounded-sm bg-[#23285c] text-[#5dbeeb]" : "px-2 w-full rounded-sm hover:bg-[#23285c] hover:text-[#5dbeeb] focus:bg-[#23285c] focus:text-[#5dbeeb]" }>food</NavLink>
                    <NavLink to="/mounts" className={({ isActive }) => isActive ? "px-2 w-full rounded-sm bg-[#23285c] text-[#5dbeeb]" : "px-2 w-full rounded-sm hover:bg-[#23285c] hover:text-[#5dbeeb] focus:bg-[#23285c] focus:text-[#5dbeeb]" }>mounts</NavLink>
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
