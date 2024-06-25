const rateContainer = document.querySelector(".container");

let rateElContents = [
  {
    title: "Yetkazish xizmatini baholang",
    description: "Kuryer haqida fikrlaringizni qoldirishingiz mumkin",
    btnContent: "Davom etish",
    liner: "st",
  },
  {
    title: "Taom sifatini baholang",
    description: "Ushbu baho restoran yoki kafe uchun yuboriladi",
    btnContent: "Jo’natish",
    liner: "nd",
  },
];

let rateOptions = [
  {
    title: "Aynan nima sizni jaxlingizni chiqardi?",
    deliver: {
      0: "Juda kech yetkazildi",
      1: "Kuryer juda ham qo‘pol muomala qildi",
      2: "Mahsulot yomon shaklda keldi",
      3: "Ayrim mahsulotlar yetkazilmadi",
    },
    food: {
      0: "Yetarli mazasi yo’q",
      1: "Sifatsiz mahsulot ishlatilgan",
      2: "Yaxshi qadoqlanmagan",
      3: "Rasmdagidek emas",
    },
  },
  {
    title: "Aynan nima sizni qoniqtimadi?",
    deliver: {
      0: "Kuryer juda ham qo‘pol muomala qildi",
      1: "Ayrim mahsulotlar yetkazilmadi",
      2: "Juda kech yetkazildi",
      3: "Mahsulot yomon shaklda keldi",
    },
    food: {
      0: "Rasmdagidek emas",
      1: "Sifatsiz mahsulot ishlatilgan",
      2: "Yetarli mazasi yo’q",
      3: "Yaxshi qadoqlanmagan",
    },
  },
  {
    title: "Aynan nima sizni xursand qildi?",
    deliver: {
      0: "Mahsulot yomon shaklda keldi",
      1: "Juda kech yetkazildi",
      2: "Kuryer juda ham qo‘pol muomala qildi",
      3: "Ayrim mahsulotlar yetkazilmadi",
    },
    food: {
      0: "Yaxshi qadoqlanmagan",
      1: "Sifatsiz mahsulot ishlatilgan",
      2: "Yetarli mazasi yo’q",
      3: "Rasmdagidek emas",
    },
  },
  {
    title: "Aynan nima sizni qoniqtimadi?",
    deliver: {
      0: "Kuryer juda ham qo‘pol muomala qildi",
      1: "Ayrim mahsulotlar yetkazilmadi",
      2: "Juda kech yetkazildi",
      3: "Mahsulot yomon shaklda keldi",
    },
    food: {
      0: "Rasmdagidek emas",
      1: "Sifatsiz mahsulot ishlatilgan",
      2: "Yetarli mazasi yo’q",
      3: "Yaxshi qadoqlanmagan",
    },
  },
  {
    title: "Aynan nima sizni jaxlingizni chiqardi?",
    deliver: {
      0: "Juda kech yetkazildi",
      1: "Kuryer juda ham qo‘pol muomala qildi",
      2: "Mahsulot yomon shaklda keldi",
      3: "Ayrim mahsulotlar yetkazilmadi",
    },
    food: {
      0: "Yetarli mazasi yo’q",
      1: "Sifatsiz mahsulot ishlatilgan",
      2: "Yaxshi qadoqlanmagan",
      3: "Rasmdagidek emas",
    },
  },
];

function createRateContainer(container, contents, contentIndex) {
  let item = contents[contentIndex];
  let inneredRes = `
     <h2 class="rev-title">${item.title}</h2>
      <p class="rev-desc">${item.description}</p>
      <div class="liners ${item.liner}">
        <div class="st-line"></div>
        <div class="nd-line"></div>
      </div>
      <div class="stars"></div>
      <div class="rate-options" > 
      <h2 class="option-title"></h2>
      <ul></ul>    
      </div>
      <div class="rate-commit">
        <h2 class="commit-title">Izohingiz</h2>
        <textarea
          cols="30"
          rows="10"
          placeholder="Izohingizni kiriting"
          spellcheck="true"          
        ></textarea>
      </div>
      <button class="send-btn dis" disabled>${item.btnContent}</button>
 `;
  container.innerHTML = inneredRes;
}

