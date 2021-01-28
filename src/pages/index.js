import Card from "../components/Card";
import Layout from "../components/Layout";
import api from "./api/api.js";
import { useState, useEffect } from "react";
import axios from "axios";

const Index = ({ isVisible }) => {
  const [gitHubData, setGitHubData] = useState([]);
  const [inputvalue, setInputValue] = useState("a");
  let value = "";
  //epositories?q=language:Java&sort=starts&page=1&
  useEffect(() => {
    try {
      axios
        .get(
          api.baseUrl +
            `/search/users?q=${inputvalue}&` +
            api.client_id +
            "&" +
            api.client_secret
        )
        .then((response) => {
          setGitHubData(response.data.items);
          console.log(gitHubData);
        });
    } catch (error) {
      console.log(error);
    }
  }, [inputvalue]);

  return (
    <Layout
      input={(e) => {
        value = e.target.value;
        console.log(value);
      }}
      click={() => {
        setInputValue(value);
        console.log(inputvalue);
      }}
    >
      {gitHubData.map((git) => (
        <Card imageSrc={git.avatar_url} title={git.login} />
      ))}
    </Layout>
  );
};

export default Index;
