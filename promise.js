// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ]

// Promise.all(urls.map(url => {
//     return fetch(url).then(res => res.json())
// })).then(result => {
//     console.log(result[0])
//     console.log(result[1])
//     console.log(result[2])
// })

// const promise = new Promise(resolve => {
//     resolve(
//         Promise.all(urls.map(url => {
//             return fetch(url).then(res => res.json())
//         }))
//     )
// })

// promise
//     .then(res => {
//         console.log(res[0])
//         console.log(res[1])
//         console.log(res[2])
//     })

// Promise.all(urls.map(url => fetch(url).then(res => res.json())))
//     .then(res => res.forEach(s => console.log(s)))

// const getData = async function() {
//     const [ users, posts, albums ] = await Promise.all(urls.map(url => fetch(url).then(res => res.json())))
//     console.log('users', users)
//     console.log('posts', posts)
//     console.log('albums', albums)
// }
// getData()
const url = 'https://fakestoreapi.com/products'
const search = document.querySelector('#search-input')
const btn = document.querySelector('#btn-search')
btn.addEventListener('click', function() {
  fetch(url)
    .then(res => res.json())
    .then(res => {
      let data = ''
      res.filter(e => {
        const data = []
        data.push(e.title)

        if (e.title.search(search.value) > -1) {
          console.log('yes ' + e.title)
        } else {
          console.log('no')
        }

      })
    })
})
