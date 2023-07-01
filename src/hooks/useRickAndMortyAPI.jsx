import { useEffect, useReducer } from 'react';

const initialState = {
    data: null,
    loading: true,
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

const useRickAndMortyAPI = (url, extra = false, type = 0) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                if (extra) {
                    let urlDetail = " "
        
                    switch (type) {
                        case 1:{
                            urlDetail = data.episode
                            break
                        }
                           
                        case 2:{
                            urlDetail = data.characters
                            break
                        }
                            
                        case 3:{
                            urlDetail = data.residents
                            break
                        }
                           
                    }

                    const episodesResponse = await Promise.all(
                        urlDetail.map(url => fetch(url))
                    );
                    const episodesData = await Promise.all(
                        episodesResponse.map(response => response.json())
                    );
                    data.details = episodesData;

                }
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR', payload: error.message });
            }
        };

        fetchData();
    }, [url,extra,type]);

    return state;
};

export default useRickAndMortyAPI;