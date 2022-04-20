import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle';
import Tab from './components/Tab';
import Slider from './components/Slider';
import Input from './components/Input';
import Dropdown from './components/Dropdown';

function App() {
    return (
        <div class="App">
            <Toggle />
            <hr />
            <Tab />
            <hr />
            <Slider />
            <hr />
            <Input />
            <hr />
            <Dropdown />
        </div>
    );
}

export default App;
