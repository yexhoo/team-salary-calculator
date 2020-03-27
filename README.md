# Team Salary Calculator
Servicio que permite calcular el salario de un equipo de futbol.


El sueldo de los jugadores del de un equipo de futbol se compone de dos partes un **sueldo fijo** y un **bono variable**, la suma de estas dos partes es el sueldo de un jugador. El bono variable se compone de dos partes **meta de goles individual** y **meta de goles por equipo** cada una tiene un peso de **50%**.

Tu programa deberá hacer el cálculo del sueldo de los jugadores del Resuelve FC.


## ¿Cómo se calculan los alcances de meta y bonos?

La meta individual de goles por jugador depende del nivel que tenga asignado:

| Nivel    |Goles/mes  |
|----------|:---------:|
| A        |     5     |
| B        |    10     |
| C        |    15     |
| Cuauh    |    20     |


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

```sh
## Ejemplo de una entrada basica en formato JSON.
{
    "metas": [
        {
            "nombre": "ganadores",
            "meta_de_goles": [
                { "nivel":"A","numero_goles": 5 },
                { "nivel":"B","numero_goles": 10 },
                { "nivel":"C","numero_goles": 15 },
                { "nivel":"Cuauh","numero_goles": 20 }
            ]
        },
        {
            "nombre": "perdedores",
            "meta_de_goles": [
                { "nivel":"X","numero_goles": 1 },
                { "nivel":"Y","numero_goles": 2 },
                { "nivel":"Alan Pulido","numero_goles": 3 }
            ]
        }
    ],
    "equipos": [
        {
            "nombre": "Club America",
            "meta": "ganadores",
            "jugadores" : [
                {
                    "nombre": "Luis",
                    "nivel": "Cuauh",
                    "goles": 20,
                    "sueldo": 50000,
                    "bono": 10000
                },
                {
                    "nombre": "Raul",
                    "nivel": "A",
                    "goles": 3,
                    "sueldo": 40000,
                    "bono": 10000
                }
            ]
        },
        {
            "nombre": "Chivas",
            "meta": "perdedores",
            "jugadores" : [
                {
                    "nombre": "Hugo",
                    "nivel": "X",
                    "goles": 1,
                    "sueldo": 2000,
                    "bono": 1000
                },
                {
                    "nombre": "Paco",
                    "nivel": "Y",
                    "goles": 2,
                    "sueldo": 3000,
                    "bono": 1000
                },
                {
                    "nombre": "Luis",
                    "nivel": "Alan Pulido",
                    "goles": 3,
                    "sueldo": 5000,
                    "bono": 1000
                }
            ]
        }
    ]
}
```

```sh

## metas: Es un arreglo de metas de goles
"metas": [
   {
      "nombre": "ganadores",
      "meta_de_goles": [
            { "nivel":"A","numero_goles": 5 },
            { "nivel":"B","numero_goles": 10 },
            { "nivel":"C","numero_goles": 15 },
            { "nivel":"Cuauh","numero_goles": 20 }
      ]
   },
   {
      "nombre": "perdedores",
      "meta_de_goles": [
            { "nivel":"X","numero_goles": 1 },
            { "nivel":"Y","numero_goles": 2 },
            { "nivel":"Alan Pulido","numero_goles": 3 }
      ]
   }
]


## Meta: Esta compuesta por un nombre y un arreglo con la metas de goles.
{
   "nombre": "ganadores",
   "meta_de_goles": [
         { "nivel":"A","numero_goles": 5 },
         { "nivel":"B","numero_goles": 10 },
         { "nivel":"C","numero_goles": 15 },
         { "nivel":"Cuauh","numero_goles": 20 }
   ]
}

## equipos: Es un arreglo de equipos
"equipos": [
   {
      "nombre": "Club America",
      "meta": "ganadores",
      "jugadores" : [
            {
               "nombre": "Luis",
               "nivel": "Cuauh",
               "goles": 20,
               "sueldo": 50000,
               "bono": 10000
            },
            {
               "nombre": "Raul",
               "nivel": "A",
               "goles": 3,
               "sueldo": 40000,
               "bono": 10000
            }
      ]
   },
   {
      "nombre": "Chivas",
      "meta": "perdedores",
      "jugadores" : [
            {
               "nombre": "Hugo",
               "nivel": "X",
               "goles": 1,
               "sueldo": 2000,
               "bono": 1000
            },
            {
               "nombre": "Paco",
               "nivel": "Y",
               "goles": 2,
               "sueldo": 3000,
               "bono": 1000
            },
            {
               "nombre": "Luis",
               "nivel": "Alan Pulido",
               "goles": 3,
               "sueldo": 5000,
               "bono": 1000
            }
      ]
   }
]

```

```sh
## Ejemplo de salida en formato JSON
{
    "metas": [
        {
            "nombre": "ganadores",
            "meta_de_goles": [
                {
                    "nivel": "A",
                    "numero_goles": 5
                },
                {
                    "nivel": "B",
                    "numero_goles": 10
                },
                {
                    "nivel": "C",
                    "numero_goles": 15
                },
                {
                    "nivel": "Cuauh",
                    "numero_goles": 20
                }
            ]
        },
        {
            "nombre": "perdedores",
            "meta_de_goles": [
                {
                    "nivel": "X",
                    "numero_goles": 1
                },
                {
                    "nivel": "Y",
                    "numero_goles": 2
                },
                {
                    "nivel": "Alan Pulido",
                    "numero_goles": 3
                }
            ]
        }
    ],
    "equipos": [
        {
            "nombre": "Club America",
            "meta": "ganadores",
            "jugadores": [
                {
                    "nombre": "Luis",
                    "nivel": "Cuauh",
                    "goles": 20,
                    "sueldo": 50000,
                    "bono": 10000,
                    "sueldo_completo": 59600
                },
                {
                    "nombre": "Raul",
                    "nivel": "A",
                    "goles": 3,
                    "sueldo": 40000,
                    "bono": 10000,
                    "sueldo_completo": 47600
                }
            ]
        },
        {
            "nombre": "Chivas",
            "meta": "perdedores",
            "jugadores": [
                {
                    "nombre": "Hugo",
                    "nivel": "X",
                    "goles": 1,
                    "sueldo": 2000,
                    "bono": 1000,
                    "sueldo_completo": 3000
                },
                {
                    "nombre": "Paco",
                    "nivel": "Y",
                    "goles": 2,
                    "sueldo": 3000,
                    "bono": 1000,
                    "sueldo_completo": 4000
                },
                {
                    "nombre": "Luis",
                    "nivel": "Alan Pulido",
                    "goles": 3,
                    "sueldo": 5000,
                    "bono": 1000,
                    "sueldo_completo": 6000
                }
            ]
        }
    ]
}
```
***
### Desarrollo localhost

Los siguientes pasos son necesarios solo en caso de querer:
* Ejecutar pruebas unitarias
* Ejecutar servidor en local host.

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
#Clone repository
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
## Ejecutar en modo desarrollo
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