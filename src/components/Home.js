import PropTypes from 'prop-types';

const Home = ({ title, text }) => (
  <section>
    <article>
      <h1>{title}</h1>
      <p>{text}</p>
    </article>
  </section>
);

Home.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

Home.defaultProps = {
  title: '',
  text: '',
};

export default Home;
