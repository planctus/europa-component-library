import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '@ecl/ec-react-component-button';
import Footer from '@ecl/ec-react-component-footer';
import Link from '@ecl/ec-react-component-link';

const FeedbackForm = ({ footer }) => (
  <Fragment>
    <section className="ecl-u-bg-grey-10 ecl-u-type-m">
      <div className="ecl-container ecl-u-pv-m ecl-u-d-flex ecl-u-flex-wrap ecl-u-align-items-center">
        <span className="ecl-u-flex-basis-100 ecl-u-flex-basis-md-auto">
          Was this page useful?
          <Button className="ecl-u-ml-s" label="Yes" variant="secondary" />
          <Button className="ecl-u-ml-xs" label="No" variant="secondary" />
        </span>

        <span className="ecl-u-ml-md-auto">
          <Link
            href="/example"
            label="Is there an issue with this page?"
            icon={{
              shape: 'ui--corner-arrow',
              transform: 'rotate-180',
              size: 'fluid',
            }}
          />
        </span>
      </div>
    </section>
    <Footer {...footer} />
  </Fragment>
);

FeedbackForm.propTypes = {
  footer: PropTypes.shape(Footer.propTypes),
};

FeedbackForm.defaultProps = {
  footer: {},
};

export default FeedbackForm;