createRateContainer(rateContainer, rateElContents, 0);

function addStarSvg() {
  let starContainer = document.querySelector(".stars");

  for (let i = 0; i < 5; i++) {
    starContainer.innerHTML += `
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" class="star-svg">
           <g clip-path="url(#clip0_1_62)">
             <path d="M24 35.5L11.656 41.99L14.014 28.244L4.028 18.51L17.828 16.506L24 4L30.172 16.506L43.972 18.51L33.986 28.244L36.344 41.99L24 35.5Z" fill="#F0F0F0" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </g>
           <defs>
            <clipPath id="clip0_1_62">
             <rect width="48" height="48" fill="white"/>
            </clipPath>
           </defs>
          </svg>
    `;
  }
}
addStarSvg();

let rateOptionsEl = document.querySelector(".rate-options");
let typeOfRate = "deliver";

function changeRateOptionsContent(container, tabIndex, array) {
  container.innerHTML = "";
  let changeContentRes = `
    <h2 class="option-title"></h2>
    <ul>  
    </ul>
  `;
  container.innerHTML = changeContentRes;
  container.style = "display:block;";
  addTitle(array, tabIndex);
  addOptions(rateOptions, typeOfRate, tabIndex);
}

function addOptions(array, typeOfRate, tabIndex, isClicked) {
  let ul = document.querySelector(".rate-options > ul");
  ul.innerHTML = "";
  if (isClicked) {
    for (let i = 0; i < 4; i++) {
      ul.innerHTML += `    
      <li class="option-tab">
        <input type="checkbox" id="${i}" />
        <label for="${i}">${array[tabIndex][typeOfRate][i]}</label>
      </li>
      `;
    }
  }
}

function addTitle(array, tabIndex) {
  let h2 = document.querySelector(".rate-options>h2");
  h2.textContent = array[tabIndex].title;
}

function changeStared() {
  let starElements = document.querySelectorAll(".star-svg");

  starElements.forEach((item, index) => {
    item.addEventListener("click", () => {
      starElements.forEach((item, indexClicedSvg) => {
        rateCount = index + 1;
        for (let i = 0; i < rateCount; i++) {
          if (index < indexClicedSvg) {
            item.classList.remove("rated");
          } else {
            item.classList.add("rated");
          }
        }
        index == indexClicedSvg
          ? item.classList.add("click")
          : item.classList.remove("click");


      });
      changeRateOptionsContent(rateOptionsEl, index, rateOptions);
      addOptions(rateOptions, typeOfRate, index, true);
      nextBtn();
      item.classList.add("click");
    });
  });
}
changeStared();

let sendData = false;

function nextBtn() {
  let sendBtn = document.querySelector(".send-btn");
  sendBtn.removeAttribute("disabled");
  sendBtn.classList.remove("dis");
  document.querySelector(".rate-options").style.display = "block";
  sendBtn.addEventListener("click", () => {
    sendDataFunc(typeOfRate);

    if (typeOfRate == "food" && sendData) {
    } else {
      createRateContainer(rateContainer, rateElContents, 1);
      addStarSvg();
      changeStared();
      typeOfRate = "food";
      sendData = typeOfRate == "food";
    }
  });
}

let res = {
  deliver: {
    star: 0,
    options: [],
    commit: "",
  },
  food: {
    star: 0,
    options: [],
    commit: "",
  },
};

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function sendDataFunc(typeOfRate) {
  let dRateCount = document.querySelectorAll("svg.rated");

  res[typeOfRate].star = dRateCount.length;
  res[typeOfRate].commit = document.querySelector("textarea").value;
  res[typeOfRate].options = itemIsChecked();

  res.deliver.star && res.food.star ? sendResult(res) : "";
}

function itemIsChecked() {
  let inputs = document.querySelectorAll('input[type="checkbox"');

  let resArr = [];

  inputs.forEach((item) => {
    if (item.checked) {
      resArr.push(item.nextElementSibling.textContent);
    }
  });
  return resArr;
}

async function sendResult(res) {
  await res;
  let url = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(res),
  });
  if (url.status >= 400) {
    alert("sorry, something went wrong...");
  } else {
    alert('Thank you for using "Yemak" Services');
  }
}
