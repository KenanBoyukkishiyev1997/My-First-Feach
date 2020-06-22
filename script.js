let GetText = document.getElementById("getText");
let GetUsers = document.getElementById("getUsers");
let GetPosts = document.getElementById("getPosts");
let output = document.getElementById("output");
let AddPosts = document.getElementById("addPost");

GetText.addEventListener("click", getText);
GetUsers.addEventListener("click", getUsers);
GetPosts.addEventListener("click", getPosts);
AddPosts.addEventListener("submit", addPost);


function getText() {
    fetch("sample.txt")
      .then((res) => res.text())
      .then((data) => {
        output.innerHTML = data;
      })
      .catch((error) => console.log(error));
  }

function getUsers() {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      let output2 = "<h2 class='mb-3'>Users</h2>";
      data.forEach(function (user) {
        output2 += `
                    <ul class='list-group mb-4'>
                    <li class='list-group-item '>ID:${user.id}</li>
                    <li class='list-group-item '>Name:${user.name}</li>
                    <li class='list-group-item '>Email:${user.email}</li>
                    </ul>
                    `;
      });

      output.innerHTML = output2;
    })
    .catch((error) => console.log(error));
}

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output2 = "<h2 class='mb-5'>Api</h2>";
      data.forEach(function (post) {
        output2 += `
                   <div class='card card-body mb-5'>
                   <h3>${post.title}</h3>
                   <p>${post.body}</p>
                   </div>
                    `;
      });

      output.innerHTML = output2;
    })
    .catch((error) => console.log(error));
}

function addPost(e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts",{
      method:'POST',
      headers:{
          'Accept':'application/json,text/plain,*/*',
          "Content-type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        body:body
      }),
  })
  .then((res) => res.json())
  .then((data)=>console.log(data))
}
