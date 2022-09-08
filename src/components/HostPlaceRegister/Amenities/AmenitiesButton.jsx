import PropTypes from 'prop-types';

const AmenitiesButton = ({ data }) => {
  const {
    kitchen,
    bathroom,
    bedroomAndLaundry,
    facilities,
    entertaiment,
  } = data;
  console.log('🚀 ~ file: AmenitiesButton.jsx ~ line 13 ~ AmenitiesButton ~ entertaiment', entertaiment);
  console.log('🚀 ~ file: AmenitiesButton.jsx ~ line 13 ~ AmenitiesButton ~ facilities', facilities);
  console.log('🚀 ~ file: AmenitiesButton.jsx ~ line 13 ~ AmenitiesButton ~ bedroomAndLaudry', bedroomAndLaundry);
  console.log('🚀 ~ file: AmenitiesButton.jsx ~ line 13 ~ AmenitiesButton ~ bathroom', bathroom);
  console.log('🚀 ~ file: AmenitiesButton.jsx ~ line 13 ~ AmenitiesButton ~ kitchen', kitchen);
  return (
    // <main>
    //   <section>
    //     <h2>Kitchen</h2>
    //     <article>
    //       <p>{kitchen.oven.title}</p>
    //       <div>
    //         <img src={kitchen.oven.icon} alt={kitchen.oven.title} />
    //       </div>
    //     </article>
    //   </section>
    // </main>
    <div>hola</div>
  );
};

AmenitiesButton.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default AmenitiesButton;
