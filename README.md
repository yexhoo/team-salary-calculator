# Team Salary Calculator
Application that allows calculating the salary of the soccer team

<p align="justify">
The salary of soccer team players is made up of two parts: a fixed salary and a variable bonus, the sum of these two parts is the salary of a player. The variable bonus is made up of two parts: individual goal and team goal, each weighing 50%.


## How are goal ranges and bonuses calculated?

The individual goal per player depends on the level assigned to him:


| Level    |Goals/month|
|----------|:---------:|
| A        |     5     |
| B        |    10     |
| C        |    15     |
| Cuauh    |    20     |


**Example:** Juan, Pedro, Martín and Luis scored like this during the month:

|Player| Level |Goals scored in the month / minimum required|
|------|-------|--------------------------------------------|
|Juan  | A     |     6/5                                    |
|Pedro | B     |    7/10                                    |
|Martin| C     |    16/15                                   |
|Luis  | Cuauh |    19/20                                   |
|total |       |    48/50                                   |

<p align="justify">
The team bonus they would have a reach of 96%, Luis would have an individual reach of 95% for a total reach of 95.5% Luis's fixed floor is 50,000.00 and his bonus is 10,000.00 so his final salary will be $ 59,550.00

## Test

The application should receive as input a JSON with this structure:

```javascript
[  
   {  
      "nombre":"Juan Perez",
      "nivel":"C",
      "goles":10,
      "sueldo":50000,
      "bono":25000,
      "sueldo_completo":null,
      "equipo":"rojo"
   },
   {  
      "nombre":"EL Cuauh",
      "nivel":"Cuauh",
      "goles":30,
      "sueldo":100000,
      "bono":30000,
      "sueldo_completo":null,
      "equipo":"azul"
   },
   {  
      "nombre":"Cosme Fulanito",
      "nivel":"A",
      "goles":7,
      "sueldo":20000,
      "bono":10000,
      "sueldo_completo":null,
      "equipo":"azul"

   },
   {  
      "nombre":"El Rulo",
      "nivel":"B",
      "goles":9,
      "sueldo":30000,
      "bono":15000,
      "sueldo_completo":null,
      "equipo":"rojo"

   }
]
```


The output must fill the key salary_complete with the correct amount of each player.    

```javascript
[
   {  
      "nombre":"El Rulo",
      "goles_minimos":10,
      "goles":9,
      "sueldo":30000,
      "bono":15000,
      "sueldo_completo": 14250,
      "equipo":"rojo"
   }
]
```

## Bonus

<p align="justify">
In addition to calculating the salaries soccer team players, the application can calculate the salaries of the players of other teams with different minimums per level. Your program should receive as input a single JSON with the equipment arrangement.