import './movie_card.css'
export const MovieCard = ({border, movie}) => {
    return (
        <div style={{border: border ? '2px solid green' : undefined}}>
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            </div>
    );
};