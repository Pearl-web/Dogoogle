// server is imported into here and starts with test run

const request = require("supertest")
const app = require("../app");


describe('API server', () => {
    let api

    beforeAll(() => {
        // start the server and store it in the api variable
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    })

    afterAll(done => { // `done` always gets passed in but if we want to use it, we must name it!
        // close the server, then run done
        console.log('Gracefully stopping test server')
        api.close(done) // `done` will be invoked when the `api.close` function is complete
    })

    test('it responds to get / with 200', done => {
        request(api)
        .get('/')
        .expect(200, done)
    })

    test('it responds to get /results with 200', done => {
        request(api)
        .get('/results')
        .expect(200, done)
    })

    test('it responds to get /hello with 404', done => {
        request(api)
        .get('/hello')
        .expect(404, done)
    })


})

