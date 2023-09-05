import {Button, Card, CardFooter, Input, Textarea} from "@nextui-org/react";
import {useState} from "react";
import {Tost} from "../../Tost";

export function AddProductComponent({onCreatePress}) {
    const [UpdateName,setName]=useState("")
    const [UpdateStock,setStock]=useState("")
    const [UpdatePrice,setPrice]=useState("")
    const [UpdateDiscription,setDiscription]=useState("")
    const [UpdateCategory,setCategory]=useState("")
    return (
        <div className='flex justify-center items-center'>
            <Card className="max-w-3xl w-96 p-5 drop-shadow-md mt-5">
                <Input
                    className={"mb-5"}
                    label="Name"
                    variant="bordered"
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                />
                <Input
                    type={"number"}
                    className={"mb-5"}
                    label="Price"
                    variant="bordered"
                    onChange={(e)=>{
                        setPrice(e.target.value)
                    }}
                />
                <Textarea
                    className={"mb-5"}
                    label="Description"
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Enter description"

                    onChange={(e)=>{
                        setDiscription(e.target.value)
                    }}
                />
                <Input
                    type={"number"}
                    className={"mb-5"}
                    label="Stock"
                    variant="bordered"
                    onChange={(e)=>{
                        setStock(e.target.value)
                    }}
                />
                <Input
                    className={"mb-5"}
                    label="Category"
                    placeholder={"Enter Category Separated with space"}
                    variant="bordered"
                    onChange={(e)=>{
                        setCategory(e.target.value)
                    }}
                />
                <CardFooter>
                    <Button color="primary" className={"w-full"} onPress={()=>{
                        onCreatePress(UpdateName, UpdatePrice, UpdateDiscription, UpdateStock, UpdateCategory)
                    }}>Create</Button>
                </CardFooter>
            </Card>
        </div>
    )
}