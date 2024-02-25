import React from 'react';
import './App.css';
import getImages from './components/getImages';

function App() {
  const [prompt, setPrompt] = React.useState('');
  const [images, setImages] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const promptHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setPrompt(e.currentTarget.value)
  }

  const imagesHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const imagesData: any = await getImages(prompt);
      setImages(imagesData);
    } catch (err: any) {
      setError(err?.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="App">
      <div className="App-body">
        <header className="App-header">
          <h1>Heincey AI Image Generator</h1>
        </header>
        { isLoading ?
          <div className='loading'>Loading...</div> 
          : error ? 
            <div className='error'>{error}</div> 
          : 
            <div className='success'></div>
        }
        <section className='images-section'>
          <div className='images-container'>
          {!images ? 
            <div className='loading'>Loading...</div> 
          : images.map((image: any, index: number) => {
            return <img key={index} src={image.url} alt={image.prompt} />;
          })}
          </div>
        </section>
        <section className='bottom-section'>
          <div className='input-container'>
            <input 
              type="text"
              placeholder="Enter your prompt with an image description"
              onChange={promptHandler}
            />
            <div id='submit-icon'>➢</div>.
            <input 
              type="submit"
              value="Generate"
              onClick={() => imagesHandler()} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
