const replaceCodes = (text: string) => text
  .replace(/A/g, 'rock')
  .replace(/B/g, 'paper')
  .replace(/C/g, 'scissors')
  .replace(/^(rock) X$/gm, '$1 scissors')
  .replace(/^(paper) X$/gm, '$1 rock')
  .replace(/^(scissors) X$/gm, '$1 paper')
  .replace(/^(rock) Y$/gm, '$1 rock')
  .replace(/^(paper) Y$/gm, '$1 paper')
  .replace(/^(scissors) Y$/gm, '$1 scissors')
  .replace(/^(rock) Z$/gm, '$1 paper')
  .replace(/^(paper) Z$/gm, '$1 scissors')
  .replace(/^(scissors) Z$/gm, '$1 rock')

const beats: Record<string, string> = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
}

const data = await Deno.readTextFile('./input.txt')
const decrypted = replaceCodes(data)
const rows = decrypted.split('\n')

console.log(decrypted)

let points = 0

for (const row of rows) {
  const [a, b] = row.split(' ')
  points += Object.keys(beats).indexOf(b) + 1
  
  if (a === b) {
    points += 3
  } else
  if (a === beats[b]) {
    points += 6
  }
}

console.log(points)
