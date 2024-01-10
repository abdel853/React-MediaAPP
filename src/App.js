// import {postStatus,postCategories}from './includes/variables.js'

import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import HomePage from "./pages/HomePage";
import PostListPage from "./pages/PostListPage/index.js";
import PostFormPage from "./pages/PostFormPage/index.js";
import PostItemPage from "./pages/PostItemPage/index.js";
import PreferencesPage from "./pages/PreferencesPage/index.js";
import AboutUsPage from "./pages/AboutUsPage/index.js";
import AboutUsIntroductionPage from "./pages/AboutUsPage/Introduction.js";
import AboutUsMissionPage from "./pages/AboutUsPage/Mission.js";
import AboutUsPrivacyPage from "./pages/AboutUsPage/Privacy.js";
import NotFoundPage from "./pages/NotFoundPage/index.js";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/index.js";

//1  import{load as databaseLoad,save,update} from './database';// we import from the hub// its time consuming for big app, but easy for developpers
//1   as load as databaseLoad we import with the exact name we ad 'as' and we give it any other name to skip name conflects
import * as database from "./database"; // * means import all files from database , it creates an object database
// import {load} from './database/read';// import from each file
// import{save,update} from './database/write';
import { setPosts } from "./redux/postSlice";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // use effect should receive a function but database.load is giving us a promise thats why we should create
    // a function inside use effect and call it emidiately that makes useffect receive a function not promise
    //IIFE - Immediately Invoked Function Expression //what i have here is a function
    (async () => {
      //load the database
      const data = await database.load();

      // eslint-disable-next-line
      dispatch(setPosts(data));
      setIsLoading(false);
    })(); // this means exicute the Myfunction after its created async.... all between()//----------------------
    // eslint-disable-next-line
  }, []);

  // useEffect(()=>{
  //     //Load the data base
  //     // const result =database.load();
  //     // console.log('Loaded data', result);

  //   //1   databaseLoad();
  //   //1   save();
  //   //1    update();

  //  2 // database.load()
  //  2 //   .then((result)=>{
  //  2 //     console.log('Load Result',result);
  //  2 //   })
  //  2 //   .catch((error)=>{
  //   2//     console.log('Load error',error);
  //   2//   });

  // },[]);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/posts" element={<PostListPage />} />
          <Route path="/posts/add" element={<PostFormPage />} />
          <Route path="Posts/:id" element={<PostItemPage />} />

          <Route path="/preferences" element={<PreferencesPage />} />

          <Route path="/about-us" element={<AboutUsPage />}>
            <Route path="" element={<AboutUsIntroductionPage />} />
            <Route path="mission" element={<AboutUsMissionPage />} />
            <Route path="privacy" element={<AboutUsPrivacyPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}

      <Footer />
    </>
  );
}
