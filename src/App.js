import DetailIssue from "./components/DetailIssue";
import Header from "./components/Header";
import Issue from "./components/Issue";
import GlobalStyle from "./styles/GlobalStyle";
import { RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  
  return (
    <>
      <GlobalStyle /> 
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Issue />} />
        <Route path='/detail/:id' element={<DetailIssue />} />
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
