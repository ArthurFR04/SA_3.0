
export let dataFun = () => {

    fetch('https://sa-3-back.herokuapp.com/api/postagem', {
  method: 'GET'
})
  .then((response) => response.json())
  .then((json) => {
    data = json.data
    localStorage.setItem('data', JSON.stringify(data))
    
  })
}