//

import { useState } from "react";
import GetDataFile from "./components/GetDataFile.jsx";

const App = () => {
  const [apiData, setApiData] = useState("");

  return (
    <>
      <div className="container px-4 py-10 mx-auto text-center">
        <button
          type="button"
          onClick={() => setApiData(<GetDataFile />)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Test get data
        </button>
      </div>
      <div className="flex items-center justify-center">{apiData}</div>
    </>
  );
};

export default App;
