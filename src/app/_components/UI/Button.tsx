import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props extends ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
}
export const Button: FC<Props> = ({ children, variant, ...props }) => {
  switch (variant) {
    case "primary":
      return (
        <ChakraButton
          color="white"
          bg="secondary"
          px={8}
          borderRadius={34}
          py={7}
          width="fit-content"
          {...props}
        >
          {children}
        </ChakraButton>
      );

    case "secondary":
      return (
        <ChakraButton
          color="white"
          borderRadius={21}
          px={3}
          bg="transparent"
          py={1}
          border="1px"
          borderColor="white"
          {...props}
        >
          {children}
        </ChakraButton>
      );

    case "tertiary":
      return (
        <ChakraButton
          color="body"
          borderRadius={21}
          px={3}
          bg="transparent"
          py={1}
          border="1px"
          fontSize={16.44}
          letterSpacing={0.49}
          fontWeight={600}
          borderColor="body"
          {...props}
        >
          {children}
        </ChakraButton>
      );
      break;
  }
};

Button.defaultProps = {
  variant: "primary",
};
