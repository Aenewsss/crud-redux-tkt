const SkeletonLoader = () => {
    return (
        <div className="row justify-content-center gap-3 mt-5">
            <div className="col-md-12">
                <div className="border rounded bg-l-gray loading" style={{height: "5em"}}></div>
            </div>
            <div className="col-md-12 mt-md-0">
                <div className="border rounded bg-l-gray loading" style={{height: "5em"}}></div>
            </div>
            <div className="col-md-12 mt-md-0">
                <div className="border rounded bg-l-gray loading" style={{height: "5em"}}></div>
            </div>
            <div className="col-md-12 mt-md-0">
                <div className="border rounded bg-l-gray loading" style={{height: "5em"}}></div>
            </div>
            <div className="col-md-12 mt-md-0">
                <div className="border rounded bg-l-gray loading" style={{height: "5em"}}></div>
            </div>
        </div>
    );
}

export default SkeletonLoader;