import React from 'react';
import Button from '../commonComponents/button';

const SubscriptionCardsMain = () => {
    return (
        <div class="plan">
            <div class="inner">
                <span class="pricing">
                    <span>
                        $49 <small>/ m</small>
                    </span>
                </span>
                <p class="title">Professional</p>
                <p class="info">This plan is for those who have a team already and running a large business.</p>
                <ul class="features">
                    <li>
                        <span class="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                        </span>
                        <span><strong>20</strong> team members</span>
                    </li>
                    <li>
                        <span class="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                        </span>
                        <span>Plan <strong>team meetings</strong></span>
                    </li>
                    <li>
                        <span class="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                        </span>
                        <span>File sharing</span>
                    </li>
                </ul>
                <div class="action">
                    <Button text="Choose plan" className="default-button" />
                </div>
            </div>
        </div>
        
    );
}

export default SubscriptionCardsMain;