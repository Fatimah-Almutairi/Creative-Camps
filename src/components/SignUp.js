import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Text,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";

export default function SplitScreen() {
  const [showPassword, setShowPassword] = useState("");
  const [showEmail, setShowEmail] = useState("");
  const [showName, setShowName] = useState("");

  const navigate = useNavigate();
  const handleClick = (e) => {
    if (
      showEmail.length == "" ||
      showPassword.length == "" ||
      showName.length <= 0
    ) {
      alert("required");
    } else if (
      showEmail.length == "" &&
      showPassword.length == "" &&
      showName.length <= 0
    ) {
      alert("required");
    } else {
      e.preventDefault();

      setShowName(e.target.value);
      setShowEmail(e.target.value);
      setShowPassword(e.target.value);

      navigate("/Home");
    }
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Create New Account</Heading>
          <FormControl id="Name">
            <FormLabel>Enter Your Name</FormLabel>
            <Input
              type="text"
              onChange={(e) => {
                setShowName(e.target.value);
              }}
            />
          </FormControl>

          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              onChange={(e) => {
                setShowEmail(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={(e) => {
                setShowPassword(e.target.value);
              }}
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
            </Stack>
            <button
              onClick={handleClick}
              className="btn"
              colorScheme={"blue"}
              variant={"solid"}
            >
              SignUp
            </button>
            <Text align={"center"}>
              Already have an account?{" "}
              <Link href="./SignIn" color={"#ffd445"}>
                Login
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={2}>
        <Image alt={"Login Image"} objectFit={"cover"} src={"main.png"} />
      </Flex>
    </Stack>
  );
}