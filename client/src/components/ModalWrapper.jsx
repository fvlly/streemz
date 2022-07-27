import React, { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const ModalWrapper = (props) => {
  const { isOpen, onClose } = useDisclosure();

  const [show, setShow] = useState(true);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal isOpen={show} onClose={() => props.onDismiss()}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton onClick={() => () => props.onDismiss()} />
          <ModalBody>
            <Text> {props.content} </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => props.deleteContent()}
              colorScheme="red"
              mr={3}
            >
              Delete
            </Button>
            <Button onClick={() => props.onDismiss()} variant="ghost">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalWrapper;
