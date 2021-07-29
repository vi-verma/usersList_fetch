import classes from "./UserList.module.css";

function UserList(props){

    // "id": 1,
    // "email": "george.bluth@reqres.in",
    // "first_name": "George",
    // "last_name": "Bluth",
    // "avatar": "https://reqres.in/img/faces/1-image.jpg"


    const list = props.users.map((user) => {
        return(
                <li key={Math.random()}>
                   <div className={'col-sm-1'}>    
                        {user.id }
                    </div>
                    <div className='col-sm-4'>
                        {user.first_name +' '+ user.last_name}
                    </div> 
                    <div className='col-sm-3'>
                        {user.email}
                    </div>
                    <div className='col-sm-4'>
                        {console.log(user.avatar)}
                        <img src={user.avatar} alt="img"></img>
                    </div>
                </li>
        );
    });
    // const pageChangeHandeler = ()=> {
    //     props.setPage()
    // };

    return(
        <div className={classes.user_table}>
            <ul className={classes.list}>
                {list}
            </ul>
                {/* <button type='button' onClick={pageChangeHandeler}>Page</button> */}
        </div>
    );
};

export default UserList;