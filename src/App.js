import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";

function App() {
  const [imagesData, setImagesData] = useState([]);

  const renderedImages = () => {
    if (imagesData.length === 0) {
      return <h1>Please search high resolution images</h1>;
    } else {
      return imagesData.map(({ id, urls, description, alt_description }) => (
        <Card
          key={id}
          urls={urls}
          description={description}
          alt_description={alt_description}
        />
      ));
    }
  };

  return (
    <div className="App">
      <Navbar setImagesData={setImagesData} />
      <section className="container">{renderedImages()}</section>
    </div>
  );
}

export default App;
