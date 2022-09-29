const fs = require('fs')

const exportTableMD = (table) => {
  const title = []
  const content = []
  for (let row in table) {
    const col = []
    for (let key in table[row]) {
      if (row == 0) {
        title.push(key)
      }
      col.push(table[row][key])
    }
    content.push(col)
  }

  let mdTable = title.join(' | ')
  mdTable += ' | \n'
  mdTable += new Array(title.length).fill(' --- ').join(' | ')
  mdTable += ' | \n'
  for (let t of content) {
    mdTable += t.join(' | ')
    mdTable += ' | \n'
  }

  fs.writeFileSync('./mdTable.txt', mdTable)
}
