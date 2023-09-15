import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {HiMenuAlt2} from "react-icons/hi";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {LuHeartHandshake} from "react-icons/lu";

export function AboutUserComponent({profile_url_image, name, email, join, onEditPress, onChangePasswordPress}) {
    const navigate=useNavigate()
    return (
        <><div className="h-[99vh] w-[99vw] flex justify-center items-center flex-col">
            <div className=" p-8 flex flex-col space-y-2 dark:bg-gray-900 dark:text-gray-100 border-1 border-black items-center justify-center">
                {/*DropDownMenu*/}
               <div className={"flex justify-start items-start w-full"}>
                   <Dropdown>
                       <DropdownTrigger>
                           <button><HiMenuAlt2 className={"text-2xl ml-8"}/></button>
                       </DropdownTrigger>
                       <DropdownMenu onAction={(key)=>{
                           if(key==="edit"){
                               onEditPress()
                           }if(key==="change"){
                               onChangePasswordPress()
                           }
                       }} variant="faded" aria-label="Static Actions">
                           <DropdownItem key="edit">Edit Profile</DropdownItem>
                           <DropdownItem key="change" className="text-danger" color="danger">
                               Change Password
                           </DropdownItem>
                       </DropdownMenu>
                   </Dropdown>
               </div>
                <div className="flex-shrink-0 w-full mb-6 h-72 sm:h-72 sm:w-72 sm:mb-0">
                    <img src={profile_url_image} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold">{name}</h2>
                    </div>
                    <div className="space-y-1">
			<span className="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
					<path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
				</svg>
				<span className="dark:text-gray-400 text-xl">{`${email}`}</span>
			</span>
                        <span className="flex items-center space-x-2">
                    <LuHeartHandshake/>
				<span className="dark:text-gray-400 text-xl">{`${join}`}</span>
			</span>
                    </div>
                </div>
            </div>
            <Button
                className="bg-gray-800 hover:bg-gray-950"
                style={{
                    borderRadius:"0",
                    width:"300px",
                    height:"40px",color:"white"
                }}  variant="flat" startContent={<AiOutlineShoppingCart/>} onPress={()=>{
                navigate("/orders")
            }}>View Orders</Button>
        </div></>
    )
}