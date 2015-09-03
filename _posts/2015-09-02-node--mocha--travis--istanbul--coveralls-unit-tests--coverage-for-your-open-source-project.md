---
layout: post
title: "Node + Mocha + Travis + Istanbul + Coveralls: Unit tests & coverage for your open source project"
tags: [devops, testing, tdd, code coverage, node, mocha, travis, istanbul, coveralls, programming, tips]
---

Unit tests & code coverage metrics make it easier to work with your open source project. It (1) signals to users that the project owner cares about stability, (2) helps contributors feel confident about submitting patches, and (3) makes for easier development in the long run.

There's a bit of initial setup required, so I've compiled the steps into this short guide to get you ready as easily as possible.

### Where to put your test files

If you only need a single file of unit tests, name it `./test.js`. This is the default file that Mocha looks for.

If it's already time to split your tests into multiple files, you can make a `test/` folder with an `index.js` file to call the other files, and still conform with Mocha's default path.

If you want to put your tests elsewhere, you can also specify a path when you run mocha. But why complicate things?

### Get mocha to run your tests

If it's your first time using mocha on this computer, you'll need to install the mocha global CLI package:

~~~
$ npm install -g mocha
~~~

Now if your tests are at the default `test` path you can run your tests with:

~~~
$ mocha
~~~

![Mocha with 0 tests screenshot](/images/mocha-working.png)

### Write your tests

`Mocha` exposes new globals — `define()` and `it()` — to group tests together.

To keep dependencies down, you can use Node's built in [assert module](https://nodejs.org/api/assert.html).

Here's a file of unit tests you can use as an example: [dsernst/pythagorean-triples **/test.js**](https://github.com/dsernst/pythagorean-triples/blob/df68a8cdf2de7c101f199fff8027d25d3a4cbeff/test.js)

### Setup $ npm test

A common way to configure your testing suite is to use npm's built in [`test` command](https://docs.npmjs.com/cli/test). To do this, add `"test": "mocha"` to the "scripts" section of your package.json, like so:

~~~
  "scripts": {
    "test": "mocha"
  },
~~~

Now `$ npm test` will run your tests:

![screenshot of npm test](/images/npm-test.png)

Also add `mocha` as a `devDependency`, so that it gets installed whenever a user (or build system) runs `npm install`:

~~~
$ npm install mocha --save-dev
~~~

### Setup TravisCI

![Travis setup image](/images/travis-ci-setup.png)

If your repo is public, [TravisCI](https://travis-ci.org/) can run your tests automatically, including pull-requests, for free. Here's what you'll need to do:

1. Log in to Travis and ["flick the switch on" for your repo](https://travis-ci.org/profile/).
2. Add a basic [`.travis.yml` file](https://github.com/dsernst/pythagorean-triples/blob/54fad4014d02f4b2adec0cd525a89f8c76fb3868/.travis.yml) for your project:
  
~~~
language: node_js
node_js:
- "stable"
~~~

<ol start="3">
 <li>Push a new version to GitHub.</li>
</ol>

If you set up the `npm test` command in the previous step, Travis will use this automatically. 

### Setup code coverage with Istanbul

There are many tools to analyze code coverage, but I find [`istanbul`](https://gotwarlost.github.io/istanbul/) simple and effective, so that's what we'll use here.

First, install istanbul as a `devDependency`:

~~~
$ npm install istanbul --save-dev
~~~

We'll follow the same pattern as before and make an [`npm runscript`](https://docs.npmjs.com/cli/run-script) for our code coverage. Here's the script we'll add:

~~~
"cover": "istanbul cover _mocha"
~~~

So now your `package.json` should have both scripts:

~~~
  "scripts": {
    "test": "mocha",
    "cover": "istanbul cover _mocha",
  },
~~~

There's just one bit of weirdness there: using `_mocha` instead of `mocha`. This is because the `mocha` command creates a child process, so `istanbul` throws this error:

~~~
No coverage information was collected, exit without writing coverage information
~~~

But you can use `_mocha` to run it directly, without a child process, which gives us the coverage information we want:

![screenshot of coverage](/images/istanbul-coverage.png)

You can now run this anytime with:

~~~
$ npm run cover
~~~

### Adding automatic coverage testing with Coveralls

1. Create an account on [Coveralls.io](http://coveralls.io).
2. Add your repository.
3. Add these two new devDependencies:

~~~
$ npm install coveralls mocha-lcov-reporter --save-dev
~~~

<ol start="4">
  <li> Add this new line to your package.json "scripts":</li>
</ol>

~~~
"coveralls": "npm run cover -- --report lcovonly && cat ./coverage/lcov.info | coveralls && rm -rf ./coverage"
~~~

<ol start="5">
  <li>Then add this to your .travis.yml:</li>
</ol>

~~~
after_success:
- npm run coveralls
~~~

<ol start="6">
  <li>Push a new build.</li>
</ol>

Now, whenever a build passes on Travis, it will send code coverage metrics to Coveralls. Coveralls can be configured to notify you if the coverage changes up or down significantly.

You can also use this `npm run coveralls` command to update Coveralls locally, but you'll have to add a `.coveralls.yml` file to your project with your repo key. Be sure to `.gitignore` it to keep it confidential.

### Success

Now that you've set this all up, you can add badges for your [build status](http://docs.travis-ci.com/user/status-images/) and code coverage to your readme, so that your project's audience know it's being responsibly maintained.

[![image of readme badges](/images/test-badges.png)](https://github.com/dsernst/pythagorean-triples/blob/4011972252c963a576edb89fe821a8c675ee9c85/readme.md)
