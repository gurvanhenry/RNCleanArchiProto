export async function getRandomColor() {
  const delayMs = 1000;
  await sleep(delayMs);

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor;
}

async function sleep(delayMs: number) {
  const delayPromise = (ms: number) =>
    new Promise((res: any) => setTimeout(res, ms));
  await delayPromise(delayMs);
}
