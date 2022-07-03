import React from "react";
import './AddMovieForm.css'
import {useMoviesContext} from "../../../movies.context";
import {useModalContext} from "../../../modal.context";

export interface InnerState {
    original_title: string,
    data: string,
    url: string,
    popularity: number,
    genre: string,
    runtime: number,
}

const innerState: InnerState = {
    original_title: "",
    data: "",
    url: "",
    popularity: 0,
    genre: "",
    runtime: 100,
}

export function AddMovieForm() {
    const [state, setState] = React.useState(innerState)

    const setField = (field: keyof typeof state) => (e: React.ChangeEvent<HTMLInputElement>) => setState(prevState => ({
        ...prevState,
        [field]: e.target.value
    }));

    const moviesData = useMoviesContext();
    const contextData = useModalContext();

    return (
        <form className="add-movie" method='POST'>
            <span className='add-movie-title'>ADD MOVIE</span>
            <div className='add-movie-form-row'>
                <div className="add-movie-form-column">
                    <div className='add-movie-form-field'>
                        <label htmlFor={'movie-title'}>Title:
                        </label>
                        <input
                            placeholder='Add your movie'
                            id='movie-title'
                            type="text"
                            name="title"
                            value={state.original_title}
                            onChange={setField('original_title')}
                        />
                    </div>
                    <div className='add-movie-form-field'>
                        <label>Release date:
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={state.data}
                            onChange={setField('data')}
                        />
                    </div>

                    <div className='add-movie-form-field'>
                        <label>Movie url:
                        </label>
                        <input
                            placeholder='https://'
                            type="text"
                            name="url"
                            value={state.url}
                            onChange={setField('url')}
                        />
                    </div>
                </div>
                <div className="add-movie-form-column">

                    <div className='add-movie-form-field'>
                        <label>Rating:
                        </label>
                        <input
                            type="number"
                            name="rating"
                            value={state.popularity}
                            onChange={setField('popularity')}
                        />
                    </div>
                    <div className='add-movie-form-field'>
                        <label>Genre:
                        </label>
                        <input
                            placeholder='Add genre'
                            type="text"
                            name="genre"
                            value={state.genre}
                            onChange={setField('genre')}
                        />
                    </div>
                    <div className='add-movie-form-field'>
                        <label>Runtime:
                        </label>
                        <input
                            type="number"
                            name="runtime"
                            value={state.runtime}
                            onChange={setField('runtime')}
                        />
                    </div>
                </div>
            </div>
            <div className="add-movie-form-row wide">
                <textarea name="overview" className='add-movie-form-row-overview' placeholder='Movie description'/>
            </div>
            <div className="add-movie-form-controls">
                <button type="reset" className="add-movie-form-control"
                        onClick={() => setState(innerState)}>Reset</button>
                <button type="submit" className="add-movie-form-control filled"
                        onClick={(e) => {
                            e.preventDefault();
                            moviesData.addMovie(state);
                            contextData.closeModal();
                        }}>submit</button>
            </div>
        </form>
    )
}