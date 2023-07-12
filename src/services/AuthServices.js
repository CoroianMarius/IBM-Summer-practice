import axios from 'axios'

export default {
    
    //_____________________________Logare_______________________________
    login: async (user) => {
        try {
          const res = await axios.post('http://localhost:5000/user/login', user, {
            withCredentials: true,
          });
          return res.data;
        } catch (error) {
          console.error(error);
          return { isAuthenticated: false, user: { username: '', role: '' } };
        }
      },
    





    //_____________________________Register________________________________________

    register: async (user) => {
        const res = await fetch('http://localhost:5000/user/register', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (res.status !== 401)
            return res.json().then(data => data)

        else
            return { isAuthenticated: false, user: { username: "", role: "" } }
    },





    //_____________________________Logout__________________________________________
    logout: async () => {
      try {
        const res = await fetch('http://localhost:5000/user/logout',{credentials: 'include'});
        const data = await res.json();
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    







    //_____________________________Este authentificat_______________________________
     isAuthenticated:  () => {
       return fetch('http://localhost:5000/user/authenticated',{credentials: 'include'})
            .then(res => {
                if (res.status !== 401)
                    return res.json().then(data => data)
                else
                    return { isAuthenticated: false, user: { username: "", role: "" } }
            })
     }
}






   