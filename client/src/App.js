import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/App.css';
import Hello from "./components/Main";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
const router = createBrowserRouter([
  {
    path: "/", element: <Hello />
  }, {
    path: '/quiz',
    element: <Quiz />
  },
  {
    path: '/result',
    element: <Result />
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

//
//gbv