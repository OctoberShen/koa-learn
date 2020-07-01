function f1() {
  f2();
}

async function f2() {
  try {
    await f3();
  } catch (e) {
    console.log(e);
  }
}

function f3() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      reject("error");
    }, 1000);
  });
}

f1();
let testJson = {
  1: "1",
  2: "2",
  3: "3",
};

for (let item in testJson) {
  console.log(typeof item);
}
