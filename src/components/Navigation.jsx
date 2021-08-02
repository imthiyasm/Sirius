import React from 'react';
import { NAVIGATION_LABELS } from '../constants';

const Navigation = () => (
  <nav className="navbar">
    <div className="container nav-elements">
      <ul>
        {
          Object.values(NAVIGATION_LABELS)?.map((val, index) => (
            <li key={index.toString()}><a href={`#nav${index + 1}`}>{val}</a></li>
          ))
        }
      </ul>
    </div>
  </nav >
)
export default Navigation;
