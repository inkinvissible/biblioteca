function navigateTo(page) {
  // Mostrar el loader mientras se carga la nueva sección
  const loader = document.getElementById('loader');
  loader.style.display = 'block';

  // Obtener el div de contenido (similar a tu función existente)
  const contentDiv = document.getElementById('content');

  // Ocultar el contenido actual (similar a tu función existente)
  contentDiv.innerHTML = '';

  // Simular un retraso para mostrar el loader (puedes reemplazar esto con tu lógica de carga real)
  setTimeout(() => {
    // Cargar el contenido correspondiente según la página seleccionada (similar a tu función existente)
    switch (page) {
      case 'inicio':
        contentDiv.innerHTML = '<div class="absolute w-[75%] left-[12%] top-36"><img src="imagenes/biblioteca.png"  alt="Biblioteca en Grande con libros"> <img src="imagenes/sanjose.png" class="mt-3"  alt="San José en Grande con libros"></div>';
        const inicioContent = '<div class="absolute w-[75%] left-[12%] top-36"><img src="imagenes/biblioteca.png"  alt="Biblioteca en Grande con libros"> <img src="imagenes/sanjose.png" class="mt-3"  alt="San José en Grande con libros"></div>';
        contentDiv.innerHTML = inicioContent;
        // Simulamos la carga de imágenes utilizando eventos de carga
        const images = contentDiv.getElementsByTagName('img');
        let loadedImages = 0;
        for (let i = 0; i < images.length; i++) {
          images[i].onload = () => {
            loadedImages++;
            if (loadedImages === images.length) {
              // Ocultar el loader una vez que todas las imágenes están cargadas
              loader.style.display = 'none';
            }
          };
        }
        break;
      case 'disponibilidad':
        contentDiv.innerHTML = '<form class="w-[50%] absolute left-[25%] rounded bg-white p-7">            <h2 class="mb-3 text-black text-xl font-bold">Consultar Stock</h2>            <div>                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Nombre del libro</label>                <div class="relative mt-2 rounded-md shadow-sm">                    <input type="text" name="price" id="price"                        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"                        placeholder="Nombre del libro">                </div>            </div>            <br>            <button class="learn-more" type="submit">                <span class="circle" aria-hidden="true">                    <span class="icon arrow"></span>                </span>                <span class="button-text">Buscar</span>            </button>        </form>';
        break;
      case 'préstamos':
        contentDiv.innerHTML = '<form class="w-[50%] absolute left-[25%] rounded bg-white p-7">            <h2 class="mb-3 text-black font-bold text-xl">Préstamos de Libros</h2>            <div>                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Nombre del libro a                    prestar</label>                <div class="relative mt-2 rounded-md shadow-sm">                    <input type="text" name="price" id="price"                        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"                        placeholder="Nombre del libro">                </div>            </div>            <br>            <div>                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Nombre del                    responsable</label>                <div class="relative mt-2 rounded-md shadow-sm">                    <input type="text" name="price" id="price"                        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"                        placeholder="Nombre del Responsable">                </div>            </div>            <br>            <div class="w-64">                <label for="division" class="block text-sm font-medium leading-6 text-gray-900">División:</label>                <div class="relative">                    <select id="division" name="division"                        class="block w-full appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">                        <option value="">Seleccionar división</option>                        <optgroup label="División A">                            <option value="1A">1ero A</option>                            <option value="2A">2do A</option>                            <option value="3A">3ero A</option>                            <option value="4A">4to A</option>                            <option value="5A">5to A</option>                            <option value="6A">6to A</option>                        </optgroup>                        <optgroup label="División B">                            <option value="1B">1ero B</option>                            <option value="2B">2do B</option>                            <option value="3B">3ero B</option>                            <option value="4B">4to B</option>                            <option value="5B">5to B</option>                            <option value="6B">6to B</option>                        </optgroup>                    </select>                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">                        <!-- Icono para el select (puedes cambiarlo por un ícono de tu elección) -->                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">                            <path                                d="M7.293 13.293a1 1 0 0 1-1.414-1.414L9 9.586 5.707 6.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4z" />                        </svg>                    </div>                </div>            </div>            <br>            <div class="w-64">                <label for="fecha-devolucion" class="block text-sm font-medium leading-6 text-gray-900">Fecha de                    Devolución:</label>                <input type="date" id="fecha-devolucion" name="fecha-devolucion"                    class="block w-full appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"                    min="2023-01-01" required />            </div>            <br>            <button class="learn-more" type="submit">                <span class="circle" aria-hidden="true">                    <span class="icon arrow"></span>                </span>                <span class="button-text">Registrar</span>            </button>        </form>';
        break;
      case 'cargar':
        contentDiv.innerHTML = '<form class="w-[50%] absolute left-[25%] rounded bg-white p-7">            <h2 class="mb-3 text-black font-bold text-xl">Cargar Libros</h2>            <div>                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Nombre del libro</label>                <div class="relative mt-2 rounded-md shadow-sm">                    <input type="text" name="price" id="price"                        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"                        placeholder="Nombre del libro">                </div>            </div>            <br>            <div>                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Editorial</label>                <div class="relative mt-2 rounded-md shadow-sm">                    <input type="text" name="price" id="price"                        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"                        placeholder="Editorial">                </div>            </div>            <br>            <div>                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">ISBN</label>                <div class="relative mt-2 rounded-md shadow-sm">                    <input type="text" name="price" id="price"                        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"                        placeholder="ISBN">                </div>            </div>            <br>            <div>                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Autor</label>                <div class="relative mt-2 rounded-md shadow-sm">                    <input type="text" name="price" id="price"                        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"                        placeholder="Autor">                </div>            </div>            <br>            <div>                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Disponibilidad</label>                <div class="relative mt-2 rounded-md shadow-sm">                    <input type="text" name="price" id="price"                        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"                        placeholder="Disponibilidad">                </div>            </div>            <br>            <br>            <button class="learn-more" type="submit">                <span class="circle" aria-hidden="true">                    <span class="icon arrow"></span>                </span>                <span class="button-text">Cargar</span>            </button>        </form>';
        break;
      default:
        contentDiv.innerHTML = '<h2>Página no encontrada.</h2>';
        break;
    }

    // Resto de tu código de navegación y marcado de botones aquí...

    // Ocultar el loader una vez que se haya cargado el contenido
    loader.style.display = 'none';

    // Agregar clase "active" al botón seleccionado y quitarla de los demás
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
      if (link.textContent.toLowerCase() === page) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, 2000); // Tiempo simulado para mostrar el loader (2 segundos en este ejemplo)
}
