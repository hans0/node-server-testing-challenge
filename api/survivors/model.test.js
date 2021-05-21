const Survivors = require('./model')
const db = require('../../data/db-config')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db('survivors').truncate()
})
afterAll(async () => {
  await db.destroy()
})

describe('Survivors', () => {
  describe('Sanity check', () => {
    test('Survivor is defined', () => {
      expect(Survivors).toBeDefined()
    })
    test('Environment is correct', () => {
      expect(process.env.NODE_ENV).toBe('test')
    })
  })
  describe('getSurvivors()', () => {
    it('resolves to a a list of survivors', async () => {
      let survivors = await Survivors.getSurvivors()
      expect(survivors).toHaveLength(0);
      await db('survivors').insert({ survivor_name: 'Feng Min' });
      survivors = await Survivors.getSurvivors()
      expect(survivors).toHaveLength(1)
      await db('survivors').insert({ survivor_name: 'Bill Overbeck' });
      survivors = await Survivors.getSurvivors();
      expect(survivors).toHaveLength(2);
    })
    it('resolves to survivors of the correct format', async () => {
      await db('survivors').insert({ survivor_name: 'Feng Min' });
      let survivors = await Survivors.getSurvivors()
      expect(survivors).toMatchObject([
        { survivor_name: 'Feng Min' },
      ])
      await db('survivors').insert({ survivor_name: 'Bill Overbeck' });
      survivors = await Survivors.getSurvivors()
      expect(survivors).toMatchObject([
        { survivor_name: 'Feng Min' },
        { survivor_name: 'Bill Overbeck' },

      ])
    })
  })
  
})