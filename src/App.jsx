import ArrayDemo from "./basic-react-concepts/ArrayDemo.jsx";
import OnClickAndStateDemo from "./basic-react-concepts/OnClickAndStateDemo.jsx";
import PropsDemo from "./basic-react-concepts/PropsDemo.jsx";
import DataAsChildDemo from "./basic-react-concepts/DataAsChildDemo.jsx";
import CardListDemo from "./react-with-css/CardList/CardListDemo.jsx";
import NoteForm from "./basic-react-concepts/FormInputDemo.jsx";
import CompleteFormInputDemo from "./basic-react-concepts/CompleteFormInputDemo.jsx";
import UseEffectDemo from "./basic-react-concepts/UseEffectDemo.jsx";
import UseRefDemo from "./basic-react-concepts/UseRefDemo.jsx";
import {UpdateContextDemo} from "./basic-react-concepts/UseContextDemo.jsx";
import EmployeeTable from "./react-with-css/DataTable/EmployeeTable.jsx";
import EmployeeCircle from "./react-with-css/CircularVisualization/EmployeeCircle.jsx";
import RegisterUser from "./user-login-register/register/RegisterUser.jsx";
import UserLogin from "./user-login-register/login/UserLogin.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./user-login-register/Home.jsx";
import Practice from "./practice/Practice.jsx";
import Chatbot from "./chatbot-ui/Chatbot.jsx";

function App() {

    return (
        <>
            {/*<ArrayDemo></ArrayDemo>*/}
            {/*<OnClickAndStateDemo></OnClickAndStateDemo>*/}
            {/*<PropsDemo></PropsDemo>*/}
            {/*<DataAsChildDemo></DataAsChildDemo>*/}
            {/*<CardListDemo></CardListDemo>*/}
            {/*<NoteForm />*/}
            {/*<CompleteFormInputDemo></CompleteFormInputDemo>*/}
            {/*<UseEffectDemo></UseEffectDemo>*/}
            {/*<UseRefDemo></UseRefDemo>*/}
            {/*<UpdateContextDemo />*/}
            {/*<EmployeeCircle/>*/}
            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<UserLogin/>}/>*/}
            {/*        <Route path="/login" element={<UserLogin/>}/>*/}
            {/*        <Route path="/register" element={<RegisterUser/>}/>*/}
            {/*        <Route path="/home" element={<Home/>}/>*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}

            {/*<Practice/>*/}
            <Chatbot/>
        </>
    )
}

export default App
