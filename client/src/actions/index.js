export const FILTRO = "FILTRO"

export const filtro = ({ materia, dia, hora }) => {
    return function (dispatch) {
        fetch(`http://localhost:3001/profe/?materia=${materia}&dia=${dia}&hora=${hora}`)
        .then(response => response.json())
        .then((data) => dispatch({type: FILTRO, payload: data}))
    }
}