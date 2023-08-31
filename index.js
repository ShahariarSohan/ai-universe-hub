const aiDataLoad = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    const data = await res.json()
    const details = data.data.tools
    console.log(details)
    aiCardLoad(details)
}
aiDataLoad()
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
      <div class="card-body items-center text-center">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
        `
        aiCardContainer.appendChild(aiCard)
    });
}