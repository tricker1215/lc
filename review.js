const list = [{
  id: 1,
  title: '1',
  text: '光临'
},{
  title: '2',
  text: '焕英'
}]

const data = {
  id: 2,
  title: '2',
  text: '英子'
}
list.splice(0, 1, data);
console.log(list)
