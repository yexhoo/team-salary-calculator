# Team Salary Calculator
Servicio que permite calcular el salario de uno o varios equipos de futbol. Es posible tener distintas metas de goles por cada equipo o compartir una misma meta de goles. El sueldo de los jugadores de un equipo de futbol se compone de dos partes un **sueldo fijo** y un **bono variable**, la suma de estas dos partes es el sueldo de un jugador. El bono variable se compone de dos partes **meta de goles individual** y **meta de goles por equipo** cada una tiene un peso de **50%**.

## ¿Cómo se calculan los alcances de meta y bonos?

La meta individual de goles por jugador depende del nivel que tenga asignado:

| Nivel    |Goles/mes|
|----------|---------|
| A        |     5   |
| B        |    10   |
| C        |    15   |
| Cuauh    |    20   |


**Ejemplo:** Los jugadores Juan, Pedro, Martín y Luis anotaron así durante el mes:

|Jugador| Nivel |Goles anotados en el mes/mínimo requerido|
|------ |-------|-----------------------------------------|
|Juan   | A     |     6/5                                 |
|Pedro  | B     |    7/10                                 |
|Martin | C     |    16/15                                |
|Luis   | Cuauh |    19/20                                |
|total  |       |    48/50                                |


* En el bono por equipo tendrían un alcance de 96%.
* Luis tendría un alcance individual de 95% para un alcance total de 95.5%
* El suelo fijo de Luis es de 50,000.00 y su bono es de 10,000.00
* Por lo que su sueldo final será $59,550.00

## Estructura

```javascript
// Ejemplo entrada JSON.
{
    "metas": [
        {
            "nombre_meta": "ganadores",
            "meta_de_goles": [
                { "nivel_meta":"A","numero_goles": 5 },
                { "nivel_meta":"B","numero_goles": 10 },
                { "nivel_meta":"C","numero_goles": 15 },
                { "nivel_meta":"Cuauh","numero_goles": 20 }
            ]
        },
        {
            "nombre_meta": "perdedores",
            "meta_de_goles": [
                { "nivel_meta":"X","numero_goles": 1 },
                { "nivel_meta":"Y","numero_goles": 2 },
                { "nivel_meta":"Alan Pulido","numero_goles": 3 }
            ]
        }
    ],
    "equipos": [
        {
            "nombre_equipo": "Club America",
            "meta_equipo": "ganadores",
            "jugadores" : [
                {
                    "nombre_jugador": "Luis",
                    "nivel_jugador": "Cuauh",
                    "goles_jugador": 20,
                    "sueldo_jugador": 50000,
                    "bono_jugador": 10000
                },
                {
                    "nombre_jugador": "Raul",
                    "nivel_jugador": "A",
                    "goles_jugador": 3,
                    "sueldo_jugador": 40000,
                    "bono_jugador": 10000
                }
            ]
        },
        {
            "nombre_equipo": "Chivitas",
            "meta_equipo": "perdedores",
            "jugadores" : [
                {
                    "nombre_jugador": "Arturo",
                    "nivel_jugador": "X",
                    "goles_jugador": 1,
                    "sueldo_jugador": 2000,
                    "bono_jugador": 1000
                },
                {
                    "nombre_jugador": "Arturo",
                    "nivel_jugador": "Y",
                    "goles_jugador": 2,
                    "sueldo_jugador": 3000,
                    "bono_jugador": 1000
                },
                {
                    "nombre_jugador": "Arturo",
                    "nivel_jugador": "Alan Pulido",
                    "goles_jugador": 3,
                    "sueldo_jugador": 5000,
                    "bono_jugador": 1000
                }
            ]
        }
    ]
}
```

