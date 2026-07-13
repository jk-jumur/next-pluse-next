const LoadingPage = () => {
    return (
        <div className="flex h-[85vh] items-center justify-center text-center bg-green-100 mt-10">
              <h2>News By category  Loading.........</h2>
            <span className="loading loading-spinner text-success"></span>
              <span className="loading loading-spinner text-warning"></span>
              <span className="loading loading-spinner text-error"></span>
        </div>
    );
};

export default LoadingPage;