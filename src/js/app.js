// TODO: write code here

console.log('app.js bundled');

export class Character {
  constructor(attack, defence) {
    this.attack = attack;
    this.defence = defence;
  }
}

export class Team {
  constructor() {
    this.characters = new Set([]);
  }

  add(character) {
    if (this.characters.size >= 5) {
      throw new Error('не может быть больше 5 персонажей в команде');
    }
    if (this.characters.has(character)) {
      throw new Error('такой объект уже есть в команде');
    }
    this.characters.add(character);
  }

  addALL(...characters) {
    characters.forEach((character) => {
      if (this.characters.size >= 5) {
        throw new Error('не может быть больше 5 персонажей в команде');
      }
      this.characters.add(character);
    });
  }

  toArray() {
    return [...this.characters];
  }
}
