import { type Project } from 'types/Project'

export default new Array<Project>(
  {
    title: 'Fractalium',
    // titleBadge: '',
    url: 'https://bleb1k.github.io/Fractalium',
    img: { url: 'images/fractalium.jpg', alt: 'fractal zoom-in picture' },
    description: 'Программа для исследования фрактала мандельброта',
    badges: ['TypeScript', 'GLSL'],
  },
  {
    title: 'Хакатон 2023',
    description:
      'Занял первое место на местном хакатоне создав нейросеть для распознавания цепочек днк',
    badges: ['Python', 'Tensorflow', 'Bio', 'AI'],
  }
)
