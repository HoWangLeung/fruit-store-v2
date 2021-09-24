import React from "react";
import { FormattedMessage } from "react-intl";
import { Link, useHistory } from "react-router-dom";
import "./Logo.scss";
export default function Logo() {
  let history = useHistory();
  const locale = history.location.pathname.substring(1, 3);
  return (
    <div className="store_logo">
      <div className="inner">
        <Link to={`/${locale}`}>
          <h2>
            <FormattedMessage id="app.title" />
          </h2>
        </Link>
      </div>
    </div>
  );
}
