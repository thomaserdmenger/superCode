// DOM Elements
const gridContainer = document.querySelector('.grid')

// Fetch Data from API
fetch('https://picsum.photos/v2/list?page=2&limit=9')
  .then((res) => res.json())
  .then((data) => renderContent(data))
  .catch((err) => console.log(err))

// Render Content
const renderContent = (data) => {
  const result = data
    .map((item) => {
      return `
          <div>
              <img src="${item.download_url}" alt="${item.author}" />
              <p>${item.author}</p>
              <a href="${item.url}" target="_blank">See more</a>
          </div>
      `
    })
    .join('')

  gridContainer.innerHTML = result
}