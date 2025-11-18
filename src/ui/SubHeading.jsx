const SubHeading = ({ text = "SubHeading" }) => {
  return (
    <h3 className="lg:text-xl text-lg font-semibold text-gray-900 mb-4">
      {text}
    </h3>
  );
};

export default SubHeading;
