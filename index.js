//ai data load
const aiDataLoad = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
  const data = await res.json()
  const details = data.data.tools
  // console.log(details)
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
    // console.log(detail)
    const aiCardDiv = document.createElement('div')
    aiCardDiv.innerHTML = `
        <div onclick="aiModalData('${detail.id}')"  class="card bg-base-100  shadow-xl p-5">
        <figure class="w-[100%] h-[180px] ">
        <img src="${detail?.image}" alt="ai" class="rounded-xl w-full h-full" />
      </figure>
      <div class=" w-[100%] h-[180px]  my-5 ">
        <h2 class="text-xl font-bold">Features</h2>
        <p class="text-md text-gray-400 ">1. ${detail?.features[0]}</p>
        <p class="text-md text-gray-400 ">2. ${detail?.features[1]}</p>
        <p class="text-md text-gray-400 ">3. ${detail?.features[2]}</p>
        <div class="w-full h-[1px] bg-slate-200 my-5">
        </div>
        <p class="text-xl font-bold">${detail?.name}</p>
        <p class="text-md text-gray-400 ">Published In: ${detail?.published_in}</p>
      </div>
      </div>
        `
    aiCardContainer.appendChild(aiCardDiv)
  });
}
//ai modal data
const aiModalData = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
  const data = await res.json()
  console.log(data.data)
  ai_modal.showModal()
}