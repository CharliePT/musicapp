import { useState } from 'react'
import './App.css'
import { src1, src2, src3 } from './assets/srcs.jsx'

function App() {
  const [likes, setLikes] = useState(0);

  const increment = () => {
    setLikes(y => y + 1);
  }

  const decrement = () => {
    setLikes(x => x - 1);
  }

  const like = (e) => {
    if (e.target.value === 'Like'){
      // increment();
      e.target.value = 'You like this (click to unlike)'
    }

    else {
      e.target.value = "Like"
      // decrement();
    }
  }

  return (
    <>
      <div>
        <h1>Kendrick Lamar</h1>
        <h2>Biography</h2>
        <h3>Kendrick Lamar Duckworth (born June 17, 1987) is an American rapper and songwriter. Known for his progressive musical styles and socially conscious songwriting, he is often considered one of the most influential hip hop artists of his generation. Born and raised in Compton, California, Lamar began his career as a teenager performing under the stage name K.Dot. He quickly garnered local attention which led to him signing a recording contract with Top Dawg Entertainment (TDE) in 2005.</h3>
      </div>

      <div id="gallery">
        <p>Top Albums:</p>
          <div class="album">
            <img src={src1} alt="Good kid m.A.A.d city album cover"/>
            <p>Good kid m.A.A.d city</p>
            <input type="button" onClick={like} value="Like"></input>
          </div>
          <div class="album">
            <img src={src2} alt="Damn album cover"/>
            <p>Damn</p>
            <input type="button" onClick={like} value="Like"></input>
          </div>
          <div class="album">
            <img src={src3} alt="To Pimp a Butterfly album cover" />
            <p>To Pimp a Butterfly</p>
            <input type="button" onClick={like} value="Like"></input>
          </div>
        <div id="likes">
          <h3>Likes: {likes}</h3>
        </div>
      </div>
    </>
  )
}

export default App
