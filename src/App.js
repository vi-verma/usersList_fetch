import {useState} from 'react';
import classes from './App.module.css';
import UserFetch from './USerFetch';
import UserList from './UserList';
import NextPageIndexing from './NextButton';
import PrevPageIndexing from './PrevButton';


function App() {
  const [users, setUsers] = useState([]);
  const [pageIndex, setPageIndex] = useState({index:1, total:1});
  console.log(pageIndex.index +  " app" )

  return (
    <div className={classes.App}>
     <UserFetch pageIndex={pageIndex} setUsers={setUsers} setPageIndex={setPageIndex}/>
     <UserList  pageIndex={pageIndex} users={users}/>
     <div className={classes.bti}>
      <PrevPageIndexing pageIndex={pageIndex} setPageIndex={setPageIndex}/>
      <NextPageIndexing pageIndex={pageIndex} setPageIndex={setPageIndex} />

     </div>
    </div>
  );
}

export default App;
