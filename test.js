const str = `
.aa {
  font-size: 12px;
}
.asdasd {
  background-color: #f00;
}
.aa {
  font-size: 12px;
}
.asdasd {
  background-color: #f00;
}
.aa {
  font-size: 12px;
}
.cc {
  

}
`
const arr = []
const a = str.replace(/(\.)([a-z0-9\-_]*)(\s+)(\{)/g, (m, $1, $2, $3) => {
  arr.push($2)
  return $2
})

const copyArr = [...arr]
const sameArr = []
let i = 0
arr.forEach(className => {
  const firstIndex = copyArr.indexOf(className)
  const lastIndex = copyArr.lastIndexOf(className)
  if (firstIndex !== lastIndex ) {
    sameArr.push(className)
  }
})

console.log('`````````````````')
console.log(arr, [...new Set(sameArr)])