import Header from "./components/Header";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

function App() {
  const user = {
    name: "Samuel Andrew",
    email: "samandreas652@gmail.com",
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4">
        <div className="grid gap-4">
          <Profile name={user.name} email={user.email} />
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default App;
