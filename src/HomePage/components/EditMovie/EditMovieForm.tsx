import React from "react";
import './EditMovieForm.css'
import {useMoviesContext} from "../../../movies.context";
import {useModalContext} from "../../../modal.context";

 type MockedEditData = {
     original_title: string,
     data: string,
     url: string,
     popularity: number,
     genre: string,
     runtime: number
 }

export function EditMovieForm(props: MockedEditData) {
    const [state, setState] = React.useState({
        original_title: props.original_title,
        data: props.data,
        url: props.url,
        popularity: props.popularity,
        genre: props.genre,
        runtime: props.runtime,
    })

    const setField = (field: keyof typeof state) => (e: { target: { value: string; } }) => setState(prevState => ({
        ...prevState,
        [field]: e.target.value
    }))


    const moviesData = useMoviesContext();
    const contextData = useModalContext();

    return (
        <form className="edit-movie">
            <span className='edit-movie-title'>EDIT MOVIE</span>
            <div className='edit-movie-form-row'>
                <div className="edit-movie-form-column">
                    <div className='edit-movie-form-field'>
                        <label htmlFor={'movie-title'}>Title:
                        </label>
                        <input
                            id='movie-title'
                            type="text"
                            name="original_title"
                            value={state.original_title}
                            onChange={setField('original_title')}
                        />
                    </div>
                    <div className='edit-movie-form-field'>
                        <label>Release date:
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={state.data}
                            onChange={setField('data')}
                        />
                    </div>

                    <div className='edit-movie-form-field'>
                        <label>Movie url:
                        </label>
                        <input
                            type="text"
                            name="url"
                            value={state.url}
                            onChange={setField('url')}
                        />
                    </div>
                </div>
                <div className="edit-movie-form-column">

                    <div className='edit-movie-form-field'>
                        <label>Rating:
                        </label>
                        <input
                            type="number"
                            name="rating"
                            value={state.popularity}
                            onChange={setField('popularity')}
                        />
                    </div>
                    <div className='edit-movie-form-field'>
                        <label>Genre:
                        </label>
                        <input
                            type="text"
                            name="genre"
                            value={state.genre}
                            onChange={setField('genre')}
                        />
                    </div>
                    <div className='edit-movie-form-field'>
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
            <div className="edit-movie-form-row wide">
                <textarea name="overview" className='edit-movie-form-row-overview' placeholder='Movie description'/>
            </div>
            <div className="edit-movie-form-controls">
                <button type="reset" className="edit-movie-form-control" onClick={() => setState(props)}>Reset</button>
                <button type="submit" className="edit-movie-form-control filled" onClick={(e) => {
                    e.preventDefault();
                    moviesData.editMovie(state as any, contextData.index);
                    contextData.closeModal();
                }}>submit</button>
            </div>
        </form>
    )
}