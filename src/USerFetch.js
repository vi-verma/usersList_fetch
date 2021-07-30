import {useEffect} from 'react';

function UserFetch(props){
  
console.log(props)
    const DataFetch = async () => {
        try{
            const response = await fetch(`https://reqres.in/api/users?page=${props.pageIndex.index || 1}` ,{
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
                console.log(Data.total_pages,"fetcho")
                props.setPageIndex({...props.pageIndex, total:Data.total_pages})
                console.log(props.pageIndex, "fetchm")
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
    },[props.pageIndex.index])
    

    return(
        <div></div>
    );

 
};

export default UserFetch;