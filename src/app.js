const characters = [
  { name: 'мечник', health: 10 },
  { name: 'мар', health: 100 },
  { name: 'май', health: 0 },
  { name: 'лучник', health: 0 }
];

const alive = characters.filter(item => item.health > 0);

console.log(alive);