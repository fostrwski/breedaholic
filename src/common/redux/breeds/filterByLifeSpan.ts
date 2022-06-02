import type { Breed } from 'common/types'

const filterByLifeSpan = (breeds: Array<Breed>, minLifeSpan: number) => {
  const filteredBreeds = breeds.filter((breed: Breed) => {
    const min = parseInt(breed.life_span.split(' ')[0])
    return min >= minLifeSpan
  })

  return filteredBreeds
}

export default filterByLifeSpan
