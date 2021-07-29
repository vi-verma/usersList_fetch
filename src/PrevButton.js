function PrevPageIndexing(props){
    return(
        <div>
            <button type="button" onClick={() => {
                if(props.pageIndex===0){
                    return;
                }
                props.setPageIndex(props.pageIndex - 1)}}>
            Prev
            </button>
        </div>

    );
};

export default PrevPageIndexing;