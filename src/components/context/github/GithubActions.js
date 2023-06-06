import axios from "axios";
const Github_url = process.env.REACT_APP_GITHUB_URL;
const Github_token = process.env.REACT_APP_GITHUB_TOKEN;

const github=axios.create({
  baseURL:Github_url,
  headers:{Authorization:`token ${Github_token}`}
})


export const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });
    const res=await github.get(`/search/users?${params}`)
    return res.data.items
  };

  // get user and repos 
  export const getUsereAndRepos=async(login)=>{
    const [user,repos]=await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos`)
    ])
    console.log(user.data)

    return {user:user.data,repos:repos.data}
  }