import { Team, Character } from '../src/js/app';

test('test add', () => {
  const bowerman = new Character(25, 25);
  const team = new Team();
  team.add(bowerman);

  expect(team.characters.size).toBe(1);
});

test('test add the same', () => {
  const bowerman = new Character(25, 25);
  const team = new Team();
  team.add(bowerman);
  function addTheSame() {
    team.add(bowerman);
  }
  expect(addTheSame).toThrowError('такой объект уже есть в команде');
});

test('test addALL', () => {
  const bowerman = new Character(25, 25);
  const swordsman = new Character(40, 10);
  const magician = new Character(10, 40);
  const undead = new Character(25, 25);
  const team = new Team();
  team.addALL(bowerman, swordsman, magician, undead);
  expect(team.characters.size).toBe(4);
});

test('test addALL the same', () => {
  const bowerman = new Character(25, 25);
  const team = new Team();
  team.addALL(bowerman);
  team.addALL(bowerman);
  expect(team.characters.size).toBe(1);
});

test('test limit in add', () => {
  const bowerman = new Character(25, 25);
  const swordsman = new Character(40, 10);
  const magician = new Character(10, 40);
  const undead = new Character(25, 25);
  const daemon = new Character(10, 40);
  const zombie = new Character(40, 10);
  const team = new Team();
  team.add(bowerman);
  team.add(swordsman);
  team.add(magician);
  team.add(undead);
  team.add(daemon);
  function addMoreLimit() {
    team.add(zombie);
  }
  expect(addMoreLimit).toThrowError('не может быть больше 5 персонажей в команде');
});

test('test limit in addALL', () => {
  const bowerman = new Character(25, 25);
  const swordsman = new Character(40, 10);
  const magician = new Character(10, 40);
  const undead = new Character(25, 25);
  const daemon = new Character(10, 40);
  const zombie = new Character(40, 10);
  const team = new Team();
  function addMoreLimit() {
    team.addALL(bowerman, swordsman, magician, undead, zombie, daemon);
  }
  expect(addMoreLimit).toThrowError('не может быть больше 5 персонажей в команде');
});

test('test toArray', () => {
  const bowerman = new Character(25, 25);
  const swordsman = new Character(40, 10);
  const team = new Team();
  team.addALL(bowerman, swordsman);
  const expected = [bowerman, swordsman];
  expect(team.toArray()).toEqual(expected);
});
