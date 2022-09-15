// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Jose'
// };
import PropTypes from 'prop-types';

/* PROPERTIES ->    */
export const FirstApp = ( {title, subTitle} ) => {

  // console.log(props);
  
  return (
    <>
    <h1>{title}</h1>
        {/* <h1> { newMessage.title } </h1> */}
        <p>{subTitle}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
  }