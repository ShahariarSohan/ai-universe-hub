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
  const detail = data.data
  console.log(detail)
  modalShow(detail)
}
const modalShow = (detail) => {
  const modalContainer = document.getElementById('modal-container')
  modalContainer.innerHTML = `
  <dialog id="ai_modal" class="modal">
  <form method="dialog" class="modal-box w-11/12 max-w-5xl">
    <div id="modal-div" class="flex  flex-row justify-center items-center gap-10">
    <div id="left" class="w-[50%] bg-orange-100 p-10 space-y-5">
    <h2 class="text-xl font-bold">${detail?.description}</h2>
    <div id="price-div" class="flex justify-center gap-3">
      <div class="text-center text-lg font-bold text-red-600"> 
      <h3>${detail?.pricing[0]?.price}</h3>
      <h3>${detail?.pricing[0]?.plan}</h3>
      </div>
      <div class="text-center text-lg font-bold text-red-600"> 
      <h3>${detail?.pricing[1]?.price}</h3>
      <h3>${detail?.pricing[1]?.plan}</h3>
      </div>
      <div class="text-center text-lg font-bold text-red-600"> 
      <h3>${detail?.pricing[2]?.price}</h3>
      <h3>${detail?.pricing[2]?.plan}</h3>
      </div>
    </div>
    </div>
    <div id="logo-container" class="w-[50%] p-10 space-y-5">
    <div class="w-[100%]">
    <img src="${detail?.image_link}" class="w-full h-[200px] rounded-xl"/>
    </div>
    <h3 class="text-lg font-bold text-center">${detail?.input_output_examples[0]?.input}</h3>
    <p class="text-gray-400 text-center">${detail?.input_output_examples[0]?.output}</p>
    </div>
    </div>
    <div class="modal-action text-center">
    <button class="btn btn-primary">Close</button>
  </div
  </form>
</dialog>
  `
  ai_modal.showModal()
}