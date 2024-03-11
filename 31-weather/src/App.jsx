import './App.css';
import Data from "../components/Data.jsx";
import Info from "../components/Info.jsx";

function App() {
    return (
        <div className={'wraper'}>
            <div className={'main'}>
                <div className={'container mt-5'}>
                    <div className={'row'}>
                        <div className={'title'}>
                            <h1>Your city weather</h1>
                        </div>
                        <div className={'col-sm-5 info'}>
                            <Info/>
                        </div>
                        <div className={'col-sm-1 col-space'}></div>
                        <div className={'col-sm-5 data'}>
                            <Data/>
                        </div>
                        <div className={'col-sm-1 col-space'}></div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;