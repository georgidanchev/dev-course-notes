const person = {
  name: 'Wes',
  age: 100,
}

const personProxy = new Proxy(person, {
  get(target, name) {
    console.log('Somone is asking for', target, name)
    // return 'LOL, not this time!'
    return target[name].toUpperCase()
  },
  set(target, name, value) {
    if (typeof value === 'string') {
      target[name] = value.trim().toUpperCase()
    }
  },
})

personProxy.name = 'Wesley'
// console.log(personProxy.name)

personProxy.cool = '            asdasdasdas'
// console.log(personProxy)

/**
 * Example 2
 */

const phoneHabdler = {
  set(target, name, value) {
    target[name] = value.match(/[0-9]/g).join('')
  },
  get(target, name) {
    return target[name].replace(/(\d{3})(\d{3})(\d{4})/, '($1-)-$2-3')
  },
}

const phoneNumbers = new Proxy({}, phoneHabdler)

phoneNumbers.home = '+234 -234-2343'
phoneNumbers.work = '(234) 123 5345'

// console.log(phoneNumbers.work, phoneNumbers.home)


/**
 * Example 3
 */
const safehandler = {
  set(target, name, value) {
    const likeKey = Object.keys(target).find(k => k.toLowerCase() === name.toLowerCase())

    if (!(name in target) && likeKey) {
      throw new Error(`ops! looks like we arealdy have a(n) ${name} property but with the case of ${likeKey}`)
    }
  },
}

const safety = new Proxy({
  id: 100,
}, safehandler)

safety.ID = 200