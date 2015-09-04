---
layout: post
title: Software Engineering Power Tools
tags: [talks, software, tips, Hack Reactor]
---

Here are my notes from last night's After Hours talk at [Hack Reactor](http://www.hackreactor.com). It was a lot of fun— thanks everyone who was able to make it!

---------------------

## After-hours: Software Engineering Power Tools

Node build system in Sublime

  - Keep your REPL step as close as hand as possible!
  - Run code with `Cmd + B`
  - Normal `console.log` and all that
  - Normal `require()` or npm modules etc
  - See install instructions: [http://dsernst.com/2015/02/05/super-fast-testing/](http://dsernst.com/2015/02/05/super-fast-testing/)
  - `>log` expansion into `console.log`

[JSLint](http://www.jslint.com/help.html)

  - Based on *Javascript: The Good Parts*
  - It's like having Douglas Crockford giving you hints to write stronger programs
  - When I first turned it on, I found it was an enormous boost to my understanding of the javascript interpreter
  - Makes your code more consistent
  - [https://jslinterrors.com](https://jslinterrors.com) --> just google any of the errors you get for longer explanations
  - I use the Sublime Package: '[JSLint](https://packagecontrol.io/packages/JSLint)'. Similar packages exist for Vim, Atom, etc
  - Very helpful to be there when you press save (vs a copy and paste webapp)
  - JSHint / ESHint are other options if you want more control, but I'd advise starting with JSLint (less config needed) and then moving to one of the others if you find it is too strict
  - You can manually override the warnings if you want:
    - `/*global: foo*/`

[TotalTerminal visor](http://totalterminal.binaryage.com/)

  - keeps your terminal always at hand
  - gets in and out of the way whenever you need it
  - remap `CapsLock` to `Ctrl`
  - `Cmd + T & Cmd + W` to open and close tabs, respectively
  - `Cmd + Shift + left / right arrows` to switch tabs
  - `Cmd + Option + up / down arrows` to adjust height

Bash aliases

  - see [bash.dsernst.com](http://bash.dsernst.com) for my aliases
    - getting around:
      - `ds`
      - `de`
      - `dw`
      - `dse`
      - `euler`
    - where i am in git?
      - `gs`
      - `gh`
      - `gd`
      - `gdi`
    - making and modifying commits:
      - `gacm`
      - `gca`
      - `gundo`
    - working with remotes:
      - `cln`
      - `gpum`
      - `grv`
      - `gpsuo`
  - Josh Wyatt's talk
    - super great, so much gratitude
    - `prof` and `reprof`
    - [http://wes.is/2015/02/05/speeding-up-your-command-line-workflow/](http://wes.is/2015/02/05/speeding-up-your-command-line-workflow/)
  - my blog post: "Bring Your Own Bash Profile"
    - [http://dsernst.com/2015/01/12/bring-your-own-bash-profile/](http://dsernst.com/2015/01/12/bring-your-own-bash-profile/)
    - Bring your bash aliases to other machines easily

Advanced git

  - `stash`
    - it's like a temporary pseudo commit
    - you can have multiple stashes
  - `cherry-pick`
    - selectively copy commits from one branch to another
    - can copy whole range
  - interactive rebase
    - Let's you rewrite history
      - rename commits
      - remove commits
      - edit commits
      - reorder commits
    - HOW: `git rebase -i`
  - Commit often!
    - Don't think about it too much.
    - You can always come back and fix it
  - `hub` cli tool
    - `hb`
    - `hpr`
    - `gildedpr`

[vimium](https://vimium.github.io/)

  - Control your browser with your keyboard
  - less thought necessary, less context switching b/t keyboard & mouse
  - super great when tired
    - favorites:
      - open links:
        - same tab: `f`
        - new tab: `F`
      - scroll:
        - down: `j`
        - up: `k`
        - half-page down: `d`
        - half-page up: `u`
        - top: `gg`
        - bottom: `G`
      - navigate tabs:
        - left: `J`
        - right: `K`
        - close: `x`
        - reopen closed: `X`
        - switch to tab by name: `T`
      - history:
        - back: `H`
        - forward: `L`
        - go up a directory: `gu`
      - misc other useful ones:
        - copy current tab url: `yy`
        - find: `/`
        - highlight text: `V`
        - copy (after highlighted): `y`
        - see all shortcuts: `?`
  - can be disabled per site:
    - Gmail
    - Google Docs
    - can disable particular 

[SimpleNote](http://simplenote.com/)

  - gets out of your way
  - syncs across all devices:
    - mobile
    - tablet
    - desktop
    - web
  - importance of a good notepad
    - jot down first drafts
      - it can be iterative and grow
      - just getting started
    - revisit old ideas later
      - soo useful to keep building momentum
      - great for project ideas
    - Paul Graham quote
      - "if I can't write things down, worrying about remembering one idea gets in the way of having the next. Pen and paper wick ideas."
      - via "The Island Test"
      - http://www.paulgraham.com/island.html
  - [simplenote-to-git](https://github.com/amussey/simplenote-to-git)

[tmux](http://tmux.github.io/)

  - "Terminal Multiplexer"
  - lets you split screen horizontally or vertically
  - lets you make sessions for your terminal
  - works great when ssh'ing into remotes

Invert Colors keyboard shortcut

  - Darkens your screen further than brightness controls allow
  - Great at night
  - `Cmd + Option + Ctrl + 8`
  - Need to turn on in System Preferences > Keyboard > Shortcuts > Accessibility

Full window zoom

  - Cut out distractions
  - Great for reading longer articles
  - `Cmd + scroll in/out`
  - May need to be turned on in Settings?

[ngrok](https://ngrok.com/)

  - Reverse proxy
  - `localhost:8080` ---> `myApp.ngrok.com`
  - Super easy
  - Great for teams
  - Great for external API endpoints
  - My blog post:
    - "Why ngrok is so awesome for server development"
    - [http://dsernst.com/2015/02/17/ngrok-is-awesome/](http://dsernst.com/2015/02/17/ngrok-is-awesome/)

[gh-pages](https://pages.github.com/)

  - super easy way to host static resources
  - just make a branch '`gh-pages`'
  - all files will be hosted at yourUsername.github.io/repoName
  - no need to worry about scaling troubles like bandwidth or latency
  - My blog post:
    - "GitHub Pages: Powerful and Easy"
    - [http://dsernst.com/2015/06/03/github-pages-powerful-and-easy/](http://dsernst.com/2015/06/03/github-pages-powerful-and-easy/)

[dotenv](https://www.npmjs.com/package/dotenv)

  - `npm -i dotenv`
  - keep your env variables in your repo!
  - way easier to track / get started than `EXPORT`, `ECHO`, needing to worry about sessions
  - easier to pass around with teams

git-crypt

  - keep some files private in a public git repo
  - cryptography is awesome
  - my blog post
    - "Git-Crypt is Git + Encryption" 
    - [http://dsernst.com/2015/06/09/git-crypt-is-git--encryption/](http://dsernst.com/2015/06/09/git-crypt-is-git--encryption/)

osascript reminders

  - `osascript -e 'display notification "Hello" with title "David says"'`
  - Maybe you should stand up
  - very easy to `cron`
  - also: `$ say`

Desktop-to-Dropbox

  - Use your desktop as an inbox
  - drafts, new projects, notes, unfiled things
  - Sync it to dropbox as a backup!
    - Way less risk if computer is lost
    - Can keep in sync with multiple computers

[Soma.fm](http://soma.fm)

  - Free internet radio station
  - No ads
  - Very few lyrics
  - Groove Salad: Great for tuning out the rest of the world and getting work done
  - Download the playlist file, then you can just press your keyboard's Play hotkey to turn it on and off
  - Happens to be broadcast down the street over on Folsom

[GitHub for Education](https://education.github.com/)

  - Need an `.edu` email address
  - free private repos
  - free Travis
  - free Stripe
  - free SendGrid

[Apps Script](https://developers.google.com/apps-script/)

  - Just uses JS
    - the files are "`.gs`"
  - Supercharge many Google services
    - Gmail
    - Spreadsheets
    - Docs
    - Forms
    - tons of others
  - Come see my lightning talk tomorrow

[Gandi.net](http://gandi.net)

  - "No Bullshit"
  - My preferred domain registrar
  - .com's are around $12 per year. 
    - Sure there are some slightly cheaper options
    - but the anxiety / hassle / other costs just don't feel worth it.
  - Super easy domain redirection
  - WHOIS lookup: [http://who.is](http://who.is)

[gist.github.com](http://gist.github.com)

  - Super easy to share
  - Good old Markdown
  - Great for sticking little things that you work on here and there but don't need a full repo
  - Secret and public links

[beeminder.com](http://beeminder.com)

  - "Engineer yourself"
  - How it works
    - Set quantifiable goals
    - make just a little progress to them in small increments
    - if you get off track, pay a fine!
  - Lots of automatic API integrations
    - Duolingo
    - Github
    - Gmail (incl custom searches!)
    - Runkeeper
    - RescueTime
    - Withings
    - IFTTT! & Zapier
      - So, everything
      - RSS
      - Twitter
      - Google Calendar
      - Reddit comments
  - Or manual data entry
  - Super awesome developers & community

[appear.in](http://appear.in)

  - super easy video chatting
  - no installs, friend requests, user names or passwords
  - give me a word in the English language for a live demo
  - depends on WebRTC, might not work for olderish browsers

[Cloudflare free SSL](https://www.cloudflare.com/ssl)

  - Free SSL: Super fast and quick to set up
  - Gives users the piece of mind of https and that green lock
  - Not secured between Cloudflare and your server
  - Other free features of Cloudflare are cool too
    - Minification, `gzip`, etc

[join.me](http://join.me)

  - very easy way to share screens
  - great for debugging / helping clients or non-technical folks
  - Makes you look super professional & helpful

[regexcrossword.com](http://regexcrossword.com)

  - fun way to learn & master Regular Expressions
  - Regular Expressions are super powerful and work in almost every programming language
  - as well as with tools like `sed`, `awk`, `grep`
