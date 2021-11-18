import React, {Suspense} from "react";


const Image = React.lazy(() => import('./Image'));


function App() {
  
  return (
    <div className="App">
     hello world 
     <Suspense fallback={<div>Loading...</div>} >
     <Image />
     </Suspense>
    </div>
  );
}

export default App;
