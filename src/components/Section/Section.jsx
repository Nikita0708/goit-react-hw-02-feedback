import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
    <section>
        <h1>{title}</h1>
        {children }
    </section>
)

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};