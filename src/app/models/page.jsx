'use client'
import MainMenu from '@/component/ui/MainMenu'
import React from 'react'
import HeaderSection from '/src/component/compModel/headerSection.jsx'
import ImageRevealAndText from '/src/component/compModel/ImageRevealAndText'
import VideoTabs from '/src/component/compModel/videoTabs'
import HeroImage from '/src/component/compModel/heroImage'
import PointInterets from '/src/component/compModel/PointInterets'
import {Flex} from '@chakra-ui/react'
import Carrosserie from '/src/component/compModel/Carrosserie'
export default function Page() {
  const content = {
    branch1: {i1: '600', i2: 'km', i3: 'Autonomy', i4: '(WLTP)'},
    branch2: {i1: '2,1', i2: 's', i3: '0 - 100 km/h*'},
    branch3: {i1: '322', i2: 'km/h', i3: 'Top Speed†'},
    branch4: {
      i1: '1,020',
      i2: 'hp',
      i3: '‡Peak Power',
      mobile: false,
    },
    cta: {text: 'Order Model S', link: '/configurateur'},
  }
  const videoSection = {
    title1: 'Cinematic Experience',
    desc1: `A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.`,
    
    title2: 'Yoke Steering',
    desc2: `A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead.`,
    
    title3: 'Perfect Environment',
    desc3: `Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.`,
    
    title4: 'Redesigned Second Row',
    desc4: `Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.`,
    
    title5: "Console-grade gaming",
    desc5: `Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles.`,
  }
  return (
    <>
      <MainMenu position1="absolute" position2="absolute" />
      <HeaderSection
        subtitle="Plaid"
        model="Model S"
        content={content}
        image={'/images/modelsPage/model-s.jpeg'}
        placeholder={'/images/model-s-blur.jpg'}
      />
      <HeroImage image={'/images/modelsPage/interieur.webp'} />
      <Flex flexDirection={'column'} py={20} bg={'black'}>
        <ImageRevealAndText
          title={'Stay Connected'}
          paragraph={
            'A 960-watt, 22-speaker audio system with Active Road Noise Reduction delivers immersive listening and studio-quality sound.'
          }
          inverse={true}
          image={'/images/modelsPage/interieur-2.jpeg'}
        />
        <ImageRevealAndText
          title={'Immersive Sound'}
          paragraph={
            'Connect your devices instantly with Bluetooth supporting multiple simultaneous connections, or quickly charge your devices using 36W wireless and USB-C charging.'
          }
          isvideo={true}
          image={
            'https://tesla-cdn.thron.com/delivery/public/video/tesla/7aa04cc1-863e-4ac6-952e-4ea01457bf47/bvlatuR/WEBHD/MS-Interior-Grid-2-Audio-Desktop'
          }
        />
        <ImageRevealAndText
          title={"Space for all your items"}
          paragraph={
            "Thanks to front and rear trunks as well as seats that fold flat, you can take your luggage or your bike on board without having to remove a wheel."
          }
          inverse={true}
          image={'/images/modelsPage/velo.jpeg'}
        />
      </Flex>
      <VideoTabs
        tabs={videoSection}
        src="https://tesla-cdn.thron.com/delivery/public/video/tesla/9b04a9fb-e4ea-4198-9d3e-7837feccef68/bvlatuR/WEBHD/Model-S-Interior-Carousel-4-Second-Row-Desktop "
      />
      <Flex flexDirection={'column'} py={20} bg={'black'}>
        <ImageRevealAndText
          title={'Relentless Performance'}
          paragraph={
            "Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road."
          }
          inverse={true}
          image={'/images/modelsPage/face-avant.webp'}
        />
        <ImageRevealAndText
          title={'Optimized Aerodynamics'}
          paragraph={
            "Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth."
          }
          image={'/images/modelsPage/face-arriere.webp'}
        />
        <ImageRevealAndText
          title={'Refined Styling'}
          paragraph={
            "An iconic silhouette meets refreshed, elegant proportions."
          }
          inverse={true}
          image={'/images/modelsPage/roue.webp'}
        />
      </Flex>
      <PointInterets />
      <Carrosserie />
    </>
  )
}
