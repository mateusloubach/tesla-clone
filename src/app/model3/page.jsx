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
      i3: 'Peak Power',
      mobile: false,
    },
    cta: {text: 'Order Model 3', link: '/configurateur'},
  }
  const videoSection = {
    title1: 'A Cinematic Experience',
    desc1: `A 17" touchscreen with left/right tilt offers 2200 x 1300 resolution, authentic colors and exceptional responsiveness for viewing games, movies and more.`,
    
    title2: 'Yoke Steering Wheel',
    desc2: `A bold new approach gives you a true connection with Model S, providing a greater sense of control and a clear view of your dashboard and the road. Step on the brake: Model S automatically selects the right direction to begin your journey.`,
    
    title3: 'Perfect Environment',
    desc3: `Ventilation vents are hidden throughout the cabin, while tri-zone climate control, ventilated seats and HEPA filtration system provide an ideal environment.`,
    
    title4: 'Redesigned Second-Row',
    desc4: `Room for three adults, with additional legroom and height as well as a retractable armrest incorporating storage space and an induction charging system.`,
    
    title5: "Games equivalent to those on a Console",
    desc5: `Up to 10 teraflops of computing power, for on-board games of quality comparable to those of the most recent consoles. Play from any seat with compatibility with wireless controllers and headsets.`,
  }
  return (
    <>
      <MainMenu position1="absolute" position2="absolute" />
      <HeaderSection
        model="Model 3"
        content={content}
        image={'/images/model3.jpeg'}
        placeholder={'/images/model-3-blur.jpg'}
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
          title={'Continuous Performance'}
          paragraph={
            "Dedicated performance rims and tires, wider at the rear, keep the vehicle stable and allow maximum power to be placed on the road."
          }
          inverse={true}
          image={'/images/modelsPage/face-avant.webp'}
        />
        <ImageRevealAndText
          title={'Optimized Aerodynamics'}
          paragraph={
            "Attention to detail across all exterior lines makes Model S the most aerodynamic production vehicle in the world."
          }
          image={'/images/modelsPage/face-arriere.webp'}
        />
        <ImageRevealAndText
          title={'Elegant Style'}
          paragraph={
            "An iconic line combined with elegant modernized proportions.."
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
