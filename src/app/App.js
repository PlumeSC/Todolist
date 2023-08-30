import './App.scss';
import { Header } from '../component/Header'
import { Sidebar } from '../component/SideBar';

function App() {
    return (
        <div className="todo">
            <div className="todo__header"><Header/></div>
            <div className="todo__sidebar"><Sidebar/></div>
            <div className="todo_content">TodoContent</div>
        </div>
    );
}

export default App;
