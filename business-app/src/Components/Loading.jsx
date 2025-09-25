const Loading = ({ css }) => {
  return (
    <div className={`italic py-4 text-center font-medium text-gray-800 ${css}`}>
      Loading...
    </div>
  );
};

export default Loading;
