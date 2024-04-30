//

import { useState } from 'react';
import GetDataFile from './components/GetDataFile.jsx'


const App = () => {
    const [apiData, setApiData] = useState('');

  return (
    <>
      <div className="container text-center py-10 px-4 mx-auto">

          <button
              type="button"
              onClick={() => setApiData( <GetDataFile /> )}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Default
          </button>
      </div>
      <div className="flex justify-center items-center">

            {apiData}

      </div>
    </>
  )
}

export default App
