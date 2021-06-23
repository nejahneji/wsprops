import "./App.css";
import ProfileComponent from "./profile/ProfileComponent";
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  const handleAlert=(FullName)=>{
    alert(`this is ${FullName}`)
  }
  
  return (
    <div className="App">
      <ProfileComponent 
        FullName="nejah neji"
        Bio="try to code ,dont stop ,work more"
        Profession="developpeur"
      >
        <img src="/developpeur.png" alt="dev" onClick={handleAlert} />
      </ProfileComponent>
      
    </div>
    
  );
}

export default App;
