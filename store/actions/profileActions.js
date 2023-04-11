export const updateUsername = (userName) => async (dispatch) => {

    const formdata = {
        userName: userName
    }

    if (userName !== 'ERROR') {
        try {
            const res = await fetch('/api/firebase/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'token': localStorage.getItem('TOKEN'),
                },
                body: JSON.stringify(formdata)
            })

            const data = await res.json()

            if (res.status === 401 || res.status === 500) {
                dispatch({
                    type: 'USER_AUTH_LOGIN_FAIL',
                    payload: err.message
                })
            } else {
                dispatch({
                    type: 'USER_AUTH_LOGIN_SUCCESS',
                    payload: data
                })
            }

        } catch (err) {
            dispatch({
                type: 'USER_AUTH_LOGIN_FAIL',
                payload: err.message
            })
        }
    } else {
        dispatch({
            type: 'USER_GITHUB_NOT_FOUND',
            payload: 'GITHUB ACCOUNT NOT FOUND'
        })
    }
}