import './App.css'
import {ThemeProvider} from "./components/ui/themeProvider.tsx";
import {Toaster} from "./components/ui/sonner.tsx";
import TargetRoutes from "./components/TargetRoutes.tsx";
// import Navbar from "./components/Navbar.tsx";

function App() {
    return (
        <ThemeProvider defaultTheme='dark'>
            <Toaster/>
            <TargetRoutes/>
        </ThemeProvider>
    )
}

export default App
