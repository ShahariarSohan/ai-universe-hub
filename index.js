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
    aiCard.classList = "card bg-base-100 shadow-xl my-5 "
    aiCard.innerHTML = `
        <figure class="w-[80%] h-[180px] mx-auto">
        <img src="${detail?.image}" alt="ai" class="rounded-xl w-full h-full" />
      </figure>
      <div class=" w-[80%] h-[180px] mx-auto my-10">
        <h2 class="text-xl font-bold">Features</h2>
        <p class="text-md text-gray-400 ">1. ${detail?.features[0]}</p>
        <p class="text-md text-gray-400 ">2. ${detail?.features[1]}</p>
        <p class="text-md text-gray-400 ">3. ${detail?.features[2]}</p>
        <div class="w-full h-[1px] bg-slate-200 my-5">
        </div>
        <p class="text-xl font-bold">${detail?.name}</p>
        <p class="text-md text-gray-400 ">Published In: ${detail?.published_in}</p>
      </div>
        `
    aiCardContainer.appendChild(aiCard)
  });
}