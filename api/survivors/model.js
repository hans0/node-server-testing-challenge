const db = require('../../data/db-config');

function getSurvivors() {
  return db('survivors');
}

async function getSurvivorById(id) {
  /*
  
   */
  const survivor = await db('survivors')
    .select('survivor_name', 'survivor_id')
    .where('survivor_id', id)
    .first()
  const perks = await db('unique-survivor-perks as usp')
    .select('usp.perk_id')
    .where('usp.survivor_id', id)
    // .leftJoin('perks as p')
    // .where('p.perk_id', 'usp.perk_id')
    // .select('p.perk_id', 'p.perk_name')
  // return await db('survivors as s')
  //   .leftJoin('unique-survivor-perks as usp', 's.survivor_id', 'usp.survivor_id')
  //   .select('s.survivor_id', 's.survivor_name', 'usp.perk_id')
  //   .where('s.survivor_id', id)
  console.log(perks)
  return survivor;
}


module.exports = {
  getSurvivors,
  getSurvivorById,

}