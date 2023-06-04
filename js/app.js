import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

import ComponenteTabla from '../components/componenteTabla.js'

createApp({
    components: {
        ComponenteTabla
    },
    data() {
        return {
            estilos: [ 'producto1', 'producto2', 'producto3' ],
            productos: [
                [
                    {
                        id: 1,
                        marca: 'Monitor gamer BenQ MOBIUZ EX2710Q LCD 27" negro y gris 100V/240V',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_873330-MLA52642247692_112022-W.webp',
                        descripcion: `Disfrutá de todas las cualidades que el monitor BenQ EX2710Q tiene para ofrecerte. Percibí las imágenes de una manera completamente diferente y complementá cualquier espacio ya sea en tu casa u oficina.

                        Un monitor a tu medida
                        Gracias a su pantalla LCD vas a obtener gráficas con gran nitidez, colores vivos y atractivos.
                        
                        Una experiencia visual de calidad
                        Este monitor de 27" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 2560 x 1440 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de un milisegundo lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.`,
                        precio: '$289.899.-'
                    },
                    {
                        id: 2,
                        marca: 'Monitor gamer LG UltraGear 24GN600 led 24" negro 100V/240V',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_845070-MLA46623210425_072021-F.webp',
                        descripcion: `LG busca entender a los usuarios para ofrecerles óptimas soluciones y nuevas experiencias a través de la evolución tecnológica. Disfrutá de la perfecta combinación de diseño, calidad y rendimiento que la empresa te ofrece en este monitor.

                        Un monitor a tu medida
                        Con tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.
                        
                        Una experiencia visual de calidad
                        Este monitor de 24" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Una de sus virtudes es que posee pantalla antirreflejo, de esta manera no verás reflejado lo que está detrás de vos y vas a evitar forzar tu vista para enfocar el contenido. Su tiempo de respuesta de un milisegundo lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.`,
                        precio: '$123.499.-'
                    },
                    {
                        id: 3,
                        marca: 'Monitor gamer ViewSonic Omni XG2431 LCD 24" negro 100V/240V',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_919315-MLA51619238113_092022-O.webp',
                        descripcion: `Disfrutá de todas las cualidades que el monitor ViewSonic XG2431 tiene para ofrecerte. Percibí las imágenes de una manera completamente diferente y complementá cualquier espacio ya sea en tu casa u oficina.

                        Un monitor a tu medida
                        Gracias a su pantalla LCD vas a obtener gráficas con gran nitidez, colores vivos y atractivos.
                        
                        Una experiencia visual de calidad
                        Este monitor de 24" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Una de sus virtudes es que posee pantalla antirreflejo, de esta manera no verás reflejado lo que está detrás de vos y vas a evitar forzar tu vista para enfocar el contenido.`,
                        precio: '$203.599.-'
                    },
                ],
                [
                    {
                        id: 4,
                        marca: 'Placa De Video Amd Asrock Phantom Gaming Rx 6800xt 16gb Express 4.0 X16 Gddr6',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_804767-MLA53856094597_022023-O.webp',
                        descripcion: `Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas.

                        AMD es un fabricante estadounidense de placas de video, por su tecnología se ha destacado en crear procesadores de alta gama que permiten un excelente funcionamiento del motor gráfico de tu computadora.
                        
                        Velocidad en cada lectura
                        Como cuenta con 4608 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU.
                        
                        Calidad de imagen
                        Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración.`,
                        precio: '$299.999-'
                    },
                    {
                        id: 5,
                        marca: 'Placa de video AMD PowerColor Fighter Radeon 6600 Series RX 6600 AXRX 6600 8GBD6-3DH 8GB',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_667544-MLA50291500307_062022-O.webp ',
                        descripcion: `Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas.

                        AMD es un fabricante estadounidense de placas de video, por su tecnología se ha destacado en crear procesadores de alta gama que permiten un excelente funcionamiento del motor gráfico de tu computadora.
                        
                        Velocidad en cada lectura
                        Como cuenta con 1792 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU.
                        
                        Calidad de imagen
                        Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración.`,
                        precio: '$288.999-'
                    },
                    {
                        id: 6,
                        marca: 'Placa de video Nvidia Palit Dual GeForce GTX 16 Series GTX 1660 NE51660018J9-1161C 6GB',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_603481-MLA48656710629_122021-O.webp',
                        descripcion: `Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas.

                        Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero.
                        
                        Velocidad en cada lectura
                        Como cuenta con 1408 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU.
                        
                        Calidad de imagen
                        Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración.`,
                        precio: '$204.999.-'
                    }
                ],
                [
                    {
                        id: 7,
                        marca: 'Procesador Intel Core I9-12900K BX8071512900K de 16 núcleos y 5.2GHz de frecuencia con gráfica integrada',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_688307-MLA51801287458_102022-O.webp',
                        descripcion: `Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos.

                        Núcleos: el corazón del procesador
                        En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto.
                        
                        Máxima potencia
                        Al estar desbloqueado, podrás realizar overclocking y así aumentar la frecuencia de funcionamiento y optimizar el rendimiento de tu equipo. Personalizalo a tu gusto y disfrutá de tus videojuegos o hacé que la renderización de imágenes sea más ágil. ¡Descubrí el abanico de posibilidades que esta función te ofrece!`,
                        precio: '$545.999.-'
                    },
                    {
                        id: 8,
                        marca: 'Micro Procesador Amd Ryzen 9 7900x 64mb 5.6ghz Am5',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_731305-MLA52069016683_102022-O.webp',
                        descripcion: `Los procesadores de la flamante serie AMD Ryzen 7000 están diseñados con toda la potencia y prestaciones de las últimas tecnologías para que armes tu PC sin esfuerzo. Entre sus puntos más destacados están la memoria DDR5, la interfaz PCIe 5.0, el overclocking de memoria con un solo toque de AMD EXPO y la tecnología de fabricación super eficiente de 5 nm. Coloca una motherboard AMD con Socket AM5 en el corazón de tu equipo para dominar los juegos que amas tanto ahora como en el futuro. Si tu PC necesita las prestaciones más nuevas y potentes, tu solución son los procesadores AMD Ryzen.`,
                        precio: '$320.999.-'
                    },
                    {
                        id: 9,
                        marca: 'Procesador gamer Intel Core i3-10100F BX8070110100F de 4 núcleos y 4.3GHz de frecuencia',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_807581-MLA44434412331_122020-O.webp',
                        descripcion: `Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos.

                        Núcleos: el corazón del procesador
                        En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto.`,
                        precio: '$44.187.-'
                    }
                ],
            ]
        }
    },

}).mount('#app')