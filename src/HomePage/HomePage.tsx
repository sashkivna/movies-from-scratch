import React, {useEffect} from 'react';
import {MoviesList} from "./components/MoviesList/MoviesList";
import Scroll from './components/Scroll';
import {Search} from "./components/Search/Search";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Fotter";
import {useModalContext} from "../modal.context";
import Popup from "./components/Popup/Popup";
import {EditMovieForm} from "./components/EditMovie/EditMovieForm";
import {DeleteMovieForm} from "./components/DeleteMovie/DeleteMovieForm";
import {AddMovieForm} from "./components/AddMovie/AddMovieForm";
import {useMoviesContext} from "../movies.context";
import {mockedMovies, Movie} from "../Mocks";
import {MovieDetails} from "./components/MovieDetails/MovieDetails";

const appStaticData = {
    title: 'Find your movie',
    logo: 'Netflix-logo',
}

export function HomePage() {
    const {moviesList, setMovies} = useMoviesContext();
    const [activeCard, setActiveCard] = React.useState<Movie | null>(null)

    useEffect(() =>{
        setMovies(mockedMovies);
    }, [])

    const contextData = useModalContext();

    function toggleSearch() {
        return () => setActiveCard(null)
    }

    return(
        <>
            {activeCard ? <MovieDetails
                movie={activeCard}
                onSearchToggle={toggleSearch}
            /> : <Search title={appStaticData.title} logo={appStaticData.logo}/>}
            <Header/>
            <Scroll>
                <MoviesList onCardClick={setActiveCard} movies={moviesList}/>
            </Scroll>
            {contextData.index && contextData.operation === 'edit' && <Popup
                mode={'full'}
                content={<EditMovieForm
                    original_title={moviesList[contextData.index].original_title}
                    data={'02-03-2022'}
                    genre={'comedy'}
                    popularity={moviesList[contextData.index].popularity}
                    runtime={68}
                    url={'http://localhost'}/>}
                handleClose={contextData.closeModal}
            />}
            {contextData.index && contextData.operation === 'delete' && <Popup
                mode={'full'}
                content={<DeleteMovieForm/>}
                handleClose={contextData.closeModal}
            />}

            {contextData.index && contextData.operation === 'add' && <Popup
                mode={'full'}
                content={<AddMovieForm/>}
                handleClose={contextData.closeModal}
            />}
            <Footer/>
        </>
    )}