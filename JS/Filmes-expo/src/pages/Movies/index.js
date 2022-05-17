import React, {useEffect, useState} from 'react';

import {
    Container,
    ListMovies,

} from './styles';

import Header from '../../components/Header';
import {getMoviesSave, deleteMovie} from '../../utils/storage';
import FavoriteItem from '../../components/FavoriteItem';
import {useNavigation, useIsFocused} from '@react-navigation/native';

export default function Movies(){

    const navitagion = useNavigation();
    const isFocused = useIsFocused();

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        let isActive = true;

        async function getFavoriteMovies(){
            const result = await getMoviesSave('@primereact');

            if(isActive){
                setMovies(result);
            }
        }

        if(isActive){
            getFavoriteMovies();
        }

        return () => {
            isActive = false;
        }

    }, [isFocused]);

    async function handleDelete(id){
        const result = await deleteMovie(id);
        setMovies(result);
    }

    function navigateDetailPages(item){
        navitagion.navigate('Detail', {id: item.id})
    }

    return(
        <Container>
            <Header
                title='Meus filmes'
            />
            <ListMovies
                showsVerticalScrollIndicator={false}
                data={movies}
                keyExtractor={ item => String(item.id) }
                renderItem={({item}) => (
                    <FavoriteItem
                        data={item}
                        deleteMovie={handleDelete}
                        navigatePage={ () => navigateDetailPages(item)}
                    />
                )}
            />
        </Container>
    );
};