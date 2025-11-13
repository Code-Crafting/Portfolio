const CloseBtn = ({ onClick = () => {}, size = "text-xl" }) => {
  return (
    <div className="flex justify-end">
      <button className={`${size} cursor-pointer`} onClick={onClick}>
        ❌
      </button>
    </div>
  );
};

export default CloseBtn;
