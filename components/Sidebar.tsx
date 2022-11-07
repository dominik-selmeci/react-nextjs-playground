import {
  Box,
  BoxProps,
  Flex,
  useColorModeValue,
  Text,
  CloseButton,
  Link,
  Icon,
  FlexProps,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { IconType } from 'react-icons'

interface LinkItemProps {
  name: string
  route: string
  icon?: IconType
}
const LINK_ITEMS: LinkItemProps[] = [
  { name: 'Hooks: useState', route: '/hooks/use-state' },
  { name: 'Hooks: useEffect', route: '/hooks/use-effect' },
  { name: 'Hooks: useContext', route: '/hooks/use-context' },
  { name: 'Hooks: custom hook', route: '/hooks/custom-hook' },
  { name: 'Hooks: useRef', route: '/hooks/use-ref' },
  { name: 'Hooks: useReducer', route: '/hooks/use-reducer' },
  { name: 'VanillaJS: Closure', route: '/vanilla-js/closure' },
]

interface SidebarProps extends BoxProps {
  onClose: () => void
}

interface NavItemProps extends FlexProps {
  icon?: IconType
  children: ReactNode
  route: string
}
const NavItem = ({ icon, children, route, ...rest }: NavItemProps) => {
  return (
    <Link
      href={route}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

export function Sidebar({ onClose, ...rest }: SidebarProps) {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 96 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Playground
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LINK_ITEMS.map((link) => (
        <NavItem key={link.name} route={link.route}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}
