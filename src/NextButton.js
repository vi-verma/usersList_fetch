

function NextPageIndexing(props){
    return(
        <div>
            <button type="button" onClick={() => props.setPageIndex(props.pageIndex + 1)}>
            Next
            </button>
        </div>

    );
};

export default NextPageIndexing;

