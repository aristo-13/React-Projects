
function Comments() {
    const comment_card = {
        text: "— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
        name: ["Joylinton","Richmond","Aristo"],
        skill: 'UX Board'
    }
  return (
    <section className="comments">
       <h1>Don't take our word for it</h1>
       <p>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>

  <div className="comment-cards">
    {
        comment_card.name.map((name) => (
            <div className="card">
                <div className="profile"></div>
                <p>{comment_card.text}</p>
                <div className="line"></div>
                <p className="name">{name} <span className="skill">{comment_card.skill}</span></p>
            </div>
        ))
    }
  </div>
    </section >
  )
}

export default Comments
