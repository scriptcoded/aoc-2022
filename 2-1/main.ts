const replaceCodes = (text: string) => text
  .replace(/[AX]/g, 'rock')
  .replace(/[BY]/g, 'paper')
  .replace(/[CZ]/g, 'scissors')

const beats: Record<string, string> = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
}

const data = await Deno.readTextFile('./input.txt')
const decrypted = replaceCodes(data)
const rows = decrypted.split('\n')

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
