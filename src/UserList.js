import classes from "./UserList.module.css";
import Card from './Card'

function UserList(props){

    const list = props.users.map((user) => {
        return(
                <li className={classes.user} key={user.id}>
                    <div className={classes.image}>
                        <img src={user.avatar} alt="img"></img>
                    </div>
                    <div className={classes.bind}>

                    <div className={classes.user_name}>
                        {user.first_name +' '+ user.last_name}
                    </div> 
                    <div className={classes.email}>
                        {user.email}
                    </div>

                    </div>
                </li>
        );
    });

    return(
        <Card>
            <h2 className={classes.header}>
                Members
            </h2>
            <ul className={classes.list}>
                {list}
            </ul>
        </Card>
    );
};

export default UserList;