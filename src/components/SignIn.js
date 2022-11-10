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
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (showEmail.length == "" || showPassword.length == "") {
      alert("required");
    } else if (showEmail.length == "" && showPassword.length == "") {
      alert("required");
    } else {
      e.preventDefault();
      setShowEmail(e.target.value);
      setShowPassword(e.target.value);

      navigate("/Home");
    }
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
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
              <Checkbox onClick={'checked'}>Remember me</Checkbox>
              <Link color={"#611973"}>Forgot password?</Link>
            </Stack>
            <button
              onClick={handleClick}
              className="btn"
              colorScheme={"blue"}
              variant={"solid"}
            >
              Sign in
            </button>
            <Text align={"center"}>
              Don't have an account?{" "}
              <Link href="./SignUp" color={"#ffd445"}>
                SignUp
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={2}>
        <Image alt={"Login Image"} objectFit={"cover"} src={"main11.png"} />
      </Flex>
    </Stack>
  );
}