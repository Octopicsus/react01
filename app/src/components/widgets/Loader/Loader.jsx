import "./Loader.css";

function Loader({ levelsCount = 7 }) {
  const loaderSections = [];
  
  for (let i = 0; i < levelsCount; i++) {
    loaderSections.push(<div className="loaderSection" key={i}></div>);
  }
  
  return <div className="loader">{loaderSections}</div>;
}

export default Loader;