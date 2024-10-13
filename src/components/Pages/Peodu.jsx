import React, { useEffect, useState } from "react";

const Peodu = () => {
  const [pr, setPr] = useState([]);
  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    var data = await fetch("https://fakestoreapi.com/products");
    var json = await data.json();
    setPr(json);
  }
  return (
    <div>
      <h1>hi</h1>
      {console.log(pr)}
    </div>
  );
};

export default Peodu;
