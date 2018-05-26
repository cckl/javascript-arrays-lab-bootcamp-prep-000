const app = "I don't do much."

const kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  let cats = [...kittens, "Broom"]
  return cats
}

function prependKitten(name) {
  let cats = ["Arnold", ...kittens]
  return cats
}

function removeLastKitten() {
  let cats = kittens.splice(2, 1)
  return cats
}