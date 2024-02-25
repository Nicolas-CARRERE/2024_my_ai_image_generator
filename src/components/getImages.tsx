const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

const getImages = async (prompt: string) => {
  const finalPrompt = `
  "Cher modèle AI,
  Je suis à la recherche d'images mangas dans un style particulier pour mes projets créatifs.
  Je préfère des détails nets et des couleurs mangas pour que l'image soit convaincante.
  
  Voici quelques points clés à considérer :
  
      Sujet : ${prompt}
      Style : realiste
      Atmosphère : joyeuse
      Détails : ${prompt}
  Merci beaucoup pour votre aide, j'ai hâte de voir ce que vous allez créer!"
  `;

  const options = {
    method: "POST",
    headers: {
        "Authorization": `Bearer ${REACT_APP_API_KEY}`,
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        prompt: finalPrompt,
        n: 4,
        size: "1024x1024"
    })
  };

  try {
        const response = await fetch("https://api.openai.com/v1/images/generations", options);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(error);
    }
}
export default getImages;
