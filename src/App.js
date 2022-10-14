import React, { useState } from "react";
import dataFromFile from "./helper/data";
import List from "./list";
import "./style/index.css";

function App() {
  // data değişkeni ismini biz belirledik. değerini dataFromFile dan aldı. 20 elemanlı bir obje. değişiklik yapmayacağımız için 2. parametreyi (setData) belirlemedik.
  const [data] = useState(dataFromFile);
  console.log(data);
  console.log(dataFromFile);

  // people nin ilk değerini datanın slicelanmıış 5 değeri olarak atadık.
  const [people, setPeople] = useState(data.slice(0, 5));

  console.log(people);
  // index'i kullanmak için belirledik. ilk değer:0
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    let newIndex = index + 5;
    if (newIndex > data.length - 1) newIndex = 0;
    setIndex(newIndex);
    setPeople(data.slice(newIndex, newIndex + 5));
  };
  const handlePrev = () => {
    let newIndex = index - 5;
    if (newIndex < 0) newIndex = data.length - 5;
    setIndex(newIndex);
    setPeople(data.slice(newIndex, newIndex + 5));
  };

  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {index + 1} to {index + 5})
        </h5>
        <List people={people} />
        <div className="button">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
