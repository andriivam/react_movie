import './movie_card.css'


export const MovieList = ({ children, flexDirection }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection
        }}>

            {children}
        </div>
    )
};
