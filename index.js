//ai data load
const aiDataLoad = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
  const data = await res.json()
  const details = data.data.tools
  console.log(details)
  aiCardLoad(details)
}
aiDataLoad()
//ai card load
const aiCardLoad = (details) => {
  const aiCardContainer = document.getElementById('ai-card-container')
  aiCardContainer.textContent = ''
  details = details.slice(0, 9)
  console.log(details.length)
  details.forEach(detail => {
    console.log(detail)
    const aiCard = document.createElement('div')
    aiCard.classList = "card bg-base-100 shadow-xl my-10"
    aiCard.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${detail?.image}" alt="ai" class="rounded-xl" />
      </figure>
      <div class="card-body ">
        <h2 class="text-xl font-bold">Features</h2>
        <p class="text-md text-gray-400 ">1. ${detail?.features[0]}</p>
        <p class="text-md text-gray-400 ">2. ${detail?.features[1]}</p>
        <p class="text-md text-gray-400 ">3. ${detail?.features[2]}</p>
        <div class="card-actions">
        </div>
      </div>
        `
    aiCardContainer.appendChild(aiCard)
  });
}