export const FILTRO = "FILTRO"

export const filtro = ({ materia, dia, hora }) => {
    return function (dispatch) {
        fetch(`https://proff-production.up.railway.app/profe/?materia=${materia}&dia=${dia}&hora=${hora}`)
        .then(response => response.json())
        .then((data) => dispatch({type: FILTRO, payload: data}))
    }
}