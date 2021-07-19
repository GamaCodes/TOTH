import React from 'react';
import { Image, Avatar, Center, Heading } from '@chakra-ui/react';

export default function about() {
  return (
    <div className="view">
      <div className="content">
        <div className="content--inner">
          <Heading mb={4} as="h1" size="md">
            ¿Quienes somos?
          </Heading>
          <Image
            mb={4}
            src="https://images.pexels.com/photos/34092/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Quienes somos"
          />
          <p>
            Asesores en Dirección Empresarial y Corporativa es una empresa de
            consultoría, asesoría y capacitación en las áreas: jurídica,
            contable, fiscal, financiera, auditoría y planeación presupuestal a
            Empresas y Gobierno, destacándose por ofrecer soluciones integrales,
            con tecnología y precios competitivos, brindando a cada cliente el
            valor agregado que necesita.
          </p>

          <Heading my={4} as="h1" size="md">
            Misión
          </Heading>
          <Image
            mb={4}
            src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Mision"
          />
          <p>
            Brindar servicios integrales de estrategia administrativa y de
            gestión al sector público en sus distintos ámbitos de gobierno, así
            como a organizaciones empresariales, que permitan identificar y
            prevenir riesgos, y optimizar su desempeño.
          </p>

          <Heading my={4} as="h1" size="md">
            Visión
          </Heading>
          <Image
            mb={4}
            src="https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Mision"
          />
          <p>
            Ser reconocidos a nivel nacional como la empresa consultora líder en
            el mercado, que desarrolla su actividad con altos estándares de
            calidad en los servicios que se ofrecen, con el único fin de ser
            parte de la solución integral de la problemática que se detecte y
            contribuir de esa manera al engrandecimiento de la Sociedad
            Mexicana.
          </p>

          <Heading mt={4} as="h1" size="md">
            Nuestras Fortalezas
          </Heading>
          <Center my={6}>
            <Avatar
              size="xl"
              src="https://www.exitoysuperacionpersonal.com/wp-content/uploads/2018/11/Frases-de-integridad.jpg"
              alt="Integridad"
            />
          </Center>
          <p>
            <span className="text-bold">Integridad,</span> nos comprometemos a
            ser congruentes entre lo que decimos y hacemos, predicando con el
            ejemplo.
          </p>
          <Center my={6}>
            <Avatar
              size="xl"
              src="http://agrega.juntadeandalucia.es/repositorio/22052017/d0/es-an_2017052212_9182642/magnifying-glass-626174_640.jpg"
              alt="Objetividad"
            />
          </Center>
          <p>
            <span className="text-bold">Objetividad,</span> somos sensibles al
            cambio y respondemos en forma organizada, cumpliendo día a día
            nuestra Misión y Visión.
          </p>
          <Center my={6}>
            <Avatar
              size="xl"
              src="https://613296.smushcdn.com/1114088/wp-content/uploads/sites/2/2019/03/handshake-3382503__340.jpg?lossy=1&strip=1&webp=1"
              alt="Confiabilidad"
            />
          </Center>
          <p>
            <span className="text-bold">Confiabilidad,</span> fomentamos la
            ética, el conocimiento, la innovación y el liderazgo.
          </p>
          <Center my={6}>
            <Avatar
              size="xl"
              src="https://conceptodefinicion.de/wp-content/uploads/2019/12/responsabilidad-.jpg"
              alt="Responsabilidad"
            />
          </Center>
          <p>
            <span className="text-bold">Responsabilidad,</span> trabajamos en
            equipo con un enfoque de servicio y de valor, tomando en cuenta los
            detalles.
          </p>
          <Center my={6}>
            <Avatar
              size="xl"
              src="https://www.itsitio.com/wp-content/uploads/e/itsitio_disponibilidad.jpg"
              alt="Dispobilidad"
            />
          </Center>
          <p>
            <span className="text-bold">Disponibilidad,</span> aceptamos el
            compromiso con nuestros clientes, dispuestos a atender su
            solicitudes y satisfacer sus necesidades, ya sea en casos puntuales
            o asesoría permanente.
          </p>
          <Center my={6}>
            <Avatar
              size="xl"
              src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Recurso Humano"
            />
          </Center>
          <p>
            <span className="text-bold">Recurso Humano,</span> Consultores con
            gran formación y experiencia dentro del la Administración Pública
            Federal y Local, así como en el sector privado, lo que permite
            comprender al cliente y buscar las soluciones más rápidas y
            eficaces, comprometidos con la calidad, buscando la satisfacción del
            cliente a todos lo niveles.
          </p>
        </div>
      </div>
    </div>
  );
}
