import { FormControl, SelectControl } from "formik-chakra-ui";
import {
  Button,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  // FormControl,
  FormErrorMessage,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { ChakraProvider, Textarea } from "@chakra-ui/react";
import { Formik, Field } from "formik";

import React from "react";

async function setWinner(tournamentId, stage, login) {
  const token = sessionStorage.getItem("token");
  try {
    const [name, surname] = login.split(" ");
    const values = {
      tournamentId: tournamentId,
      stage: stage.toString(),
      name: name,
      surname: surname,
    };
    const reqWinner = await fetch(
      "http://localhost:8189/api/v1/app/tournament/result_winner",
      {
        method: "POST",
        body: JSON.stringify(values, null, 2),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const res = await reqWinner.json();

    if (res.statusCode === 406) {
      alert(res.message);
    }
    if (reqWinner.ok) {
      alert("winner setted");
      window.location.reload();
    }
  } catch (err) {
    console.log(err);
  }
}

async function setFacts(user, fact, done) {
  const token = sessionStorage.getItem("token");
  const [name, surname] = user.split(" ");
  const values = {
    surname: surname,
    name: name,
    fact: fact,
    done: done,
  };
  try {
    const req = await fetch(
      "http://localhost:8189/api/v1/app/tournament/info",
      {
        method: "POST",
        body: JSON.stringify(values, null, 2),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const res = await req.json();
    alert(res.message);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
}

export default function WinLose(user) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  if (!user.haveWinner) {
    return (
      <ChakraProvider>
        <button className="checker" onClick={onOpen}>
          ✔
        </button>

        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Round Results</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Formik
                initialValues={{
                  login: "",
                  done: "",
                  fact: "",
                  winner: "",
                  tournamentId: "",
                }}
                onSubmit={(values) => {
                  setWinner(user.tournamentId, user.stage, values.winner);
                  setFacts(user.userOpponent, values.fact, values.done);
                }}
              >
                {({ handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={4} align="flex-start">
                      <FormControl isInvalid={!!errors.name && touched.name}>
                        <FormLabel htmlFor="fact">
                          Tell something interesting about you opponent
                        </FormLabel>
                        <Field
                          as={Textarea}
                          id="fact"
                          name="fact"
                          type="text"
                          variant="filled"
                        />
                      </FormControl>
                      <FormControl
                        isInvalid={!!errors.description && touched.description}
                      >
                        <FormLabel htmlFor="done">
                          What your opponent learned today ?
                        </FormLabel>
                        <Field
                          as={Textarea}
                          id="done"
                          name="done"
                          type="text"
                          variant="filled"
                        />
                      </FormControl>

                      <SelectControl
                        name="winner"
                        selectProps={{ placeholder: "Select Winner" }}
                      >
                        <option value={`${user.user}`}>{user.user}</option>
                        <option value={`${user.userOpponent}`}>
                          {user.userOpponent}
                        </option>
                      </SelectControl>

                      <Button type="submit" colorScheme="orange" width="full">
                        Submit
                      </Button>
                    </VStack>
                  </form>
                )}
              </Formik>
            </ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  }
  return (
    <ChakraProvider>
      <Button onClick={onOpen}>Check</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Round Results</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{
                login: "",
                done: "",
                fact: "",
                winner: "",
                tournamentId: "",
              }}
              onSubmit={(values) => {
                setFacts(user.userOpponent, values.fact, values.done);
              }}
            >
              {({ handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4} align="flex-start">
                    <FormControl isInvalid={!!errors.name && touched.name}>
                      <FormLabel htmlFor="fact">
                        Tell something interesting about you opponent
                      </FormLabel>
                      <Field
                        as={Textarea}
                        id="fact"
                        name="fact"
                        type="text"
                        variant="filled"
                      />
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.description && touched.description}
                    >
                      <FormLabel htmlFor="done">
                        What your opponent learned today ?
                      </FormLabel>
                      <Field
                        as={Textarea}
                        id="done"
                        name="done"
                        type="text"
                        variant="filled"
                      />
                    </FormControl>

                    <SelectControl
                      name="winner"
                      selectProps={{ placeholder: `Winner is ${user.winner}` }}
                    ></SelectControl>

                    <Button type="submit" colorScheme="orange" width="full">
                      Submit
                    </Button>
                  </VStack>
                </form>
              )}
            </Formik>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}
