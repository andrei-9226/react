const CrossIcon = () => {

    const onClickHandler = () => {

    }

  return (
    <div className="absolute top-2 right-2" onClick={onClickHandler}>
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white stroke-gray-300  hover:fill-red-400 hover:stroke-amber-50 cursor-pointer"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke-width="1"
          d="M8 8v1h4V8m4 7H4a1 1 0 0 1-1-1V5h14v9a1 1 0 0 1-1 1ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
        />
      </svg>
    </div>
  );
};

export default CrossIcon;
