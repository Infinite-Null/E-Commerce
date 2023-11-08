import {Button, Card, CardFooter, Chip, Input, Textarea} from "@nextui-org/react";
import {useState} from "react";
import {Tost} from "../../Tost";

export function AddProductComponent({onCreatePress}) {
    const [UpdateName, setName] = useState("")
    const [UpdateStock, setStock] = useState("")
    const [UpdatePrice, setPrice] = useState("")
    const [UpdateDiscription, setDiscription] = useState("")
    const [UpdateCategory, setCategory] = useState("")
    const [UpdateDiscount, setUpdateDiscount]=useState("")
    const [selectedFile, setSelectedFile] = useState([])

    function ChipReturn() {
        let i = 0
        const FileandIndex = []
        for (i; i < selectedFile.length; i++) {
            const data = {
                name: selectedFile.item(i).name,
                index: i
            }
            FileandIndex.push(data)
        }
        return FileandIndex.map((e, i) => {
            return <Chip className={"min-w-[90px]"} key={i} isCloseable={false} variant="bordered">
                {e.name.slice(0, 10)}
            </Chip>

        })

    }

    return (
        <div className='flex justify-center items-center'>
            <Card className="max-w-3xl w-96 p-5 drop-shadow-md mt-5">
                <Input
                    className={"mb-5"}
                    label="Name"
                    variant="bordered"
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
                <Input
                    type={"number"}
                    className={"mb-5"}
                    label="Price"
                    variant="bordered"
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }}
                />
                <Input
                    type={"number"}
                    className={"mb-5"}
                    label="Discount"
                    variant="bordered"
                    onChange={(e) => {
                        setUpdateDiscount(e.target.value)
                    }}
                />
                <Textarea
                    className={"mb-5"}
                    label="Description"
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Enter description"

                    onChange={(e) => {
                        setDiscription(e.target.value)
                    }}
                />
                <Input
                    type={"number"}
                    className={"mb-5"}
                    label="Stock"
                    variant="bordered"
                    onChange={(e) => {
                        setStock(e.target.value)
                    }}
                />
                <Input
                    className={"mb-5"}
                    label="Category"
                    placeholder={"Enter Category Separated with space"}
                    variant="bordered"
                    onChange={(e) => {
                        setCategory(e.target.value)
                    }}
                />
                <h1>Choose Images</h1>
                <Input
                    type={"file"}
                    multiple={true}
                    accept=".png, .jpg, .jpeg"
                    className={"mb-5"}
                    variant="underlined"
                    onChange={(e) => {
                        try {
                            setSelectedFile(e.target.files)
                        } catch (e) {
                            console.log("Select File")
                        }

                    }}
                />
                <div style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: true, width: "100%",
                    overflowX: "scroll",
                    height: "50px",
                }}>{ChipReturn()}</div>
                <CardFooter>
                    <Button color="primary" className={"w-full"} onPress={() => {
                        onCreatePress(UpdateName, UpdatePrice, UpdateDiscription, UpdateStock, UpdateCategory, selectedFile, UpdateDiscount)
                    }}>Create</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
