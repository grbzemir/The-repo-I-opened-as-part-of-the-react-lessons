import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

const BASE_URL = "http://localhost:3005";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    // Post ekleme işlemi yapar!
    console.log("response", response.data);
  };

  // const getUserById = async (userId) => {
  //   const response = await axios.get(`${BASE_URL}/users/${userId}`);
  //   console.log(response.data);
  // }

  const updateUser = async (userId, updatedUser) => {
    // put veri güncelleme işlemi yapmak için kullanılır!
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
    console.log(`User ${userId} updated`);
  };

  const deleteUserById = async (userId) => {
    // delete veri silme işlemi yapmak için kullanılır!
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(deletedResponse.data);
  };

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data.postId;
  };

  const getPostById = async (postId) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + postId);
    return response.data;
  };

  const getPost = async () => {
    const postId = await getUserById(1);
    const postData = await getPostById(postId);
    console.log(postData);
  };

  useEffect(() => {
    // deleteUserById("cca3");
    // getAllUsers();
    // getUserById(1);
    // getUserById(2);

    // const newUser = {
    //   "username": "Emir",
    //   "password": "1234"
    // };
    // createUser(newUser);

    // updateUser("cca3", {
    //   "username": "Emir",
    //   "password": "5555"
    // });

    getPost();
  }, []);

  return (
    <div>
      {/* Ekranda görüntülenecek içerik */}
    </div>
  );
}

export default App;
