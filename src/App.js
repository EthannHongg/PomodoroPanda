import './App.css';
import Timer from './timer/timer';
import PetDisplay from './petDisplay/pet';
import ChooseActivity from './activity/activity';

function App() {
  return (
    <div className = "App">  
      <Timer/>
      <PetDisplay/>
      <ChooseActivity/>
    </div>
  );
};

export default App;