const arr=[
    {
        id:1,
        pic: "https://food-delivery-app145.netlify.app/item-1.jpeg",
        title:"Buttermilk Pancakes1",
        price:"$15",
        detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint saepe explicabo consectetur hic maxime aliquid ex! Inventore delectus obcaecati autem veniam quidem cupiditate vitae harum? Voluptatibus odit quod unde?",
    }
    ,
    {
          id:2,
          pic: "https://food-delivery-app145.netlify.app/item-1.jpeg",
        title:"Buttermilk Pancakes2",
        price:"$15",
        detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint saepe explicabo consectetur hic maxime aliquid ex! Inventore delectus obcaecati autem veniam quidem cupiditate vitae harum? Voluptatibus odit quod unde?",
    }
    ,
    {
      id:3,
      pic: "https://food-delivery-app145.netlify.app/item-1.jpeg",
        title:"Buttermilk Pancakes3",
        price:"$15",
        detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint saepe explicabo consectetur hic maxime aliquid ex! Inventore delectus obcaecati autem veniam quidem cupiditate vitae harum? Voluptatibus odit quod unde?",
    }
    ,
    {
          id:4,
          pic: "https://food-delivery-app145.netlify.app/item-1.jpeg",
        title:"Buttermilk Pancakes4",
        price:"$15",
        detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint saepe explicabo consectetur hic maxime aliquid ex! Inventore delectus obcaecati autem veniam quidem cupiditate vitae harum? Voluptatibus odit quod unde?",
    },
    {
          id:4,
          pic: "https://food-delivery-app145.netlify.app/item-1.jpeg",
        title:"Buttermilk Pancakes4",
        price:"$15",
        detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint saepe explicabo consectetur hic maxime aliquid ex! Inventore delectus obcaecati autem veniam quidem cupiditate vitae harum? Voluptatibus odit quod unde?",
    }
]
function data(arr)
{
    const a = document.querySelector('.mains');
    // document.querySelector('.mains').innerHTML = "Hi"


    arr.map(ab=> {
        let card=`
              <a href="https://www.google.com/" target="_blank">
        <div class="menupic">
          <div class="rpic">
            <img
              class="image2"
              src=${ab.pic}
              alt="resturant image"
            />
          </div>
          <div class="detl">
            <div class="heading1">
              <h1>${ab.title}</h1>
              <p class="heading2">${ab.price}</p>
            </div>
            <div>
              <p class="para">
                ${ab.detail}
              </p>
            </div>
          </div>
        </div>
      </a>
        `
        a.innerHTML += card;
    })
}

// data(arr)