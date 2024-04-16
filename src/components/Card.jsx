import React from "react"

const Card = () => {
  const style = {
    width: "18rem"
  }

  return (
    <>
      <div className="card" style={style}>
        <img
          src="https://external-preview.redd.it/N_bB0Oszfuks9wLTax6viC4Hh9FzHgpMcpYiuUHoQQU.jpg?auto=webp&s=22d6a707521ffee7ea809ec405a10477ee7bd2b8"
          className="card-img-iron-man"
          alt="Iron Man"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  )
}

export default Card
