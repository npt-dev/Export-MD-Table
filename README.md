# Export-MD-Table

E.g:

const dataTest = [
  {
    TIME: new Date().getTime(),
    MS: new Date().getMilliseconds(),
  },
  {
    TIME: new Date().getTime(),
    MS: new Date().getMilliseconds(),
  },
  {
    TIME: new Date().getTime(),
    MS: new Date().getMilliseconds(),
  },
  {
    TIME: new Date().getTime(),
    MS: new Date().getMilliseconds(),
  },
  {
    TIME: new Date().getTime(),
    MS: new Date().getMilliseconds(),
  },
]

exportTableMD(dataTest)

Results: ./mdTable.txt

↓

TIME | MS | 
 ---  |  ---  | 
1664437863538 | 538 | 
1664437863539 | 539 | 
1664437863539 | 539 | 
1664437863539 | 539 | 
1664437863539 | 539 | 
