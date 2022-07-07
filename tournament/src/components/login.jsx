import { Formik, Field } from "formik";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";

export default function Login() {
  return (
    <ChakraProvider>
      <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <Box bg="white" p={6} rounded="md" w={64}>
          <Formik
            initialValues={{
              login: "",
              password: "",
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  {/* <FormControl isInvalid={!!errors.name && touched.name}> */}
                  <FormControl>
                    <FormLabel htmlFor="text">Login</FormLabel>
                    <Field
                      as={Input}
                      id="login"
                      name="login"
                      type="login"
                      variant="filled"
                      //   validate={(value) => {
                      //     let error;
                      //     const logRegex = /[а-яА-Я]$/i;
                      //     if (!logRegex.test(value)) {
                      //       error = "Фамилия Имя (только на киррилице!)";
                      //     }

                      //     return error;
                      //   }}
                    />
                    {/* <FormErrorMessage>{errors.name}</FormErrorMessage> */}
                  </FormControl>
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
                    Login
                  </Button>
                  <a href="/registration">
                    <Button colorScheme="blue" width="full">
                      Sign up
                    </Button>
                  </a>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
