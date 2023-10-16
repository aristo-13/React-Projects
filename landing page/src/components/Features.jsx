
function Features({features}) {
  return (
    <div className="features">
       {features.map((feature) => (
           <div className="box" key={feature.id}>
              <div className="icon">{feature.icon}</div>
              <h1>{feature.title}</h1>
              <p>{feature.about}</p>
           </div>
       ))}
    </div>
  )
}

export default Features
