import {useEffect} from 'react';

function UserFetch(props){
  
console.log(props)
    const DataFetch = async () => {
        try{
            const response = await fetch(`https://reqres.in/api/users?page=${props.pageIndex}` ,{
                method: 'GET',
                headers: {
                    'Content-Type':'Application/json'
                },
                mode:'cors'
            });
            try{
                const Data = await response.json();
                // console.log(Data.data)
                props.setUsers(Data.data)
            }
            catch(err){
                alert(err);
            };
        }catch(error){
            alert(error);
        };
    }; 
    useEffect(() => {
        DataFetch()
    },[props.pageIndex])
    

    return(
        <div></div>
    );

 
};

export default UserFetch;