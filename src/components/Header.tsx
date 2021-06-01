import { Flex, Image } from '@chakra-ui/react';

import styles from './styles.module.scss';

export function Header() {
  return (
    <Flex
      as="header"
      width="full"
      p={8}
    >
      <Flex
        as="div"
        justify="center"
        align="center"
        maxW="1120px"
        mx="auto"
        px={4}
        py={8}
      >
        <Image
          src="/logo.svg"
          height={7}
        />
      </Flex>
    </Flex>
  )
}