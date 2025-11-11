const Tech = ({ tech, fontSize = "text-md" }) => {
  return (
    <div
      className={`rounded px-4 py-1 bg-gray-200 text-textSecondary font-medium ${fontSize} hover:bg-gray-300 transition`}
    >
      {tech}
    </div>
  );
};

export default Tech;
