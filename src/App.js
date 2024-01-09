import './App.css';
import {useState} from "react";
import Buttons from "./components/Buttons";
import Text from "./components/Text";

function App() {
    const texts = [
        "Devs Just Want to Have Fun by Cyndi Lauper",
        "I come home in the morning ligh My mother says, When you gonna live your life right?",
        "Oh mother dear we’re not the fortunate ones And devs, they wanna have fun Oh devs just want to have fun",
        "The phone rings in the middle of the night My father yells, What you gonna do with your life?",
        "Oh daddy dear, you know you’re still number one But devs, they wanna have fun Oh devs just want to have",
        "That’s all they really want Some fun When the working day is done Oh devs, they wanna have fun Oh devs just wanna have fun",
        "(devs, they wanna, wanna have fun, devs wanna have)"
    ];

    const [currentElement, setCurrentElement] = useState("p");

    return (
        <div className="App">
            <h1> Welcome TimTam App</h1>
            <Buttons setCurrentElement={setCurrentElement}/>
            <div>
                {texts.map((text) => (
                    <Text text={text} currentElement={currentElement}/>
                ))}
            </div>
        </div>
    );
}

export default App;
