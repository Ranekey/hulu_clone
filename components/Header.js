import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
    HomeIcon
} from "@heroicons/react/outline";

function Header(){
    return(
        <header className={"flex flex-col sm:flex-row m-5 justify-between items-center h-auto"}>
            <div className={"flex flex-grow justify-evenly max-w-2xl"}>
                <HeaderItem title={"Home"} Icon={HomeIcon}/>
                <HeaderItem title={"Trending"} Icon={LightningBoltIcon}/>
                <HeaderItem title={"Verified"} Icon={CollectionIcon}/>
                <HeaderItem title={"Search"} Icon={SearchIcon}/>
                <HeaderItem title={"Account"} Icon={UserIcon}/>
            </div>
            <Image
                className={"object-contain "}
                src={"/netflix.svg"} width={200} height={100}/>
        </header>
    )
}

export default Header