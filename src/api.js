export const getURL=(name)=> `https://instagram-viewer.p.rapidapi.com/instagram-viewer?profile=${name}`;
const options = {
	method: 'GET',
	headers: {
		// 'x-rapidapi-key': '8033dbe000msheb96a535a1c94b8p1103afjsn84f5ad2a2730',
    // 'x-rapidapi-key': '774e572a4amsh48abd3f8b1ed240p12e268jsn0e7d16756ea5',
    'x-rapidapi-key': '6b210280c3msh29cc27189c6e5bcp1d3dc7jsn7f93bad2dd1b',
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

