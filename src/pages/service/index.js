import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  List,
  ListItem,
  ListIcon,
  Image,
  Center,
  Heading,
} from '@chakra-ui/react';

import {
  MdAccountBalance,
  MdAccountBalanceWallet,
  MdAnnouncement,
  MdAssessment,
  MdAssignment,
  MdRecordVoiceOver,
  MdCardTravel,
  MdDescription,
  MdEvent,
  MdGavel,
  MdAttachMoney,
  MdPermIdentity,
} from 'react-icons/md';

export default function service() {
  return (
    <div className="view">
      <div className="content">
        <div className="content--inner">
          <Heading mb={4} as="h1" size="md">
            ¿Qué ofrecemos?
          </Heading>
          <Center>
            <Image
              mb={4}
              src="https://www.celempresas.com/wp-content/themes/celtheme/img/xservices-bg.jpg.pagespeed.ic.Lg-qssfHui.webp"
              alt="Servicios"
            />
          </Center>

          <p>
            A partir de su Visión, Misión y Objetivos claros de negocio,
            Asesores en Dirección Empresarial y Corporativa S.A. de C.V., ofrece
            a sus clientes además de un servicio personalizado, toda la ayuda
            posible para satisfacer sus múltiples necesidades de administración
            y mejor manejo de recursos (asesoría financiera), de contabilidad
            (asesoría contable), resultados de operación (asesoría fiscal),
            problemas del entorno empresarial e individual (asesoría legal),
            mantenimiento del negocio en marcha (manejo y gestión del riesgo),
            cumplimiento de los objetivos, políticas y normas previamente
            establecidas (práctica de auditorías, incluyendo la supervisión de
            adquisiciones y realización de obra pública) y asesoría en trámites
            de solventación de observaciones planteadas por los órganos
            fiscalizadores.
          </p>

          <Heading my={4} as="h1" size="md">
            Servicios
          </Heading>

          <Center>
            <Image
              mb={4}
              src="https://www.ciateq.mx/images/uvtc/02.jpg"
              alt="Servicios"
            />
          </Center>

          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Planeación
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdAccountBalance} color="green.500" />
                    Planeación estratégica
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAccountBalance} color="green.500" />
                    Planes de desarrollo estatal y municipal
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAccountBalance} color="green.500" />
                    Presupuesto basado en resultados
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAccountBalance} color="green.500" />
                    Elaboración de matrices de indicadores
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAccountBalance} color="green.500" />
                    Proyectos de inversión
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Finanzas Estatales y Municipales
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdAccountBalanceWallet} color="green.500" />
                    Armonización contable
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAccountBalanceWallet} color="green.500" />
                    Operación y aplicación de fondos federales en entidades
                    federativas y municipios
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAccountBalanceWallet} color="green.500" />
                    Construcción y diseño de indicadores
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAccountBalanceWallet} color="green.500" />
                    Asesoría en los procesos de entrega recepción
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Organización
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdAnnouncement} color="green.500" />
                    Análisis y opinión sobre la normatividad interna
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAnnouncement} color="green.500" />
                    Reingeniería organizacional
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAnnouncement} color="green.500" />
                    Manuales de organización
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAnnouncement} color="green.500" />
                    Manuales de procedimientos
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Evaluación del Desempeño
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdAssessment} color="green.500" />
                    Sistema de evaluación del desempeño
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAssessment} color="green.500" />
                    Evaluación de programas
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAssessment} color="green.500" />
                    Programas sujetos a reglas de operación
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Manuales Administrativos
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdAssignment} color="green.500" />
                    Auditoría
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAssignment} color="green.500" />
                    Recursos materiales
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAssignment} color="green.500" />
                    Adquisiciones
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAssignment} color="green.500" />
                    Recursos humanos
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAssignment} color="green.500" />
                    Control interno
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAssignment} color="green.500" />
                    Tecnologías de la información
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAssignment} color="green.500" />
                    Obra pública
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAssignment} color="green.500" />
                    Transparencia y Acceso a la Información Publica
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAssignment} color="green.500" />
                    Recursos financieros
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAssignment} color="green.500" />
                    Rendición de cuentas
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Servidores Públicos
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdRecordVoiceOver} color="green.500" />
                    Libros blancos
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdRecordVoiceOver} color="green.500" />
                    Entrega recepción
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdRecordVoiceOver} color="green.500" />
                    Régimen de responsabilidades del servidor público
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdRecordVoiceOver} color="green.500" />
                    Defensa legal
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdRecordVoiceOver} color="green.500" />
                    Asesoría y capacitación
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Consultoria
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdCardTravel} color="green.500" />
                    Jurídica
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCardTravel} color="green.500" />
                    Financiera
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCardTravel} color="green.500" />
                    Fiscal
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCardTravel} color="green.500" />
                    Normativa aplicada a la Administración Publica
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCardTravel} color="green.500" />
                    Reingeniería de Procesos
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCardTravel} color="green.500" />
                    Contabilidad Gubernamental
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCardTravel} color="green.500" />
                    Gestión Gubernamental
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCardTravel} color="green.500" />
                    Presupuestal y Financiera
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCardTravel} color="green.500" />
                    Planeación
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCardTravel} color="green.500" />
                    Estudios Económicos y Sociales
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCardTravel} color="green.500" />
                    Modelos de Competencias Laborales
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Auditoría en Recursos Humanos
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdDescription} color="green.500" />
                    Plantilla Autorizada
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdDescription} color="green.500" />
                    Estructura Orgánica y Ocupacional
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdDescription} color="green.500" />
                    Sueldos y Salarios
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdDescription} color="green.500" />
                    Aplicación de Retenciones Fiscales
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdDescription} color="green.500" />
                    Prestaciones
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdDescription} color="green.500" />
                    Perfil de puestos
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Auditoría en Recursos Materiales
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdEvent} color="green.500" />
                    Procedimientos de licitación de adquisiciones
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdEvent} color="green.500" />
                    Contratación de Servicios
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdEvent} color="green.500" />
                    Administración y Control de Bienes Muebles
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdEvent} color="green.500" />
                    Administración y Control de Bienes Inmuebles
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdEvent} color="green.500" />
                    Control de Almacenes
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdEvent} color="green.500" />
                    Procedimientos de licitación de obra pública
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdEvent} color="green.500" />
                    Inconformidades
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Auditoría en Recursos Financieros
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdAttachMoney} color="green.500" />
                    Administración y Control Presupuestal
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAttachMoney} color="green.500" />
                    Control y Registro Contable
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAttachMoney} color="green.500" />
                    Cumplimiento las obligaciones Fiscal
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAttachMoney} color="green.500" />
                    Cuentas por Cobrar
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAttachMoney} color="green.500" />
                    Cuentas por Pagar
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAttachMoney} color="green.500" />
                    Acreedores
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAttachMoney} color="green.500" />
                    Proveedores
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdAttachMoney} color="green.500" />
                    Otros rubros de Pasivo
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Blindaje Administrativo
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdGavel} color="green.500" />
                    Adquisiciones, Arrendamiento y Servicios
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdGavel} color="green.500" />
                    Obra Pública
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdGavel} color="green.500" />
                    Servicio Profesional de Carrera
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Capacitación
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdPermIdentity} color="green.500" />
                    Normatividad Administrativa y Presupuestal
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdPermIdentity} color="green.500" />
                    Contabilidad Gubernamental (Armonización Contable)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdPermIdentity} color="green.500" />
                    Auditoría
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdPermIdentity} color="green.500" />
                    Transparencia
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdPermIdentity} color="green.500" />
                    Presupuesto Orientado a Resultados
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdPermIdentity} color="green.500" />
                    Planeación Estratégica
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdPermIdentity} color="green.500" />
                    Indicadores de Desempeño
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdPermIdentity} color="green.500" />
                    Marco Lógico
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdPermIdentity} color="green.500" />
                    Servicio Profesional de Carrera
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
