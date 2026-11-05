import "./style.css";
const url = "http://localhost:4000/graphql";
let query = /* GraphQL */ `
  query UserQuery($id: ID!) {
    user(id: $id) {
      username
      email
      progresses {
        grade
      }
    }
  }
`;
async function fetchUser(id = 1) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { id },
      }),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}

const user = await fetchUser();
console.log(user);

console.log(document.querySelector(".title"));
document.querySelector(".title").textContent = user.username;
