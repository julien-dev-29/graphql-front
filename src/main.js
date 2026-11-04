import "./style.css";

fetch("http://localhost:4000/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({ query: "{ users }" }),
})
  .then((r) => r.json())
  .then((data) => console.log("data returned:", data));