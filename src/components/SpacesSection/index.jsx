import './style.scss'

function MainSection() {
  const spaces = [
    {
      id: 1,
      img: <img className="card__image" src="img/Spaces/1.jpg" alt="Picture1"/>,
      location: "Benalmadena, Spain",
      distance: "7,906 kilometers away",
      dates: "Oct 1 - ",
      price: "$70 usd"
    },
    {
      id: 2,
      img: <img className="card__image" src="img/Spaces/2.jpg" alt="Picture2"/>,
      location: "Bolton, New York, US",
      distance: "4,153 kilometers away",
      dates: "Jul 16 - 23",
      price: "$9,482 usd"
    },
    {
      id: 3,
      img: <img className="card__image" src="img/Spaces/3.jpg" alt="Picture3"/>,
      location: "Kilcolgan, Ireland",
      distance: "7,915 kilometers away",
      dates: "Sep 1 - 6",
      price: "$597 usd"
    },
    {
      id: 4,
      img: <img className="card__image" src="img/Spaces/4.jpg" alt="Picture4"/>,
      location: "Watermouth, near Ilfracombe, UK",
      distance: "8,184 kilometers away",
      dates: "Jul 29 - Aug 5",
      price: "$412 usd"
    },
    {
      id: 5,
      img: <img className="card__image" src="img/Spaces/5.jpg" alt="Picture5"/>,
      location: "Boyds, Maryland, US",
      distance: "3,6645 kilometers away",
      dates: "Jul 17 - 22",
      price: "$573usd"
    },
    {
      id: 6,
      img: <img className="card__image" src="img/Spaces/6.jpg" alt="Picture6"/>,
      location: "Dromcolliher, Ireland",
      distance: "7,883 kilometers away",
      dates: "Jul 17 - 22",
      price: "$2,525 usd"
    },
    {
      id: 7,
      img: <img className="card__image" src="img/Spaces/7.jpg" alt="Picture7"/>,
      location: "Ovens, Ireland",
      distance: "7,886 kilometers away",
      dates: "Jul 30 - Aug 4",
      price: "$1,262 usd"
    },
    {
      id: 8,
      img: <img className="card__image" src="img/Spaces/8.jpg" alt="Picture8"/>,
      location: "Kilkenny city, Ireland",
      distance: "7,990 kilometers away",
      dates: "Sep 3 - 8",
      price: "$778 usd"
    },
    {
      id: 9,
      img: <img className="card__image" src="img/Spaces/9.jpg" alt="Picture9"/>,
      location: "Irasburg, Vermont, US",
      distance: "4,297 kilometers away",
      dates: "Sep 3 - 8",
      price: "$915 usd"
    },
    {
      id: 10,
      img: <img className="card__image" src="img/Spaces/10.jpg" alt="Picture10"/>,
      location: "Vale of Avoca, Irelan",
      distance: "8,076 kilometers away",
      dates: "Oct 26 - Nov 1",
      price: "$184 usd"
    },
    {
      id: 11,
      img: <img className="card__image" src="img/Spaces/11.jpg" alt="Picture11"/>,
      location: "Bolton, New York, US",
      distance: "4,153 kilometers away",
      dates: "Jul 16 - 22",
      price: "$1,621 usd"
    },
    {
      id: 12,
      img: <img className="card__image" src="img/Spaces/12.jpg" alt="Picture12"/>,
      location: "Ortonvile, Minnesota, US",
      distance: "4,788 kilometers away",
      dates: "Jul 27 - Aug 1",
      price: "$132 usd"
    }
  ]
  return(
    <div>
        {
          spaces.map((space, index) => (
            <main className="mainSection mainSection--queri-bgscreen">
            <div className="mainSection__card  mainSection__card--queri-bgscreen">
              <div key={space}  className="card__image-container">{spaces[index].img}</div>
              <div key={space}  className="card__location"><b>{spaces[index].location}</b></div>
              <div key={space}  className="card__distance">{spaces[index].distance}</div>
              <div key={space}  className="card__dates">{spaces[index].dates}</div>
              <div key={space}  className="card__price"><b>{spaces[index].price}</b> / night</div>
            </div>
            </main>
          ))
        }
    </div>
  )
}

export default MainSection