```javascript
// Ejemplo salida JSON
{
    "metas": [
        {
            "nombre_meta": "ganadores",
            "meta_de_goles": [
                {
                    "nivel_meta": "A",
                    "numero_goles": 5
                },
                {
                    "nivel_meta": "B",
                    "numero_goles": 10
                },
                {
                    "nivel_meta": "C",
                    "numero_goles": 15
                },
                {
                    "nivel_meta": "Cuauh",
                    "numero_goles": 20
                }
            ]
        },
        {
            "nombre_meta": "perdedores",
            "meta_de_goles": [
                {
                    "nivel_meta": "X",
                    "numero_goles": 1
                },
                {
                    "nivel_meta": "Y",
                    "numero_goles": 2
                },
                {
                    "nivel_meta": "Alan Pulido",
                    "numero_goles": 3
                }
            ]
        }
    ],
    "equipos": [
        {
            "nombre_equipo": "Club America",
            "meta_equipo": "ganadores",
            "jugadores": [
                {
                    "nombre_jugador": "Luis",
                    "nivel_jugador": "Cuauh",
                    "goles_jugador": 20,
                    "sueldo_jugador": 50000,
                    "bono_jugador": 10000,
                    "sueldo_completo_jugador": 59600
                },
                {
                    "nombre_jugador": "Raul",
                    "nivel_jugador": "A",
                    "goles_jugador": 3,
                    "sueldo_jugador": 40000,
                    "bono_jugador": 10000,
                    "sueldo_completo_jugador": 47600
                }
            ]
        },
        {
            "nombre_equipo": "Chivitas",
            "meta_equipo": "perdedores",
            "jugadores": [
                {
                    "nombre_jugador": "Arturo",
                    "nivel_jugador": "X",
                    "goles_jugador": 1,
                    "sueldo_jugador": 2000,
                    "bono_jugador": 1000,
                    "sueldo_completo_jugador": 3000
                },
                {
                    "nombre_jugador": "Arturo",
                    "nivel_jugador": "Y",
                    "goles_jugador": 2,
                    "sueldo_jugador": 3000,
                    "bono_jugador": 1000,
                    "sueldo_completo_jugador": 4000
                },
                {
                    "nombre_jugador": "Arturo",
                    "nivel_jugador": "Alan Pulido",
                    "goles_jugador": 3,
                    "sueldo_jugador": 5000,
                    "bono_jugador": 1000,
                    "sueldo_completo_jugador": 6000
                }
            ]
        }
    ]
}
```
***
### Ambiente de desarrollo

Los siguientes pasos son necesarios en caso de requerir:
* Ejecutar pruebas unitarias.
* Ejecutar servidor en localhost modo desarrollo.

```sh
# Abrir una terminal
# Instalar/Validar node.js
$ node -v
v12.14.1

# Validar instalación de npm
$ npm -v
6.13.4
```

```sh
# Intalar/Validar Mocha
$ sudo npm i -g mocha

# validar instalación
$ mocha --version
7.1.0

# Instalar/Validar Typescript
$ sudo npm i -g typescript

# validar instalación
$ tsc -v
Version 3.7.
```

