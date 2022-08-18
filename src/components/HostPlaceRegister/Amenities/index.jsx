import { Link } from 'react-router-dom';
import './styles.scss';

const Amenities = () => (
  <div>
    <div className="form__header4">
      <div className="header__logo">
        <Link to="/">
          <img
            className="logo__img"
            src="img/LogoIcon/White.png"
            alt="airbnbLogo"
          />
        </Link>
      </div>
      <div className="header__help-container4">
        <button className="header__help" type="button">
          Help
        </button>
        <button className="header__save" type="button">
          Save and exit
        </button>
      </div>
    </div>
    <div className="container__question4">
      <h1 className="question__title">
        Let guest know what your place has to offer
      </h1>
    </div>
    <div className="container__options-fixed4">
      <div className="container__options-scroll4">
        <div className="addition__question">
          <h2 className="question__addtitle">
            Kitchen
          </h2>
        </div>

        <div className="add_included-options">
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006635/images/Amenities/Hoven_mzvkor.png"
                alt="Hoven"
              />
            </div>
            <h2 className="option__card-title3">Hoven</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006634/images/Amenities/Refrigerator_lkbpqz.png"
                alt="Refrigerator"
              />
            </div>
            <h2 className="option__card-title3">Refrigerator</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006635/images/Amenities/CookingBasivs_wuxrxf.png"
                alt="CookingBasics"
              />
            </div>
            <h2 className="option__card-title3">Cooking basics</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006635/images/Amenities/DishesAndSilverware_nbcz9h.png"
                alt="DishesAndSilverware"
              />
            </div>
            <h2 className="option__card-title3">Dishes and silverware</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006634/images/Amenities/Stove_vmxdxx.png"
                alt="Stove"
              />
            </div>
            <h2 className="option__card-title3">Stove</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006634/images/Amenities/RiceMaker_dmg0tc.png"
                alt="RiceMaker"
              />
            </div>
            <h2 className="option__card-title3">Rice maker</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006635/images/Amenities/DiningTable_po4j1x.png"
                alt="DiningTable"
              />
            </div>
            <h2 className="option__card-title3">Dining table</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006634/images/Amenities/OutdoorDiningArea_fj9dsz.png"
                alt="OutdoorDiningArea"
              />
            </div>
            <h2 className="option__card-title3">Outdoor dining area</h2>
          </button>
        </div>

        <div className="addition__question">
          <h2 className="question__addtitle">
            Bathroom
          </h2>
        </div>
        <div className="add_included-options">
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006634/images/Amenities/Soap_fg3fxk.png"
                alt="BodySoap"
              />
            </div>
            <h2 className="option__card-title3">Body soap</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006634/images/Amenities/Shampoo_vpramj.png"
                alt="Shampoo"
              />
            </div>
            <h2 className="option__card-title3">Shampoo</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006634/images/Amenities/ToiletPaper_rxtzhr.png"
                alt="ToiletPaper"
              />
            </div>
            <h2 className="option__card-title3">Toilet paper</h2>
          </button>
        </div>

        <div className="addition__question">
          <h2 className="question__addtitle">
            Bedroom and laundry
          </h2>
        </div>
        <div className="add_included-options">
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006635/images/Amenities/Towel_zpnay6.png"
                alt="Towels"
              />
            </div>
            <h2 className="option__card-title3">Towels</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660008093/images/Amenities/BedSheet_jbef2i.png"
                alt="BedSheet"
              />
            </div>
            <h2 className="option__card-title3">Bed Sheets</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006634/images/Amenities/Pillow_xugf4j.png"
                alt="Pillow"
              />
            </div>
            <h2 className="option__card-title3">Pillows</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660008093/images/Amenities/Blanket_hkfld4.png"
                alt="Blankets"
              />
            </div>
            <h2 className="option__card-title3">Blankets</h2>
          </button>
        </div>

        <div className="addition__question">
          <h2 className="question__addtitle">
            Facilities
          </h2>
        </div>
        <div className="add_included-options">
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006634/images/Amenities/PrivatePool_svqtcc.png"
                alt="PrivatePool"
              />
            </div>
            <h2 className="option__card-title3">Private pool</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006634/images/Amenities/PrivateHotTub_dgoilc.png"
                alt="PrivateHotTub"
              />
            </div>
            <h2 className="option__card-title3">Private hot tub</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660008437/images/Amenities/BuildingStaff_uvuuls.png"
                alt="BuildingStaff"
              />
            </div>
            <h2 className="option__card-title3">Building staff</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006635/images/Amenities/BBQGrill_kfs4yi.png"
                alt="BBQGrill"
              />
            </div>
            <h2 className="option__card-title3">BBQ grill</h2>
          </button>
        </div>

        <div className="addition__question">
          <h2 className="question__addtitle">
            Entertainment
          </h2>
        </div>
        <div className="add_included-options">
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006635/images/Amenities/WiFi_tpjfzo.png"
                alt="WiFi"
              />
            </div>
            <h2 className="option__card-title3">Wifi</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006635/images/Amenities/TV_mp0ov9.png"
                alt="TV"
              />
            </div>
            <h2 className="option__card-title3">TV</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006634/images/Amenities/Netflix_wvfgvx.png"
                alt="Netflix"
              />
            </div>
            <h2 className="option__card-title3">Netflix</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660006635/images/Amenities/VideoGameConsole_anoidd.png"
                alt="VideoGameConsole"
              />
            </div>
            <h2 className="option__card-title3"> VideoGame Console</h2>
          </button>
        </div>
      </div>
    </div>
    <div className="container__button-step">
      <div className="progress4" />
      <Link to="/FloorPlan">
        <button className="button__backstep" type="button">
          Back
        </button>
      </Link>
      <Link to="/Images">
        <button className="button__nextstep" type="button">
          Next
        </button>
      </Link>
    </div>
  </div>
);

export default Amenities;
