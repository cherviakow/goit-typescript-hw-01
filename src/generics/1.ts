import axios from 'axios';

export async function fetchData<T>(url: string): Promise<T> {
    {
  try {
    const response: {data: T} = await axios.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
}