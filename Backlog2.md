- Resolver fallo de pago de premios - LISTO
- Validar interfaz movil - LISTO
- Validar bloqueo de saldo en frontend
- Validar que se reservar primero en loteria, luego se agrega al carrito 
- Validar mensaje que se muestra cuando no hay informacion disponible del sorteo
- Generar ruta de pruebas controladas en produccion

- Implementacion de pega3
- Implementación de descuentos 
- Validar la hora de cierre del sorteo y bloquear las ventas para esa hora

- Refactorizar servidor
    - Optimizar manejo de logging
    - Mejora del versionado para tener mas control sobre ramas activas en los diferentes entornos
    - Mejorar manejo de las variables de entorno
    - Mejorar manejo y propagacion de error cuando falla la db para evitar ventas en reserve
    - Mejorar validacion previa a la venta para obtener status de la reserva y reducir la complejidad

- Migrar servicios ftp a a nodejs
- Migrar de pm2 a docker

- Implementacion de sistema de monitoreo y alerta en servidor

- Implementacion de interfaz de soporte
    - Ventas en reserve
    - Pago de premios
    - Status de db y reanimacion
    - Listado de ventas
    - Listado de premios
    - Automatización de resolucion de ventas fallidas en alboran

- Crear protocolos para la implementar nuevos juegos y removerlos
    - Consultas
    - Venta
    - Datos generales

- Interfaz de gestion de codigos promocionales
    - Creación de campaña con selección de cantidad de combinaciones
    - Generador de txt con lista de codigos
    - Customizacion de logica de codigos promocionales
    - Logica para gestionar los codigos eficientemente (Definir mejor)


- Documentacion sobre la infraestructura de la plataforma
- Documentacion de incidencias
