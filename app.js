const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!!!!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

/*ccess, adduser, bin, bugs, c, cache, completion, config,
    ddp, dedupe, deprecate, dist-tag, docs, doctor, edit,
    explore, get, help, help-search, i, init, install,
    install-test, it, link, list, ln, login, logout, ls,
    outdated, owner, pack, ping, prefix, profile, prune,
    publish, rb, rebuild, repo, restart, root, run, run-script,
    s, se, search, set, shrinkwrap, star, stars, start, stop, t,
    team, test, token, tst, un, */