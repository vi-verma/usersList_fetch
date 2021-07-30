import classes from './Card.module.css';


const Card = (props) => {
    return(
        <div className={classes.card}>
         
                <div className={classes.card_body}>
                    {props.children}
                </div>

        </div>
    );
};

export default Card;