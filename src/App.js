import React, { Suspense } from "react";
import { images } from "./data"; 
// import Image from "./Image";
const Image = React.lazy(() => import("./Image"));

function App() {
  return (
    <div className="App">
      hello world
      <Suspense fallback={<div>Loading...</div>}>
        {images.map((image) => (
          <Image key={image.id} src={image.download_url} />
        ))}
      </Suspense>
    </div>
  );
}

export default App;
