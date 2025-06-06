import React, { useState, useEffect } from 'react';
import ACDetailCard from './acDetailCard';
import NewAcForm from './newAcForm';
import '../../../src/index.css';
import { api } from '../../api/config';

const MainArea = () => {
    const [activeTab, setActiveTab] = useState('listedAC');
    const [listings, setListings] = useState([]);
    const [myListings, setMyListings] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Helper function to get user ID from token
    const getUserIdFromToken = (token) => {
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const payload = JSON.parse(window.atob(base64));
            return payload.id;
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    };

    // Fetch all AC listings
    const fetchListings = async () => {
        setLoading(true);
        setError('');
        try {
            const data = await api.get('/api/ac-listings');
            setListings(data);
        } catch (error) {
            console.error('Fetch listings error:', error);
            setError('Failed to fetch listings. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Fetch user's AC listings
    const fetchMyListings = async () => {
        setLoading(true);
        setError('');
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('Please login to view your listings');
                return;
            }

            const userId = getUserIdFromToken(token);
            if (!userId) {
                setError('Invalid authentication token');
                return;
            }

            const data = await api.get(`/api/ac-listings/user/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setMyListings(data);
        } catch (error) {
            console.error('Fetch my listings error:', error);
            setError('Failed to fetch your listings. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Fetch data when component mounts or when activeTab changes
    useEffect(() => {
        if (activeTab === 'listedAC') {
            fetchListings();
        } else if (activeTab === 'myListedAC') {
            fetchMyListings();
        }
    }, [activeTab]);

    return (
        <div className="old-ac-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div
                    className={`sidebar-item ${activeTab === 'listedAC' ? 'active' : ''}`}
                    onClick={() => setActiveTab('listedAC')}
                >
                    Listed ACs
                </div>
                <div
                    className={`sidebar-item ${activeTab === 'myListedAC' ? 'active' : ''}`}
                    onClick={() => setActiveTab('myListedAC')}
                >
                    My Listed ACs
                </div>
            </div>

            {/* Content Area */}
            <div className="content-area">
                {error && (
                    <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>
                        {error}
                    </div>
                )}
                
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                        Loading...
                    </div>
                ) : (
                    <>
                        {activeTab === 'listedAC' && (
                            <div>
                                {listings.length === 0 ? (
                                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                                        No AC listings available
                                    </div>
                                ) : (
                                    listings.map(listing => (
                                        <ACDetailCard key={listing.id} listing={listing} />
                                    ))
                                )}
                            </div>
                        )}

                        {activeTab === 'myListedAC' && (
                            <div>
                                <NewAcForm onSubmitSuccess={fetchMyListings} />
                                <div style={{ marginTop: '2rem' }}>
                                    <h2>Your Listed ACs</h2>
                                    {myListings.length === 0 ? (
                                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                                            You haven't listed any ACs yet
                                        </div>
                                    ) : (
                                        myListings.map(listing => (
                                            <ACDetailCard key={listing.id} listing={listing} isOwner={true} />
                                        ))
                                    )}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default MainArea;