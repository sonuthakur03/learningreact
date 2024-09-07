import Login from "./components/Login";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Login />
    </UserContextProvider>
  );
}

export default App;
