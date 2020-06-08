import React from 'react';
import PropTypes from 'prop-types';

const PaginationTotal = (props) => {
  if (props.paginationTotalRenderer) {
    return props.paginationTotalRenderer(props.from, props.to, props.dataSize);
  }
  return (
    <span className="react-bootstrap-table-pagination-total">
      &nbsp;当前显示从 { props.from } 到&nbsp;{ props.to }条，总共有&nbsp;{ props.dataSize }条数据
    </span>
  );
};

PaginationTotal.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
  dataSize: PropTypes.number.isRequired,
  paginationTotalRenderer: PropTypes.func
};

PaginationTotal.defaultProps = {
  paginationTotalRenderer: undefined
};

export default PaginationTotal;
