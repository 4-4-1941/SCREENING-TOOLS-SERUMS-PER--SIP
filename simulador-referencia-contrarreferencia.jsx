import React, { useState } from 'react';
import { AlertCircle, CheckCircle, XCircle, ChevronRight, RotateCcw } from 'lucide-react';

const SimuladorReferencia = () => {
  const [currentCase, setCurrentCase] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [decisions, setDecisions] = useState({});
  const [feedback, setFeedback] = useState(null);
  const [caseCompleted, setCaseCompleted] = useState(false);
  const [showReport, setShowReport] = useState(false);

  // Casos clínicos basados en MINSA 2025
  const cases = [
    {
      id: 'caso1',
      name: 'Violencia de Pareja + Depresión',
      patient: 'Mujer, 34 años, lima urbana',
      phases: [
        {
          phase: 0,
          title: 'FASE 1: DETECCIÓN EN I NIVEL',
          month: 'Mes 1',
          context: `Mujer refiere golpes recurrentes de pareja. Historia de 2 años.
          
          TAMIZAJE:
          • PHQ-9: 19 puntos (depresión moderada)
          • PHQ-9 ítem 9 (ideación suicida): "Algunas veces"
          • Escala violencia: Alto riesgo
          
          DIAGNÓSTICO PRIMARIO:
          • F321 (Depresión moderada)
          • Z60.1 (Problemas por violencia de pareja)
          
          RECURSOS EN I NIVEL:
          • Enfermera capacitada en violencia
          • Teléfono a CSMC (no servicio íntegro)
          • Sin protocolo de seguimiento psicoterapéutico`,
          
          decisions: [
            {
              text: 'A) Tratar solo en I nivel con consejería + seguimiento mensual',
              value: 'A',
              correctAnswer: false,
              explanation: `❌ INCORRECTO. Depresión moderada + ideación suicida + violencia activa requieren:
              
              1. CAPACIDAD PSICOTERAPÉUTICA: I nivel sin terapia estructurada
              2. RIESGO PSICOSOCIAL: Necesita grupos de autoestima, talleres de violencia
              3. PROTOCOLO MINSA: Casos de violencia + TMG → referencia a CSMC (C.5)
              
              RIESGO: Depresión se profundiza sin intervención activa.
              NORMATIVA: Manual MINSA 2.1.2 establece derivación obligatoria en violencia de pareja.`,
              score: 0
            },
            {
              text: 'B) Referir a CSMC (derivación código 99700, destino Lab 2)',
              value: 'B',
              correctAnswer: true,
              explanation: `✓ CORRECTO. La derivación a CSMC es clínicamente indicada porque:
              
              1. CAPACIDAD RESOLUTIVA: CSMC ofrece psicoterapia individual + grupal
              2. PROTOCOLO VIOLENCIA: Intervenciones especializadas + coordinación con protección
              3. CONTINUIDAD COMUNITARIA: Mantiene acceso local sin hospitalización
              
              DOCUMENTACIÓN MINSA:
              • Diagnóstico 1º: Z60.1 (tipo: R)
              • Diagnóstico 2º: F321 (tipo: R)
              • Derivación/referencia al establecimiento con capacidad resolutiva (tipo: D, código 99700)
              • Lab: 2 (CSMC)
              
              TIEMPO PROMEDIO EN CSMC: 3-6 meses según evolución.`,
              score: 10
            },
            {
              text: 'C) Referir a hogar protegido inmediatamente',
              value: 'C',
              correctAnswer: false,
              explanation: `❌ INCORRECTO. Hogar protegido es PREMATURO porque:
              
              1. FALTA EVALUACIÓN COMPLETA: No hay valoración de riesgo formal
              2. NO HAY EGRESO SEGURO: Hogar protegido es para rehabilitación intensiva
              3. DESVINCULAR COMUNIDAD: Rompe lazos familiares/laborales innecesariamente
              
              PROTOCOLO: Hogar protegido (Lab 3) se indica DESPUÉS de fallar 
              intervención comunitaria o si riesgo es inmediato. Aquí: CSMC primero.`,
              score: 0
            }
          ]
        },
        {
          phase: 1,
          title: 'FASE 2: EVALUACIÓN EN CSMC (Mes 3)',
          month: 'Mes 3',
          context: `Paciente completó evaluación integral en CSMC.
          
          PROGRESO:
          • Asistencia: 6 consultas individuales
          • PHQ-9 actual: 12 puntos (mejoría leve)
          • Participación: 3 sesiones grupos mujeres (asertividad)
          • Plan de seguridad: Activado, contacto con MIMDES
          
          EVALUACIÓN MULTIDISCIPLINARIA:
          • Psicólogo: Depresión en contexto de trauma crónico
          • Trabajo Social: Acceso a pensión alimenticia + vivienda temporal
          • Psiquiatra (teleconsulta): No indica farmacoterapia aún (TCC prioritaria)
          
          NUEVA INFORMACIÓN:
          • Paciente denunció formalmente (existe mandato de alejamiento)
          • Comenzó programa de capacitación laboral (ONG)
          • Soporte familiar activado`,
          
          decisions: [
            {
              text: 'A) Mantener en CSMC + derivar a hogar protegido para refuerzo',
              value: 'A',
              correctAnswer: false,
              explanation: `❌ INCORRECTO. Paciente NO requiere hogar protegido porque:
              
              1. MEJORÍA CLÍNICA: PHQ-9 disminuyó 7 puntos (respuesta al tratamiento)
              2. ESTABILIZACIÓN PSICOSOCIAL: Plan de seguridad activo + alejamiento legal
              3. ENGANCHE CON COMUNIDAD: Programa laboral en progreso
              
              PROTOCOLIZACIÓN: Hogar protegido está indicado para pacientes con:
              - Riesgo inmediato de suicidio/homicidio
              - Falta de apoyo psicosocial completo
              - Esto NO aplica aquí.
              
              ⚠️ RIESGO: Institucionalizar innecesariamente rompe continuidad comunitaria.`,
              score: 0
            },
            {
              text: 'B) Continuar en CSMC. Extender psicoterapia individual + grupal (otro 3 meses)',
              value: 'B',
              correctAnswer: true,
              explanation: `✓ CORRECTO. La continuidad en CSMC es clínicamente indicada:
              
              1. RESPUESTA AL TRATAMIENTO: Mejoría medible (PHQ-9: 19→12)
              2. PROTOCOLO MINSA: Continuar mientras haya deterioro sintomático
              3. REFUERZO PSICOSOCIAL: Grupos + capacitación laboral suman eficacia
              4. PREVENCIÓN RECAÍDA: Duración corta (<3 meses) predice recaída en trauma crónico
              
              PRÓXIMA META (Mes 6):
              • PHQ-9 <9 (remisión)
              • Inserción laboral confirmada
              • Red de apoyo consolidada
              
              LUEGO → Evaluación para contrarreferencia.`,
              score: 10
            },
            {
              text: 'C) Derivar de inmediato a I nivel para cierre de caso',
              value: 'C',
              correctAnswer: false,
              explanation: `❌ INCORRECTO. Contrarreferencia prematura (Mes 3) porque:
              
              1. FASE CRÍTICA: Los primeros 6 meses son fundamentales en trauma
              2. DEPRESIÓN NO REMITIDA: PHQ-9=12 aún indica depresión leve-moderada
              3. INESTABILIDAD PSICOSOCIAL: Denunció hace poco (estrés legal en curso)
              
              PROTOCOLO: Contrarreferencia se evalúa cuando:
              ✓ Depresión en remisión (PHQ-9 <9) POR 4+ semanas
              ✓ Estabilidad laboral/vivienda confirmada
              ✓ Paciente solicita egreso o se alcanza meta pactada
              
              Mes 3 = Punto medio, NO egreso.`,
              score: 0
            }
          ]
        },
        {
          phase: 2,
          title: 'FASE 3: REEVALUACIÓN Y DECISIÓN DE EGRESO (Mes 6)',
          month: 'Mes 6',
          context: `EVALUACIÓN INTEGRAL A LOS 6 MESES:
          
          INDICADORES CLÍNICOS:
          • PHQ-9: 7 puntos (remisión clínica)
          • Sueño: Normalizado
          • Funcionalidad: Retornó trabajo (20 hrs/semana)
          • Ideación suicida: 0 (ítem 9 = negativo)
          
          INDICADORES PSICOSOCIALES:
          • Vivienda: Casa de acogida + plan reubicación (3 meses)
          • Red: Familia reactivada + amigos + grupo CSMC
          • Legal: Medida de protección vigente
          • Laboral: Empleada en programa capacitación (ONG)
          
          ÚLTIMA SESIÓN ANTES DE DECISIÓN:
          Paciente manifiesta: "Me siento mejor. Quiero continuar con mis cosas,
          pero de verdad necesitaría seguimiento mensual en mi puesto de salud
          porque estoy ocupada"
          
          INDICACIÓN PSIQUIATRA:
          "Paciente con respuesta sostenida. Alta recomendada con contrarreferencia
          a I nivel + seguimiento preventivo."`,
          
          decisions: [
            {
              text: 'A) Mantener en CSMC indefinidamente (paciente estable)',
              value: 'A',
              correctAnswer: false,
              explanation: `❌ INCORRECTO. Mantener cuando ya hay remisión va contra:
              
              1. GESTIÓN DE RECURSOS: CSMC debe priorizar casos agudos/graves
              2. EMPODERAMIENTO: Paciente solicita retorno a nivel comunitario
              3. MODELO MINSA: Continuidad ≠ Dependencia
              
              PROTOCOLIZACIÓN: Una vez alcanzada remisión + estabilidad psicosocial,
              transferencia a I nivel es CORRECTA (prevención de dependencia institucional).
              
              ⚠️ RIESGO: CSMC = sobrecarga crónica sin rotación de casos.`,
              score: 0
            },
            {
              text: 'B) Alta por recuperación (código 1, sin seguimiento)',
              value: 'B',
              correctAnswer: false,
              explanation: `❌ INCORRECTO. Alta sin continuidad porque:
              
              1. VIOLENCIA DE PAREJA = RIESGO DE RECAÍDA: 40-60% reincidencia de TMG
              2. FALTA PROTOCOLO MINSA: Violencia REQUIERE seguimiento preventivo mínimo 12 meses
              3. RUPTURA DE RED: Sin I nivel referente = pérdida del sistema
              
              PROTOCOLO: Pacientes con historia de violencia + TMG necesitan:
              ✓ Contrarreferencia (no solo "alta")
              ✓ Seguimiento preventivo acordado
              ✓ Plan de reconsulta si síntomas retornan
              
              Simplemente cerrar caso = NEGLIGENCIA.`,
              score: 0
            },
            {
              text: 'C) Alta por referencia/contrarreferencia (código 4) a I nivel con seguimiento preventivo mensual',
              value: 'C',
              correctAnswer: true,
              explanation: `✓ CORRECTO. Contrarreferencia planificada porque:
              
              INDICADORES DE EGRESO RESOLUTIVO:
              ✓ Remisión clínica comprobada (PHQ-9=7, sin ideación suicida)
              ✓ Estabilidad psicosocial (vivienda, trabajo, familia)
              ✓ Red de apoyo consolidada
              ✓ Paciente solicita retorno a comunidad
              
              DOCUMENTACIÓN MINSA:
              • Tipo de alta: Referencia/Contrarreferencia (código 4, valor Lab)
              • Código actividad: 99217 (Atención alta salud mental)
              • Establecimiento destino: I nivel (CS origen)
              • Plan: Seguimiento preventivo mensual x 6 meses
              
              PROTOCOLO MINSA 2025 (Sección alta):
              "Pacientes con violencia de pareja recibirán contrarreferencia
              a I nivel con seguimiento mínimo 12 meses (C.6.4)"
              
              CONTINUIDAD ESTABLECIDA:
              → I nivel: Seguimiento preventivo (consejería resiliencia, manejo estrés)
              → CSMC: Puerta abierta si síntomas reaparecen
              → Plan de reconsulta: Si PHQ-9 vuelve >12 o ideación suicida`,
              score: 10
            }
          ]
        },
        {
          phase: 3,
          title: 'FASE 4: SEGUIMIENTO POST-ALTA (Mes 9)',
          month: 'Mes 9',
          context: `SEGUIMIENTO EN I NIVEL POST-CONTRARREFERENCIA (3 meses después de egreso CSMC):
          
          CONTROL CLÍNICO:
          • Paciente acudió a 3 citas de seguimiento preventivo
          • PHQ-9: 8 puntos (se elevó levemente por estrés laboral, pero estable)
          • Soporte: Continúa con grupo de mujeres (ONG comunitaria)
          • Funcionalidad: Trabaja tiempo completo, buenos ingresos
          
          NUEVA SITUACIÓN:
          • Recibió presión de expareja (contacto no autorizado)
          • Síntomas leves: Ansiedad puntual, dormir mal 2 noches
          • Paciente acude preocupada a enfermera del I nivel
          
          EVALUACIÓN RÁPIDA EN I NIVEL:
          Enfermera valora: Síntomas son reactivos (estrés agudo), NO retorno de depresión.
          Ofrece: Consejería + refuerzo plan de seguridad + cita seguimiento 2 semanas.`,
          
          decisions: [
            {
              text: 'A) Derivar nuevamente a CSMC por estrés agudo',
              value: 'A',
              correctAnswer: false,
              explanation: `❌ INCORRECTO. No es apropiado rederivación porque:
              
              1. ESTRÉS AGUDO ≠ EPISODIO DEPRESIVO: Reacción normal a violencia
              2. CAPACIDAD I NIVEL: Puede manejar consejería + apoyo psicosocial
              3. VULNERABILIDAD: Rederivación transmite "eres frágil" = contrapruductivo
              4. SATURACIÓN: CSMC debe priorizar casos de novo, no reaperturas frecuentes
              
              PROTOCOLO MINSA: I nivel es COMPETENTE para manejo de estrés agudo
              en contexto de antecedente conocido (derivación previa existente).
              
              CRITERIO: Rederivación solo si:
              ✗ PHQ-9 >15 (de nuevo)
              ✗ Ideación suicida (no presente aquí)
              ✗ Falla de intervención I nivel después 4+ semanas`,
              score: 0
            },
            {
              text: 'B) Continuar en I nivel con seguimiento reforzado + refuerzo de red (opciones correctas)',
              value: 'B',
              correctAnswer: true,
              explanation: `✓ CORRECTO. Manejo en I nivel porque:
              
              VALORACIÓN DIFERENCIAL:
              • PHQ-9=8 = Estable (no es recaída)
              • Síntoma precipitante: Evento de violencia (estrés situacional)
              • Respuesta: Consejería + red comunitaria (apropiada para I nivel)
              
              INTERVENCIÓN I NIVEL:
              1. Consejería de manejo de estrés (enfermería + psicología comunitaria)
              2. Refuerzo plan de seguridad (coordinar con protección local si es necesario)
              3. Conexión con red: ONG comunitaria + grupo mujeres
              4. Seguimiento: 2 semanas (no espaciar a mensual temporalmente)
              
              PROTOCOLO CONTINUIDAD:
              ✓ Esto es lo que significaba contrarreferencia: I nivel como puerta
              de entrada para seguimiento preventivo
              ✓ CSMC permanece disponible si recaída confirmada
              
              ENSEÑANZA CLAVE: Estrés ≠ recaída. I nivel gestiona ambos.`,
              score: 10
            },
            {
              text: 'C) Mantener contacto con CSMC "por si acaso"',
              value: 'C',
              correctAnswer: false,
              explanation: `❌ INCORRECTO. "Mantener contacto por si acaso" carece de protocolo porque:
              
              1. CONFUNDE CONTINUIDAD CON SUPERVISIÓN: No es claro quién toma decisiones
              2. SOBRECARGA CSMC: Duplica casos sin indicación clínica
              3. CONFUNDE PACIENTE: ¿A dónde acudir si empeora? ¿Quién coordina?
              
              PROTOCOLO MINSA CLARO:
              POST-CONTRARREFERENCIA: I nivel es RESPONSABLE primario
              CSMC: Consultoría + puerta abierta si falla I nivel
              
              Esto es diferente de "mantener contacto informal" (poco profesional).`,
              score: 0
            }
          ]
        }
      ]
    },
    {
      id: 'caso2',
      name: 'Esquizofrenia: Primer Brote Psicótico',
      patient: 'Varón, 21 años, zona rural',
      phases: [
        {
          phase: 0,
          title: 'FASE 1: DETECCIÓN - PRIMER BROTE PSICÓTICO',
          month: 'Mes 1',
          context: `Familia trae a joven de 21 años a puesto de salud.
          
          SÍNTOMAS INFORMADOS (últimas 2 semanas):
          • "Habla solo, dice que oye voces"
          • Aislamiento: No salió de casa en 10 días
          • "No quiere comer, está raro"
          • Sin historia de consumo de drogas (verificado familia)
          
          VALORACIÓN EN I NIVEL:
          • Contacto: Pobre, evade preguntas
          • Pensamiento: Desorganizado, idea de referencia
          • Percepción: Refiere voces que lo insultan
          • Riesgo: Conducta de riesgo potencial, no agresión presente
          
          DIAGNÓSTICO PRESUNTIVO:
          • F200 (Esquizofrenia paranoide, primer brote)
          • Sin antecedentes psiquiátricos previos
          
          RECURSOS I NIVEL:
          • Personal: Enfermera + técnico en salud mental
          • Fármacos: SÍ (clorpromazina, haloperidol)
          • Psicoterapia: NO (solo consejería básica)
          • Monitoreo 24h: NO (no hospitalización)`,
          
          decisions: [
            {
              text: 'A) Iniciar antipsicóticos en I nivel + seguimiento mensual',
              value: 'A',
              correctAnswer: false,
              explanation: `❌ INCORRECTO. Tratar primer brote psicótico en I nivel es riesgoso:
              
              1. FALTA DIAGNÓSTICO DIFERENCIAL: Podría ser psicosis orgánica (fiebre, toxina, etc)
              2. SIN MONITOREO 24h: Riesgo de conducta impulsiva en fase aguda
              3. SIN VALORACIÓN PSIQUIÁTRICA: I nivel carece de capacidad diagnóstica
              4. PROTOCOLO MINSA: Primer brote psicótico = "Urgencia psiquiátrica"
              
              RIESGO CLÍNICO: Iniciar antipsicóticos sin diagnóstico confirmado
              = Efectos adversos innecesarios + Enmascaramiento de causa real`,
              score: 0
            },
            {
              text: 'B) Referir urgentemente a Unidad Hospitalización Psiquiátrica (Lab 4)',
              value: 'B',
              correctAnswer: true,
              explanation: `✓ CORRECTO. Derivación urgente porque:
              
              INDICADORES MINSA DE URGENCIA PSIQUIÁTRICA:
              ✓ Primer brote psicótico (F200)
              ✓ Síntomas floridos (alucinaciones + delirios)
              ✓ Deterioro agudo funcional
              ✓ Sin apoyo familiar continuo garantizado
              ✓ Zona rural = difícil acceso para seguimiento
              
              JUSTIFICACIÓN CLÍNICA:
              1. DIAGNÓSTICO: Psiquiatra especializado confirmará esquizofrenia vs otras psicosis
              2. MANEJO AGUDO: Titulación fármacos bajo monitoreo médico continuo
              3. ESTABILIZACIÓN: 2-4 semanas típicas antes de egreso a comunidad
              4. PROTOCOLO: Manual MINSA C.5 - "Primer brote psicótico → Hospitalización"
              
              DOCUMENTACIÓN:
              • Derivación/referencia (99700, tipo D)
              • Destino: Lab 4 (Unidad hospitalización psiquiátrica)
              • Informe: Resumen clínico + contacto familia
              
              PRÓXIMO PASO: Hospitalización → Estabilización → CSMC → I nivel
              (Modelo de escalada y de-escalada)`,
              score: 10
            },
            {
              text: 'C) Derivar a CSMC (menor intensidad)',
              value: 'C',
              correctAnswer: false,
              explanation: `❌ INCORRECTO. CSMC es insuficiente para primer brote porque:
              
              1. FASE AGUDA: Requiere monitoreo médico y fármacos IV si es necesario
              2. DESORGANIZACIÓN SEVERA: Paciente requiere ambiente estructurado 24h
              3. CAPACIDAD CSMC: Diseñada para casos estables/crónicos en remisión
              
              PROTOCOLO ESCALADA:
              Agudo/grave (Lab 4) → Estable (Lab 2: CSMC) → Remisión (Lab 1: I nivel)
              
              RIESGO: CSMC sin hospitalización previa = Falla terapéutica + riesgo.`,
              score: 0
            }
          ]
        },
        {
          phase: 1,
          title: 'FASE 2: ESTABILIZACIÓN EN HOSPITALIZACIÓN (Mes 2)',
          month: 'Mes 2',
          context: `EVOLUCIÓN EN UNIDAD HOSPITALIZACIÓN (3 semanas de ingreso):
          
          MEJORÍA SINTOMÁTICA:
          • Alucinaciones: Disminuidas 80% (ya no habla solo)
          • Delirios: Insight parcial ("quizás fue estrés")
          • Autocuidado: Retomó higiene personal
          • Sueño: Normalizado con medicación
          
          DIAGNÓSTICO CONFIRMADO:
          Psiquiatra: "Esquizofrenia paranoide, primer episodio. Buena respuesta a antipsicóticos."
          
          TRATAMIENTO ACTUAL:
          • Risperidona 4 mg/día (buena tolerancia)
          • Sin efectos adversos graves
          • Familia: Orientada en manejo de síntomas
          
          EQUIPO DISCUTE EGRESO:
          "Paciente estable. Próximo: Transferencia a CSMC para continuidad de cuidados."`,
          
          decisions: [
            {
              text: 'A) Alta a domicilio sin seguimiento (mejoró lo suficiente)',
              value: 'A',
              correctAnswer: false,
              explanation: `❌ INCORRECTO. Alta sin continuidad estructurada es riesgosa:
              
              1. ESQUIZOFRENIA CRÓNICA: Requiere seguimiento de por vida
              2. TASA RECAÍDA: 60-70% en primer año sin seguimiento adecuado
              3. CUMPLIMIENTO: En zona rural, sin CSMC = abandono de medicación
              
              PROTOCOLO: Esquizofrenia NUNCA se "cura", se MANEJA.
              Alta hospitalaria ≠ fin del tratamiento.`,
              score: 0
            },
            {
              text: 'B) Transferencia a CSMC (derivación interna en el sistema, código 99700, Lab 2)',
              value: 'B',
              correctAnswer: true,
              explanation: `✓ CORRECTO. Derivación a CSMC porque:
              
              CONTINUUM DE CUIDADOS (Modelo MINSA):
              Hospitalización (Crisis aguda)
                    ↓
              CSMC (Estabilización extendida + reinserción)
                    ↓
              I Nivel (Seguimiento preventivo mantenimiento)
              
              INDICADORES CSMC:
              ✓ Paciente estable (remisión sintomática)
              ✓ Requiere psicoeducación de larga duración
              ✓ Necesita monitoreo psiquiátrico mensual (no semanal)
              ✓ Debe iniciar reinserción social (familia + comunidad)
              ✓ Zona rural: CSMC más accesible que hospitalización
              
              PROTOCOLO MINSA:
              • Derivación/referencia (99700)
              • Destino: Lab 2 (CSMC)
              • Duración estimada CSMC: 6-12 meses (según evolución)
              
              RESPONSABILIDAD CSMC:
              → Mantener medicación
              → Psicoterapia individual + grupal
              → Monitoreo efectos adversos
              → Apoyo reinserción laboral/estudios
              → Psicoeducación familia`,
              score: 10
            },
            {
              text: 'C) Derivar a hogar protegido (rehabilitación intensiva)',
              value: 'C',
              correctAnswer: false,
              explanation: `❌ INCORRECTO. Hogar protegido es innecesario porque:
              
              1. PACIENTE ESTABLE: No requiere comunidad terapéutica
              2. FAMILIA DISPONIBLE: Existe apoyo familiar activo
              3. FUNCIÓN HOGAR: Es para casos de deterioro severo/abandono
              
              PROTOCOLO: Hogar protegido se indica cuando:
              ✗ Falla CSMC tras 6+ meses
              ✗ Paciente sin familia o abandono
              ✗ Conducta autolítica o heteroagresiva crónica
              
              Aquí: CSMC es la intervención apropiada.`,
              score: 0
            }
          ]
        },
        {
          phase: 2,
          title: 'FASE 3: EVOLUCIÓN EN CSMC (Mes 8)',
          month: 'Mes 8',
          context: `SEGUIMIENTO EN CSMC (6 meses después de hospitalización):
          
          EVALUACIÓN CLÍNICA:
          • Síntomas psicóticos: En remisión sostenida
          • Cumplimiento medicación: 95% (buena adherencia)
          • Funcionamiento: Retomó estudios secundarios (parcialmente)
          • Familia: Bien informada, sabe reconocer signos de alerta
          
          LOGROS EN CSMC:
          ✓ Psicoterapia individual: 20 sesiones (comprende relación estrés-síntomas)
          ✓ Grupo psicoeducativo: 8 sesiones (conocimiento sobre esquizofrenia)
          ✓ Monitoreo efectos adversos: Ganancia de peso controlada
          ✓ Plan de reinserción: En curso, mejoría lenta pero progresiva
          
          EVALUACIÓN PSIQUIATRA CSMC:
          "Paciente con remisión clínica sostenida. Buen pronóstico si continúa
          medicación. Puede iniciar transición a I nivel para seguimiento mantenimiento."
          
          NUEVA INFORMACIÓN:
          • Paciente habla de "terminar" con CSMC
          • Dice: "Ya estoy bien, no quiero venir cada semana"
          • Familia: Preocupada por abandonar medicación si se va`,
          
          decisions: [
            {
              text: 'A) Acceder a deseo del paciente: Alta inmediata sin seguimiento',
              value: 'A',
              correctAnswer: false,
              explanation: `❌ INCORRECTO. Honrar autonomía del paciente, pero NO así:
              
              1. TRASTORNO PSICÓTICO CRÓNICO: Requiere medicación indefinida
              2. INSIGHT PARCIAL: Paciente aún no comprende severidad
              3. RIESGO RECAÍDA: Abandonar seguimiento = Recaída casi segura en 6-12 meses
              4. RESPONSABILIDAD ÉTICA: CSMC tiene deber de prevención
              
              PROTOCOLO MINSA: Paciente tiene derecho a dejar tratamiento,
              pero CSMC debe:
              ✓ Educar sobre riesgos
              ✓ Documentar rechazo informado
              ✓ Mantener puerta abierta
              ✓ No abandonar así nomás
              
              FRASE CLAVE: "Autonomía ≠ Negligencia"`,
              score: 0
            },
            {
              text: 'B) Mantener en CSMC indefinidamente (sin cambio)',
              value: 'B',
              correctAnswer: false,
              explanation: `❌ PARCIALMENTE INCORRECTO. Aunque es seguro, no es óptimo:
              
              1. CAPACIDAD CSMC: Debe rotar casos, no retener indefinidamente
              2. MODELO MINSA: Continuum de cuidados requiere DE-escalada
              3. EMPODERAMIENTO: Paciente estable debe aprender automanejo
              4. DEPENDENCIA: Riesgo de dependencia institucional
              
              ESQUIZOFRENIA CRÓNICA SÍ requiere seguimiento permanente,
              pero PUEDE ser en I nivel (no necesita CSMC siempre).
              
              PROTOCOLO: Rotación con supervisión, no retención estática.`,
              score: 5
            },
            {
              text: 'C) Contrarreferencia a I nivel con protocolo de monitoreo psiquiátrico continuo',
              value: 'C',
              correctAnswer: true,
              explanation: `✓ CORRECTO. Transición a I nivel porque:
              
              INDICADORES DE ESTABILIDAD:
              ✓ Remisión psicótica sostenida >4 meses
              ✓ Cumplimiento medicación excelente
              ✓ Familia capacitada en reconocimiento de síntomas
              ✓ Funcionalidad mejorada (estudios, autocuidado)
              ✓ Deseo expresado de retornar a comunidad
              
              TIPO DE CONTRARREFERENCIA:
              • Código actividad: 99217 (Alta salud mental)
              • Tipo de alta: Referencia/Contrarreferencia (Lab 4)
              • Destino: I nivel (puesto de salud más cercano)
              
              PROTOCOLO MINSA POST-CONTRARREFERENCIA:
              
              I NIVEL RESPONSABILIDADES:
              1. Seguimiento mensual (evaluación clínica básica)
              2. Control medicación (cumplimiento, efectos adversos)
              3. TELECONSULTA psiquiátrica CSMC: Mensual
              4. Plan de reconsulta urgente si:
                 - Reaparición de alucinaciones/delirios
                 - Abandono de medicación
                 - Deterioro funcional
              
              PUERTA ABIERTA CSMC:
              • Reinternamiento inmediato si crisis
              • Sesiones psicoeducativas si lo requiere
              • Seguimiento anual (evaluación global)
              
              DURACIÓN: INDEFINIDA (esquizofrenia es crónica)
              
              ENSEÑANZA: Contrarreferencia ≠ Cierre. Es transición a nivel
              comunitario con supervisión permanente.`,
              score: 10
            }
          ]
        }
      ]
    },
    {
      id: 'caso3',
      name: 'Consumo de Heroína + Síntomas de Abstinencia',
      patient: 'Varón, 28 años, zona urbana periférica',
      phases: [
        {
          phase: 0,
          title: 'FASE 1: CRISIS AGUDA - SÍNDROME DE ABSTINENCIA',
          month: 'Mes 1',
          context: `Paciente ingresa a I nivel con síntomas agudos.
          
          PRESENTACIÓN:
          • "Hace 48 horas que no consumo heroína"
          • Dolor corporal intenso, agitación, insomnia
          • Ansiedad severa, sudoración profusa
          • Historia: 5 años consumo heroína diario
          
          DIAGNÓSTICO:
          • F11.3 (Síndrome de abstinencia a opioides)
          • Sin soporte psicosocial activo
          • Familia: En conflicto, considera internarlo por la fuerza
          
          VALORACIÓN RIESGO:
          • Riesgo suicida: Bajo (manifiesta querer "dejar esto")
          • Riesgo violencia: Bajo-moderado (agitación reactiva)
          • Riesgo recaída: ALTO (ambiente sin tratamiento)
          
          RECURSOS I NIVEL:
          • Medicación: SÍ (tramadol, clonidina para síntomas)
          • Desintoxicación: Puede iniciarse
          • Programa rehabilitación: NO (solo derivación)
          • Seguimiento psicosocial: Limitado`,
          
          decisions: [
            {
              text: 'A) Iniciar desintoxicación en I nivel + consejería',
              value: 'A',
              correctAnswer: false,
              explanation: `❌ INCORRECTO. Abstinencia a opioides requiere programa integral:
              
              1. SÍNDROME GRAVE: Abstinencia a heroína produce sufrimiento extremo
              2. TASA RECAÍDA: 90%+ cuando se intenta solo sin programa estructurado
              3. FALTA MODELO TERAPÉUTICO: I nivel carece de protocolo de rehabilitación
              4. PROTECCIÓN: Paciente necesita "contención" psicosocial + farmacológica
              
              PROTOCOLO MINSA: Consumo activo de opioides = Referencia a CSMC
              o especializado (programa de opioides si existe).
              
              RIESGO: Dejar en I nivel = Recaída casi segura dentro de 48-72 horas.`,
              score: 0
            },
            {
              text: 'B) Derivar a CSMC para programa de rehabilitación integral',
              value: 'B',
              correctAnswer: true,
              explanation: `✓ CORRECTO. CSMC o programa especializado:
              
              INDICADORES PARA DERIVACIÓN:
              ✓ Consumo activo de opioides (F11.x)
              ✓ Síndrome de abstinencia agudo
              ✓ Motivación presente ("quiero dejar")
              ✓ Falta de soporte comunitario
              ✓ I nivel carece de capacidad
              
              CAPACIDAD CSMC EN ADICCIONES:
              1. Programa multidisciplinario (médico + psicólogo + trabajo social)
              2. Medicación: Metadona o buprenorfina (sustitución controlada)
              3. Psicoterapia: Manejo de abstinencia + habilidades de afrontamiento
              4. Intervención psicosocial: Familia, empleo, red
              5. Seguimiento prolongado (6-12 meses mínimo)
              
              DOCUMENTACIÓN MINSA:
              • Derivación/referencia (99700)
              • Destino: Lab 2 (CSMC o programa especializado)
              • Motivo: F11.3 (abstinencia a opioides) + necesidad rehabilitación
              
              PROTOCOLO CSMC-ADICCIONES:
              → Entrada urgente (mismo día si es posible)
              → Valoración médica (descartar complicaciones)
              → Inicio medicación sustitutiva
              → Contrato terapéutico + objetivos
              → Seguimiento intenso primeras 2 semanas`,
              score: 10
            },
            {
              text: 'C) Internarlo en hogar protegido por la "fuerza" (presión familiar)',
              value: 'C',
              correctAnswer: false,
              explanation: `❌ INCORRECTO. Internamiento contra voluntad tiene límites:
              
              1. PRINCIPIO ÉTICO: Internamiento forzado requiere criterio legal/psiquiátrico
              2. BAJA ADHERENCIA: Contra voluntad = Fuga cuando mejora abstinencia aguda
              3. MOTIVO INCORRECTO: Hogar protegido es para TMG grave, no adicciones
              4. EXISTE MOTIVACIÓN: Paciente EXPRESA deseo de dejar (es diferente)
              
              PROTOCOLO: Si paciente acepta voluntariamente = Derivación urgente
              a programa con consentimiento informado.
              
              PRESIÓN FAMILIAR no justifica tomar decisión contraria a protocolo.`,
              score: 0
            }
          ]
        },
        {
          phase: 1,
          title: 'FASE 2: ESTABILIZACIÓN EN CSMC-ADICCIONES (Mes 4)',
          month: 'Mes 4',
          context: `PROGRESIÓN EN PROGRAMA CSMC (3 meses después de derivación):
          
          LOGROS:
          • Medicación: En buprenorfina 16 mg/día (mantenimiento estable)
          • Abstinencia: 12 semanas SIN recaída documentada
          • Pruebas orina: Negativas últimas 4 (monitoreo)
          • Conducta: Puntuales, participativo en terapia
          
          TRABAJO PSICOLÓGICO:
          ✓ Psicoterapia individual: 12 sesiones (identificación disparadores)
          ✓ Grupo de pares: 8 sesiones (reconexión social)
          ✓ Trabajo social: Familia reintegrada, conflicto reducido
          
          MEJORÍA FUNCIONAL:
          • Duerme: 6-7 horas (normalizado)
          • Empleo: Inició trabajo temporal (ONG comunitaria)
          • Red: Reactivó amigos no usuarios
          • Salud general: Ganancia de peso, mejor apariencia
          
          REFLEXIÓN PACIENTE:
          "Nunca creí que podía vivir sin heroína. Aquí me ayudaron de verdad.
          Pero quisiera empezar a hacer algo más, no venir tanto a CSMC"
          
          EVALUACIÓN EQUIPO:
          "Paciente con evolución excelente. Candidato a transición
          a seguimiento menos intensivo en 1-2 meses más."`,
          
          decisions: [
            {
              text: 'A) Mantener indefinidamente en programa intensivo CSMC',
              value: 'A',
              correctAnswer: false,
              explanation: `❌ INCORRECTO. Retener paciente sin metas de progresión:
              
              1. MODELO TERAPÉUTICO: Rehabilitación DEBE avanzar hacia independencia
              2. RIESGO DEPENDENCIA: Paciente ya expresa deseo de progresar
              3. CAPACIDAD CSMC: Debe rotar casos, no retener indefinidamente
              
              PROTOCOLO MINSA: Programa de adicciones tiene FASES:
              Fase 1 (Aguda): CSMC intensivo 3-4 meses ← Paciente aquí
              Fase 2 (Mantenimiento): CSMC moderado 2-3 meses más
              Fase 3 (Reinserción): CSMC ambulatorio + preparación egreso
              
              Simplemente "mantener igual" = Falta de progresión clínica.`,
              score: 0
            },
            {
              text: 'B) Derivar a hogar protegido (cambiar de ambiente)',
              value: 'B',
              correctAnswer: false,
              explanation: `❌ INCORRECTO. Hogar protegido es innecesario porque:
              
              1. PACIENTE ESTABLE: No requiere ambiente controlado 24h
              2. FAMILIA REINTEGRADA: Tiene apoyo psicosocial
              3. EMPLEO INICIADO: Funcionalidad laboral en marcha
              4. MODELO: Hogar es para deterioro/abandono, NO para progresión
              
              PROTOCOLO: Hogar protegido estaría indicado si:
              ✗ Falla CSMC tras 6+ meses
              ✗ Recaídas recurrentes
              ✗ Sin familia disponible
              
              Aquí: Paciente va bien, no retrocede a comunidad terapéutica.`,
              score: 0
            },
            {
              text: 'C) Reducir intensidad CSMC (pasar a 2 veces/semana) + plan de contrarreferencia a 6 meses',
              value: 'C',
              correctAnswer: true,
              explanation: `✓ CORRECTO. Transición graduada porque:
              
              INDICADORES DE PROGRESIÓN:
              ✓ Abstinencia sostenida (12 semanas comprobadas)
              ✓ Adherencia medicación excelente
              ✓ Funcionalidad mejorada (empleo activo)
              ✓ Familia reintegrada
              ✓ Sin factores de recaída aguda
              ✓ Expresa deseo de autonomía
              
              FASES MINSA EN ADICCIONES:
              
              MES 4 (ACTUAL): FASE 2 - Estabilización
              • Reducir CSMC: 2 consultas/semana (era 3-4)
              • Continuar buprenorfina + medicación
              • Intensificar terapia ocupacional (empleo como factor protector)
              
              MES 6-9: FASE 3 - Reinserción
              • CSMC: Consulta mensual (monitoreo mantenimiento)
              • Teleconsulta psiquiatra si está disponible
              • Psicoeducación: Prevención recaída + manejo estrés
              
              MES 10-12: Preparación egreso
              • Identificar puesto de salud I nivel de referencia
              • Educar I nivel en manejo de buprenorfina
              • Establecer contactos: Empresa + comunidad
              
              PROTOCOLO CONTRARREFERENCIA A I NIVEL:
              • Se realiza cuando: Paciente en remisión completa >3 meses
              • Medicación: Buprenorfina continúa en I nivel
              • Seguimiento: Mensual + grupo comunitario
              • Psiquiatría CSMC: Disponible para consultoría
              • Readmisión: Automática si recaída o crisis
              
              MODELO CORRECTO:
              Crisis (Aguda) → CSMC intensivo → CSMC moderado → I nivel + CSMC supervisión
              
              Esto es MODELO DE TRANSICIÓN, no abandono.`,
              score: 10
            }
          ]
        }
      ]
    }
  ];

  const currentCaseData = cases[currentCase];
  const currentPhaseData = currentCaseData.phases[currentPhase];

  const handleDecision = (decision) => {
    const newDecisions = {
      ...decisions,
      [`caso${currentCase}-fase${currentPhase}`]: decision
    };
    setDecisions(newDecisions);
    setFeedback({
      isCorrect: decision.correctAnswer,
      explanation: decision.explanation,
      score: decision.score
    });
  };

  const handleNextPhase = () => {
    if (currentPhase < currentCaseData.phases.length - 1) {
      setCurrentPhase(currentPhase + 1);
      setFeedback(null);
    } else {
      setCaseCompleted(true);
    }
  };

  const handleNextCase = () => {
    if (currentCase < cases.length - 1) {
      setCurrentCase(currentCase + 1);
      setCurrentPhase(0);
      setCaseCompleted(false);
      setFeedback(null);
      setDecisions({});
    } else {
      setShowReport(true);
    }
  };

  const handleReset = () => {
    setCurrentCase(0);
    setCurrentPhase(0);
    setDecisions({});
    setFeedback(null);
    setCaseCompleted(false);
    setShowReport(false);
  };

  const calculateScore = () => {
    return Object.values(decisions).reduce((sum, d) => sum + (d?.score || 0), 0);
  };

  const totalScore = calculateScore();
  const maxScore = cases.reduce((sum, c) => 
    sum + c.phases.reduce((pSum) => pSum + 10, 0), 0
  );

  // ============ RENDER REPORT ============
  if (showReport) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen rounded-lg">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-indigo-900 mb-2">REPORTE FINAL</h1>
          <p className="text-gray-600 mb-8">Simulador de Referencia/Contrarreferencia MINSA 2025</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-indigo-100 rounded-lg p-6 border-2 border-indigo-400">
              <p className="text-sm text-indigo-700 font-semibold">PUNTUACIÓN</p>
              <p className="text-4xl font-bold text-indigo-900">{totalScore}/{maxScore}</p>
              <p className="text-xs text-indigo-600 mt-1">{Math.round((totalScore/maxScore)*100)}% de aciertos</p>
            </div>
            
            <div className="bg-green-100 rounded-lg p-6 border-2 border-green-400">
              <p className="text-sm text-green-700 font-semibold">CASOS COMPLETADOS</p>
              <p className="text-4xl font-bold text-green-900">{cases.length}/3</p>
              <p className="text-xs text-green-600 mt-1">Decisiones validadas</p>
            </div>
            
            <div className="bg-purple-100 rounded-lg p-6 border-2 border-purple-400">
              <p className="text-sm text-purple-700 font-semibold">DESEMPEÑO</p>
              <p className="text-4xl font-bold text-purple-900">
                {totalScore >= 28 ? '🟢 EXCELENTE' : totalScore >= 21 ? '🟡 BUENO' : '🔴 REVISAR'}
              </p>
            </div>
          </div>

          <div className="mb-8 bg-gray-50 rounded-lg p-6 border-l-4 border-indigo-500">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">ANÁLISIS POR CASO</h2>
            {cases.map((c, idx) => {
              const caseScore = c.phases.reduce((sum, p) => {
                const key = `caso${idx}-fase${p.phase}`;
                return sum + (decisions[key]?.score || 0);
              }, 0);
              return (
                <div key={idx} className="mb-3 pb-3 border-b border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-800">{c.name}</p>
                      <p className="text-sm text-gray-600">{c.patient}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-indigo-900">{caseScore}/{c.phases.length * 10}</p>
                      <p className="text-xs text-gray-500">{c.phases.length} fases</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500 mb-8">
            <h3 className="font-semibold text-blue-900 mb-3">📋 RECOMENDACIONES</h3>
            {totalScore >= 28 ? (
              <p className="text-blue-800">
                <strong>Desempeño excelente.</strong> Demuestras comprensión sólida del protocolo MINSA 2025.
                Puedes avanzar al módulo quiz avanzado o entrenamiento de casos complejos.
              </p>
            ) : totalScore >= 21 ? (
              <p className="text-blue-800">
                <strong>Buen desempeño.</strong> Captas los conceptos clave. Revisa los casos donde
                tuviste errores y repite el simulador para fortalecer débiles.
              </p>
            ) : (
              <p className="text-blue-800">
                <strong>Revisar conceptos.</strong> Los protocolos de referencia/contrarreferencia
                requieren reaprendizaje. Repite el simulador y consulta el manual MINSA en secciones C.5-C.6.
              </p>
            )}
          </div>

          <button
            onClick={handleReset}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <RotateCcw size={20} />
            Reiniciar Simulador
          </button>
        </div>
      </div>
    );
  }

  // ============ RENDER FEEDBACK ============
  if (feedback) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
        <div className={`rounded-lg shadow-xl p-8 ${feedback.isCorrect ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'}`}>
          
          <div className="flex items-start gap-4 mb-6">
            {feedback.isCorrect ? (
              <CheckCircle size={40} className="text-green-600 flex-shrink-0 mt-1" />
            ) : (
              <XCircle size={40} className="text-red-600 flex-shrink-0 mt-1" />
            )}
            <div>
              <h2 className={`text-2xl font-bold ${feedback.isCorrect ? 'text-green-900' : 'text-red-900'}`}>
                {feedback.isCorrect ? '✓ CORRECTO' : '✗ INCORRECTO'}
              </h2>
              <p className={`text-sm ${feedback.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                Puntuación: {feedback.score}/10 puntos
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6 border-l-4 border-gray-400">
            <p className="whitespace-pre-line text-gray-800 text-sm leading-relaxed font-mono">
              {feedback.explanation}
            </p>
          </div>

          <button
            onClick={caseCompleted ? handleNextCase : handleNextPhase}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition"
          >
            {caseCompleted ? 'Siguiente Caso' : 'Siguiente Fase'}
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  // ============ RENDER PHASE ============
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      {/* HEADER */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border-l-4 border-indigo-600">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-xs font-semibold text-indigo-600 uppercase">CASO {currentCase + 1}/3</p>
            <h1 className="text-2xl font-bold text-gray-900">{currentCaseData.name}</h1>
            <p className="text-sm text-gray-600 mt-1">{currentCaseData.patient}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 uppercase">FASE {currentPhase + 1}/{currentCaseData.phases.length}</p>
            <p className="text-2xl font-bold text-indigo-900">{currentPhaseData.month}</p>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-indigo-600 h-2 rounded-full transition-all"
            style={{ width: `${((currentCase * currentCaseData.phases.length + currentPhase + 1) / (cases.length * 4)) * 100}%` }}
          />
        </div>
      </div>

      {/* TITLE & CONTEXT */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-indigo-900 mb-4">{currentPhaseData.title}</h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <p className="text-gray-800 whitespace-pre-line font-mono text-sm leading-relaxed">
            {currentPhaseData.context}
          </p>
        </div>
      </div>

      {/* DECISIONS */}
      <div className="space-y-3">
        <p className="text-sm font-semibold text-gray-700 uppercase">¿Cuál es la decisión clínica correcta?</p>
        {currentPhaseData.decisions.map((decision, idx) => (
          <button
            key={idx}
            onClick={() => handleDecision(decision)}
            className="w-full text-left bg-white rounded-lg shadow-md p-4 border-2 border-gray-300 hover:border-indigo-500 hover:shadow-lg transition-all active:scale-95"
          >
            <p className="font-semibold text-gray-900">{decision.text}</p>
          </button>
        ))}
      </div>

      {/* FOOTER */}
      <div className="mt-8 text-center text-xs text-gray-600">
        <p>Simulador de Referencia/Contrarreferencia • Manual MINSA 2025</p>
      </div>
    </div>
  );
};

export default SimuladorReferencia;
