import {Box, Flex, Heading, Text} from '@chakra-ui/react'
import Image from 'next/image'
import React, {useState} from 'react'
import {colors} from '../ui/color'
import Information from './information'
export default function PointInterets({
  image = '/images/modelsPage/base-normal.jpeg',
  image2 = '/images/modelsPage/base-plaid.jpeg',
}) {
  const [imgSelected, setImgSelected] = useState()
  return (
    <Flex
      w={'100%'}
      h={'140vh'}
      bg={'#f2f2f2'}
      justifyContent={'space-around'}
      alignItems={'center'}
      p={10}
    >
      <Flex
        flexDirection={'column'}
        justifyContent={'space-around'}
        alignItems={'center'}
        w={{base: '100%', lg: '100%'}}
        gap={5}
      >
        <Flex maxW={'1000px'} w={'100%'}>
          <Flex
            w={{base: '100%', lg: '700px'}}
            flexDirection="column"
            justifyContent={'flex-start'}
            gap={5}
          >
            <Heading variant={'headModelsub'}>
              Electric Powertrain
            </Heading>
            <Text variant={'basicmedium'}>
              Model platforms unite powertrain and battery technologies for unparalleled performance, 
              range and efficiency. New thermal architecture of the modules and the battery pack ensure faster 
              charging and offer you more power and endurance whatever the conditions.
            </Text>
          </Flex>
        </Flex>
        <Box
          position={'relative'}
          h={{base: '25vh', md: '70vh'}}
          w={'100%'}
          maxW={{base: '100%', lg: '800px', xl: '1200px'}}
          borderRadius={'20px'}
          overflow={'hidden'}
        >
          <Image
            src={imgSelected ? image : image2}
            fill
            objectFit="cover"
            alt={'moteur tesla carrosserie'}
          />
        </Box>
        <Flex
          flexDirection={{base: 'column', md: 'row'}}
          w={{base: '100%', lg: '800px', xl: '1200px'}}
          gap={5}
        >
          <Flex
            w={{base: '100%', md: '50%'}}
            onClick={() => setImgSelected(false)}
            opacity={!imgSelected ? 1 : 0.5}
            transition={'0.3s'}
            flexDirection={'column'}
            cursor={'pointer'}
            gap={5}
          >
            <Box
              w={'90%'}
              h={!imgSelected ? '4px' : '2px'}
              bg={'black'}
              transition={'0.3s'}
              my={4}
            />
            <Heading fontSize={'20px'}>Model S</Heading>
            <Text variant={'basicmedium'}>
              Dual Motor all-wheel drive offers even greater range than other vehicles in our current range, 
              accompanied by incredible power and optimal handling.
            </Text>
            <Flex flexDirection={'row'} gap={10}>
              <Information
                color={'black'}
                i1={'3.2'}
                i2={'s'}
                i3={'0 - 100km/h'}
                delay={0}
              />
              <Information
                i1={'634'}
                color={'black'}
                i2={'km'}
                i3={'Autonomy (WLTP)'}
                delay={0.2}
              />
            </Flex>
          </Flex>
          <Flex
            gap={5}
            w={{base: '100%', md: '50%'}}
            onClick={() => setImgSelected(true)}
            opacity={imgSelected ? 1 : 0.5}
            transition={'0.3s'}
            flexDirection={'column'}
            cursor={'pointer'}
          >
            <Box
              w={'90%'}
              h={imgSelected ? '4px' : '2px'}
              bg={'black'}
              transition={'0.3s'}
              my={4}
            />
            <Heading fontSize={'20px'}>Model S Plaid</Heading>
            <Text variant={'basicmedium'}>
              Maintains over 1,000 horsepower at up to 200 mph with Tri-Motor all-wheel drive, 
              featuring Torque Vectoring Control and three independent carbon-track rotors.
            </Text>
            <Flex flexDirection={'row'} gap={10}>
              <Information
                color={'black'}
                i1={'2.1'}
                i2={'s*'}
                i3={'0 à 100km/h'}
                delay={0}
              />
              <Information
                i1={'600'}
                color={'black'}
                i2={'km'}
                i3={'Autonomy (WLTP)'}
                delay={0.2}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
