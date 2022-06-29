import React from "react";
import './DeleteMovieForm.css'
import {useMoviesContext} from "../../../movies.context";
import {useModalContext} from "../../../modal.context";


export function DeleteMovieForm() {
    const moviesData = useMoviesContext();
    const contextData = useModalContext();

    return (
        <form className="delete-movie" method='POST'>
            <div className='delete-movie-title'>DELETE MOVIE</div>
            <div className='delete-movie-form-row'>
                <div>Are you sure you want to delete this movie?</div>
            </div>
            <div className="edit-movie-form-controls">
                <button type="submit" className="edit-movie-form-control filled" onClick={(e) =>
                {
                    e.preventDefault();
                    moviesData.deleteMovie(contextData.index);
                    contextData.closeModal();
                }}>Confirm</button>
            </div>
        </form>
    )
}