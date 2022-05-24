const getBreedGroupEmoji = (breedGroup: string) => {
  switch (breedGroup) {
    case "Toy":
      return "🧸";
    case "Hound":
      return "🦆";
    case "Working":
      return "💼";
    case "Herding":
      return "🐑";
    case "Sporting":
      return "🎯";
    case "Terrier":
      return "🦊";
    default:
      return "🐶";
  }
};

export default getBreedGroupEmoji;
