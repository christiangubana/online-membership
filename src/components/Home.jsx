import React, { useState } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="grid">
      <div className="col-4">
        <Card className="m-3 shadow-5">
          <h3>{count}</h3>
          <Button label={"Increment"} className="p-button-success mr-2" onClick={() => setCount(count + 1)}/>
          <Button label="Decrement" className="p-button-warning" onClick={() => setCount(count -1 >= 0 ? count -1 : 0)}/>
        </Card>
      </div>
      <div className="col-4">
        <Card className="m-3 shadow-5">
          <h3>Counter: {count}</h3>
          <Button label={"Increment"} className="p-button-success mr-2" />
          <Button label="Decrement" className="p-button-warning" />
        </Card>
      </div>
      <div className="col-4">
        <Card className="m-3 shadow-5">
          <h3>Counter: {count}</h3>
          <Button label={"Increment"} className="p-button-success mr-2" />
          <Button label="Decrement" className="p-button-warning" />
        </Card>
      </div>
    </div>
  );
};

export default Home;
