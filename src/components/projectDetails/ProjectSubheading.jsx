const ProjectSubheading = ({ emoji, text }) => {
  return (
    <h4 className="text-xl font-semibold">
      <span className="text-2xl">{emoji}</span> {text}
    </h4>
  );
};

export default ProjectSubheading;
