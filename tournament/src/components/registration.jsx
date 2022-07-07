import { Formik, Field } from "formik";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";
import { SelectControl } from "formik-chakra-ui";

export default function Registration() {
  return (
    <ChakraProvider>
      <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <Box bg="white" p={6} rounded="md" w={64}>
          <Formik
            initialValues={{
              login: "",
              name: "",
              surname: "",
              major: "",
              password: "",
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl>
                    <FormLabel htmlFor="text">Login</FormLabel>
                    <Field
                      as={Input}
                      id="login"
                      name="login"
                      type="login"
                      variant="filled"
                    />
                  </FormControl>
                  <FormControl isInvalid={!!errors.name && touched.name}>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Field
                      as={Input}
                      id="name"
                      name="name"
                      type="text"
                      variant="filled"
                      validate={(value) => {
                        let error;

                        if (value.length < 1) {
                          error = "Must be filed";
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.surname && touched.surname}>
                    <FormLabel htmlFor="surname">Surname</FormLabel>
                    <Field
                      as={Input}
                      id="surname"
                      name="surname"
                      type="text"
                      variant="filled"
                      validate={(value) => {
                        let error;

                        if (value.length < 1) {
                          error = "Must be filed";
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.surname}</FormErrorMessage>
                  </FormControl>
                  <SelectControl
                    name="major"
                    selectProps={{ placeholder: "Select major" }}
                  >
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="IOS">IOS</option>
                    <option value="Android">Android</option>
                    <option value="DevOps">DevOps</option>
                  </SelectControl>
                  {/* <FormControl isInvalid={!!errors.major && touched.major}>
                    <FormLabel htmlFor="major">major</FormLabel>
                    <Field
                      as={Input}
                      id="major"
                      name="major"
                      type="text"
                      variant="filled"
                      validate={(value) => {
                        let error;

                        if (value.length < 1) {
                          error = "Must be filed";
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.major}</FormErrorMessage>
                  </FormControl> */}
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      variant="filled"
                      validate={(value) => {
                        let error;

                        if (value.length < 5) {
                          error = "Password must contain at least 6 characters";
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                  <Button type="submit" colorScheme="orange" width="full">
                    SIGN UP
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
