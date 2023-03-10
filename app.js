let sodoko = [
  [1, 2, 3, 4, 5, 6],
  [4, 5, 6, 1, 2, 3],
  [2, 1, 4, 3, 6, 5],
  [3, 6, 5, 2, 1, 4],
  [5, 3, 1, 6, 4, 2],
  [6, 4, 2, 5, 3, 1],
];

let sodokoDescElem = document.querySelector(".sodoko-desc");
let showResult = document.querySelector(".showResult");

const isSodokoHandler = (sodoko) => {
  let HorizontalSodoko = JSON.parse(JSON.stringify(sodoko));
  HorizontalSodoko.forEach((item) => (item.length = 0)); // to empty Horizontal Sodoko if dont do that cant **Push**

  sodoko.map((sodo) => {
    //////       to add (Push) value of Horizontal Sodoko
    for (var i = 0; i < sodo.length; i++) {
      HorizontalSodoko[i].push(sodo[i]);
    }
  });

  const IsDuplicates = (sodo) => {
    //         find in object is IsDuplicates
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
    let findDuplicate = Object.values(isDuplicate).filter(
      (fal) => fal === true
    );
    console.log("if true there is duplicates",Object.values(isDuplicate)); // where duplicate
    if (findDuplicate.length === 0) {
      return true;
    } else {
      return false;
    }
  };
  //console.log(IsDuplicates(HorizontalSodoko), IsDuplicates(sodoko));

  if (IsDuplicates(HorizontalSodoko) && IsDuplicates(sodoko)) {
    sodokoDescElem.innerHTML = "هووورااا شما بردید";
    sodokoDescElem.classList.toggle("green");
  } else {
    sodokoDescElem.innerHTML = " عیب نداره دوباره امتحان کنید ";
    sodokoDescElem.classList.toggle("red");
  }
};
showResult.addEventListener("click", () => {
  isSodokoHandler(sodoko);
});
