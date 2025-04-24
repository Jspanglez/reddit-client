const subs = []

let i = 1
let subName = 'r/Subreddit '

while (i <= 10) {
  let newSub = { key: i, name: subName + i }
  subs.push(newSub)
  i++
}
