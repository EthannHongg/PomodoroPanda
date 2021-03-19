import { Achievement } from "./Achievements";
import "./App.css";
global.points = 0;

function App() {
  return (
    <div class="bg_image" >

      <h1>Achievements</h1>
      <h2>Points: {global.points}</h2>
      {/* amount should be gathered from other interfaces and replaced with actual value */}
      <Achievement name="Use the study timer 5 times" amount="1" needed="5" points="250"/> 
      <Achievement name="Meditate for 10 hours" amount="6" needed="10" points="100"/>
      <Achievement name="Complete the survey" amount="0" needed="1" points="300"/>
    </div>
  );
}

export default App;