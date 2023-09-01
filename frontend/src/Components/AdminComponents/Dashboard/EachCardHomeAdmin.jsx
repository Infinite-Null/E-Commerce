import {Card, CardHeader} from "@nextui-org/react";

export function EachCardHomeAdmin({color,title,amount}) {
    return (
        <>    <Card className="py-4 text-white" style={{
            flex:"1",
            margin:"5px",
            backgroundColor:color,
        }}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center ">
                <h4 className="text-center text-sm sm:font-bold sm:text-xl">{title}</h4>
                <h4 className="text-xl sm:font-[900] sm:text-5xl mt-6 mb-5">{amount}</h4>
            </CardHeader>
        </Card></>
    )
}