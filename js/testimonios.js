const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'María García',
    position: 'Madrid, España',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
    "Adquirí un vehículo eléctrico de Zantra y estoy encantada. Su rendimiento y la sensación de contribuir al medio ambiente son incomparables. ¡Una decisión que recomiendo a todos!",
  },
  {
    name: 'Ana López',
    position: 'Lima, Perú',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      ' "Desde que tengo mi vehículo eléctrico de Zantra, no solo disfruto de su comodidad y rendimiento, sino que también me enorgullece reducir mi huella de carbono. ¡Un paso hacia un futuro más limpio y responsable!"',
  },
  {
    name: 'Sophie Dubois',
    position: 'París, Francia',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
    "Estoy enamorada de mi vehículo eléctrico Zantra. La combinación de su elegancia, silencio y el impacto positivo en el medio ambiente hacen que cada viaje sea una experiencia única. ¡Una excelente elección para cuidar nuestro planeta!",
  },
  {
    name: 'Emily Johnson',
    position: 'Nueva York, EE. UU',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
    "El vehículo eléctrico de Zantra ha simplificado mi vida urbana. Su bajo mantenimiento, junto con su impacto positivo en el medio ambiente, hacen que sea una elección inteligente y consciente. ¡Estoy muy contenta con mi compra!",
  },
  {
    name: 'John Smith',
    position: 'Buenos Aires, Argentina',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
    "Los vehículos eléctricos de Zantra son la vanguardia en tecnología y sostenibilidad. Mi conducción diaria se ha transformado en una experiencia eficiente y amigable con el entorno. ¡Totalmente satisfecho con mi compra!",
  },
  {
    name: 'Sasha Ho',
    position: 'Accountant',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
  },
  {
    name: 'Carlos Rodríguez',
    position: ' Ciudad de México, México',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
    "Los vehículos eléctricos de Zantra son una maravilla. Además de ser amigables con el medio ambiente, su rendimiento en la ciudad es extraordinario. ¡Una compra que ha mejorado significativamente mi estilo de vida!",
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)