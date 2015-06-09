---
layout: post
title: "Git-Crypt is Git + Encryption"
tags: [tools, tips, programming, workflow]
---

[Git-crypt](https://github.com/AGWA/git-crypt) is a combination of PGP/GPG and Git. It lets you include private files in your Git repos, without needing to worry about them being read by others. You can even publish these files to public repos, such as on GitHub, and not worry about any secrets or credentials being leaked.

How? With cryptography. 

----------------------------------------------------

### Here's my workflow:

I use this module, [npm: dotenv](https://www.npmjs.com/package/dotenv), to store the environment variables in a `.env` file in my repo (`.gitignore`'d) and then continue to use the standard `process.env.KEY` syntax. I’ve been super happy with it.

[![screenshot of dotenv package](/images/dotenv.png)](https://www.npmjs.com/package/dotenv)

Then if you are working with a team and want to keep those `.env` files in sync without sharing them publicly, you add [git-crypt](https://github.com/AGWA/git-crypt). This lets you designate files to be encrypted, then automatically adds an encryption hook on `git commit` and decrypts during `git checkout`. 

[![screenshot of AGWA/git-crypt](/images/git-crypt.png)](https://github.com/AGWA/git-crypt)

Everyone on your team just needs a private key file to decrypt, which won’t be changing very often, and then you dont need to `.gitignore` the config file, and everyone can stay in sync!

You can use a single shared `.key` file, but for even better security you'd want to just authorize GPG users the ability to unlock the repo's encrypted files.

And if you need some discrepancy, you can add `.env.development` or even something like `.env.dsernst` to overwrite particular values for different environments.

---------------------------------------------------

Thanks to [Matt](https://twitter.com/drTomCatAn) for the fun playing with git-crypt!
