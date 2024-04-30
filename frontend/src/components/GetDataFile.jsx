//

import { useQuery } from '@tanstack/react-query';

import fetch from "../utils/fetch";


const GetDataFile = () => {

    const getLocalQuery = useQuery({
        queryKey: ['data'], // CACHE UNICO CON LA DEPENDENCIA DE LA URL
        queryFn: () => fetch('/api'),
    });

    if (getLocalQuery.isLoading) return <div>Loading data...</div>;

    if (getLocalQuery.error) return <div>Error: { getLocalQuery.error.message }</div>;

    // if (getLocalQuery.data) return <pre>{JSON.stringify(getLocalQuery.data, null, 2)}</pre>;

    if (getLocalQuery.data) return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            NAME
                        </th>
                        <th scope="col" className="px-6 py-3">
                            AGE
                        </th>
                    </tr>
                </thead>
                <tbody>

                {getLocalQuery.data.map(item => (
                    <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.id}
                        </td>
                        <td className="px-6 py-4">
                            {item.name}
                        </td>
                        <td className="px-6 py-4">
                            {item.age}
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>

    );
}

export default GetDataFile