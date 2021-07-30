

function NextPageIndexing(props){

    const nextPageHandeler = () => {
        if(props.pageIndex.total > props.pageIndex.index){
            const x = props.pageIndex.index + 1 ;
            props.setPageIndex({...props.pageIndex ,index:x})
            console.log(props.pageIndex , "next")
        }return;

    };

    return(
        <div>
            <button type="button" onClick={nextPageHandeler}>
            Next
            </button>
        </div>

    );
};

export default NextPageIndexing;

