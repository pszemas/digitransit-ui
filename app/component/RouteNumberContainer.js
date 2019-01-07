import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash/get';

import RouteNumber from './RouteNumber';

const getText = (route, config) => {
  const showAgency = get(config, 'agency.show', false);
  if (route.shortName) {
    return route.shortName;
  } else if (showAgency && route.agency) {
    return route.agency.name;
  }
  return '';
};

const RouteNumberContainer = (
  { className, route, isCallAgency, ...props },
  { config },
) =>
  route && (
    <RouteNumber
      className={className}
      isCallAgency={isCallAgency || route.type === 715}
      color={route.color ? `#${route.color}` : null}
      hasDisruption={props.hasDisruption}
      mode={route.mode}
      text={getText(route, config)}
      {...props}
    />
  );

RouteNumberContainer.propTypes = {
  route: PropTypes.object.isRequired,
  vertical: PropTypes.bool,
  className: PropTypes.string,
  hasDisruption: PropTypes.bool,
  fadeLong: PropTypes.bool,
};

RouteNumberContainer.defaultProps = {
  className: '',
};

RouteNumberContainer.contextTypes = {
  config: PropTypes.object.isRequired,
};

RouteNumberContainer.displayName = 'RouteNumberContainer';
export default RouteNumberContainer;
