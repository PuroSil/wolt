const Links = (e) => {
  if(e.currentTarget.name === "git") {
    window.open(
      'https://github.com/PetraSil','_blank'
    );
  } else {
    window.open(
      'https://www.linkedin.com/in/petrasilavuori','_blank'
    );    
  };
};

module.exports = { Links };