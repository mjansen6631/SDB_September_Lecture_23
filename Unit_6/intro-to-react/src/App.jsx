import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import AboutMe from './components/aboutme/AboutMe'
import EmployeeInfo from './components/employeeinformation/Employee';
import PresidentVoting from './components/presidents/PresidentVoting';
// import EmployeeInfo from './components/employeeinformation/EmployeeInfo';


function App() {
  return (
    <div className="App">
      <Header />
      <PresidentVoting />
      <AboutMe />
      <EmployeeInfo />
      <Footer />
    </div>
  );
}

export default App;
