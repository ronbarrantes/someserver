
interface RandomNumber {
  (num?: number): number;
}

export const randomNumber: RandomNumber = (num=255) => Math.floor(Math.random() * num)

export const randomColor = (): string =>
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`

