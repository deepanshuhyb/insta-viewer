export const getURL=(name)=> `https://instagram-viewer.p.rapidapi.com/instagram-viewer?profile=${name}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8033dbe000msheb96a535a1c94b8p1103afjsn84f5ad2a2730',
		'x-rapidapi-host': 'instagram-viewer.p.rapidapi.com'
	}
};

const Fetchdata = async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  } 
}

