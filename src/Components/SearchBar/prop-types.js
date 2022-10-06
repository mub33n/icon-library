import PropTypes from 'prop-types';

export const propTypes = {
  setSearchValue: PropTypes.func.isRequired,
  partiallyResetSearch: PropTypes.func.isRequired,
  resetSearch: PropTypes.func.isRequired,
  preserveSearchString: PropTypes.bool.isRequired,
  triggerToast: PropTypes.func.isRequired,
  beginSearch: PropTypes.bool.isRequired,
};

export const defaultProps = {};

export default propTypes;
