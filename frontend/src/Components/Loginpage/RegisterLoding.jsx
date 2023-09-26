import React from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function RegisterLoding({isOpen, setIsOpen}) {
    return (
        <>
            <Modal isOpen={isOpen} isDismissable={false} isKeyboardDismissDisabled={false} hideCloseButton={true} backdrop={"opaque"}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">We are registering you in...</ModalHeader>
                            <ModalBody>
                                <img src={"/loading.gif"} alt={"..."}/>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}