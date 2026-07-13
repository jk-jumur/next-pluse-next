

const LoadingPage = () => {
    return (
        <div className="flex h-[85vh] items-center justify-center text-center bg-pink-200 mt-10">
              <h2>Global  Loading.........</h2>
            <span className="loading loading-spinner text-success"></span>
              <span className="loading loading-spinner text-warning"></span>
              <span className="loading loading-spinner text-error"></span>
        </div>
    );
};

export default LoadingPage;