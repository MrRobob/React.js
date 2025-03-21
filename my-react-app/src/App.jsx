import './App.css';
import Garage from './components/Garage';
import Like from './components/Like';
import LightSwitch from './components/Lightswitch';
import List from './components/Liste';
import Textinput from './components/Textinput';
import Todolist from './components/Todolist';

export default function App() {
  return (
    <>
      <Todolist />
      <Textinput />
      <List />
      <Garage />
      <Like />
      <LightSwitch />
    </>
  )
}