```sh
# Clonar repositorio
$ git clone git@github.com:yexhoo/team-salary-calculator.git
```
```sh
# Instalar dependencias.
$ cd team-salary-calculator
$ npm install
```
```sh
# Ejecutar pruebas unitarias
$ npm test

# Salida
> team-salary-calculator@1.0.0 test /home/yexhoo/Documents/git/team-salary-calculator
> mocha -r ts-node/register test/**/*.spec.ts

  Salary
    ✓ Un equipo un jugador cero goles
    ✓ Un equipo un jugador un gol
    ✓ Un equipo un jugador mitad de goles
    ✓ Un equipo un jugador meta de goles igual meta esperada
    ✓ Un equipo un jugador meta de goles mayor meta esperada
    ✓ Un equipo multiples jugadores
    ✓ Multiples equipos, un jugador por equipo, misma meta de goles
    ✓ Multiples equipos, un jugador por equipo, diferente meta de goles
    ✓ Multiples equipos, multiples jugadores, diferente meta de goles

  Data Constraints Validator
    ✓ Meta por equipo no coincide con las metas definidas
    ✓ Nivel por jugador no coincide con las metas definidas (82ms)

  Data Validator
    ✓ lista de equipos es requerido (59ms)
    ✓ lista de metas es requerido

  Metas Validator
    ✓ nombre de la meta es requerido
    ✓ meta de goles es requerido
    ✓ nivel de la meta de goles es requerido
    ✓ numero de goles es requerido
    ✓ numero de goles debe ser mayor a cero

  Teams Validator
    ✓ nombre equipo es requerido
    ✓ jugadores por equipo es requerido
    ✓ meta por equipo es requerida
    ✓ nombre jugador es requerido
    ✓ nivel de jugador es requerido
    ✓ goles por jugador es mayor o igual a cero
    ✓ sueldo por jugador es mayor a cero
    ✓ bono por jugador es mayor a cero


  26 passing (324ms)
```
```sh
## Ejecutar servidor en modo desarrollo
$ npm run dev

## Salida
> team-salary-calculator@1.0.0 dev /home/yexhoo/Documents/git/team-salary-calculator
> nodemon src/app.ts 

[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/app.ts`
Salary calculator is running on port 3000
```

***
### Ejecutar en contenedor de docker.

Los siguientes pasos son necesarios solo en caso de querer:
* Ejecutar el servidor en un contenedor de docker.

```sh
# Validar instalación de docker
$ docker -v
Docker version 18.09.7, build 2d0083d
```
```sh
# Validar instalación de docker-compose
$ docker-compose -v
docker-compose version 1.21.2, build a133471
```
```sh
# Abrir terminal
# Clonar repositorio
$ git clone git@github.com:yexhoo/team-salary-calculator.git

## Ingresar a raiz del proyecto
$ cd team-salary-calculator

# Construir contenedor
$ docker-compose up --build

# Salida
Creating network "team-salary-calculator_default" with the default driver
Building app
Step 1/7 : FROM node:12
 ---> 7a73e56f893c
Step 2/7 : WORKDIR /app
 ---> Using cache
 ---> 6d86250f19b6
Step 3/7 : COPY ./package.json .
 ---> Using cache
 ---> 67ebeb40dc20
Step 4/7 : RUN npm install
 ---> Using cache
 ---> 1338a917addd
Step 5/7 : COPY . .
 ---> c8dc7a2a3fbe
Step 6/7 : EXPOSE 3000
 ---> Running in 3b929269b9c0
Removing intermediate container 3b929269b9c0
 ---> b03fb930cb8a
Step 7/7 : CMD npm start
 ---> Running in 1b76292821c4
Removing intermediate container 1b76292821c4
 ---> 04d4d8b94bfe
Successfully built 04d4d8b94bfe
Successfully tagged team-salary-calculator_app:latest
Creating team-salary-calculator_app_1 ... done
Attaching to team-salary-calculator_app_1
app_1  | 
app_1  | > team-salary-calculator@1.0.0 dev /app
app_1  | > nodemon src/app.ts 
app_1  | 
app_1  | [nodemon] 2.0.2
app_1  | [nodemon] to restart at any time, enter `rs`
app_1  | [nodemon] watching dir(s): *.*
app_1  | [nodemon] watching extensions: ts,json
app_1  | [nodemon] starting `ts-node src/app.ts`
app_1  | Salary calculator is running on port 3000
```

## **Endpoint**

**Salary**
* **Descripción:** Permite calcular el salario de uno o varios equipos de futbol. Es posible tener distintas metas de goles por cada equipo o compartir una misma meta de goles.
* **URL:** http://localhost:3000/salary
* **Content-Type:** application/json
* **Method:** `POST`
* **Campos Requeridos:**

|Campo          |Tipo    |
|---------------|--------|
|metas          | Array  |
|nombre_meta    | string |
|meta_de_goles  | Array  |
|nivel_meta     | string |
|numero_goles   | number |
|equipos        | Array  |
|nombre_equipo  | string |
|meta_equipo    | string |
|jugadores      | Array  |
|nombre_jugador | string |
|nivel_jugador  | string |
|goles_jugador  | number |
|sueldo_jugador | number |
|bono_jugador   | number |

*  **Body:** 
    ```javascript
    {
        "metas": [
            {
                "nombre_meta": "ganadores",
                "meta_de_goles": [
                    { "nivel_meta":"A","numero_goles": 1 },
                    { "nivel_meta":"B","numero_goles": 10 },
                    { "nivel_meta":"C","numero_goles": 15 },
                    { "nivel_meta":"Cuauh","numero_goles": 20 }
                ]
            }
        ],
        "equipos": [
            {
                "nombre_equipo": "Club America",
                "meta_equipo": "ganadores",
                "jugadores" : [
                    {
                        "nombre_jugador": "Luis",
                        "nivel_jugador": "Cuauh",
                        "goles_jugador": 20,
                        "sueldo_jugador": 50000,
                        "bono_jugador": 10000
                    }
                ]
            }
        ]
    }
    ```
* **Success Response:**
  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
        "metas": [
            {
                "nombre_meta": "ganadores",
                "meta_de_goles": [
                    {
                        "nivel_meta": "A",
                        "numero_goles": 1
                    },
                    {
                        "nivel_meta": "B",
                        "numero_goles": 10
                    },
                    {
                        "nivel_meta": "C",
                        "numero_goles": 15
                    },
                    {
                        "nivel_meta": "Cuauh",
                        "numero_goles": 20
                    }
                ]
            }
        ],
        "equipos": [
            {
                "nombre_equipo": "Club America",
                "meta_equipo": "ganadores",
                "jugadores": [
                    {
                        "nombre_jugador": "Luis",
                        "nivel_jugador": "Cuauh",
                        "goles_jugador": 20,
                        "sueldo_jugador": 50000,
                        "bono_jugador": 10000,
                        "sueldo_completo_jugador": 60000
                    }
                ]
            }
        ]
    }
    ```

* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** 
    ```javascript
    {
        "error": "Error al proesar la solicitud, favor de validar la entrada JSON",
        "detail": "La lista de metas es requerida"
    }
    ```
 
|Codigo| Nivel       | Detalle                                                                                          |
|------|-------------|--------------------------------------------------------------------------------------------------|
|400   | Bad Request | La lista de metas es requerida                                                                   |
|400   | Bad Request | El nombre de la meta es requerido                                                                |
|400   | Bad Request | El nivel de la meta de goles es requerido                                                        |
|400   | Bad Request | El numero de goles debe ser mayor a cero                                                         |
|400   | Bad Request | El numero de goles debe ser mayor a cero                                                         |
|400   | Bad Request | El bono por jugador debe ser mayor a cero                                                        |
|400   | Bad Request | Los goles por jugador deben ser mayor o igual a cero                                             |
|400   | Bad Request | El nivel del jugador es requerido                                                                |
|400   | Bad Request | El nombre del jugador es requerido                                                               |
|400   | Bad Request | El sueldo por jugador debe ser mayor a cero                                                      |
|400   | Bad Request | La lista de equipos es requerida                                                                 |
|400   | Bad Request | La meta por equipo es requerida                                                                  |
|400   | Bad Request | El nombre del equipo es requerido                                                                |
|400   | Bad Request | Los jugadores por equipo son requeridos                                                          |
|400   | Bad Request | La meta [meta-2] del equipo [Cruz Azul FC] no concide con las metas definidas                    |
|400   | Bad Request | El nivel [X] del jugador [El Rulo] del equipo [Club America] no concide con las metas definidas  |
  

* **Sample Call:**
    ```javascript
    {
        "metas": [
            {
                "nombre_meta": "ganadores",
                "meta_de_goles": [
                    { "nivel_meta":"A","numero_goles": 1 },
                    { "nivel_meta":"B","numero_goles": 10 },
                    { "nivel_meta":"C","numero_goles": 15 },
                    { "nivel_meta":"Cuauh","numero_goles": 20 }
                ]
            }
        ],
        "equipos": [
            {
                "nombre_equipo": "Club America",
                "meta_equipo": "ganadores",
                "jugadores" : [
                    {
                        "nombre_jugador": "Luis",
                        "nivel_jugador": "Cuauh",
                        "goles_jugador": 20,
                        "sueldo_jugador": 50000,
                        "bono_jugador": 10000
                    }
                ]
            }
        ]
    }
    ```