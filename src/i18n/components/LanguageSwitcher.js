import React from 'react';
 
import { NavLink, useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';
// import { list, link } from 'theme';
import { appStrings } from '..';

const AppLanguage = {
    English : 'en',
    Chinese : 'zh',
  }
export const LanguageSwitcher = () => {
    const { pathname } = useLocation();
    const { messages } = useIntl();

    function getMatchingRoute(language) {
        /**
         * Get the key of the route the user is currently on
         */
        const route = pathname.substring(3); // remove local part '/en' from the pathname /en/contact
        const routeKey = Object.keys(messages).find(key => messages[key] === route);

        /**
         * Find the matching route for the new language
         */
        const matchingRoute = appStrings[language][routeKey];

        /**
         * Return localized route
         */
        return `/${language}` + matchingRoute;
    }

    return (
        <ul  >
            {Object.keys(AppLanguage).map((lang) => (
                <li key={lang} >
                    <NavLink
                   
                        to={getMatchingRoute(AppLanguage[lang])}
                    >
                        {AppLanguage[lang]}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};