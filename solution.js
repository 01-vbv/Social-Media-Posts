// The code given below is for one object refactor the code it for using the JSON Data.
let postsData = [
  {
    id: 1,
    author: "John",
    content: "Hello, Instagram!",
    likes: 10,
    comments: ["Great post!", "Nice photo!"],
    image: "https://files.codingninjas.in/image2-28694.jpg",
  },
  {
    id: 2,
    author: "Jane",
    content: "This is a great post!",
    likes: 15,
    comments: [],
    image: "https://files.codingninjas.in/oip-28704.jpg",
  },
  {
    id: 3,
    author: "Alice",
    content: "Another post",
    likes: 8,
    comments: [],
    image: "https://files.codingninjas.in/th-2-28706.jpg",
  },
  {
    id: 4,
    author: "Bob",
    content: "Check out this photo!",
    likes: 20,
    comments: [],
    image: "https://files.codingninjas.in/image1-28708.jpg",
  },
];

let currentPostIndex = 0;

function renderPosts() {
  let { author, content, likes, comments, image } = postsData[currentPostIndex];

  const postsContainer = document.getElementById("posts");

  const postElement = document.createElement("div");
  postElement.classList.add("post");

  const authorElement = document.createElement("h3");
  authorElement.textContent = author;

  const contentElement = document.createElement("p");
  contentElement.textContent = content;

  const imageElement = document.createElement("img");
  imageElement.src = image;
  imageElement.alt = "Post Image";

  const likeButton = document.createElement("button");
  likeButton.textContent = `Like`;
  likeButton.classList.add("like-button");

  const commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.placeholder = "Write a comment...";

  const commentButton = document.createElement("button");
  commentButton.textContent = "Comment";
  commentButton.classList.add("comment-button");

  const postFooter = document.createElement("div");
  postFooter.classList.add("post-footer");
  postFooter.textContent = `Likes: ${likes}   Comments: ${comments.length}`;

  const commentsContainer = document.createElement("div");
  commentsContainer.classList.add("comments-container");

  comments.forEach((comment) => {
    const commentElement = document.createElement("p");
    commentElement.textContent = comment;
    commentsContainer.appendChild(commentElement);
  });

  postElement.appendChild(authorElement);
  postElement.appendChild(imageElement);
  postElement.appendChild(contentElement);
  postElement.appendChild(likeButton);
  postElement.appendChild(commentInput);
  postElement.appendChild(commentButton);
  postElement.appendChild(postFooter);
  postElement.appendChild(commentsContainer);

  postFooter.addEventListener("click", () => {
    if (commentsContainer.style.display === "none") {
      commentsContainer.style.display = "block";
    } else {
      commentsContainer.style.display = "none";
    }
  });

  likeButton.addEventListener("click", () => {
    if (likeButton.style.backgroundColor != "red") {
      likes++;
      likeButton.style.backgroundColor = "red";
    } else {
      likes--;
      likeButton.style.backgroundColor = "#fff";
    }
    postFooter.textContent = `Likes: ${likes}   Comments: ${comments.length}`;
  });

  commentButton.addEventListener("click", () => {
    if (commentInput.value) {
      const newComment = document.createElement("p");
      newComment.textContent = commentInput.value;
      commentsContainer.appendChild(newComment);
      comments.push(commentInput.value);
    }
    commentsContainer.style.display = "block";
    postFooter.textContent = `Likes: ${likes}   Comments: ${comments.length}`;
  });

  postsContainer.appendChild(postElement);
  if (currentPostIndex !== postsData.length - 1) {
    currentPostIndex++;
    renderPosts();
  }
}

// Create your function here to handle post creation and adding Post to the postsData.
// Add Event listeners to listen to the submit event of the form.
const postForm = document.getElementById("postForm");
const imageInputEle = document.querySelector("#imageInput");
const imageContentEle = document.querySelector("#postInput");
let url;

postForm.addEventListener("submit", (event) => {
  event.preventDefault();
  url = URL.createObjectURL(imageInputEle.files[0]);
  const newPost = {
    id: 1,
    author: "You",
    content: imageContentEle.value,
    likes: 0,
    comments: [],
    image: url,
  };
  postsData.push(newPost);
  currentPostIndex++; //as last currentIndex after rendering was postData.length -1, other wise it will add last and new post instead of new post only
  renderPosts();
});

renderPosts();
