export const colorsInternCar = [
  {
    color: 'black',
    image: '/images/configurateur/Paint_Black.avif',
    prix: 'Included',
    name: 'All Black',
    description: '',
  },
  {
    color: 'white',
    image: '/images/configurateur/Paint_White.avif',
    prix: '€ 1,190',
    name: 'Black & White',
    description: '',
  },
]
export const colorsCar = [
  {
    hex: '#ffffff',
    color: 'white',
    image: '/images/configurateur/Paint_White.avif',
    prix: 'Included',
    name: 'Pearl White Multi-Coat',
    description: '',
  },
  {
    hex: '#000000',
    color: 'black',
    image: '/images/configurateur/Paint_Black.avif',
    prix: 'Included',
    name: 'Solid Black',
    description: '',
  },
  {
    hex: 'lightgrey',
    color: 'grey',
    image: '/images/configurateur/Paint_MidnightSilver.avif',
    prix: '€ 3,000',
    name: 'Midnight Silver Metallic',
    description:
      'Developed at the Berlin Gigafactory. Only available in Europe and the Middle East.',
  },
  {
    hex: 'royalblue',
    color: 'blue',
    image: '/images/configurateur/Paint_Blue.avif',
    prix: '€ 1,600',
    name: 'Deep Blue Metallic',
    description: '',
  },
  {
    hex: 'red',
    color: 'red',
    image: '/images/configurateur/Paint_Red.avif',
    prix: '€ 3,200',
    name: 'Red Multi-Coat',
    description:
      'Developed at the Berlin Gigafactory. Only available in Europe and the Middle East.',
  },
]
export const wheelscar = [
  {
    id: 1,
    name: 'Überturbine Rims 21"',
    prix: 'Included',
    description: 'Certified Range (WLTP) : 514 km',
    image: '/images/configurateur/wheel.avif',
  },
]
export const imagesRoutes = (model, color, inter) => [
  {
    id: 0,
    image: `/images/configurateur/${model}/${color}/front.jpeg`,
  },
  {
    id: 1,
    image: `/images/configurateur/${model}/${color}/back.jpeg`,
  },
  {
    id: 2,
    image: `/images/configurateur/${model}/${color}/side.jpeg`,
  },
  {
    id: 3,
    image: `/images/configurateur/${model}/${color}/wheel.jpeg`,
  },
  {id: 4, image: `/images/configurateur/interieur-${inter}.jpeg`},
]
