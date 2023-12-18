
import { Colors } from "../enums"


export function NotFound404() {
    return (
        <div className='mx-auto h-52 w-[60%] rounded-lg overflow-hidden' style={{backgroundColor: Colors['NavBar']}}>
            <span className="w-full h-full">
                <div className="w-52 h-52 ml-10 bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(https://raw.githubusercontent.com/whotookzakum/toweroffantasy.info/main/static/images/404.webp)`}}/>
                <h1 className="relative -top-44 left-64 font-semibold text-2xl">Page Not Found</h1>
                <h2 className="relative -top-44 left-64 font-normal text-md">404</h2>
            </span>
        </div>
    )
};