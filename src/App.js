import {useState} from 'react';
import classes from './App.module.css';
import UserFetch from './USerFetch';
import UserList from './UserList';
import NextPageIndexing from './NextButton';
import PrevPageIndexing from './PrevButton';


function App() {
  const [users, setUsers] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <div className={classes.App}>
     <UserFetch pageIndex={pageIndex} setUsers={setUsers}/>
     <UserList  pageIndex={pageIndex} users={users}/>
     <NextPageIndexing pageIndex={pageIndex} setPageIndex={setPageIndex} />
     <PrevPageIndexing pageIndex={pageIndex} setPageIndex={setPageIndex}/>
    </div>
  );
}

export default App;
