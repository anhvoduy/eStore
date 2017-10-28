import React from 'react';

/**
 * think about refractor code from component to stateless component if we don't need state
 */
export const SampleHeader = (props) => {
    return (
        <nav className='navbar navbar-default'>
            <div className='container'>
                <div className='navbar-header'>
                    <ul className='nav navbar-nav'>
                        <li><a href='#'>{props.homeLink}</a></li>
                        <li><a href='#'>{props.aboutLink}</a></li>
                    </ul>
                </div> 
            </div>
        </nav>
    );    
}
