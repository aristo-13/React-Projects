import rails from '../assets/rails.webp'
function Loop() {
  return (
    <section className="loop">
        <div className="rails"><img src={rails}/></div>
      <div className="texts">
        <h1>Stay in the loop</h1>
        <p>Join our newsletter to get top news before anyone else.</p>
      </div>
      <div className="subscribe">
        <input type="text" placeholder='Your best email...' id='mail'/>
        <button>Subscribe</button>
      </div>
    </section >
  )
}

export default Loop
