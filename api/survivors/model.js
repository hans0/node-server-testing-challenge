const db = require('../../data/db-config');

function getSurvivors() {
  return db('survivors');
}

async function getSurvivorById(id) {
  const survivor = await db('survivors')
    .select('survivor_name', 'survivor_id')
    .where('survivor_id', id)
    .first()
  const perks = await db('unique-survivor-perks as usp')
    .leftJoin('perks as p', 'p.perk_id', 'usp.perk_id')
    .select('usp.perk_id', 'p.perk_name')
    .where('usp.survivor_id', id)
  return { 
    ...survivor,
    perks: perks
  };
}

async function createSurvivor(survivor){
  const [survivor_id] = await db('survivors').insert(survivor);
  return getSurvivorById(survivor_id);
}


module.exports = {
  getSurvivors,
  getSurvivorById,
  createSurvivor,
}