// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Jose'
// };
import PropTypes from 'prop-types';

/* PROPERTIES ->    */
export const FirstApp = ( {title, subTitle, name} ) => {

  // console.log(props);
  
  return (
    <>
    <h1>{title}</h1>
        {/* <h1> { newMessage.title } </h1> */}
        <p>{subTitle}</p>
        <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
  }

FirstApp.defaultProps = {
  name: 'José Luis Segura',
  subTitle: 'No hay subtítulo',
  title: 'No hay ningún título',
}