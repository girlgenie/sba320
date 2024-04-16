import React from "react"

const Card = () => {
  const style = {
    width: "18rem"
  }

  return (
    <>
      <div className="card" style={style}>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CD23BFF8AB733DC687DC58A26D99693E00FFF1D151BD13DAE97A9C528801E54F/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp"
          className="card-img-iron-man"
          alt="Iron Man"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-danger">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  )
}

export default Card
