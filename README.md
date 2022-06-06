# Diseño de Sistemas : TP I - "Proyecto Banco de Sangre"
# Problema
Una organizacion, llamada circulo de sangre, busca generar la autoprotección de los asociados, esto se genera mediante dos tipos de asociados, uno Activo (es el donante y debe estar entre los 18 y 56 años y sin enfermedades cronicas) y uno Pasivo (este recibirá la sangre donada), donde estos para pertenecer pagan una cuota mensual (donde la cuota varia por el tipo de asociado).

Para registrarse, se debe ingresar el DNI, nombre, apellido, fecha de nacimiento, domicilio, localidad, fecha de nacimiento, teléfono, email, grupo sanguíneo y factor, también deberá informar si posee alguna enfermedad cronica y medicación.

El banco de Sangre (es una institución que genera pedidos de donación para cubrir a algún socio del circulo) pide esporadicamente donaciones, cuando estos pedidos llegan se busca a los donantes activos que menos donaron, una persona queda excluida sí donó más de 2 veces en el año. Además el banco de sangre avisa semanalmente cuando los asociados que donaron.

Mensualmente se hace un listado de los asociados con cuotas no pagas, además gerencia cada cierto tiempo pide un listado de cuotas pagas mostrado porcentualmente y divido por categorias de asociados.

# Requisitos Funcionales
El sistema debe emitir mensualmente las cuotas de asociados.
El sistema debe permitir la gestión manual de los clientes.
El sistema debe permitir la gestión manual de los pagos.
El sistema debe permitir la gestión manual de los pedidos.
El sistema debe permitir la gestión manual de los donaciones.
El sistema debe generar un listado que tenga a los donantes ordenados de forma ascendente mediante sus donaciones.
El sistema debe permitir la recepción de pedidos por parte de las entidades como banco de sangre.
El sistema debe generar un listado de deudores.
El sistema debe generar un listado del porcentaje de cuotas pagadas mensuales por categoría de socios.

# Diagrama
![Untitled Diagram](https://user-images.githubusercontent.com/100718427/172217328-32a5466c-4afd-46a4-acab-652135a4cf34.jpg)

# Iteraciones
Sí bien no se genera una estructura de entregas/versiones muy estructurada, tendemos cierto hilo conductor o guía para la construcción del proyecto, las cuales son las siguientes:

En la primer iteración se perseguirá la generación de una base solida para después trabajar, debido a que no se puede profundizar como por ejemplo el cambio automático del tipo de asociado, sí bien es una tarea no tan difícil de implementar, se debería de buscar los puntos más vitales del sistema, como por ejemplo la gestión manual de los asociados, cuotas y pedidos y donaciones, también el almacenamiento de los mismos.

En la segunda iteración se buscará como primer objetivo la corrección de errores o malentendidos que se pudo generar con los clientes (siempre enfocándonos en el funcionamiento y no en la interfaz propiamente) y después la implementación de automatizar procesos como el de generar un listado ordenado en función de los donantes de manera creciente donde se mostraran primero los que menos donaron, además se recibirán y quedan en un estado pendiente los pedidos de donación y un listado de deudores.

