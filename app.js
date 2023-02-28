let sodoko = [
  [1, 2, 3, 4, 5, 6],
  [4, 5, 6, 1, 2, 3],
  [2, 1, 4, 3, 6, 5],
  [3, 6, 5, 2, 1, 4],
  [5, 3, 1, 6, 4, 2],
  [6, 4, 2, 5, 3, 1],
];

let sodokoDescElem=document.querySelector('.sodoko-desc')
let showResult=document.querySelector('.showResult')

const isSodokoHandler = (sodoko) => {
  let verticall = JSON.parse(JSON.stringify(sodoko));
  verticall.forEach((item) => (item.length = 0));

  sodoko.map((sodo) => {
    for (var i = 0; i < sodo.length; i++) {
      verticall[i].push(sodo[i]);
    }
  });

  const duplicates = (sodo) => {
    let isDuplicate = sodo.map((num) => {
      let set = new Set(num);
      let duplicate = num.filter((item) => {
        if (set.has(item)) {
          set.delete(item);
        } else {
          return item;
        }
      });
      if (duplicate.length) {
        return true;
      } else {
        return false;
      }
    });
    console.log(Object.values(isDuplicate));
    if (Object.values(isDuplicate).filter(fal => fal===true).length===0) {
      return true;
    } else {
      return false;
    }
  };
  //console.log(duplicates(verticall), duplicates(sodoko));
  
  if (duplicates(verticall) && duplicates(sodoko)) {
    sodokoDescElem.innerHTML="هووورااا شما بردید"
    sodokoDescElem.classList.toggle('green')
  } else {
    sodokoDescElem.innerHTML=" عیب نداره دوباره امتحان کنید "
    sodokoDescElem.classList.toggle('red')
  }
};
showResult.addEventListener('click',()=>{
  isSodokoHandler(sodoko);

}

)
