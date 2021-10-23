import React from 'react';
import PropTypes from 'prop-types'
import {Btn} from './FeedBackOptions.styled'
const FeedBackOpt = ({onFeedback,btnNames,reset}) => {
    return (
        <>
        
            {btnNames.map(btn => (
                <Btn
                    key={btn}
                    type="button"
                    name={btn}
                    onClick={ () => onFeedback (btn)}
                >
                    {btn}
                </Btn>
            ))}
    
            
        </>
    );
}

FeedBackOpt.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    btnNames:PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default FeedBackOpt;