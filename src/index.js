import fs from 'fs/promises';
import url from 'url';
import path from 'path';
import { faker } from '@faker-js/faker';

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

function generatePlayer() {
  const sex = faker.helpers.arrayElement(['female', 'male']);
  const name = faker.name.firstName(sex);
  const surname = faker.name.lastName(sex);
  const nickname = faker.internet.userName(name, surname);

  return {
    id: faker.datatype.uuid(),
    name: `${name} ${surname}`,
    nickname,
    victories: faker.datatype.number({ min: 0, max: 64 }),
    defeats: faker.datatype.number({ min: 0, max: 32 }),
    draws: faker.datatype.number({ min: 0, max: 16 }),
  };
}

async function writeFile(data, filename = 'data.json') {
  await fs.writeFile(path.join(dirname, 'data', filename), JSON.stringify(data, null, 2));
}

const PLAYERS_LENGTH = 8;
const players = [];

for (let index = 0; index < PLAYERS_LENGTH; index += 1) {
  players.push(generatePlayer());
}

writeFile({ players }, 'server.json');
