function PrevPageIndexing(props){

    const prevPageHandeler = () => {
        if(props.pageIndex.index > 1){
            const x = props.pageIndex.index-1;
            props.setPageIndex({...props.pageIndex, index:x})
            console.log(props.pageIndex , "prev")
        }return;
    };

    return(
        <div>
            <button type="button" onClick={prevPageHandeler}>
            Prev
            </button>
        </div>

    );
};

export default PrevPageIndexing;