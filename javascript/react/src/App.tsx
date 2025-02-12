function Header() {
  return <h1>This is the header.</h1>;
}

function Footer() {
  return <p>This is the footer.</p>;
}

function App() {
  return (
    <div>
      <Header />
      <p>Welcome to my React app!</p>
      <Footer />
    </div>
  );
}

export default App;