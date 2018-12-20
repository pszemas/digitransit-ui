import PropTypes from 'prop-types';
import React from 'react';
import Relay from 'react-relay/classic';
import cx from 'classnames';
import uniqBy from 'lodash/uniqBy';
import moment from 'moment';
import connectToStores from 'fluxible-addons-react/connectToStores';
import ExternalLink from './ExternalLink';
import { Link } from 'react-router';
import { FormattedMessage, intlShape } from 'react-intl';
import IconWithBigCaution from './IconWithBigCaution';

export const DisruptionsForStops = props => {
  let content = <div>No Disruptions</div>;
  const filteredRoutes = [];
  props.stop.stoptimes.forEach(stoptime =>
    stoptime.stop.routes.forEach(
      route =>
        route.alerts.length > 0 &&
        route.alerts.forEach(alert =>
          filteredRoutes.push({
            ...alert,
            gtfsId: route.gtfsId,
            longName: route.longName,
            mode: route.mode,
            shortName: route.shortName,
            headsign: stoptime.headsign,
          }),
        ),
    ),
  );
  if (filteredRoutes.length > 0) {
    const uniqueAlerts = uniqBy(filteredRoutes, 'alertDescriptionText');
    console.log(uniqueAlerts);

    content = uniqueAlerts.map(route => (
      <div className="route-alert-container" key={route.longName}>
        <div className="alert-left-panel">
          <IconWithBigCaution
            color={route.color}
            className={route.mode.toLowerCase()}
            img={`icon-icon_${route.mode.toLowerCase()}`}
          />
        </div>
        <div className="alert-right-panel">
          <div className="alert-topbar">
            <div className="alert-shortName">
              <span className={route.mode.toLowerCase()}>
                {route.shortName}
              </span>
            </div>
            <div className="alert-link">
              <ExternalLink
                className="itinerary-ticket-external-link"
                href="http://hsl.fi"
              >
                <FormattedMessage id="hsl-fi" defaultMessage="HSL.fi" />
              </ExternalLink>
            </div>
          </div>
          <div className="alert-date">
            Tänään klo{' '}
            {`${moment(route.effectiveStartDate * 1000).format('HH:mm')}
            -
            ${moment(route.effectiveEndDate * 1000).format('HH:mm')}`}
          </div>
          <div className="alert-details">{route.alertDescriptionText}</div>
        </div>
      </div>
    ));
  }

  return (
    <React.Fragment>
      <div className={cx('departure-list stop-page momentum-scroll')}>
        {content}
      </div>
    </React.Fragment>
  );
};

DisruptionsForStops.propTypes = {
  stop: PropTypes.shape({
    url: PropTypes.string,
    stoptimes: PropTypes.arrayOf(
      PropTypes.shape({
        headsign: PropTypes.string,
        stop: PropTypes.arrayOf(
          PropTypes.shape({
            routes: PropTypes.arrayOf(
              PropTypes.shape({
                alerts: PropTypes.arrayOf(
                  PropTypes.shape({
                    alertHeaderText: PropTypes.string,
                    alertDescriptionText: PropTypes.string,
                    alertDescriptionTextTranslations: PropTypes.string,
                    alertUrl: PropTypes.string,
                    agency: PropTypes.string,
                    effectiveStartDate: PropTypes.string,
                    effectiveEndDate: PropTypes.string,
                  }),
                ),
                gtfsId: PropTypes.string,
                longName: PropTypes.string,
                mode: PropTypes.string,
                shortName: PropTypes.string,
                color: PropTypes.string,
              }),
            ),
          }),
        ),
      }),
    ),
  }).isRequired,
};

const withRelayContainer = Relay.createContainer(
  connectToStores(DisruptionsForStops, ['TimeStore'], ({ getStore }) => ({
    currentTime: getStore('TimeStore')
      .getCurrentTime()
      .unix(),
  })),
  {
    fragments: {
      stop: () => Relay.QL`
      fragment on Stop {
        url
        stoptimes: stoptimesWithoutPatterns(startTime: $startTime, timeRange: $timeRange, numberOfDepartures: $numberOfDepartures) {
          headsign
          stop {
            routes {
              shortName
              longName
              mode
              color
              gtfsId
              alerts {
                alertHeaderText
                alertDescriptionText
                alertDescriptionTextTranslations
                alertUrl
                agency
                effectiveStartDate
                effectiveEndDate
              }
            }
          }
        }
      }
    `,
    },

    initialVariables: {
      startTime: String(0),
      timeRange: 3600 * 12,
      numberOfDepartures: 100,
    },
  },
);

export { withRelayContainer as default, DisruptionsForStops as Component };
