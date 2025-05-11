console.log(1);

const getDate = () => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(JSON.parse(request.responseText));
    } else {
      console.log("malumot kelmadi!");
    }
  });

  //open
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");

  //send
  request.send();
};

getDate();

console.log(2);
