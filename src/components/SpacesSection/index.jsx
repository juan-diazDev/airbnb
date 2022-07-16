import './style.scss'

function MainSection() {
  const spaces = [
    {
      id: 1,
      img: <img className="card__image" src="img/Spaces/1.jpg" alt="Picture1"/>,
      location: "Envigado, Colombia",
      distance: "235 kilómetros de distancia",
      dates: "8 - 14 de jul",
      price: "$461,570 COP"
    },
    {
      id: 2,
      img: <img className="card__image" src="/Airbnbn-Clone/fotos/Reference.jpg" alt="Picture1"/>,
      location: "Envigado, Colombia",
      distance: "235 kilómetros de distancia",
      dates: "8 - 14 de jul",
      price: "$461,570 COP"
    },
    {
      id: 3,
      img: <img className="card__image" src="/Airbnbn-Clone/fotos/Reference.jpg" alt="Picture1"/>,
      location: "Envigado, Colombia",
      distance: "235 kilómetros de distancia",
      dates: "8 - 14 de jul",
      price: "$461,570 COP"
    },
    {
      id: 4,
      img: <img className="card__image" src="/Airbnbn-Clone/fotos/Reference.jpg" alt="Picture1"/>,
      location: "Envigado, Colombia",
      distance: "235 kilómetros de distancia",
      dates: "8 - 14 de jul",
      price: "$461,570 COP"
    },
    {
      id: 5,
      img: <img className="card__image" src="/Airbnbn-Clone/fotos/Reference.jpg" alt="Picture1"/>,
      location: "Envigado, Colombia",
      distance: "235 kilómetros de distancia",
      dates: "8 - 14 de jul",
      price: "$461,570 COP"
    },
    {
      id: 6,
      img: <img className="card__image" src="/Airbnbn-Clone/fotos/Reference.jpg" alt="Picture1"/>,
      location: "Envigado, Colombia",
      distance: "235 kilómetros de distancia",
      dates: "8 - 14 de jul",
      price: "$461,570 COP"
    },
    {
      id: 7,
      img: <img className="card__image" src="/Airbnbn-Clone/fotos/Reference.jpg" alt="Picture1"/>,
      location: "Envigado, Colombia",
      distance: "235 kilómetros de distancia",
      dates: "8 - 14 de jul",
      price: "$461,570 COP"
    },
    {
      id: 7,
      img: <img className="card__image" src="/Airbnbn-Clone/fotos/Reference.jpg" alt="Picture1"/>,
      location: "Envigado, Colombia",
      distance: "235 kilómetros de distancia",
      dates: "8 - 14 de jul",
      price: "$461,570 COP"
    },
    {
      id: 8,
      img: <img className="card__image" src="/Airbnbn-Clone/fotos/Reference.jpg" alt="Picture1"/>,
      location: "Envigado, Colombia",
      distance: "235 kilómetros de distancia",
      dates: "8 - 14 de jul",
      price: "$461,570 COP"
    },
    {
      id: 8,
      img: <img className="card__image" src="/Airbnbn-Clone/fotos/Reference.jpg" alt="Picture1"/>,
      location: "Envigado, Colombia",
      distance: "235 kilómetros de distancia",
      dates: "8 - 14 de jul",
      price: "$461,570 COP"
    },
    {
      id: 8,
      img: <img className="card__image" src="/Airbnbn-Clone/fotos/Reference.jpg" alt="Picture1"/>,
      location: "Envigado, Colombia",
      distance: "235 kilómetros de distancia",
      dates: "8 - 14 de jul",
      price: "$461,570 COP"
    }
  ]
  return(
    <div>
        {
          spaces.map(space => (
            <main className="mainSection mainSection--queri-bgscreen">
            <div className="mainSection__card  mainSection__card--queri-bgscreen">
              <div key={space}  className="card__image-container">{spaces[0].img}</div>
              <div key={space}  className="card__location"><b>{spaces[0].location}</b></div>
              <div key={space}  className="card__distance">{spaces[0].distance}</div>
              <div key={space}  className="card__dates">{spaces[0].dates}</div>
              <div key={space}  className="card__price"><b>{spaces[0].price}</b> / night</div>
            </div>
            </main>
          ))
        }
    </div>
  )
}

export default MainSection
