//
async function go() {
  const p1 = fetch('https://api.github.com/users/wesbos').then(r => r.json())
  const p2 = fetch('https://api.github.com/users/stolinski').then(r => r.json())

  // Wait for to to come back simultaneously.
  // Make one mega promise from the two.
  const res = await Promise.all([p1, p2])
  const [wes, scott] = res
  console.log(wes, scott)
}

// go()

async function getData(names) {
  const promises = names.map(name => fetch(`https://api.github.com/users/${name}`).then(r => r.json()))
  // You can use Promise.race -> resolve as
  // soon as you get the first request back.
  const people = await Promise.all(promises)
  console.log(people)
}

getData(['wesbos', 'stolinski', 'darcyclarke'])