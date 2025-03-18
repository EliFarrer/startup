# Backend Testing
Use npm to install everything. We use the login test. It is an express application

User curl to hit an endpoint. This is all manual work using curl.

We will use Jest to test our backend. It is just a framework. We could write our own if we wanted.

Benefits of testing:
- code confidence
- helps us write better code (makes us think like a user)
- 

In our situation, right now we have to simulate CURL because everything is in one application. We want to break up our application.

Export from service `module.exports = app;` Get rid of the port. Then we create `index.js` and put in
```
const app = require('./service');

const port = 3000;
app.listen(port, function () {
    console.log('Listening on port ${port}`);
});
```

Then we can test again with CURL.

Now we don't need to worry baout any network calls, and we can test the code directly.

`npm install -D jest supertest` will install `jest` and `supertest`. It will not deploy this to our deployment. We only use it for development (testing). Add to our `package.json` `"test": "jest"`.

THen we create `service.test.js`. Jest is configured to look at all the source code (in current directory) for any file that has `test.js` in it. Then it runs the test function.

```
test('that equal values are equal', () => {
    expect(true).toBe(true);
});
```

Good to make sure the test fails.

To start testing, we need to call the app directly.
```
const request = require('supertest');
const app = require('./service');

test ('register simple', async () => {
    const email = 'test@email.com';
    const password = 'toomanysecrets';
    const register = await request(app).post('/api/auth').send({email, password});

    expect(register.headers['content-type']).toMatch('application/json; charset=utf-8);
    expect(register.body.toMatchObject({email}));   // note that toMatchObject and toMatch both exist
    ...
});
```

Remember, to install `supertest`, we can do `npm install -D supertest

If we have a test right after this, will the user still be registered. You want to make the tests independent of each other.

Characteristics of good testing:
- independent tests
- short tests (if you need to do duplicate things, write functions (like creating a user), don't assert in utility functions)
- use random data
- separate tests for separate things
- test all things (like with http, headers, body, status code...)
- look at code coverage

Create jest.config.json file. Say we want 100% code coverage.
```
{
    "collectCOverage": true,
    "coverageThreshold": {
        "global": {
            "lines": 100
        }
    }
}
```
There is a vscode jest extension.

Our tests simulate what the browser is doing.

# Frontend Testing
Different testing framework: `Playwright`. We want to pretend we are a user and have `Playright` pretend to be the browser. The other ones are based off of `selenium` which interacts. `Playwright` knows exactly how to drive the browser. There is a `Playwright` extension for VS code.

```
npm init playwright@latest  // this is some configuration
npx playwright install --with-deps chromium     // only install for chromium browsers
```

The `playwright.config.js` file is all the complexity. It tests all the tests against all three browsers. We can slim it down to just chormium browsers if all of our users use chromium. `baseURL: "https://localhost:5173"` this is where vite runs.

Then in our `package.json` add a script `"test": "playwright test"`

When we run the tests, it interacts directly with the browser.

Want to make these things as generic as possible so our tests aren't super super coupled with our code (if we change the code)

It is harder to decompose ui tests because everything is dependet on each other.

To test these, we need to run the service.

If you need to adjust the timeout, got to the configuration files.

You can also record tests and it will put the code in for you. Or you can do the trace viewer and it shows like every interaction.