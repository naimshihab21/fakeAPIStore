const url = 'https://fakestoreapi.com/products'
const cards = document.querySelector('.cards')
const modal = document.querySelector('.modal-detail')

fetch(url)
  .then(res => res.json())
  .then(res => {
    let data = ''
    res.map(e => {
      data += `
      <div class="card">
        <h4 class="rating">${e.rating.rate}</h4>
        <div class="image">
          <img src="${e.image}" alt="Books">
        </div>
        <div class="explanation">
          <h3>${e.title}</h3>
          <p>${e.description}</p>
          <div class="sub-Explanation">
            <h4>$${e.price}</h4>
            <a href="#" onclick="modalFunc(this)" data-id="${e.id}">More</a>
          </div>
        </div>
      </div>
      `
    })
    cards.innerHTML = data
  })
  .catch(err => console.log(err))

// ========= MODAL ==========
const modalFunc = function (e) {
  const data = e.getAttribute('data-id')
  fetch(url)
    .then(res => res.json())
    .then(res => {
      let dataModal = ''
      res.filter(m => {
        if (data == m.id) {
          dataModal = `
          <div class="image-modal">
            <img src="${m.image}" alt="">
          </div>
          <div class="detail-item">
            <div class="sub-detail-one">
              <h3>${m.title}</h3>
            </div>
            <div class="sub-detail-two">
              <h4>${m.description}</h4>
              <h3>Rate ${m.rating.rate}</h3>
            </div>
            <div class="sub-detail-three">
              <h2>$${m.price}</h2>
            </div>
          </div>
          <i class='bx bxs-x-circle icon-close' title="Close" onclick="closeModalFunc()"></i>
          `
        }
      })
      modal.classList.add('show-modal')
      modal.innerHTML = dataModal
    })
    .catch(err => console.log(err))
}

const closeModalFunc = function () { modal.classList.remove('show-modal') }

// ========== SEARCH ==========
const searchInput = document.querySelector('#search-input')
const btnSearch = document.querySelector('#btn-search')

btnSearch.addEventListener('click', function() {
  fetch(url)
    .then(response => response.json())
    .then(response => {
      let data = ''
      response.filter(e => {
        if (e.title.search(searchInput.value) > -1) {
          data += `
          <div class="card">
            <h4 class="rating">${e.rating.rate}</h4>
            <div class="image">
              <img src="${e.image}" alt="Books">
            </div>
            <div class="explanation">
              <h3>${e.title}</h3>
              <p>${e.description}</p>
              <div class="sub-Explanation">
                <h4>$${e.price}</h4>
                <a href="#" onclick="modalFunc(this)" data-id="${e.id}">More</a>
              </div>
            </div>
          </div>`
        }
      })
      cards.innerHTML = data
    })
})