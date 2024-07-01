import logo from './logo.svg';
import './App.css';
import {BaseContainers} from './components/BaseContainers.js';

function App(props) {

    console.log("App Start");

    return (
        <div>
            <BaseContainers briefData={props.briefData} pageData={props.pageData}/>
        </div>
    );
}

export default App;
