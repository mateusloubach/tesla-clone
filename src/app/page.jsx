'use client'
import {Box, Flex, Heading} from '@chakra-ui/react'
import MainSection from '../component/MainSection/MainSection'
import MainMenu from '../component/ui/MainMenu'

export default function Home() {
  const pageInfos = [
    {
      id: 0,
      title: 'Model Y',
      image: '/images/model-y.webp',
      subtitle: 'Schedule a Demo Drive',
      subtitleLink: '/modely',
      btnL: 'Discover Model Y',
      bntLlink: '/modely',
      btnR: 'Customize Model',
      btnRlink: '/configurateur',
      lastSubtitle: 'Learn more about Tesla for Business',
      lastSubtitleLink: '/configurateur',
    },
    {
      id: 1,
      title: 'Model 3',
      image: '/images/model-3.webp',
      subtitle: 'Schedule a Demo Drive',
      subtitleLink: '/model3',
      btnL: 'Discover Model 3',
      bntLlink: '/model3',
      btnR: 'Customize Model',
      btnRlink: '/configurateur',
      lastSubtitle: 'Learn more about Tesla for Business',
      lastSubtitleLink: '/configurateur',
    },
    {
      id: 2,
      title: 'Model S',
      image: '/images/model-s.webp',
      subtitle: 'Schedule a Demo Drive',
      subtitleLink: '/models',
      btnL: 'Customize Model',
      bntLlink: '/models',
      btnR: 'Learn More',
      btnRlink: '/configurateur',
      lastSubtitle: '',
      lastSubtitleLink: '',
    },
    {
      id: 3,
      title: 'Model X',
      image: '/images/model-x.webp',
      subtitle: '',
      subtitleLink: '',
      btnL: 'Configuration personnalisée',
      bntLlink: '/modelx',
      btnR: 'Learn More',
      btnRlink: '/configurateur',
      lastSubtitle: '',
      lastSubtitleLink: '',
    },
    {
      id: 4,
      title: "Solar Energy Systems & Powerwalls",
      image: '/images/powerwall.jpeg',
      subtitle: 'Energy for all your needs',
      subtitleLink: '',
      btnL: 'Learn More',
      bntLlink: '/configurateur',
      btnR: '',
      btnRlink: '',
      lastSubtitle: '',
      lastSubtitleLink: '',
    },
    {
      id: 5,
      title: 'Accessories',
      image: '/images/charge.jpeg',
      subtitle: '',
      subtitleLink: '',
      btnL: 'Commander maintenant',
      bntLlink: '/configurateur',
      btnR: '',
      btnRlink: '',
      lastSubtitle: '',
      lastSubtitleLink: '',
    },
  ]
  return (
    <Flex
      w={'99vw'}
      h={'100vh'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      flexDirection="column"
    >
      <MainMenu />
      {pageInfos?.map((e, index) => (
        <MainSection key={index} pageInfos={pageInfos[index]} index={index} />
      ))}
    </Flex>
  )
}
