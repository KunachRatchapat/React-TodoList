import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"


import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotfoundPage from "./pages/NotfoundPage";
import NewTask from "./components/NewTask";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
       <Route path="*" element={<NotfoundPage />} />
  

    </Route>   
  )

);

  
  
  return <RouterProvider router={router} />
  
  


}
export default App