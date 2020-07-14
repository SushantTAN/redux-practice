import axios from 'axios';


export const increment = (n) =>{
    return {
        type: 'INCREMENT',
        payload: n
    }
}

export const decrement = () =>{
    return {
        type: 'DECREMENT'
    }
}

export const addel = () => {
    return {
        type: 'ADDEL'
    }
}

export const ax = (fetched) => {
    return {
        type: 'AXIOS',
        payload: fetched
    }
}

export const axi = () => {
    return (dispatch) => {
        axios.get('https://murmuring-sands-22620.herokuapp.com/image/uploadbase')
            .then(res => {
                dispatch(ax(res.data/*.map(images => ({name: images.imageName, url: images.imageData, id: images._id} ))*/));
            })
            .catch(err => console.log("error:" + err))        
    }
}

export const p = (fetched) => {
    return {
        type: 'AXIOSP',
        payload: fetched
    }
}

export const axip = ({ imageName, imageData }) => {
    return (dispatch) => {
        axios
          .post(`https://murmuring-sands-22620.herokuapp.com/image/uploadbase`, {
            imageName,
            imageData
          })
          .then(res => {
            dispatch(p(res.data));
            
          })
          .catch(err => console.log("error:" + err));

          
      };
}