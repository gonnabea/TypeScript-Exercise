class Human {
  public name: string
  public age: number
  public gender: string
  constructor(name: string, age: number, gender: string) {
    this.name = name
    this.age = age
    this.gender = gender
  }
}

const person = {
  name: "Jiwon",
  age: 24,
  gender: "male",
}

const sayHi = (person: Human): string => {
  return `Hello ${person.name} you are ${person.age} Years old, you are a ${person.gender}`
}

console.log(sayHi(person))

export {}
