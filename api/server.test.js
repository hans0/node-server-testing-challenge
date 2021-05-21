const db = require('../data/db-config')
const request = require('supertest')
const server = require('./server')

const listOfSurvivors = [
  { survivor_name: 'Dwight Fairfield' },
  { survivor_name: 'Meg Thomas' },
  { survivor_name: 'Claudette Morel' },
  { survivor_name: 'Jake Park' },
]

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

describe('[GET] /survivors', () => {
  beforeEach(async () => {
    await db('survivors').insert(listOfSurvivors)
  })
  it('responds with a 200 OK', async () => {
    const res = await request(server).get('/api/survivors')
    expect(res.status).toBe(200)
  })
  it('return a list of survivors', async () => {
    const res = await request(server).get('/api/survivors')
    expect(res.body).toMatchObject(listOfSurvivors)
  })

})