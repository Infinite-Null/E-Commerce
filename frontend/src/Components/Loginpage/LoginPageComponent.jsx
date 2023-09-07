import React from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody} from "@nextui-org/react";

export default function LoginPageComponent() {
    const [selected, setSelected] = React.useState("login");

    return (
        <div className="flex bg-[url('https://media.istockphoto.com/id/504742864/photo/stylish-business-clothing-for-businessman.jpg?s=612x612&w=0&k=20&c=AsGrhEMNkmpwqaJPBSACPthMuBsmsDIecRkdFXKSnl0=')] md:flex-row h-[100vh] w-full items-center justify-center flex-col
        md:bg-[url('https://img.freepik.com/free-photo/textured-background-white-tone_53876-128610.jpg')]">
           <img alt={"no"} src={"https://www.stitchfix.com/men/blog/wp-content/uploads/2021/11/20-01-15_Set_3_M_SLD_GRID_v2-scaled.jpeg"}
                className={'md:inline hidden '}
                style={{
               width:"300px",
               height:"400px",
               borderLeft:"1px solid black",
               borderBottom:"1px solid black",
               borderTop:"1px solid black",
           }}/>
            <Card className="max-w-full w-[340px] h-[400px] drop-shadow-md rounded-[0px]" style={{
                borderRight:"1px solid black",
                borderBottom:"1px solid black",
                borderTop:"1px solid black",
                borderLeft:"1px solid black"
            }}>
                <CardBody className="overflow-hidden">
                    <Tabs
                        fullWidth
                        size="md"
                        aria-label="Tabs form"
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                    >
                        <Tab key="login" title="Login">
                            <form className="flex flex-col gap-4">
                                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                                <Input
                                    isRequired
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                />
                                <p className="text-center text-small">
                                    Need to create an account?{" "}
                                    <Link size="sm" onPress={() => setSelected("sign-up")}>
                                        Sign up
                                    </Link>
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <Button fullWidth color="primary">
                                        Login
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                        <Tab key="sign-up" title="Sign up">
                            <form className="flex flex-col gap-4 h-[300px]">
                                <Input isRequired label="Name" placeholder="Enter your name" type="password" />
                                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                                <Input
                                    isRequired
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                />
                                <p className="text-center text-small">
                                    Already have an account?{" "}
                                    <Link size="sm" onPress={() => setSelected("login")}>
                                        Login
                                    </Link>
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <Button fullWidth color="primary">
                                        Sign up
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    );
}