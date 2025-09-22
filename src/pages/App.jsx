import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "../css/app.module.css";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";


const App = ()=>{
    const [theme] = useContext(ThemeContext);
    return(
        <div className={theme==='dark'?(style.dark):style.light} >
            <Header/>
            <div className={style.main}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;