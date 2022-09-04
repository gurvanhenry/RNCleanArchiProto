export function getEmoji() {
  const EMOJIS = ['🎸', '😛', '🥳', '🏄‍♂️'];
  const random = getRandomInt(EMOJIS.length);
  const emoji = EMOJIS[random];
  return emoji;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
