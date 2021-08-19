import PropTypes from 'prop-types';

const Quote = ({ quote }) => (
  <section>
    <article>
      <p>{quote}</p>
    </article>
  </section>
);

Quote.propTypes = {
  quote: PropTypes.string,
};

Quote.defaultProps = {
  quote: '',
};

export default Quote;
