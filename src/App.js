import React from 'react';
import './App.css';

//Prime React Configuration
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";    //Icons      
import "primeflex/primeflex.css" //Flex  

import { Button} from 'primereact/button';

let App = () => {
  return (
    <div className="App">
       <h1> Welcome!</h1>
      <Button label={'Hello'}/>
    </div>
  );
}

export default App;
