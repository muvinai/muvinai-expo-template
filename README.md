# Muvinai Expo Template for Apps

This template contains a base expo example with redux and simple navigation that includes user validation. 
Este template contiene un ejemplo base de expo, utilizando redux y una navegacion simple que incluye la validacion del usuario


## Inicializacion

Utiliza el siguiente comando al crear un nuevo proyecto

```
npx create-expo-app my-new-app --template muvinai-expo-template
```

## Components

La idea es ir ordenandolos en carpetas, por categoria pertinente, por ejemplo tenemos

`/Buttons` y en esa carpeta todos los botones que se corresponden

## Hooks

Aqui hay dos ejemplos de Hooks, tomarlos como base para crear otros hooks

### useFetchData()

El hook `useFetchData`:

1. Inicializa un estado llamado data con un valor por defecto de un array vacío.
2. Al montarse el componente que lo utiliza, realiza una solicitud a la API para obtener ciertos datos.
3. Si la solicitud es exitosa, actualiza el estado data con la respuesta obtenida.
Retorna los datos recuperados.

Despues lo llamo usando `const data = useFetchData()`

### useItemSettings()

Estos son ejemplos de algunas de las funciones (para tomar de base para otras funciones)

-  `modifyItem(data)`: Modifica la información del ítem en la base de datos y actualiza el estado si la modificación es exitosa.

    - Parámetros:
        - `data`: Datos del ítem para modificar.
    - Retorno:
        - `true`: Si la modificación fue exitosa.
        - `false`: Si la modificación no fue exitosa.
        - `null`: Si ocurrió un error al hacer la solicitud.

- `addImageToItem()`: Añade una imagen al ítem. (Funcionalidad aún no implementada)

- `fetchDetails()`: Obtiene los detalles del ítem desde la base de datos.

    - Retorno:
        - `data`: Lista de detalles si la solicitud es exitosa.
        - `null`: Si la solicitud no es exitosa o si ocurre un error.

## Navigation

Todos los componentes relacionados a la navegacion van en esta carpeta, `InitialNavigator.js` deberia ir afuera y luego los otros navegadores estar anidados en carpetas correspondientes

## Screens

Aqui van todas las pantallas, separadas por su "posicion" en el InitialNavigator, por ejemplo para Login estan sus pantallas, para Onboarding tambien, y asi demas. No importa si las pantallas se repiten (y una pantalla de Login aparece por ejemplo en la App), lo importante es poder identificarlas facilmente.

## Redux (stores)

> **IMPORTANTE!!** En el ejemplo se usa AsyncStorage, podriamos empezar a probar con otras storage libraries ya que antes nos trajo varios problemas

1. **Importación de Reducers**: Se importan los reducers de diferentes slices del estado.

2. **Configuración de Migración**: Esta configuración permite manejar las migraciones entre diferentes versiones del estado en la aplicación.

3. **Combinación de Reducers**: Todos los reducers se combinan en un único reducer raíz.

4. **Configuración de Persistencia**: Define cómo y qué partes del estado se deben persistir en el almacenamiento local. En este caso, se utiliza AsyncStorage para el almacenamiento.

5. **Creación del Store**: Se crea el store de Redux con el reducer persistente y middleware configurado.

6. **Exportación**: Se exportan tanto el store como el persistor.

