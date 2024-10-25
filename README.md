PETICIONES:

    USUARIO:
        
    POST/Crear usuario:
        URL/api/user/
        BODY
        {
        	"name": "Nombre",
        	"email": "EmAil@Gmail.COM",
        	"password": "contraseña"
            "phone": 123456789 /* OPCIONAL */
        }

        RESPUESTA:
        {
        	"userInfo": {
        		"email": "francoasdasd@gmail.com",
        		"name": "Francasdasd",
        		"isBan": false,
        		"phone": null
        	},
        	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyYW5jb2FzZGFzZEBnbWFpbC5jb20iLCJuYW1lIjoiRnJhbmNhc2Rhc2QiLCJpc0JhbiI6ZmFsc2UsInBob25lIjpudWxsLCJpYXQiOjE3Mjk4ODY1NTYsImV4cCI6MTcyOTg5MDE1Nn0.IlUMIoIcGkq7wA_eWFJXqGBjyep2S814ZSgxCRN5zRg"
        }

    GET/Token/AutoLogin:
        URL/api/user/token/

        AUTH BEARER *token*

        RESPUESTA:
        {
        	"email": "franco@gmail.com",
        	"name": "tefi",
        	"phone": 123123123,
        	"isBan": false,
        	"iat": 1729886368,
        	"exp": 1730015968
        }

    PUT/Editar Usuario
        URL/api/user/:email *params*
        BODY
        {
	        "phone":123123123
        }
        Se pasa la propiedad que se quiera cambiar, propiedades permitidas:
            {phone, name, password}

        RESPUESTA:
        {
	        "message": "Usuario actualizado correctamente",
	        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyYW5jb0BnbWFpbC5jb20iLCJuYW1lIjoidGVmaSIsInBob25lIjoxMTM2MDc0MDQ0LCJpc0JhbiI6ZmFsc2UsImlhdCI6MTcyOTg4ODgxMywiZXhwIjoxNzMwMDE4NDEzfQ.m4QWQos5N5qWxM1KUyN4On_WgZ14dLqhyk3U-9QLEyk"
        }
    

    


