function compare(a, b) {
  if (a.health > b.health) {
    return -1;
  }
  if (a.health === b.health) {
    return 0;
  }
  if (a.health < b.health) {
    return 1;
  }
  return 0;
}

export default function sortingHealth(characters) {
  return characters.sort(compare);
}
